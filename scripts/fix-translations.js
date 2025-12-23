import fs from 'fs';

// Load all three files
const kg = JSON.parse(fs.readFileSync('src/locales/kg/translation.json', 'utf8'));
const ru = JSON.parse(fs.readFileSync('src/locales/ru/translation.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('src/locales/en/translation.json', 'utf8'));

console.log('Before:');
console.log('RU keys:', Object.keys(ru).length, 'has science:', !!ru.science, 'has conferences:', !!ru.conferences);
console.log('EN keys:', Object.keys(en).length, 'has science:', !!en.science, 'has conferences:', !!en.conferences);
console.log('KG keys:', Object.keys(kg).length, 'has science:', !!kg.science, 'has conferences:', !!kg.conferences);

// Add conferences section to RU if missing
if (!ru.conferences && kg.conferences) {
  ru.conferences = {
    page: {
      title: "Научные конференции",
      subtitle: "Международные и национальные конференции, симпозиумы и научные мероприятия университета",
      backToScience: "Назад к науке",
      dateToBeAnnounced: "Дата уточняется",
      location: "Онлайн/Офлайн",
      allConferences: "Все конференции",
      note: "Примечание: названия и даты выровнены по материалам оригинального сайта.",
      scientificEvents: "Научные мероприятия"
    },
    category: kg.conferences.category,
    titles: kg.conferences.titles,
    summaries: kg.conferences.summaries,
    contents: kg.conferences.contents,
    detail: {
      notFound: "Конференция не найдена",
      backToList: "Назад к списку",
      allConferences: "Все конференции",
      summary: "Краткое описание",
      gallery: "Галерея",
      photosComingSoon: "Фотографии скоро появятся",
      information: "Информация",
      eventDate: "Дата мероприятия",
      eventLocation: "Место проведения",
      share: "Поделиться",
      shareButton: "Поделиться мероприятием",
      linkCopied: "Ссылка скопирована",
      photo: "Фото",
      enlargedPhoto: "Увеличенное фото",
      contentPreparation: "Контент в подготовке"
    }
  };
  console.log('✓ Added conferences to RU');
}

// Add science section to EN if missing
if (!en.science && kg.science) {
  en.science = {
    main: {
      badge: "Scientific Activity",
      title: "Science",
      subtitle: "Innovations, Research, Development",
      stats: {
        publications: "Scientific Publications",
        labs: "Laboratories",
        projects: "Projects",
        researchers: "Researchers"
      },
      greeting: {
        title: "Welcome to the Science Department",
        p1: "Scientific work at the university involves faculty, master's students, graduate students, and undergraduates. Its purpose is to develop research thinking, solve relevant medical, humanitarian, socio-economic, pedagogical, and other issues, and enhance graduates' general cultural and professional levels.",
        p2: "Scientific work is one of the key activities of leadership and faculty. It ensures an organic unity of teaching, methodological, and scientific work aimed at improving the educational process.",
        p3: "The direction of scientific work must meet current societal development needs, align with the university's profile and its divisions, and contribute to fully revealing the creative potential of teachers and students."
      },
      priorities: {
        title: "Priority Areas of Scientific Research",
        item1: "Scientific, methodological, and informational support of the educational process, including training personnel in licensed scientific specialties;",
        item2: "Theoretical and applied research on relevant cultural, humanitarian, socio-economic, pedagogical, and other issues."
      },
      sections: "Science Sections",
      links: {
        management: "Management Bodies",
        managementDesc: "Organization and coordination of scientific activities",
        professors: "Professors",
        professorsDesc: "Distinguished professors and lecturers",
        journal: "Scientific Journal",
        journalDesc: "Scientific articles and publications",
        periodicals: "Periodicals",
        periodicalsDesc: "Scientific journals and periodicals",
        conferences: "Conferences",
        conferencesDesc: "Scientific conferences and seminars",
        masterClasses: "Master Classes",
        masterClassesDesc: "Master classes and trainings for specialists",
        roundTables: "Round Tables",
        roundTablesDesc: "Discussion platforms and round tables",
        department: "Science Department",
        departmentDesc: "Organization and coordination of scientific activities",
        labs: "Laboratories",
        labsDesc: "Modern educational and research laboratories",
        projects: "Scientific Projects",
        projectsDesc: "Current research projects and grants",
        library: "Library",
        libraryDesc: "Scientific literature and digital resources",
        studentScience: "Student Science",
        studentScienceDesc: "Student scientific activities and achievements"
      }
    }
  };
  console.log('✓ Added science to EN');
}

// Add conferences section to EN if missing
if (!en.conferences && kg.conferences) {
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
    category: kg.conferences.category,
    titles: kg.conferences.titles,
    summaries: kg.conferences.summaries,
    contents: kg.conferences.contents,
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

// Save files with proper formatting
fs.writeFileSync('src/locales/ru/translation.json', JSON.stringify(ru, null, 2) + '\n');
fs.writeFileSync('src/locales/en/translation.json', JSON.stringify(en, null, 2) + '\n');

console.log('\nAfter:');
console.log('RU keys:', Object.keys(ru).length, 'has science:', !!ru.science, 'has conferences:', !!ru.conferences);
console.log('EN keys:', Object.keys(en).length, 'has science:', !!en.science, 'has conferences:', !!en.conferences);
console.log('\n✓ Done! Files updated.');
