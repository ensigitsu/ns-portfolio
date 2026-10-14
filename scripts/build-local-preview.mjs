import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argumentsList = process.argv.slice(2);
function option(name, fallback) {
  const index = argumentsList.indexOf(name);
  return index === -1 ? fallback : argumentsList[index + 1];
}
const site = path.resolve(option('--site', path.join(project, '_site')));
const output = path.resolve(option('--output', path.join(project, '..', 'local-preview')));
const baseurl = option('--baseurl', '/portfolio');
const prettier = await import(process.env.PREVIEW_FORMATTER_URL || 'prettier');
const modules = new Map();

function resolveModule(reference, origin) {
  if (reference === 'three') return 'assets/vendor/three.module.js';
  if (!reference.startsWith('.')) throw new Error(`Unsupported module: ${reference}`);
  return path.posix.normalize(path.posix.join(path.posix.dirname(origin), reference));
}

async function bundleModule(id) {
  if (modules.has(id)) return;
  modules.set(id, '');
  let source = await fs.readFile(path.join(project, id), 'utf8');
  const ast = (await prettier.__debug.parse(source, { parser: 'babel' })).ast;
  const edits = [];
  const dependencies = new Set();
  const exports = [];
  const edit = (start, end, value) => edits.push({ start, end, value });
  const dependency = (reference) => {
    const target = resolveModule(reference, id);
    dependencies.add(target);
    return JSON.stringify(target);
  };

  for (const node of ast.program.body) {
    if (node.type === 'ImportDeclaration') {
      const target = dependency(node.source.value);
      const declarations = node.specifiers.map((specifier) => {
        const local = specifier.local.name;
        if (specifier.type === 'ImportNamespaceSpecifier')
          return `const ${local} = load(${target});`;
        const imported =
          specifier.type === 'ImportDefaultSpecifier' ? 'default' : specifier.imported.name;
        return `const ${local} = load(${target})[${JSON.stringify(imported)}];`;
      });
      edit(node.start, node.end, declarations.join('\n') || `load(${target});`);
    }
    if (node.type === 'ExportNamedDeclaration') {
      if (node.source) throw new Error(`Re-export is unsupported: ${id}`);
      if (node.declaration) {
        edit(node.start, node.declaration.start, '');
        const names = node.declaration.id
          ? [node.declaration.id.name]
          : node.declaration.declarations.map((declaration) => declaration.id.name);
        for (const name of names) exports.push(`exports[${JSON.stringify(name)}] = ${name};`);
      } else {
        const properties = node.specifiers.map(
          (specifier) => `${JSON.stringify(specifier.exported.name)}: ${specifier.local.name}`,
        );
        edit(node.start, node.end, `Object.assign(exports, {${properties.join(',')}});`);
      }
    }
    if (node.type === 'ExportDefaultDeclaration')
      throw new Error(`Default export is unsupported: ${id}`);
  }

  function visit(node) {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'ImportExpression') {
      edit(
        node.start,
        node.end,
        `Promise.resolve().then(() => load(${dependency(node.source.value)}))`,
      );
      return;
    }
    if (
      node.type === 'MemberExpression' &&
      node.object?.type === 'MetaProperty' &&
      node.property.name === 'url'
    ) {
      edit(node.start, node.end, 'moduleUrl');
      return;
    }
    for (const [name, value] of Object.entries(node)) {
      if (['loc', 'extra', 'comments'].includes(name)) continue;
      if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === 'object') visit(value);
    }
  }
  visit(ast.program);
  for (const change of edits.sort((a, b) => b.start - a.start)) {
    source = source.slice(0, change.start) + change.value + source.slice(change.end);
  }
  const asynchronous = id === 'assets/js/main.js' ? 'async ' : '';
  modules.set(
    id,
    `${JSON.stringify(id)}: ${asynchronous}function(exports, load, moduleUrl) {\n${source}\n${exports.join('\n')}\n}`,
  );
  for (const target of dependencies) await bundleModule(target);
}

