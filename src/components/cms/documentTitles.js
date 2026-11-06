// CMS document URLs are storage addresses, not suitable visible labels.
// Prefer the CMS title, then a readable filename when no title was supplied.
const FILE_EXTENSION = /\.(?:pdf|docx?|xlsx?|pptx?|odt|ods|odp|txt|rtf|zip|rar)(?:$|[?#])/i;
const RAW_URL_LABEL = /^(?:https?:\/\/|\/\/|www\.|\/|\.{1,2}\/)/i;
const RAW_FILENAME_LABEL = /\.(?:pdf|docx?|xlsx?|pptx?|odt|ods|odp|txt|rtf|zip|rar)(?:$|[?#])/i;
const GENERIC_LABEL = /^(?:pdf|file|document|документ|скачать|просмотреть|открыть документ|download|view|файл|жүктөп алуу|көрүү)$/i;

const KNOWN_TITLES = {
  'struktura-universiteta': {
    ru: 'Структура университета',
    en: 'University structure',
    kg: 'Университеттин түзүмү',
  },
};

const FALLBACK_TITLES = {
  ru: 'Документ',
  en: 'Document',
  kg: 'Документ',
};

const documentLanguage = (language) => {
  const value = String(language || 'ru').toLowerCase().split('-')[0];
  return value === 'ky' ? 'kg' : (FALLBACK_TITLES[value] ? value : 'ru');
};

const isTechnicalLabel = (value, url) => {
  const label = String(value || '').trim();
  return !label || label === String(url || '').trim()
    || RAW_URL_LABEL.test(label) || RAW_FILENAME_LABEL.test(label) || GENERIC_LABEL.test(label);
};

const filenameStem = (url) => {
  if (!url) return '';
  let path = String(url);
  try {
    path = new URL(path, 'https://cms.invalid').pathname;
  } catch {
    path = path.split(/[?#]/)[0];
  }

  const filename = path.split('/').filter(Boolean).pop() || '';
  let decoded = filename;
  try {
    decoded = decodeURIComponent(filename);
  } catch {
    // Leave malformed percent-escapes untouched.
  }
  return decoded.replace(/\.(?:pdf|docx?|xlsx?|pptx?|odt|ods|odp|txt|rtf|zip|rar)$/i, '').trim();
};

export const isDocumentUrl = (url) => FILE_EXTENSION.test(String(url || '').trim());

export const getDocumentTitle = (title, url, language = 'ru', fallbackTitle = '') => {
  const lang = documentLanguage(language);
  const provided = String(title || '').trim();
  if (!isTechnicalLabel(provided, url)) return provided;

  const stem = filenameStem(url);
  const knownTitle = KNOWN_TITLES[stem.toLowerCase()]?.[lang];
  if (knownTitle) return knownTitle;

  // Humanize other uploaded filenames instead of exposing the S3 address.
  const readable = stem.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (readable && /[^\W\d_]/u.test(readable)) {
    return readable.charAt(0).toLocaleUpperCase() + readable.slice(1);
  }

  const fallback = String(fallbackTitle || '').trim();
  return !isTechnicalLabel(fallback, url) ? fallback : FALLBACK_TITLES[lang];
};

// Also covers URLs embedded as the visible text of CMS HTML/Markdown links.
export const normalizeDocumentAnchorTitles = (root, language = 'ru') => {
  root.querySelectorAll('a[href]').forEach((anchor) => {
    const url = anchor.getAttribute('href') || '';
    if (!isDocumentUrl(url) || anchor.querySelector('img, svg, video')) return;
    const label = (anchor.textContent || '').trim();
    if (isTechnicalLabel(label, url) && (!label || RAW_URL_LABEL.test(label) || RAW_FILENAME_LABEL.test(label))) {
      anchor.textContent = getDocumentTitle(label, url, language);
    }
  });
};
