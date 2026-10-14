let language = 'fr';
let dictionary = {};
function savedLanguage() {
  try {
    return localStorage.getItem('nathan-language');
  } catch {
    return null;
  }
}
export function getLanguage() {
  return language;
}
export function translate(key) {
  return dictionary[key]?.[language] || dictionary[key]?.fr || key;
}
function applyLanguage(next, persist = false) {
  language = next === 'en' ? 'en' : 'fr';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dictionary[el.dataset.i18n]?.[language];
    if (value === undefined) return;
    el.replaceChildren();
    value.split('\n').forEach((part, index) => {
      if (index) el.append(document.createElement('br'));
      el.append(document.createTextNode(part));
    });
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', translate(el.dataset.i18nAria));
  });
  document.querySelectorAll('[data-fr][data-en]').forEach((el) => {
    el.textContent = el.dataset[language] || el.dataset.fr;
  });
  document.querySelectorAll('[data-alt-fr][data-alt-en]').forEach((el) => {
    el.alt = el.dataset[language === 'fr' ? 'altFr' : 'altEn'];
  });
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute(
      'content',
      document.body.dataset[language === 'fr' ? 'descriptionFr' : 'descriptionEn'] || '',
    );
  document.querySelectorAll('[data-lang]').forEach((el) => {
    el.hidden = el.dataset.lang !== language;
  });
  document.querySelectorAll('[data-proof-heading]').forEach((el) => {
    el.id =
      el.closest('[data-lang]')?.dataset.lang === language
        ? 'evidence'
        : `evidence-${el.closest('[data-lang]')?.dataset.lang}`;
  });
  if (['#evidence', '#preuves'].includes(location.hash))
    requestAnimationFrame(() => document.getElementById('evidence')?.scrollIntoView());
  document.querySelectorAll('[data-language]').forEach((el) => {
    el.setAttribute('aria-pressed', String(el.dataset.language === language));
  });
  const title = document.body.dataset[language === 'fr' ? 'titleFr' : 'titleEn'];
  document.title = `${title || 'Nathan S.'} — BTS SIO SISR`;
  if (persist) {
    try {
      localStorage.setItem('nathan-language', language);
    } catch {}
  }
  document.dispatchEvent(new CustomEvent('portfolio:language', { detail: { language } }));
}
export async function initI18n() {
  const group = document.querySelector('.language-switch');
  try {
    const url = new URL('../i18n.json', import.meta.url);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Translations: ${response.status}`);
    dictionary = await response.json();
    const requested = new URLSearchParams(location.search).get('lang');
    applyLanguage(requested || savedLanguage() || 'fr');
    group?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-language]');
      if (button) applyLanguage(button.dataset.language, true);
    });
  } catch (error) {
    if (group) group.hidden = true;
    console.warn('Portfolio: French interface retained.', error.message);
  }
}
