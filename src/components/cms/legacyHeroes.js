// Hero badges and taglines of the original page designs (content lives in the CMS).
// Wording that contradicted the official site was removed or corrected.
const LEGACY_HEROES = {
  "/about": {
    "subtitle": {
      "ru": "Процветание через образование",
      "kg": "Билим аркылуу өркүндөө",
      "en": "Prosperity through education"
    }
  },
  "/clinical/doc-clinic": {
    "subtitle": {
      "ru": "Новый многопрофильный медицинский центр, предоставляющий качественные медицинские услуги в соответствии с государственными и международными стандартами.",
      "kg": "Мамлекеттик жана эл аралык стандарттарга ылайык сапаттуу медициналык тейлөө көрсөтүүчү жаңы көп тармактуу медициналык борбор.",
      "en": "A new multidisciplinary medical center providing quality medical services in accordance with state and international standards."
    }
  },
  "/clinical/simulation-center": {
    "subtitle": {
      "ru": "Практическая подготовка студентов медицинских программ",
      "kg": "Медициналык программалардын студенттерин практикалык даярдоо",
      "en": "Practical training for students of medical programmes"
    }
  },
  "/contact": {
    "subtitle": {
      "ru": "Контактная информация Салымбеков Университета",
      "kg": "Салымбеков Университетинин байланыш маалыматы",
      "en": "Contact information for Salymbekov University"
    }
  },
  "/contacts": {
    "subtitle": {
      "ru": "Контактная информация Салымбеков Университета",
      "kg": "Салымбеков Университетинин байланыш маалыматы",
      "en": "Contact information for Salymbekov University"
    }
  },
  "/cooperation/international-partners": {
    "badge": {
      "ru": "Международное сотрудничество",
      "kg": "Эларалык кызматташуу",
      "en": "International Cooperation"
    }
  },
  "/cooperation/local-partners": {
    "badge": {
      "ru": "Партнерская сеть",
      "kg": "Өнөктөштөр тармагы",
      "en": "Partner Network"
    }
  },
  "/education/ait/about": {
    "badge": {
      "ru": "AIT",
      "kg": "AIT",
      "en": "AIT"
    }
  },
  "/education/ait/contacts": {
    "badge": {
      "ru": "Свяжитесь с нами",
      "kg": "Биз менен Байланыш",
      "en": "Contact Us"
    },
    "subtitle": {
      "ru": "Мы всегда готовы ответить на ваши вопросы и помочь в реализации ваших образовательных целей",
      "kg": "Биз ар дайым суроолоруңузга жооп берүүгө жана билим берүү максаттарыңызга жетүүгө жардам берүүгө дайынбыз",
      "en": "We are always ready to answer your questions and help you achieve your educational goals"
    }
  },
  "/education/ait/disciplines": {
    "badge": {
      "ru": "Направления обучения",
      "kg": "Окуу программалары",
      "en": "Study Programs"
    }
  },
  "/education/ait/leadership": {
    "badge": {
      "ru": "Экспертное руководство",
      "kg": "Эксперттик жетекчилик",
      "en": "Expert Leadership"
    }
  },
  "/education/ait/teachers": {
    "badge": {
      "ru": "Экспертные преподаватели",
      "kg": "Эксперт мугалимдер",
      "en": "Expert Teachers"
    }
  },
  "/education/center/about": {
    "badge": {
      "ru": "О Центре",
      "kg": "Борбор жөнүндө",
      "en": "About Center"
    },
    "subtitle": {
      "ru": "Современное пространство для качественного обучения и развития учащихся в сфере STEM",
      "kg": "Илим, технология, инженерия жана математика тармагында сапаттуу билим берүү жана окуучуларды өнүктүрүү үчүн заманбап мейкиндик",
      "en": "Modern space for quality education and student development in science, technology, engineering and mathematics"
    }
  },
  "/education/it-college/departments/general": {
    "badge": {
      "ru": "Общее образование",
      "kg": "Жалпы билим",
      "en": "General Education"
    }
  },
  "/education/it-college/departments/information": {
    "badge": {
      "ru": "Отделение IT",
      "kg": "IT бөлүмү",
      "en": "IT Department"
    }
  },
  "/education/it-college/director": {
    "badge": {
      "ru": "Руководство",
      "kg": "Жетекчилик",
      "en": "Leadership"
    }
  },
  "/education/it-college/pedagogical-council": {
    "badge": {
      "ru": "Педагогический совет",
      "kg": "Педагогикалык кеңеш",
      "en": "Pedagogical Council"
    }
  },
  "/education/it-college/specialties/diplom-computational-sciences": {
    "badge": {
      "ru": "Программное обеспечение",
      "kg": "Программалык камсыздоо",
      "en": "Software development"
    }
  },
  "/education/it-college/specialties/diplom-mobile-computing": {
    "badge": {
      "ru": "Мобильные приложения",
      "kg": "Мобилдик тиркемелер",
      "en": "Mobile applications"
    }
  },
  "/education/it-college/specialties/diplom-multimedia-applications": {
    "badge": {
      "ru": "Мультимедийные программы",
      "kg": "Мультимедиа программалары",
      "en": "Multimedia programs"
    }
  },
  "/education/mfm/about": {
    "badge": {
      "ru": "Медицинский факультет",
      "kg": "Медицина факультети",
      "en": "Medical Faculty"
    }
  },
  "/education/mfm/dekanat/curriculum": {
    "badge": {
      "ru": "Учебный план",
      "kg": "Окуу планы",
      "en": "Curriculum"
    }
  },
  "/education/mfm/dekanat/dean": {
    "badge": {
      "ru": "Медицинский факультет",
      "kg": "Медицина факультети",
      "en": "Medical Faculty"
    }
  },
  "/education/mfm/dekanat/departments": {
    "badge": {
      "ru": "Кафедры",
      "kg": "Кафедралар",
      "en": "Departments"
    },
    "subtitle": {
      "ru": "Фундаментальная подготовка будущих медицинских специалистов",
      "kg": "Келечектеги медициналык адистердин негизги даярдоосу",
      "en": "Fundamental training of future medical specialists"
    }
  },
  "/education/mfm/programs/five-years": {
    "badge": {
      "ru": "Лечебное дело",
      "kg": "Дарылоо иши",
      "en": "General Medicine"
    }
  },
  "/education/mfm/programs/six-years": {
    "badge": {
      "ru": "Лечебное дело",
      "kg": "Дарылоо иши",
      "en": "General Medicine"
    }
  },
  "/education/postgrad/internship": {
    "badge": {
      "ru": "Медицинская Интернатура",
      "kg": "Медициналык Интернатура",
      "en": "Medical Internship"
    },
    "subtitle": {
      "ru": "Практическая подготовка выпускников медицинского факультета в современных клиниках",
      "kg": "Медицина факультетинин бүтүрүүчүлөрү үчүн заманбап клиникаларда практикалык даярдоо",
      "en": "Practical training for medical faculty graduates in modern clinics"
    }
  },
  "/education/postgrad/phd": {
    "badge": {
      "ru": "Докторская степень",
      "kg": "Докторлук даража",
      "en": "Doctoral Degree"
    }
  },
  "/education/postgrad/postgraduate": {
    "badge": {
      "ru": "Научная Подготовка",
      "kg": "Илимий Даярдоо",
      "en": "Scientific Training"
    },
    "subtitle": {
      "ru": "Подготовка научных и педагогических кадров высшей квалификации",
      "kg": "Жогорку квалификациялуу илимий жана педагогикалык кадрларды даярдоо",
      "en": "Training of highly qualified scientific and pedagogical personnel"
    }
  },
  "/education/postgrad/residency": {
    "badge": {
      "ru": "Последипломное образование",
      "kg": "Дипломдон кийинки билим",
      "en": "Postgraduate Education"
    }
  },
  "/science/events": {
    "subtitle": {
      "ru": "Площадка для обмена знаниями и научного сотрудничества",
      "kg": "Билимди алмашуу жана илимий кызматташтык үчүн платформа",
      "en": "Platform for knowledge exchange and scientific collaboration"
    }
  },
  "/science/events/conferences": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific Events"
    },
    "subtitle": {
      "ru": "Международные и национальные конференции, симпозиумы и научные мероприятия университета",
      "kg": "Университеттин эларалык жана улуттук конференциялары, симпозиумдары жана илимий иш-чаралары",
      "en": "International and national conferences, symposiums and scientific events of the university"
    }
  },
  "/science/events/conferences/1": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/10": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/11": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/12": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/13": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/14": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/15": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/16": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/17": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/18": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/19": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/2": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/20": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/21": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/22": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/23": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/3": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/4": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/5": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/6": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/7": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/8": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/events/conferences/9": {
    "badge": {
      "ru": "Научные мероприятия",
      "kg": "Илимий иш-чаралар",
      "en": "Scientific events"
    }
  },
  "/science/labs": {
    "badge": {
      "ru": "Лаборатории и центры",
      "kg": "Лабораториялар жана борборлор",
      "en": "Laboratories and Centers"
    }
  },
  "/science/management": {
    "subtitle": {
      "ru": "Структура научного управления университета",
      "kg": "Илимий жетекчилик жана координация",
      "en": "Scientific management structure of the university"
    }
  },
  "/science/management/bioethics": {
    "badge": {
      "ru": "Этическая экспертиза",
      "kg": "Этикалык экспертиза",
      "en": "Ethical expertise"
    },
    "subtitle": {
      "ru": "Независимая этическая экспертиза научных исследований",
      "kg": "Илимий изилдөөлөрдүн көз карандысыз этикалык экспертиза",
      "en": "Independent ethical review of scientific research"
    }
  },
  "/science/management/department": {
    "badge": {
      "ru": "Отдел науки",
      "kg": "Илим бөлүмү",
      "en": "Science Department"
    }
  },
  "/science/management/scientific-technical-council": {
    "badge": {
      "ru": "Координация научной деятельности",
      "kg": "Илимий иш-аракетти координациялоо",
      "en": "Scientific Activity Coordination"
    },
    "subtitle": {
      "ru": "Постоянно действующий совещательный орган Университета",
      "kg": "Университеттин туруктуу кеңешме органы",
      "en": "Постоянно действующий совещательный орган Университета"
    }
  },
  "/science/management/young-scientists": {
    "badge": {
      "ru": "Совет молодых ученых",
      "kg": "Жаш окумуштуулар кеңеши",
      "en": "Young Scientists Council"
    },
    "subtitle": {
      "ru": "Развитие научного потенциала молодых исследователей",
      "kg": "Жаш изилдөөчүлөрдүн илимий потенциалын өнүктүрүү",
      "en": "Development of scientific potential of young researchers"
    }
  },
  "/science/publications": {
    "subtitle": {
      "ru": "Научный журнал и периодические издания",
      "kg": "Научный журнал и периодические издания",
      "en": "Научный журнал и периодические издания"
    }
  },
  "/science/publications/journal": {
    "badge": {
      "ru": "Научно-теоретический журнал",
      "kg": "Илимий-теориялык журнал",
      "en": "Scientific-theoretical journal"
    },
    "subtitle": {
      "ru": "Периодическое научное издание Салымбеков Университета",
      "kg": "Медицина, биология жана педагогика тармагындагы илимий изилдөөлөрдүн басылышы",
      "en": "Scientific publication of Salymbekov University"
    }
  },
  "/services": {
    "subtitle": {
      "ru": "Основные направления образовательной деятельности Салымбеков Университета",
      "kg": "Салымбеков Университетинин билим берүү ишмердүүлүгүнүн негизги багыттары",
      "en": "Main areas of educational activity at Salymbekov University"
    }
  },
  "/university/councils/academic-council": {
    "badge": {
      "ru": "Учёный совет",
      "kg": "Окумуштуулар кеңеши",
      "en": "Academic Council"
    }
  },
  "/university/councils/admissions-committee": {
    "badge": {
      "ru": "Приемная комиссия",
      "kg": "Кабыл алоо комиссиясы",
      "en": "Admission Committee"
    }
  },
  "/university/councils/bioethics-committee": {
    "badge": {
      "ru": "Биоэтический комитет",
      "kg": "Биоэтикалык комитет",
      "en": "Bioethics Committee"
    },
    "subtitle": {
      "ru": "Обеспечение этических стандартов в медицинских исследованиях и клинической практике",
      "kg": "Медициналык изилдөөлөрдө жана клиникалык практикада этикалык стандарттарды камсыздоо",
      "en": "Ensuring ethical standards in medical research and clinical practice"
    }
  },
  "/university/councils/commission-support": {
    "badge": {
      "ru": "Поддержка студентов",
      "kg": "Студенттерди колдоо",
      "en": "Student Support"
    }
  },
  "/university/councils/council-scients": {
    "badge": {
      "ru": "Молодые ученые",
      "kg": "Жаш илимпоздор",
      "en": "Young Scientists"
    }
  },
  "/university/councils/editorial-board": {
    "badge": {
      "ru": "Редакционный совет",
      "kg": "Редакциялык кеңеш",
      "en": "Editorial Council"
    }
  },
  "/university/councils/educational-council": {
    "badge": {
      "ru": "Совет по качеству",
      "kg": "Сапат кеңеши",
      "en": "Quality Council"
    }
  },
  "/university/councils/employers-council": {
    "badge": {
      "ru": "Совет работодателей",
      "kg": "Жумуш берүүчүлөр кеңеши",
      "en": "Employers Council"
    },
    "subtitle": {
      "ru": "Партнерство университета и бизнеса для подготовки конкурентоспособных специалистов",
      "kg": "Байкалыштуу адистерди даярдоо үчүн университет менен бизнестин өнөктөштүгү",
      "en": "University and business partnership for training competitive specialists"
    }
  },
  "/university/councils/parents-council": {
    "badge": {
      "ru": "Совет родителей",
      "kg": "Ата-энелер кеңеши",
      "en": "Parents Council"
    }
  },
  "/university/councils/scientific-council": {
    "badge": {
      "ru": "Научное сообщество",
      "kg": "Илимий коом",
      "en": "Scientific Community"
    },
    "subtitle": {
      "ru": "Совет экспертов, определяющий научно-техническую политику и стратегию развития",
      "kg": "Илимий-техникалык саясатты жана өнүгүү стратегиясын аныктоочу эксперттер кеңеши",
      "en": "Council of experts defining scientific and technical policy and development strategy"
    }
  },
  "/university/councils/student-councils": {
    "badge": {
      "ru": "Студенческий совет",
      "kg": "Студенттик кеңеш",
      "en": "Student Council"
    }
  },
  "/university/councils/technical-council": {
    "badge": {
      "ru": "Методический совет",
      "kg": "Методикалык кеңеш",
      "en": "Methodological Council"
    }
  },
  "/university/management/public-councils": {
    "subtitle": {
      "ru": "Советы и коллегиальные органы Салымбеков Университета",
      "kg": "Салымбеков Университетинин кеңештери жана коллегиалдык органдары",
      "en": "Councils and collegial bodies of Salymbekov University"
    }
  },
  "/university/management/rectorate": {
    "badge": {
      "ru": "Руководство университета",
      "kg": "Университетдин жетекчилиги",
      "en": "University Leadership"
    }
  },
  "/university/mission": {
    "subtitle": {
      "ru": "Миссия, стратегические цели и задачи",
      "kg": "Миссия, стратегиялык максаттар жана милдеттер",
      "en": "Mission, strategic goals and objectives"
    }
  },
  "/university/normative-docs/internal-acts": {
    "badge": {
      "ru": "Внутренние акты",
      "kg": "Ички акттар",
      "en": "Internal Acts"
    }
  },
  "/university/normative-docs/kr-acts": {
    "badge": {
      "ru": "Нормативные документы",
      "kg": "Нормативдик документтер",
      "en": "Regulatory Documents"
    }
  },
  "/university/normative-docs/licenses": {
    "subtitle": {
      "ru": "Официальные регистрационные и разрешительные документы Университета",
      "kg": "Университеттин расмий каттоо жана уруксат берүүчү документтери",
      "en": "Official registration and authorisation documents of the University"
    }
  },
  "/university/normative-docs/logo": {
    "subtitle": {
      "ru": "Официальные правила визуального стиля Салымбеков Университета",
      "kg": "Салымбеков Университетинин визуалдык стилин колдонуу боюнча расмий эрежелер",
      "en": "Official Salymbekov University visual identity guidelines"
    }
  },
  "/university/quality-management-system/quality-monitoring": {
    "subtitle": {
      "ru": "Внутренний мониторинг и оценка качества образования",
      "kg": "Билим берүүнүн сапатын ички мониторингдөө жана баалоо",
      "en": "Internal monitoring and assessment of education quality"
    }
  },
  "/university/quality-management-system/quality-policy": {
    "badge": {
      "ru": "Система качества",
      "kg": "Сапат системасы",
      "en": "Quality System"
    }
  },
  "/university/structure/international-faculty": {
    "badge": {
      "ru": "Международный факультет",
      "kg": "Эл аралык факультет",
      "en": "International Faculty"
    },
    "subtitle": {
      "ru": "Международное медицинское образование мирового уровня",
      "kg": "Дүйнөлүк деңгээлдеги эл аралык медициналык билим берүү",
      "en": "World-class international medical education"
    }
  },
  "/vacancies": {
    "subtitle": {
      "ru": "Карьера в Салымбеков Университете",
      "kg": "Салымбеков Университетиндеги карьера",
      "en": "Careers at Salymbekov University"
    }
  }
};

export default LEGACY_HEROES;