async function files(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(
    entries.map((entry) => {
      const filename = path.join(directory, entry.name);
      return entry.isDirectory() ? files(filename) : [filename];
    }),
  );
  return groups.flat();
}

await fs.access(path.join(site, 'index.html'));
await fs.mkdir(path.join(output, 'assets/js'), { recursive: true });
await bundleModule('assets/js/main.js');
const payload = {};
for (const filename of await files(site)) {
  const relative = path.relative(site, filename).split(path.sep).join('/');
  if (relative === 'assets/i18n.json' || relative.endsWith('.glsl')) {
    payload[relative] = await fs.readFile(filename, 'utf8');
    continue;
  }
  if (relative.endsWith('.html') || relative.endsWith('.js') || relative.endsWith('.md')) continue;
  const target = path.join(output, relative);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.copyFile(filename, target);
}

const runtime = `(() => {
  const root = new URL('../../', document.currentScript.src);
  const payload = ${JSON.stringify(payload)};
  const nativeFetch = globalThis.fetch?.bind(globalThis);
  globalThis.fetch = (input, options) => {
    const url = new URL(input instanceof URL ? input.href : input.url || input, document.baseURI);
    const key = decodeURIComponent(url.href.slice(root.href.length));
    if (url.href.startsWith(root.href) && Object.hasOwn(payload, key)) {
      return Promise.resolve(new Response(payload[key], { status: 200 }));
    }
    return nativeFetch ? nativeFetch(input, options) : Promise.reject(new Error('Resource unavailable'));
  };
  const modules = {${[...modules.values()].join(',\n')}};
  const cache = {};
  function load(id) {
    if (cache[id]) return cache[id];
    const exports = {};
    cache[id] = exports;
    const result = modules[id](exports, load, new URL(id, root).href);
    if (result?.catch) result.catch(error => console.error('Portfolio preview:', error));
    return exports;
  }
  load('assets/js/main.js');
})();\n`;
await fs.writeFile(path.join(output, 'assets/js/local-preview.js'), runtime);
let css = await fs.readFile(path.join(site, 'assets/css/style.css'), 'utf8');
const font = (await fs.readFile(path.join(site, 'assets/fonts/manrope-latin.woff2'))).toString(
  'base64',
);
css = css.replace(
  /url\(['"]?\.\.\/fonts\/manrope-latin\.woff2['"]?\)/g,
  `url('data:font/woff2;base64,${font}')`,
);
await fs.writeFile(path.join(output, 'assets/css/style.css'), css);

for (const filename of (await files(site)).filter((file) => file.endsWith('.html'))) {
  const relative = path.relative(site, filename);
  const target = path.join(output, relative);
  const script = path
    .relative(path.dirname(target), path.join(output, 'assets/js/local-preview.js'))
    .split(path.sep)
    .join('/');
  let html = await fs.readFile(filename, 'utf8');
  html = html.replace(/<script\b[^>]*type="importmap"[^>]*>[\s\S]*?<\/script>/g, '');
  html = html.replace(
    /<script\b[^>]*type="module"[^>]*>[\s\S]*?<\/script>/g,
    `<script src="${script}" defer></script>`,
  );
  html = html.replace(/<link\b[^>]*rel="preload"[^>]*>/g, '');
  html = html.replace(
    /\b(href|src|data-vertex|data-fragment)="([^"]*)"/g,
    (original, attribute, value) => {
      if (value !== baseurl && !value.startsWith(baseurl + '/')) return original;
      const url = new URL(value, 'https://preview.invalid');
      let local = decodeURIComponent(url.pathname.slice(baseurl.length)).replace(/^\//, '');
      if (!local || local.endsWith('/')) local += 'index.html';
      const reference = path
        .relative(path.dirname(target), path.join(output, local))
        .split(path.sep)
        .join('/');
      return `${attribute}="${reference}${url.search}${url.hash}"`;
    },
  );
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html);
}

console.log(`Local preview ready: ${pathToFileURL(path.join(output, 'index.html')).href}`);
console.log(
  'Open index.html inside the preview folder. Edit the Jekyll sources, then rebuild to refresh it.',
);
