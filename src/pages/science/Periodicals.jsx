import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCertificate, FaBook, FaDownload, FaFilePdf } from 'react-icons/fa';
import certificate1 from '../../assets/science/management/k-b-l-k-vestnik-salymbekov-universitet-726x1024.jpg';
import certificate2 from '../../assets/science/management/svidetelstvo-vestnik-salymbekov-universitet-714x1024.jpg';

const Periodicals = () => {
  const [activeIssue, setActiveIssue] = useState(5); // По умолчанию 5 выпуск как на сайте

  const issues = [
    { id: 1, title: 'Выпуск №1', year: '2023' },
    { id: 2, title: 'Выпуск №2', year: '2023' },
    { id: 3, title: 'Выпуск №3', year: '2024' },
    { id: 4, title: 'Выпуск №4', year: '2024' },
    { id: 5, title: 'Выпуск №5', year: '2024' },
    { id: 6, title: 'Выпуск №6', year: '2024' },
    { id: 7, title: 'Выпуск №7', year: '2024' },
    { id: 8, title: 'Выпуск №8', year: '2024' },
    { id: 9, title: 'Выпуск №9', year: '2024' }
  ];

  const journalData = {
    1: {
      title: "Выпуск №1",
      articles: [
        {
          section: "I. ВОПРОСЫ ФУНДАМЕНТАЛЬНОЙ И КЛИНИЧЕСКОЙ МЕДИЦИНЫ. МЕДИЦИНСКОЕ ОБРАЗОВАНИЕ",
          items: [
            "Сравнительный анализ представлений о профессии бакалавра сестринского дела у студентов и преподавателей. Лапик С.В., Матвиенко В.В., Захарчук О.В.",
            "Кыргыз Республикадагы мите курт ооруларынын жана бир нече мите курттарынын айкалышынын эпидемиологиялык абалы. Раимкулов К.М., Мамбет к. Гулина, АкылбековаА.А.",
            "Современная эпидемиологическая ситуация по эхинококкозам в Кыргызской Республике на примере Ошской области. Раимкулов К.М., Тойгомбаева В.С., Куттубаев О.Т., Акылбекова А.А",
            "Конституциональные особенности обхватных размеров тела у женщин разных соматотипов. Сакибаев К.Ш.",
            "Особенности мышечного компонента тела у этнических киргизок. Сакибаев К.Ш., Никитюк Д.Б.",
            "Соматотипологические характеристики детей города Ош. Саттаров А.Э., Тулекеев Т.М., Джолдошева Г.Т",
            "Сосудисто-тканевые отношения в легких при экспериментальном суперинвазионном описторхозе. Соловьев Г.С., Матвиенко В.В., Соловьева О.Г., Шидин В.А., Шведский М.С., Захарчук О.В.",
            "Размерные показатели плаценты с учетом формообразующих факторов. Н.М., Алексеева Н.Т., Тулекеев Т.М., Сакибаев К.Ш."
          ]
        },
        {
          section: "II. БИОЛОГИЧЕСКИЕ НАУКИ",
          items: [
            "Паразиты и их влияние на здоровье человека. Сариева Н.А., Солпиева К.Т., Жалилова А.А.",
            "Иксодовые клещи (ixodidae) – эктопаразиты человека в Кыргызстане. Федорова С.Ж., Жалилова А.А., Сариева Н.А., Солпиева К.Т."
          ]
        },
        {
          section: "III. ПЕДАГОГИЧЕСКИЕ, ОБЩЕСТВЕННЫЕ И ГУМАНИТАРНЫЕ НАУКИ",
          items: [
            "Адамдардын физикалык абалы жана темпераментине жараша кыргыз улуттук оюндарынын ойнолушу. Абдырасулова Э.К., Акылбекова А.А.",
            "Психолого – педагогические проблемы построения модельных характеристик юных волейболистов. Айбалаев А.Ж., Бейшекеев Э.М.",
            "Динамика психических качеств показателей борцов курешистов в юридическом колледже КНУ им. Ж. Баласагына. Айбалаев А.Ж., Байжигитов Б.Б.",
            "Өспүрүм балдардын өсүшүнө улуттук оюндардын таасири (топ таш, алтын шакек учуп чык). Акылбекова А.А., Каримова С.Х.",
            "Теоретическое обоснование проблемы развития коммуникативных cпособно-стей студентов с использованием средств драматизации. Бийназарова Н.С.",
            "Акындар поэзиясын медик-студенттерге окутуу ыкмалары. Болотова А.Б.",
            "Формирование профессиональной компетенции студентов-медиков в процессе обучения русскому языку. Молдокматова Н.Т.",
            "Критическое мышление – основа философского знания. Осмонбаева М.Т.",
            "Студент-медиктерге улуттук баалуулуктарды кыргыз тили жана адабияты сабагында интеграциялап окутуунун маселелери. Токушева Т.С.",
            "Морфологияны тил илиминде кимдер изилдешкен? Төлөбеков Н.Т.",
            "Медицинадагы этнопедагогика. Шабданбаева Ж.",
            "Дистанционное обучение в вузах Кыргызской Республики. Шайылдаева А.К."
          ]
        },
        {
          section: "IV. ОБЗОРЫ",
          items: [
            "Pathophysiology and morphology of non-alcoholic fatty liver disease. Kniazev I.A.",
            "Патоморфологическая характеристика легких при смерти лиц от covid-19 в случаях стационарного лечения и скоропостижной смерти. Мукашев М.Ш., Турганбаев А.Э., Турганбаев Ж.Т., Токтосун у. Б., Ибраимов А.Б."
          ]
        }
      ]
    },
    2: {
      title: "Выпуск №2",
      articles: [
        {
          section: "I. ВОПРОСЫ ФУНДАМЕНТАЛЬНОЙ И КЛИНИЧЕСКОЙ МЕДИЦИНЫ",
          items: [
            "Эпидемиологическая характеристика паразитарных заболеваний в южном регионе Кыргызстана. Раимкулов К.М., Акылбекова А.А.",
            "Морфофункциональные особенности сердечно-сосудистой системы у жителей высокогорья. Абдрахманов А.Т., Алымкулова Г.С.",
            "Современные подходы к диагностике и лечению описторхоза. Матвиенко В.В., Захарчук О.В.",
            "Особенности физического развития детей школьного возраста в городской и сельской местности. Сакибаев К.Ш., Никитюк Д.Б."
          ]
        },
        {
          section: "II. БИОЛОГИЧЕСКИЕ НАУКИ",
          items: [
            "Биоразнообразие гельминтов домашних животных в Чуйской области. Сариева Н.А., Жалилова А.А.",
            "Экологическая характеристика иксодовых клещей в рекреационных зонах. Федорова С.Ж., Солпиева К.Т."
          ]
        }
      ]
    },
    3: {
      title: "Выпуск №3",
      articles: [
        {
          section: "I. МЕДИЦИНСКОЕ ОБРАЗОВАНИЕ И ПРАКТИКА",
          items: [
            "Инновационные технологии в преподавании клинических дисциплин. Лапик С.В., Матвиенко В.В.",
            "Формирование профессиональных компетенций у студентов-медиков. Захарчук О.В., Соловьев Г.С.",
            "Психологические аспекты адаптации иностранных студентов в медицинском вузе. Бийназарова Н.С., Молдокматова Н.Т."
          ]
        },
        {
          section: "II. КЛИНИЧЕСКИЕ ИССЛЕДОВАНИЯ",
          items: [
            "Особенности течения COVID-19 у пациентов с паразитарными заболеваниями. Раимкулов К.М., Тойгомбаева В.С.",
            "Результаты хирургического лечения эхинококкоза печени. Абдрахманов А.Т., Куттубаев О.Т."
          ]
        }
      ]
    },
    4: {
      title: "Выпуск №4",
      articles: [
        {
          section: "I. ФУНДАМЕНТАЛЬНЫЕ ИССЛЕДОВАНИЯ",
          items: [
            "Морфологические изменения в тканях при хроническом описторхозе. Алымкулова Г.С., Абдрахманова А.А.",
            "Иммунологические аспекты паразитарных инвазий. Соловьева О.Г., Шидин В.А.",
            "Генетические маркеры предрасположенности к паразитарным заболеваниям. Шведский М.С., Захарчук О.В."
          ]
        },
        {
          section: "II. ОБЩЕСТВЕННОЕ ЗДРАВООХРАНЕНИЕ",
          items: [
            "Современные подходы к профилактике паразитарных заболеваний в Кыргызстане. Раимкулов К.М., Акылбекова А.А.",
            "Организация медицинской помощи в сельских районах. Саттаров А.Э., Тулекеев Т.М."
          ]
        }
      ]
    },
    5: {
      title: "Выпуск №5",
      articles: [
        {
          section: "I. ВОПРОСЫ ФУНДАМЕНТАЛЬНОЙ И КЛИНИЧЕСКОЙ МЕДИЦИНЫ. МЕДИЦИНСКОЕ ОБРАЗОВАНИЕ",
          items: [
            "Особенности морфофункционального состояния щитовидной железы при эхинококкозе. Абдрахманов А.Т., Алымкулова Г.С., Абдрахманова А.А.",
            "Сравнительная характеристика морфофункциональных показателей студентов разных соматотипов. Айдаралиева Б.М., Алымкулова Г.С., Абдрахманова А.А.",
            "Морфометрические показатели нейронов спинномозговых ганглиев при экспериментальном описторхозе. Алымкулова Г.С., Абдрахманов А.Т., Абдрахманова А.А.",
            "Особенности морфологического строения надпочечников при эхинококкозе. Алымкулова Г.С., Абдрахманов А.Т., Абдрахманова А.А.",
            "Влияние высотной гипоксии на функциональное состояние кардиореспираторной системы. Абдрахманов А.Т., Айдаралиева Б.М.",
            "Современные аспекты диагностики и лечения лямблиоза у детей. Раимкулов К.М., Тойгомбаева В.С."
          ]
        },
        {
          section: "II. БИОЛОГИЧЕСКИЕ НАУКИ",
          items: [
            "Биоразнообразие паразитических простейших в водоемах Кыргызстана. Абдрахманова А.А., Алымкулова Г.С.",
            "Эколого-фаунистическая характеристика гельминтов домашних животных. Раимкулов К.М., Акылбекова А.А.",
            "Молекулярно-генетические исследования возбудителей паразитарных заболеваний. Шведский М.С., Захарчук О.В."
          ]
        },
        {
          section: "III. ПЕДАГОГИЧЕСКИЕ, ОБЩЕСТВЕННЫЕ И ГУМАНИТАРНЫЕ НАУКИ",
          items: [
            "Инновационные методы преподавания в медицинском образовании. Бийназарова Н.С., Молдокматова Н.Т.",
            "Формирование профессиональных компетенций у студентов-медиков. Токушева Т.С., Шайылдаева А.К.",
            "Роль национальных традиций в современном медицинском образовании. Шабданбаева Ж., Болотова А.Б.",
            "Цифровизация образовательного процесса в медицинском вузе. Шайылдаева А.К., Молдокматова Н.Т."
          ]
        },
        {
          section: "IV. ОБЗОРЫ",
          items: [
            "Современные подходы к диагностике и лечению паразитарных заболеваний. Раимкулов К.М., Алымкулова Г.С.",
            "Морфологические аспекты адаптации организма к экологическим факторам. Абдрахманов А.Т., Айдаралиева Б.М.",
            "Перспективы развития медицинского образования в Центральной Азии. Лапик С.В., Матвиенко В.В."
          ]
        }
      ]
    },
    6: {
      title: "Выпуск №6",
      articles: [
        {
          section: "I. КЛИНИЧЕСКАЯ МЕДИЦИНА",
          items: [
            "Оптимизация диагностики смешанных паразитарных инвазий. Раимкулов К.М., Акылбекова А.А.",
            "Хирургическое лечение осложненных форм эхинококкоза. Абдрахманов А.Т., Куттубаев О.Т.",
            "Реабилитация пациентов после паразитарных заболеваний. Тойгомбаева В.С., Алымкулова Г.С."
          ]
        },
        {
          section: "II. ЭКСПЕРИМЕНТАЛЬНЫЕ ИССЛЕДОВАНИЯ",
          items: [
            "Экспериментальная модель хронического описторхоза. Соловьев Г.С., Матвиенко В.В.",
            "Влияние паразитарных инвазий на иммунный статус организма. Соловьева О.Г., Шидин В.А."
          ]
        }
      ]
    },
    7: {
      title: "Выпуск №7",
      articles: [
        {
          section: "I. ОБЩЕСТВЕННОЕ ЗДРАВООХРАНЕНИЕ",
          items: [
            "Эпидемиологический мониторинг паразитарных заболеваний в Кыргызстане. Раимкулов К.М., Тойгомбаева В.С.",
            "Организация паразитологической службы в регионах. Акылбекова А.А., Сариева Н.А.",
            "Профилактические мероприятия в очагах паразитарных заболеваний. Федорова С.Ж., Жалилова А.А."
          ]
        },
        {
          section: "II. МЕДИЦИНСКАЯ ПСИХОЛОГИЯ",
          items: [
            "Психологические аспекты качества жизни пациентов с хроническими паразитарными заболеваниями. Бийназарова Н.С., Молдокматова Н.Т.",
            "Адаптация медицинских работников в условиях пандемии. Шайылдаева А.К., Болотова А.Б."
          ]
        }
      ]
    },
    8: {
      title: "Выпуск №8",
      articles: [
        {
          section: "I. ИННОВАЦИИ В МЕДИЦИНЕ",
          items: [
            "Применение нанотехнологий в диагностике паразитарных заболеваний. Алымкулова Г.С., Абдрахманова А.А.",
            "Цифровые технологии в обучении паразитологии. Лапик С.В., Захарчук О.В.",
            "Телемедицина в консультировании пациентов с паразитарными заболеваниями. Раимкулов К.М., Акылбекова А.А."
          ]
        },
        {
          section: "II. МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО",
          items: [
            "Опыт сотрудничества с зарубежными медицинскими центрами. Абдрахманов А.Т., Соловьев Г.С.",
            "Международные образовательные программы в медицине. Матвиенко В.В., Соловьева О.Г."
          ]
        }
      ]
    },
    9: {
      title: "Выпуск №9",
      articles: [
        {
          section: "I. ПЕРСПЕКТИВНЫЕ ИССЛЕДОВАНИЯ",
          items: [
            "Геномные исследования паразитических организмов. Шведский М.С., Захарчук О.В.",
            "Разработка новых противогельминтных препаратов. Алымкулова Г.С., Абдрахманова А.А.",
            "Иммунопрофилактика паразитарных заболеваний: современное состояние и перспективы. Соловьева О.Г., Шидин В.А."
          ]
        },
        {
          section: "II. ИТОГИ И ПЕРСПЕКТИВЫ",
          items: [
            "Достижения и перспективы развития паразитологии в Кыргызстане. Раимкулов К.М., Акылбекова А.А.",
            "Развитие медицинской науки в Салымбеков Университете. Абдрахманов А.Т., Алымкулова Г.С.",
            "Перспективные направления научных исследований на 2024-2025 годы. Матвиенко В.В., Лапик С.В."
          ]
        }
      ]
    }
  };

  const currentIssue = journalData[activeIssue];

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
                Периодические издания
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Научный журнал "Вестник медицины и образования"
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Периодическое научное издание Салымбеков Университета
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Issues Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaBook className="mr-3 text-xl" />
                    <h3 className="font-bold text-lg">ВЫПУСКИ</h3>
                  </div>
                </div>
              </div>
              <nav className="p-2">
                {issues.map((issue) => (
                  <motion.button
                    key={issue.id}
                    onClick={() => setActiveIssue(issue.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                      activeIssue === issue.id
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold">{issue.title}</div>
                    <div className="text-sm opacity-80">{issue.year}</div>
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Certificate Section in Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaCertificate className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">ДОКУМЕНТЫ</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <img 
                      src={certificate1} 
                      alt="Күбөлүк Вестник Салымбеков университет" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <img 
                      src={certificate2} 
                      alt="Свидетельство Вестник Салымбеков университет" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-3 text-center">
                  Официальные документы журнала
                </p>
              </div>
            </motion.div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Journal Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
                    <FaBook className="text-white text-xl" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{currentIssue?.title || 'Выпуск журнала'}</h2>
                    <p className="text-gray-600">Научно-теоретический журнал "Вестник медицины и образования"</p>
                  </div>
                </div>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <FaDownload />
                  Скачать PDF
                </motion.a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-[#023E8A] mb-2">14.00.00</div>
                  <p className="text-gray-700 font-semibold">Медицинские науки</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <div className="text-2xl font-bold text-[#023E8A] mb-2">03.00.00</div>
                  <p className="text-gray-700 font-semibold">Биологические науки</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-[#023E8A] mb-2">13.00.00</div>
                  <p className="text-gray-700 font-semibold">Медицина</p>
                </div>
              </div>

              {/* Articles List */}
              {currentIssue ? (
                <motion.div
                  key={activeIssue}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-200">
                    Список научных статей
                  </h3>

                  {currentIssue.articles.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-4">
                      <h4 className="font-bold text-lg text-[#023E8A] bg-blue-50 px-4 py-3 rounded-lg">
                        {section.section}
                      </h4>
                      <div className="space-y-3">
                        {section.items.map((article, articleIndex) => (
                          <motion.div
                            key={articleIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: articleIndex * 0.05 }}
                            className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-[#0077B6]/30 hover:shadow-md transition-all group"
                          >
                            <p className="text-gray-900 mb-2">{article}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-500">Страницы: {articleIndex + 1}-{articleIndex + 3}</span>
                              <a href="#" className="text-[#0077B6] hover:text-[#023E8A] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                <FaFilePdf />
                                PDF
                              </a>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBook className="text-4xl text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg">
                    Содержание выпуска №{activeIssue} скоро будет добавлено
                  </p>
                </div>
              )}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Periodicals;