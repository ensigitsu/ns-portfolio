import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';
import { parse as parseHtml } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argumentsList = process.argv.slice(2);
const siteIndex = argumentsList.indexOf('--site');
if (siteIndex !== -1 && !argumentsList[siteIndex + 1]) {
  throw new Error('Expected a directory after --site');
}
const site =
  siteIndex === -1 ? null : path.resolve(argumentsList[siteIndex + 1]);
const errors = [];
const read = (filename) => fs.readFileSync(filename, 'utf8');
const check = (condition, message) => {
  if (!condition) errors.push(message);
};
const yaml = (filename) => parseYaml(read(path.join(root, filename)));
const value = (metadata, name, legacy) => metadata[name] ?? metadata[legacy];

function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? files(filename) : [filename];
  });
}

const config = yaml('_config.yml');
const translations = yaml('_data/translations.yml');
const competencies = yaml('_data/competences.yml');
const codes = competencies.map((item) => item.code);
check(
  codes.join(',') === 'c1,c2,c3,c4,c5,c6',
  'Expected six official competency codes',
);
for (const item of competencies) {
  check(item.label_fr && item.label_en, `${item.code}: missing label`);
}

const sections = [
  'section_context',
  'section_resources',
  'section_activity',
  'section_evidence',
  'section_learning',
];
const projects = [];
for (const filename of files(path.join(root, '_projets')).sort()) {
  const name = path.basename(filename);
  if (!name.endsWith('.md') || name.startsWith('_')) continue;
  check(/^\d{4}-\d{2}-[a-z0-9-]+\.md$/.test(name), `${name}: invalid filename`);
  const source = read(filename);
  const frontMatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  check(frontMatter, `${name}: missing front matter`);
  let metadata = {};
  try {
    metadata = frontMatter ? (parseYaml(frontMatter[1]) ?? {}) : {};
  } catch (error) {
    errors.push(`${name}: invalid YAML: ${error.message}`);
  }
  projects.push({ name: path.basename(filename, '.md'), metadata });
  for (const [field, legacy] of [
    ['title'],
    ['date'],
    ['context', 'cadre'],
    ['summary', 'resume'],
  ]) {
    check(value(metadata, field, legacy), `${name}: missing ${field}`);
  }
  const selected = value(metadata, 'competencies', 'competences');
  check(Array.isArray(selected), `${name}: competencies must be a list`);
  if (Array.isArray(selected)) {
    for (const code of selected)
      check(codes.includes(code), `${name}: unknown competency ${code}`);
  }
  for (const key of sections) {
    check(
      source
        .replaceAll('’', "'")
        .includes(translations[key].fr.replaceAll('’', "'")),
      `${name}: missing section ${key}`,
    );
  }
  for (const field of ['github_url', 'demo_url']) {
    if (metadata[field])
      check(
        metadata[field].startsWith('https://'),
        `${name}: ${field} must use HTTPS`,
      );
  }
  if (metadata.cover) {
    check(
      fs.existsSync(path.join(root, metadata.cover.replace(/^\//, ''))),
      `${name}: missing cover`,
    );
    check(metadata.cover_alt, `${name}: missing cover_alt`);
  }
}

for (const field of ['github_url', 'linkedin', 'repository_url']) {
  if (config[field])
    check(config[field].startsWith('https://'), `${field}: expected HTTPS`);
}
const baseurl = config.baseurl ?? '';
check(
  typeof baseurl === 'string' &&
    (baseurl === '' ||
      /^\/[A-Za-z0-9._-]+(?:\/[A-Za-z0-9._-]+)*$/.test(baseurl)),
  'Invalid baseurl',
);
check(config.future === true, 'Expected future: true');
check(!config.plugins?.length, 'Unexpected custom plugins');
for (const [key, pair] of Object.entries(translations)) {
  check(
    ['fr', 'en'].every((language) => typeof pair?.[language] === 'string'),
    `${key}: incomplete translation`,
  );
}

function page(source, filename) {
  const nodes = [];
  function visit(node) {
    if (node.tagName) {
      nodes.push({
        tag: node.tagName,
        attributes: Object.fromEntries(
          node.attrs.map(({ name, value }) => [name, value]),
        ),
      });
    }
    node.childNodes?.forEach(visit);
  }
  visit(parseHtml(source));
  const ids = new Set();
  const references = [];
  for (const { tag, attributes } of nodes) {
    if (attributes.id) {
      check(
        !ids.has(attributes.id),
        `${filename}: duplicate ID ${attributes.id}`,
      );
      ids.add(attributes.id);
    }
    if (tag === 'img')
      check('alt' in attributes, `${filename}: image missing alt`);
    if (tag === 'a') check(attributes.href, `${filename}: empty link`);
    if (tag === 'script' && attributes.src) {
      check(
        !/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(attributes.src),
        `${filename}: remote script`,
      );
    }
    for (const attribute of ['href', 'src']) {
      if (attributes[attribute]) references.push(attributes[attribute]);
    }
  }
  check(
    nodes.some(
      ({ tag, attributes }) => tag === 'html' && attributes.lang === 'fr',
    ),
    `${filename}: missing initial language`,
  );
  check(
    nodes.some(
      ({ tag, attributes }) => tag === 'main' && attributes.id === 'main',
    ),
    `${filename}: missing main landmark`,
  );
  check(
    nodes.some(
      ({ tag, attributes }) => tag === 'meta' && attributes.name === 'viewport',
    ),
    `${filename}: missing viewport`,
  );
  check(
    !source.includes('{{') && !source.includes('{%'),
    `${filename}: unresolved Liquid`,
  );
  return { nodes, ids, references };
}

if (site) {
  if (!fs.existsSync(site) || !fs.statSync(site).isDirectory())
    throw new Error(`Missing generated site: ${site}`);
  const pages = new Map();
  for (const filename of files(site).filter((file) => file.endsWith('.html'))) {
    pages.set(filename, page(read(filename), path.relative(site, filename)));
  }

  function localTarget(reference, origin) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(reference)) return null;
    const url = new URL(
      reference,
      `https://portfolio.invalid${baseurl}/${path.relative(site, origin).split(path.sep).join('/')}`,
    );
    const location = decodeURIComponent(url.pathname);
    check(
      !baseurl || location === baseurl || location.startsWith(`${baseurl}/`),
      `URL outside baseurl: ${reference}`,
    );
    const local =
      baseurl && location === baseurl
        ? '/'
        : baseurl && location.startsWith(`${baseurl}/`)
          ? location.slice(baseurl.length)
          : location;
    let target = path.resolve(site, `.${local}`);
    if (fs.existsSync(target) && fs.statSync(target).isDirectory())
      target = path.join(target, 'index.html');
    return { filename: target, anchor: decodeURIComponent(url.hash.slice(1)) };
  }

  for (const [filename, current] of pages) {
    for (const reference of current.references) {
      const target = localTarget(reference, filename);
      if (!target) continue;
      check(
        fs.existsSync(target.filename),
        `${path.relative(site, filename)}: missing resource ${reference}`,
      );
      if (target.anchor && pages.has(target.filename)) {
        check(
          pages.get(target.filename).ids.has(target.anchor),
          `${path.relative(site, filename)}: missing anchor ${reference}`,
        );
      }
    }
  }
  const home = pages.get(path.join(site, 'index.html'));
  check(home, 'Missing homepage');
  if (home) {
    check(
      home.nodes.filter(({ attributes }) => 'data-project-card' in attributes)
        .length === projects.length,
      'Project count mismatch',
    );
    check(
      home.nodes.filter(
        ({ tag, attributes }) => tag === 'th' && attributes.scope === 'row',
      ).length === 6,
      'Expected six competency rows',
    );
    for (const anchor of [
      'home',
      'profile',
      'projects',
      'competencies',
      'education',
      'contact',
    ]) {
      check(home.ids.has(anchor), `Missing home anchor: ${anchor}`);
    }
  }
  for (const project of projects) {
    check(
      fs.existsSync(path.join(site, 'projets', project.name, 'index.html')),
      `Missing project page: ${project.name}`,
    );
  }
  check(
    !fs.existsSync(path.join(site, 'projets/_A-COPIER/index.html')),
    'Template must not be published',
  );
  for (const filename of files(site).filter((file) => file.endsWith('.css'))) {
    for (const [, reference] of read(filename).matchAll(
      /url\(['"]?([^)'"\s]+)/g,
    )) {
      const target = localTarget(reference, filename);
      if (target)
        check(
          fs.existsSync(target.filename),
          `${path.relative(site, filename)}: missing CSS resource ${reference}`,
        );
    }
  }
  check(
    JSON.stringify(JSON.parse(read(path.join(site, 'assets/i18n.json')))) ===
      JSON.stringify(translations),
    'Translation JSON does not match YAML',
  );
  check(
    fs.existsSync(path.join(site, 'mentions-legales/index.html')),
    'Missing legal page',
  );
}

if (errors.length) {
  console.error(errors.map((message) => `FAIL: ${message}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `PASS: ${projects.length} projects, six competency codes, ${Object.keys(translations).length} translations${site ? ', generated resources and anchors valid.' : ', source metadata valid.'}`,
  );
}
