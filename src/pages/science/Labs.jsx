import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, FaFlask, FaMicroscope, FaLaptop, FaUserMd, 
  FaBrain, FaAtom, FaDna, FaHeart, FaBone, FaVial, FaChartLine,
  FaFire, FaTint, FaSeedling, FaDesktop, FaChalkboardTeacher, FaBook
} from 'react-icons/fa';
import photo1 from '../../assets/science/management/bc0b1100-300x200.jpg';
import photo2 from '../../assets/science/management/bc0b1136-300x200.jpg';
import photo3 from '../../assets/science/management/bc0b1248-300x200.jpg';
import photo4 from '../../assets/science/management/bc0b3947-300x200.jpg';
import photo5 from '../../assets/science/management/bc0b3948-300x200.jpg';
import photo6 from '../../assets/science/management/bc0b2371-300x200.jpg';

const Labs = () => {
  const [activeLab, setActiveLab] = useState('simulation');

  const labSections = [
    { 
      id: 'simulation',
      name: "СИМУЛЯЦИОННЫЙ ЦЕНТР", 
      icon: FaUserMd,
    },
    { 
      id: 'anatomy',
      name: "АНАТОМИЧЕСКИЙ ЗАЛ", 
      icon: FaBone 
    },
    { 
      id: 'biochemistry',
      name: "ЛАБОРАТОРИЯ БИОХИМИИ", 
      icon: FaFlask 
    },
    { 
      id: 'chemistry',
      name: "ЛАБОРАТОРИЯ ХИМИИ", 
      icon: FaAtom 
    },
    { 
      id: 'biology',
      name: "ЛАБОРАТОРИЯ БИОЛОГИИ", 
      icon: FaDna 
    },
    { 
      id: 'interactive',
      name: "ИНТЕРАКТИВНЫЙ КЛАСС", 
      icon: FaMicroscope 
    },
    { 
      id: 'computer',
      name: "КОМПЬЮТЕРНЫЕ КЛАССЫ", 
      icon: FaLaptop 
    },
    { 
      id: 'study',
      name: "УЧЕБНЫЕ КЛАССЫ", 
      icon: FaBook 
    }
  ];

  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  const labData = {
    simulation: {
      title: "Симуляционный центр",
      description: "Современное оборудование для практической подготовки будущих медиков",
      icon: FaUserMd,
      content: {
        description: [
          "Классы для практических занятий оснащены наглядными пособиями, макетами частей и органов тела, плакатами для проведения наглядных практических занятий. С помощью симуляционных материалов и препаратов осваиваются коммуникативные навыки, диагностические приемы, алгоритмы действий в непредвиденных ситуациях.",
          "В центре отрабатываются базовые и углубленные навыки и умения в хирургии, акушерстве, гинекологии, урологии и многих других медицинских специальностях, имеющих практическую составляющую, проводится тренинги командного взаимодействия."
        ],
        features: [
          {
            title: "Практические навыки",
            description: "Отработка медицинских манипуляций на современных тренажерах",
            icon: FaUserMd
          },
          {
            title: "Современное оборудование",
            description: "Цифровые микроскопы и диагностические системы",
            icon: FaMicroscope
          },
          {
            title: "Командная работа",
            description: "Тренинги взаимодействия в экстренных ситуациях",
            icon: FaBrain
          }
        ],
        equipment: [
          "Фантомы и манекены для отработки навыков",
          "Симуляторы хирургических вмешательств",
          "Тренажеры сердечно-легочной реанимации",
          "Цифровые системы мониторинга",
          "Интерактивные анатомические столы",
          "Видеосистемы для записи и анализа"
        ],
        hasGallery: true
      }
    },
    anatomy: {
      title: "Анатомический зал",
      description: "Изучение строения человеческого тела на современных анатомических препаратах",
      icon: FaBone,
      content: {
        description: [
          "Анатомический зал оснащен современными учебными препаратами, скелетами, муляжами и наглядными пособиями для детального изучения строения человеческого тела. Здесь студенты получают фундаментальные знания по анатомии, необходимые для дальнейшего изучения клинических дисциплин.",
          "В зале представлены препараты всех систем организма: опорно-двигательной, сердечно-сосудистой, нервной, пищеварительной и других. Особое внимание уделяется топографической анатомии и взаимному расположению органов."
        ],
        features: [
          {
            title: "Анатомические препараты",
            description: "Натуральные и пластинированные препараты органов и систем",
            icon: FaBone
          },
          {
            title: "Интерактивные модели",
            description: "3D-модели и интерактивные анатомические столы",
            icon: FaHeart
          },
          {
            title: "Микроскопия",
            description: "Изучение гистологического строения тканей",
            icon: FaMicroscope
          }
        ],
        equipment: [
          "Полные анатомические скелеты",
          "Препараты отдельных органов и систем",
          "Пластинированные препараты",
          "Интерактивные анатомические столы",
          "3D-модели органов",
          "Микроскопы для гистологии"
        ],
        hasGallery: false
      }
    },
    biochemistry: {
      title: "Лаборатория биохимии",
      description: "Современное оборудование для изучения химических процессов в живых организмах",
      icon: FaFlask,
      content: {
        description: [
          "Современная биохимическая лаборатория оснащена оборудованием для проведения сложных анализов и исследований. Здесь студенты изучают метаболические процессы, структуру и функции биомолекул, а также осваивают методы клинической биохимии.",
          "Лаборатория позволяет проводить исследования в области энзимологии, метаболизма, молекулярной биологии и диагностики заболеваний."
        ],
        features: [
          {
            title: "Аналитические системы",
            description: "Современные анализаторы для точных измерений",
            icon: FaVial
          },
          {
            title: "Исследования",
            description: "Фундаментальные и прикладные научные работы",
            icon: FaChartLine
          },
          {
            title: "Диагностика",
            description: "Методы клинико-биохимической диагностики",
            icon: FaMicroscope
          }
        ],
        equipment: [
          "Спектрофотометры для анализа белков и нуклеиновых кислот",
          "Центрифуги для разделения биологических образцов",
          "pH-метры и иономеры для измерения кислотности",
          "Электрофорезные системы для разделения белков и ДНК",
          "Термостаты и инкубаторы для культивирования",
          "Хроматографы для анализа метаболитов"
        ],
        researchAreas: [
          "Изучение ферментативной активности",
          "Анализ белкового состава тканей",
          "Исследование метаболических путей",
          "Диагностика биохимических показателей крови",
          "Изучение окислительного стресса",
          "Анализ гормонального статуса"
        ],
        hasGallery: false
      }
    },
    chemistry: {
      title: "Лаборатория химии",
      description: "Оснащение для изучения фундаментальных химических процессов и свойств веществ",
      icon: FaAtom,
      content: {
        description: [
          "Современная химическая лаборатория оборудована для проведения экспериментов по неорганической, органической и аналитической химии. Студенты осваивают методы синтеза, анализа и исследования свойств химических соединений.",
          "Лаборатория оснащена системами безопасности, соответствующими международным стандартам, что обеспечивает безопасную работу с химическими реагентами."
        ],
        features: [
          {
            title: "Синтез и анализ",
            description: "Методы получения и исследования веществ",
            icon: FaFlask
          },
          {
            title: "Растворы и реактивы",
            description: "Широкий спектр химических веществ",
            icon: FaTint
          },
          {
            title: "Безопасность",
            description: "Современные системы защиты",
            icon: FaFire
          }
        ],
        equipment: [
          "Аналитические весы высокой точности",
          "Спектрофотометры UV-Vis",
          "pH-метры и кондуктометры",
          "Хроматографические системы",
          "Титровальные установки",
          "Системы для синтеза органических соединений"
        ],
        experiments: [
          "Синтез органических соединений",
          "Анализ качественного состава веществ",
          "Титрование и количественный анализ",
          "Хроматографические методы разделения",
          "Спектрофотометрические исследования",
          "Изучение кинетики химических реакций"
        ],
        safetyFeatures: [
          "Вытяжные шкафы для работы с летучими веществами",
          "Система приточно-вытяжной вентиляции",
          "Средства индивидуальной защиты",
          "Аварийные души и глазные фонтанчики",
          "Пожарная сигнализация и огнетушители",
          "Система утилизации химических отходов"
        ],
        hasGallery: false
      }
    },
    biology: {
      title: "Лаборатория биологии",
      description: "Исследование живых организмов и биологических процессов",
      icon: FaDna,
      content: {
        description: [
          "Биологическая лаборатория оснащена современным оборудованием для изучения клеточных и молекулярных процессов. Студенты проводят эксперименты в области генетики, микробиологии, цитологии и физиологии.",
          "Лаборатория позволяет изучать разнообразие живых организмов, их строение, функции и взаимодействие с окружающей средой."
        ],
        features: [
          {
            title: "Микробиология",
            description: "Изучение микроорганизмов и их свойств",
            icon: FaMicroscope
          },
          {
            title: "Генетика",
            description: "Исследование наследственности и изменчивости",
            icon: FaDna
          },
          {
            title: "Экология",
            description: "Изучение взаимодействия организмов и среды",
            icon: FaSeedling
          }
        ],
        equipment: [
          "Современные микроскопы с цифровой камерой",
          "Ламинарные боксы для стерильной работы",
          "Термостаты и CO2-инкубаторы",
          "Центрифуги для разделения клеток",
          "Электрофорезные камеры для ДНК/РНК",
          "ПЦР-амплификаторы"
        ],
        researchAreas: [
          "Клеточная биология и цитология",
          "Молекулярная генетика",
          "Микробиология и иммунология",
          "Физиология растений и животных",
          "Экология и охрана природы",
          "Биотехнология и биоинженерия"
        ],
        hasGallery: false
      }
    },
    interactive: {
      title: "Интерактивный класс",
      description: "Современные технологии для интерактивного обучения и визуализации",
      icon: FaMicroscope,
      content: {
        description: [
          "Интерактивный класс оснащен передовыми технологиями для визуализации сложных биологических и медицинских процессов. Студенты могут изучать анатомию, физиологию и патологические процессы в 3D-формате.",
          "Класс оборудован сенсорными панелями, проекционными системами и специализированным программным обеспечением для создания immersive-среды обучения."
        ],
        features: [
          {
            title: "3D-визуализация",
            description: "Интерактивные 3D-модели органов и систем",
            icon: FaDesktop
          },
          {
            title: "Виртуальная реальность",
            description: "Иммерсивное обучение в VR-среде",
            icon: FaBrain
          },
          {
            title: "Интерактивные доски",
            description: "Совместная работа над проектами",
            icon: FaChalkboardTeacher
          }
        ],
        equipment: [
          "Интерактивные сенсорные панели 85\"",
          "VR-шлемы и контроллеры",
          "3D-проекционные системы",
          "Специализированное ПО для анатомии",
          "Системы видеоконференцсвязи",
          "Документ-камеры высокого разрешения"
        ],
        capabilities: [
          "Виртуальные анатомические вскрытия",
          "3D-визуализация физиологических процессов",
          "Интерактивные медицинские сценарии",
          "Удаленные лекции и семинары",
          "Коллаборативная работа над проектами",
          "Тестирование и оценка знаний в реальном времени"
        ],
        hasGallery: false
      }
    },
    computer: {
      title: "Компьютерные классы",
      description: "Современные компьютерные системы для научных исследований и анализа данных",
      icon: FaLaptop,
      content: {
        description: [
          "Компьютерные классы оснащены современными рабочими станциями для проведения статистического анализа, биоинформатических исследований и моделирования биологических процессов.",
          "Студенты осваивают специализированное программное обеспечение для обработки экспериментальных данных, молекулярного моделирования и научной визуализации."
        ],
        features: [
          {
            title: "Научные вычисления",
            description: "Обработка и анализ экспериментальных данных",
            icon: FaChartLine
          },
          {
            title: "Биоинформатика",
            description: "Анализ геномных и протеомных данных",
            icon: FaDna
          },
          {
            title: "Моделирование",
            description: "Компьютерное моделирование биологических процессов",
            icon: FaAtom
          }
        ],
        equipment: [
          "Мощные рабочие станции с многоядерными процессорами",
          "Высокопроизводительные видеокарты для расчетов",
          "Большие мониторы 4K для работы с данными",
          "Системы хранения данных с RAID-массивами",
          "Серверы для распределенных вычислений",
          "Резервные системы питания"
        ],
        software: [
          "Пакеты статистического анализа (R, SPSS, GraphPad)",
          "Биоинформатические платформы (Galaxy, CLC Genomics)",
          "Программы для молекулярного моделирования",
          "Системы управления базами данных",
          "Среды для научного программирования",
          "Программы для научной визуализации"
        ],
        hasGallery: false
      }
    },
    study: {
      title: "Учебные классы",
      description: "Комфортные условия для теоретического обучения и самостоятельной работы",
      icon: FaBook,
      content: {
        description: [
          "Учебные классы оборудованы современной мебелью и техническими средствами для эффективного теоретического обучения. Пространство организовано с учетом эргономических требований и создания комфортной образовательной среды.",
          "Классы предназначены для лекций, семинаров, групповых обсуждений и самостоятельной работы студентов."
        ],
        features: [
          {
            title: "Эргономика",
            description: "Комфортная мебель и оптимальное освещение",
            icon: FaUserMd
          },
          {
            title: "Технологии",
            description: "Современные средства презентации и связи",
            icon: FaDesktop
          },
          {
            title: "Гибкость",
            description: "Модульная организация пространства",
            icon: FaChalkboardTeacher
          }
        ],
        equipment: [
          "Эргономичные студенческие парты и стулья",
          "Мультимедийные проекторы и экраны",
          "Интерактивные доски и флипчарты",
          "Системы озвучивания и микрофоны",
          "Системы видеоконференцсвязи",
          "Зоны для самостоятельной работы"
        ],
        amenities: [
          "Оптимальное естественное и искусственное освещение",
          "Системы климат-контроля и вентиляции",
          "Доступ к Wi-Fi и электронным ресурсам",
          "Зарядные станции для устройств",
          "Организованные системы хранения",
          "Доступная среда для маломобильных студентов"
        ],
        hasGallery: false
      }
    }
  };

  const currentLab = labData[activeLab];
  const IconComponent = currentLab.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/science"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Назад к науке
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                Лаборатории и центры
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {currentLab.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {currentLab.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaFlask className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">ЛАБОРАТОРИИ</h3>
                </div>
              </div>
              <nav className="p-2">
                {labSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => setActiveLab(section.id)}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          activeLab === section.id
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium">{section.name}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <motion.div
              key={activeLab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
                  <IconComponent className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{currentLab.title}</h2>
              </div>

              {/* Description */}
              <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                {currentLab.content.description.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentLab.content.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mx-auto mb-4">
                        <FeatureIcon className="text-white text-xl" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-700 text-sm">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Equipment Section */}
              {currentLab.content.equipment && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaFlask className="mr-3 text-[#023E8A]" />
                    Основное оборудование
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <ul className="space-y-3">
                      {currentLab.content.equipment.slice(0, Math.ceil(currentLab.content.equipment.length / 2)).map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    <ul className="space-y-3">
                      {currentLab.content.equipment.slice(Math.ceil(currentLab.content.equipment.length / 2)).map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Additional Sections */}
              {currentLab.content.researchAreas && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaChartLine className="mr-3 text-[#023E8A]" />
                    Направления исследований
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {currentLab.content.researchAreas.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center p-3 bg-white/50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span>{area}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Experiments Section */}
              {currentLab.content.experiments && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaFlask className="mr-3 text-[#023E8A]" />
                    Основные эксперименты
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentLab.content.experiments.map((experiment, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center p-3 bg-white/70 rounded-lg border border-gray-200"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{experiment}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Safety Features */}
              {currentLab.content.safetyFeatures && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaFire className="mr-3 text-[#023E8A]" />
                    Системы безопасности
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {currentLab.content.safetyFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Capabilities Section */}
              {currentLab.content.capabilities && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaDesktop className="mr-3 text-[#023E8A]" />
                    Возможности класса
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {currentLab.content.capabilities.map((capability, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center p-3 bg-white/50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span>{capability}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Software Section */}
              {currentLab.content.software && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaLaptop className="mr-3 text-[#023E8A]" />
                    Программное обеспечение
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {currentLab.content.software.map((software, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                        {software}
                      </motion.li>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Amenities Section */}
              {currentLab.content.amenities && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaUserMd className="mr-3 text-[#023E8A]" />
                    Условия и оснащение
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {currentLab.content.amenities.map((amenity, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-[#023E8A] rounded-full mr-3"></div>
                        {amenity}
                      </motion.li>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Photo Gallery - Only for Simulation Center */}
              {currentLab.content.hasGallery && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaFlask className="mr-3 text-[#023E8A]" />
                    Фотогалерея центра
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {photos.map((photo, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative overflow-hidden rounded-2xl shadow-lg group"
                      >
                        <img 
                          src={photo} 
                          alt={`${currentLab.title} ${index + 1}`} 
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Labs;