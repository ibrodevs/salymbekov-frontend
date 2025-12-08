import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import ruTranslation from "./locales/ru/translation.json";
import kgTranslation from "./locales/kg/translation.json";

// DEV: Check what was imported from kg file directly
if (process.env.NODE_ENV !== 'production') {
  const testKey = 'conferences.titles.global_forum_portugal_2023';
  const kgValue = kgTranslation.conferences?.titles?.global_forum_portugal_2023;
  console.log('[i18n-import] kgTranslation imported value for', testKey, '=', kgValue);
}

const resources = {
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
  kg: { translation: kgTranslation },
  // Alias: some systems/browsers use 'ky' (ISO) while this project uses 'kg'.
  // Keep both keys so 'ky' and 'kg' work the same.
  ky: { translation: kgTranslation }
};

// Normalize 'ky' -> 'kg' on change to avoid mismatches between locales
// This ensures both codes map to the same translations.
i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  returnObjects: true,
  // Force i18n to load only language (not region-specific) keys and define supported languages
  load: 'languageOnly',
  supportedLngs: ['en', 'ru', 'kg', 'ky']
});

// If something uses 'ky' or 'ky-KG' as a language, map it to our 'kg' resource
// Normalize language change events so that variants like 'ky', 'kg-KG', etc. always use 'kg'
i18n.on('languageChanged', (lng) => {
  if (!lng) return;
  const normalized = lng.split('-')[0];
  // If the app or browser tries to set 'ky', redirect to 'kg'
  if (normalized === 'ky') {
    if (i18n.language !== 'kg') {
      i18n.changeLanguage('kg');
    }
  }
});

// Make sure `kg` bundle is available; addResourceBundle ensures runtime access
if (!i18n.hasResourceBundle('kg', 'translation')) {
  i18n.addResourceBundle('kg', 'translation', kgTranslation, true, true);
}

// DEV: Debug print of resource contents to ensure the runtime bundle is correct
if (process.env.NODE_ENV !== 'production') {
  try {
    console.group('[i18n-debug] i18n resources check');
    console.log('Loaded languages:', Object.keys(i18n.options.resources || {}));
    console.log('Has kg resource bundle:', i18n.hasResourceBundle('kg', 'translation'));
    console.log('Has en resource bundle:', i18n.hasResourceBundle('en', 'translation'));
    const key = 'conferences.titles.global_forum_portugal_2023';
    console.log(`${key} -> getResource(kg):`, i18n.getResource('kg', 'translation', key));
    console.log(`${key} -> getResource(en):`, i18n.getResource('en', 'translation', key));
    console.log(`${key} -> i18n.exists(kg):`, i18n.exists(key, { lng: 'kg' }));
    console.log(`${key} -> i18n.exists(en):`, i18n.exists(key, { lng: 'en' }));
    console.groupEnd();
  } catch (err) {
    console.warn('[i18n-debug] error while checking resources', err);
  }
}

export default i18n;