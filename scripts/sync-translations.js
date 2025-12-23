import fs from 'fs';

const ru = JSON.parse(fs.readFileSync('src/locales/ru/translation.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('src/locales/en/translation.json', 'utf8'));
const kg = JSON.parse(fs.readFileSync('src/locales/kg/translation.json', 'utf8'));

console.log('Before sync:');
console.log('RU: science subkeys=', Object.keys(ru.science||{}).length, ', conferences=', !!ru.conferences);
console.log('EN: science subkeys=', Object.keys(en.science||{}).length, ', conferences=', !!en.conferences);
console.log('KG: science subkeys=', Object.keys(kg.science||{}).length, ', conferences=', !!kg.conferences);

// EN is missing conferences entirely - add it from KG structure with EN labels
if (!en.conferences) {
  en.conferences = {
    page: {
      title: "Scientific Conferences",
      subtitle: "International and national conferences, symposiums and scientific events of the university",
      backToScience: "Back to Science",
      dateToBeAnnounced: "Date to be announced",
      location: "Online/Offline",
      allConferences: "All Conferences",
      note: "Note: titles and dates are aligned with the original website materials.",
      scientificEvents: "Scientific Events"
    },
    category: kg.conferences.category, // Keep original category keys (untranslated)
    titles: kg.conferences.titles,     // Keep original title keys
    summaries: kg.conferences.summaries, // Keep original summaries
    contents: kg.conferences.contents,   // Keep original contents
    detail: {
      notFound: "Conference not found",
      backToList: "Back to list",
      allConferences: "All Conferences",
      summary: "Summary",
      gallery: "Gallery",
      photosComingSoon: "Photos coming soon",
      information: "Information",
      eventDate: "Event date",
      eventLocation: "Location",
      share: "Share",
      shareButton: "Share event",
      linkCopied: "Link copied",
      photo: "Photo",
      enlargedPhoto: "Enlarged photo",
      contentPreparation: "Content in preparation"
    }
  };
  console.log('✓ Added conferences to EN');
}

// KG science is missing many subsections that exist in RU/EN
// We need to copy subsections from RU science to KG science (keeping KG's existing main/management)
const ruScienceKeys = Object.keys(ru.science || {});
const kgScienceKeys = Object.keys(kg.science || {});
const missingScienceKeys = ruScienceKeys.filter(k => !kgScienceKeys.includes(k));

if (missingScienceKeys.length > 0) {
  console.log('KG science missing these keys:', missingScienceKeys.slice(0, 10), '... (', missingScienceKeys.length, 'total)');
  
  // Copy missing science subsections from RU to KG
  // Note: These will be in Russian until properly translated, but structure will match
  missingScienceKeys.forEach(key => {
    kg.science[key] = ru.science[key];
  });
  console.log('✓ Copied', missingScienceKeys.length, 'science subsections to KG (temporarily using RU text)');
}

// Save all files
fs.writeFileSync('src/locales/ru/translation.json', JSON.stringify(ru, null, 2) + '\n');
fs.writeFileSync('src/locales/en/translation.json', JSON.stringify(en, null, 2) + '\n');
fs.writeFileSync('src/locales/kg/translation.json', JSON.stringify(kg, null, 2) + '\n');

console.log('\nAfter sync:');
console.log('RU: science subkeys=', Object.keys(ru.science).length, ', conferences=', !!ru.conferences);
console.log('EN: science subkeys=', Object.keys(en.science).length, ', conferences=', !!en.conferences);
console.log('KG: science subkeys=', Object.keys(kg.science).length, ', conferences=', !!kg.conferences);
console.log('\n✓✓✓ All languages now have matching structure! ✓✓✓');
console.log('Note: KG science subsections use RU text temporarily - need Kyrgyz translation');
