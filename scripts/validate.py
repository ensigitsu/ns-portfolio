from argparse import ArgumentParser
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
import json
import re
import sys
import yaml

ROOT = Path(__file__).resolve().parents[1]
parser = ArgumentParser()
parser.add_argument('--site', type=Path)
args = parser.parse_args()
errors = []


def check(condition, message):
    if not condition:
        errors.append(message)


def read_yaml(path):
    return yaml.safe_load(path.read_text(encoding='utf-8'))


def read_project(path):
    source = path.read_text(encoding='utf-8')
    check(source.startswith('---\n'), f'{path.name}: missing front matter')
    try:
        metadata = yaml.safe_load(source.split('---', 2)[1]) or {}
    except (IndexError, yaml.YAMLError) as error:
        errors.append(f'{path.name}: invalid YAML: {error}')
        metadata = {}
    return metadata, source


def value(metadata, name, legacy=None):
    return metadata.get(name, metadata.get(legacy))


config = read_yaml(ROOT / '_config.yml')
translations = read_yaml(ROOT / '_data/translations.yml')
competencies = read_yaml(ROOT / '_data/competences.yml')
codes = [item['code'] for item in competencies]
check(codes == ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'], 'Expected the six official competency codes')
for item in competencies:
    check(bool(item.get('label_fr')) and bool(item.get('label_en')), f'{item["code"]}: missing label')

projects = []
section_keys = ['section_context', 'section_resources', 'section_activity', 'section_evidence', 'section_learning']
for path in sorted((ROOT / '_projets').glob('*.md')):
    if path.name.startswith('_'):
        continue
    check(bool(re.fullmatch(r'\d{4}-\d{2}-[a-z0-9-]+\.md', path.name)), f'{path.name}: invalid filename')
    metadata, source = read_project(path)
    projects.append((path, metadata))
    for name, legacy in [('title', None), ('date', None), ('context', 'cadre'), ('summary', 'resume')]:
        check(bool(value(metadata, name, legacy)), f'{path.name}: missing {name}')
    selected = value(metadata, 'competencies', 'competences')
    check(isinstance(selected, list), f'{path.name}: competencies must be a list')
    for code in selected or []:
        check(code in codes, f'{path.name}: unknown competency {code}')
    for key in section_keys:
        heading = translations[key]['fr']
        check(heading.replace('’', "'") in source.replace('’', "'"), f'{path.name}: missing section {key}')
    for name in ['github_url', 'demo_url']:
        if metadata.get(name):
            check(metadata[name].startswith('https://'), f'{path.name}: {name} must use HTTPS')
    if metadata.get('cover'):
        check((ROOT / metadata['cover'].lstrip('/')).is_file(), f'{path.name}: missing cover file')
        check(bool(metadata.get('cover_alt')), f'{path.name}: missing cover_alt')

for name in ['github_url', 'linkedin', 'repository_url']:
    if config.get(name):
        check(config[name].startswith('https://'), f'{name}: expected an HTTPS URL')
baseurl = config.get('baseurl', '')
check(
    isinstance(baseurl, str) and (
        baseurl == '' or bool(re.fullmatch(r'/[A-Za-z0-9._-]+(?:/[A-Za-z0-9._-]+)*', baseurl))
    ),
    'Expected baseurl to be empty or a path starting with / without a trailing slash',
)
check(config.get('future') is True, 'Expected future: true')
check(not config.get('plugins'), 'Unexpected custom plugins')
for key, pair in translations.items():
    check(all(isinstance(pair.get(language), str) for language in ['fr', 'en']), f'{key}: incomplete translation')


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.references = []
        self.tags = []
        self.card_count = 0
        self.competency_rows = 0

    def handle_starttag(self, tag, attributes):
        attributes = dict(attributes)
        self.tags.append((tag, attributes))
        if attributes.get('id'):
            check(attributes['id'] not in self.ids, f'Duplicate ID: {attributes["id"]}')
            self.ids.add(attributes['id'])
        if tag == 'img':
            check('alt' in attributes, 'Image missing alt attribute')
        if 'data-project-card' in attributes:
            self.card_count += 1
        if tag == 'th' and attributes.get('scope') == 'row':
            self.competency_rows += 1
        for name in ['href', 'src', 'data-vertex', 'data-fragment']:
            if attributes.get(name):
                self.references.append((tag, name, attributes[name]))

    def handle_startendtag(self, tag, attributes):
        self.handle_starttag(tag, attributes)


if args.site:
    site = args.site.resolve()
    check(site.is_dir(), 'Missing generated site directory')
    pages = {}
    for path in site.rglob('*.html'):
        page = Page()
        source = path.read_text(encoding='utf-8')
        page.feed(source)
        pages[path.resolve()] = page
        check(any(tag == 'html' and data.get('lang') == 'fr' for tag, data in page.tags), f'{path.name}: missing initial language')
        check(any(tag == 'main' and data.get('id') == 'main' for tag, data in page.tags), f'{path.name}: missing main landmark')
        check(any(tag == 'meta' and data.get('name') == 'viewport' for tag, data in page.tags), f'{path.name}: missing viewport')
        check('{{' not in source and '{%' not in source, f'{path.name}: unresolved Liquid')

    def local_target(reference, origin):
        parsed = urlparse(reference)
        if parsed.scheme or parsed.netloc or reference.startswith('data:'):
            return None, None
        location = unquote(parsed.path)
        if location.startswith('/'):
            base = config['baseurl']
            check(location == base or location.startswith(base + '/'), f'URL outside baseurl: {reference}')
            location = location[len(base):] if location.startswith(base) else location
            target = site / location.lstrip('/')
        else:
            target = origin.parent / location if location else origin
        if target.is_dir():
            target /= 'index.html'
        return target.resolve(), unquote(parsed.fragment)

    for path, page in pages.items():
        for tag, name, reference in page.references:
            if tag == 'script' and name == 'src':
                check(not urlparse(reference).scheme, 'Unexpected remote script')
            target, anchor = local_target(reference, path)
            if target is None:
                continue
            check(target.is_file(), f'{path.relative_to(site)}: missing resource {reference}')
            if anchor and target in pages:
                check(anchor in pages[target].ids, f'{path.name}: missing anchor {reference}')
    home = pages.get((site / 'index.html').resolve())
    if home:
        check(home.card_count == len(projects), f'Expected {len(projects)} cards, got {home.card_count}')
        check(home.competency_rows == 6, f'Expected six competency rows, got {home.competency_rows}')
        for anchor in ['home', 'profile', 'projects', 'competencies', 'education', 'contact']:
            check(anchor in home.ids, f'Missing home anchor: {anchor}')
    for path, metadata in projects:
        check((site / 'projets' / path.stem / 'index.html').is_file(), f'Missing project page: {path.stem}')
    check(not (site / 'projets' / '_A-COPIER' / 'index.html').exists(), 'Project template must not be published')
    for path in site.rglob('*.css'):
        for reference in re.findall(r'url\([\'\"]?([^\)\'\"]+)', path.read_text()):
            target, anchor = local_target(reference, path)
            if target:
                check(target.is_file(), f'CSS resource missing: {reference}')
    check(json.loads((site / 'assets/i18n.json').read_text()) == translations, 'Translation JSON does not match YAML')
    check((site / 'mentions-legales/index.html').exists(), 'Missing legal page')
    if home:
        for tag, attributes in home.tags:
            if tag == 'a':
                check(bool(attributes.get('href')), 'Empty link found')

if errors:
    print('\n'.join('FAIL: ' + message for message in errors))
    sys.exit(1)
print(f'PASS: {len(projects)} projects, six competency codes, {len(translations)} translations' + (', generated resources and anchors valid.' if args.site else ', source metadata valid.'))
