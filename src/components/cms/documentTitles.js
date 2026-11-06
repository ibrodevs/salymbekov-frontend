// Document labels are presentation data. Storage filenames and URLs are NOT titles.
// Keep editorial CMS titles when they match the selected language; otherwise use a
// known localized filename, a safely translated phrase, or a neutral localized label.
const FILE_EXT = /\.(?:pdf|docx?|xlsx?|pptx?|odt|ods|odp|txt|rtf|zip|rar)(?:$|[?#])/i;
const STORAGE_LABEL = /^(?:https?:\/\/|\/\/|www\.|\/|\.{1,2}\/)/i;
const GENERIC_LABEL = /^(?:pdf|file|document|documents|документ|документы|скачать|просмотреть|открыть документ|download(?:\s+(?:file|document|pdf))?|view(?:\s+(?:file|document|pdf))?|файл|жүктөп алуу|көрүү)$/i;

const UI_LABELS = { ru: 'Документ', en: 'Document', kg: 'Документ' };
const KNOWN_TITLES = {
  'struktura-universiteta': {
    ru: 'Структура университета', en: 'University structure', kg: 'Университеттин түзүмү',
  },
  'university-structure': {
    ru: 'Структура университета', en: 'University structure', kg: 'Университеттин түзүмү',
  },
  'ustav-universiteta': {
    ru: 'Устав университета', en: 'University charter', kg: 'Университеттин уставы',
  },
  'university-charter': {
    ru: 'Устав университета', en: 'University charter', kg: 'Университеттин уставы',
  },
};

// Limited dictionary of common university document filenames (transliterated
// Russian and English). Do not expose unfamiliar transliteration as if it were
// a real translation: if we cannot translate ALL words, use the CMS context.
const WORDS = {
  struktura: ['структура', 'structure', 'түзүмү'],
  structure: ['структура', 'structure', 'түзүмү'],
  universiteta: ['университета', 'of the university', 'университеттин'],
  universitete: ['университете', 'university', 'университет'],
  universitet: ['университет', 'university', 'университет'],
  university: ['университет', 'university', 'университет'],
  ustav: ['устав', 'charter', 'устав'],
  charter: ['устав', 'charter', 'устав'],
  licenziya: ['лицензия', 'licence', 'лицензия'],
  litsenziya: ['лицензия', 'licence', 'лицензия'],
  licenzii: ['лицензии', 'licences', 'лицензиялар'],
  license: ['лицензия', 'licence', 'лицензия'],
  licence: ['лицензия', 'licence', 'лицензия'],
  licensing: ['лицензирование', 'licensing', 'лицензиялоо'],
  akkreditaciya: ['аккредитация', 'accreditation', 'аккредитация'],
  akkreditatsiya: ['аккредитация', 'accreditation', 'аккредитация'],
  accreditation: ['аккредитация', 'accreditation', 'аккредитация'],
  sertifikat: ['сертификат', 'certificate', 'сертификат'],
  certificate: ['сертификат', 'certificate', 'сертификат'],
  svidetelstvo: ['свидетельство', 'certificate', 'күбөлүк'],
  polozhenie: ['положение', 'regulations', 'жобо'],
  regulations: ['положение', 'regulations', 'жобо'],
  reglament: ['регламент', 'regulations', 'регламент'],
  prikaz: ['приказ', 'order', 'буйрук'],
  order: ['приказ', 'order', 'буйрук'],
  pravila: ['правила', 'rules', 'эрежелер'],
  rules: ['правила', 'rules', 'эрежелер'],
  kodeks: ['кодекс', 'code', 'кодекс'],
  code: ['кодекс', 'code', 'кодекс'],
  etiki: ['этики', 'of ethics', 'этика'],
  otchet: ['отчёт', 'report', 'отчёт'],
  otchety: ['отчёты', 'reports', 'отчёттор'],
  report: ['отчёт', 'report', 'отчёт'],
  plan: ['план', 'plan', 'план'],
  programma: ['программа', 'program', 'программа'],
  program: ['программа', 'program', 'программа'],
  programmy: ['программы', 'programs', 'программалар'],
  obrazovaniya: ['образования', 'of education', 'билим берүүнүн'],
  obrazovatelnuyu: ['образовательную', 'educational', 'билим берүү'],
  obrazovatelnaya: ['образовательная', 'educational', 'билим берүү'],
  education: ['образование', 'education', 'билим берүү'],
  educational: ['образовательный', 'educational', 'билим берүү'],
  deyatelnost: ['деятельность', 'activity', 'ишмердик'],
  nauchnogo: ['научного', 'scientific', 'илимий'],
  nauchnyi: ['научный', 'scientific', 'илимий'],
  scientific: ['научный', 'scientific', 'илимий'],
  academic: ['академический', 'academic', 'академиялык'],
  sovet: ['совет', 'council', 'кеңеш'],
  council: ['совет', 'council', 'кеңеш'],
  studentov: ['студентов', 'of students', 'студенттердин'],
  students: ['студентов', 'students', 'студенттер'],
  vnutrennie: ['внутренние', 'internal', 'ички'],
  internal: ['внутренние', 'internal', 'ички'],
  dokumenty: ['документы', 'documents', 'документтер'],
  dokument: ['документ', 'document', 'документ'],
  documents: ['документы', 'documents', 'документтер'],
  polisy: ['политики', 'policies', 'саясат'],
  politika: ['политика', 'policy', 'саясат'],
  policy: ['политика', 'policy', 'саясат'],
  quality: ['качества', 'quality', 'сапат'],
  kachestva: ['качества', 'quality', 'сапаттын'],
  upravleniya: ['управления', 'management', 'башкаруу'],
  management: ['управление', 'management', 'башкаруу'],
  na: ['на', 'for', 'үчүн'],
  o: ['о', 'on', 'жөнүндө'],
  ob: ['об', 'on', 'жөнүндө'],
  po: ['по', 'on', 'боюнча'],
  dlya: ['для', 'for', 'үчүн'],
  i: ['и', 'and', 'жана'],
  and: ['и', 'and', 'жана'],
  of: ['', 'of', ''],
  the: ['', 'the', ''],
};

const languageKey = (language) => {
  const value = String(language || 'ru').toLowerCase().split('-')[0];
  return value === 'ky' ? 'kg' : (UI_LABELS[value] ? value : 'ru');
};

const getFilenameStem = (url) => {
  const value = String(url || '').trim();
  if (!value) return '';
  let filename = '';
  try {
    filename = new URL(value, 'https://cms.invalid').pathname.split('/').pop() || '';
  } catch {
    filename = value.split(/[?#]/)[0].split('/').pop() || '';
  }
  try {
    filename = decodeURIComponent(filename);
  } catch {
    // A malformed percent escape must not crash a CMS page.
  }
  return filename.replace(/\.(?:pdf|docx?|xlsx?|pptx?|odt|ods|odp|txt|rtf|zip|rar)$/i, '').trim();
};

const normalizeKey = (text) => String(text || '').toLowerCase()
  .replace(/\.(?:pdf|docx?|xlsx?|pptx?|odt|ods|odp|txt|rtf|zip|rar)$/i, '')
  .trim().replace(/[\s_]+/g, '-');

const translateWords = (value, language) => {
  const tokens = String(value || '').toLowerCase().split(/[\s_\-]+/).filter(Boolean);
  if (!tokens.length) return '';

  const index = { ru: 0, en: 1, kg: 2 }[language];
  const translated = [];
  for (const token of tokens) {
    if (/^\d{4}$/.test(token)) {
      translated.push(token);
    } else if (WORDS[token]) {
      const word = WORDS[token][index];
      if (word) translated.push(word);
    } else {
      return '';
    }
  }
  const text = translated.join(' ').trim();
  return text ? text.charAt(0).toLocaleUpperCase() + text.slice(1) : '';
};

const readableLocalizedTitle = (value, language) => {
  const key = normalizeKey(value);
  return KNOWN_TITLES[key]?.[language] || translateWords(value, language);
};

const isTechnicalLabel = (label, url) => {
  const value = String(label || '').trim();
  return !value || value === String(url || '').trim()
    || STORAGE_LABEL.test(value) || FILE_EXT.test(value) || GENERIC_LABEL.test(value);
};

const isCyrillic = (value) => /[\u0400-\u052f]/u.test(value);
const isLatin = (value) => /[a-z]/i.test(value);

export const isDocumentUrl = (url) => FILE_EXT.test(String(url || '').trim());

export const getDocumentTitle = (title, url, language = 'ru', fallbackTitle = '') => {
  const lang = languageKey(language);
  const provided = String(title || '').trim();

  // A CMS title in Cyrillic is more reliable than a generated filename.
  if (provided && !isTechnicalLabel(provided, url) && isCyrillic(provided)) {
    return provided;
  }

  // For English, keep editorial English titles, but not transliterated slugs.
  if (lang === 'en' && provided && !isTechnicalLabel(provided, url)
    && !/[-_]/.test(provided) && !isCyrillic(provided)) {
    return provided;
  }

  const translated = readableLocalizedTitle(provided, lang)
    || readableLocalizedTitle(getFilenameStem(url), lang);
  if (translated) return translated;

  // Do not show "Svidetelstvo ..." or "University ..." on the Russian page.
  const context = String(fallbackTitle || '').trim();
  if (context && !isTechnicalLabel(context, url)
    && (lang === 'en' || isCyrillic(context))) return context;

  // Preserve genuine native-language CMS titles, otherwise stay neutral.
  if (provided && !isTechnicalLabel(provided, url) && !isLatin(provided)) return provided;
  return UI_LABELS[lang];
};

// Handles plain document URLs and untranslated English labels embedded in CMS HTML.
export const normalizeDocumentAnchorTitles = (root, language = 'ru') => {
  root.querySelectorAll('a[href]').forEach((anchor) => {
    const url = anchor.getAttribute('href') || '';
    if (!isDocumentUrl(url) || anchor.querySelector('img, svg, video')) return;
    const original = (anchor.textContent || '').trim();
    const resolved = getDocumentTitle(original, url, language);
    if (resolved !== original) anchor.textContent = resolved;
  });
};
