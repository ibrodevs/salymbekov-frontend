import enTranslation from '../../locales/en/translation.json';
import kgTranslation from '../../locales/kg/translation.json';
import ruTranslation from '../../locales/ru/translation.json';

const normalizeLanguage = (language = 'ru') => {
  const base = String(language).toLowerCase().split('-')[0];
  if (base === 'ky') return 'kg';
  return ['ru', 'en', 'kg'].includes(base) ? base : 'ru';
};

const normalizeText = (value) =>
  String(value || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const flattenStrings = (value, path = [], result = new Map()) => {
  if (typeof value === 'string') {
    result.set(path.join('.'), value);
    return result;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => flattenStrings(item, [...path, String(index)], result));
    return result;
  }

  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, item]) => flattenStrings(item, [...path, key], result));
  }

  return result;
};

const ruByKey = flattenStrings(ruTranslation);
const localeByKey = {
  en: flattenStrings(enTranslation),
  kg: flattenStrings(kgTranslation),
};

const reverseRu = new Map();
for (const [key, value] of ruByKey.entries()) {
  const normalized = normalizeText(value);
  if (!normalized || normalized.length < 2) continue;
  if (!reverseRu.has(normalized)) reverseRu.set(normalized, []);
  reverseRu.get(normalized).push(key);
}

const findLocalizedValue = (source, language) => {
  const lang = normalizeLanguage(language);
  if (lang === 'ru') return source;

  const normalized = normalizeText(source);
  if (!normalized) return source;

  const keys = reverseRu.get(normalized) || [];
  for (const key of keys) {
    const translated = localeByKey[lang]?.get(key);
    if (translated && normalizeText(translated) !== normalized) return translated;
  }

  return source;
};

export const localizeCmsText = (value, language) => {
  if (!value) return value || '';
  return findLocalizedValue(value, language);
};

export const localizeCmsHtml = (html, language) => {
  const lang = normalizeLanguage(language);
  if (!html || lang === 'ru' || typeof DOMParser === 'undefined') return html || '';

  const doc = new DOMParser().parseFromString(`<div id="cms-locale-root">${html}</div>`, 'text/html');
  const root = doc.getElementById('cms-locale-root');
  if (!root) return html;

  const walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach((node) => {
    const parentTag = node.parentElement?.tagName?.toLowerCase();
    if (['script', 'style', 'code', 'pre'].includes(parentTag)) return;

    const original = node.nodeValue || '';
    const trimmed = original.trim();
    if (!trimmed) return;

    const translated = findLocalizedValue(trimmed, lang);
    if (translated === trimmed) return;

    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    node.nodeValue = `${leading}${translated}${trailing}`;
  });

  root.querySelectorAll('[alt], [title]').forEach((element) => {
    ['alt', 'title'].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;
      element.setAttribute(attribute, findLocalizedValue(value, lang));
    });
  });

  return root.innerHTML;
};

export const cmsLanguage = normalizeLanguage;
