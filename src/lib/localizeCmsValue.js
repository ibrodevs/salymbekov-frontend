const SUPPORTED_LANGUAGES = ['ru', 'en', 'kg'];

export const normalizeCmsLanguage = (language = 'ru') => {
  const base = String(language || 'ru').toLowerCase().split('-')[0];
  if (base === 'ky') return 'kg';
  return SUPPORTED_LANGUAGES.includes(base) ? base : 'ru';
};

const candidatesFor = (language) => {
  const normalized = normalizeCmsLanguage(language);
  return [...new Set([normalized, 'ru', 'en', 'kg'])];
};

const pickTranslation = (value, language) => {
  for (const candidate of candidatesFor(language)) {
    const translated = value[candidate] ?? (candidate === 'kg' ? value.ky : undefined);
    if (translated !== undefined && translated !== null && translated !== '') {
      return translated;
    }
  }
  return '';
};

export const localizeCmsValue = (value, language) => {
  if (Array.isArray(value)) {
    return value.map((item) => localizeCmsValue(item, language));
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  const keys = Object.keys(value);
  const normalizedKeys = keys.map((key) => (key === 'ky' ? 'kg' : key));
  const isTranslationMap = keys.length > 0 && normalizedKeys.every((key) => SUPPORTED_LANGUAGES.includes(key));

  if (isTranslationMap) {
    return localizeCmsValue(pickTranslation(value, language), language);
  }

  const result = {};
  const grouped = {};

  Object.entries(value).forEach(([key, item]) => {
    const match = key.match(/^(.*)_(ru|en|kg|ky)$/);
    if (match) {
      const [, base, rawLanguage] = match;
      const suffix = rawLanguage === 'ky' ? 'kg' : rawLanguage;
      grouped[base] = grouped[base] || {};
      grouped[base][suffix] = item;
      return;
    }

    result[key] = localizeCmsValue(item, language);
  });

  Object.entries(grouped).forEach(([base, translations]) => {
    result[base] = localizeCmsValue(pickTranslation(translations, language), language);
  });

  return result;
};
