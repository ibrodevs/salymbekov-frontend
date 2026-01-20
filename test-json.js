const fs = require('fs');

const files = {
  ru: 'src/locales/ru/translation.json',
  en: 'src/locales/en/translation.json',
  kg: 'src/locales/kg/translation.json'
};

for (const [lang, path] of Object.entries(files)) {
  try {
    const content = fs.readFileSync(path, 'utf8');
    JSON.parse(content);
    console.log(`✅ ${lang.toUpperCase()}: Valid JSON`);
  } catch (error) {
    console.log(`❌ ${lang.toUpperCase()}: ${error.message}`);
  }
}
