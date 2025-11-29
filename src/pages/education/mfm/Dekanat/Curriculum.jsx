import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaBook,
  FaCalendarAlt,
  FaDownload,
  FaGraduationCap,
  FaClock,
  FaUserGraduate,
  FaChartLine,
  FaStethoscope,
  FaArrowRight,
  FaChevronDown
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CurriculumPage = () => {
  const { t } = useTranslation();
  const [expandedYears, setExpandedYears] = useState({});

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      // Убираем все теги <strong> и просто возвращаем текст
      const cleanLine = line.replace(/<strong>|<\/strong>/g, '');
      
      // Проверяем, была ли строка выделена жирным шрифтом
      const wasBold = line.includes('<strong>');
      
      if (wasBold) {
        return (
          <p key={index} className="mb-4 leading-relaxed">
            <span className="text-xl text-[#023E8A] font-semibold">{cleanLine}</span>
          </p>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed text-lg text-gray-700">
          {cleanLine}
        </p>
      );
    });
  };

  // Статистика учебной программы
  const stats = [
  ];

  // Годы обучения
  const years = [1, 2, 3, 4, 5];

  // Кнопки учебных планов
  const curriculumButtons = [
    {
      href: "https://salymbekov.com/wp-content/uploads/2023/10/uchebnyj-plan-5-let-jeksperimentalnyj.pdf",
      label: t('curriculum.buttons.experimental5Year'),
      icon: <FaDownload />
    },
    {
      href: "https://salymbekov.com/wp-content/uploads/2023/10/uchebnyj-plan-5-let-na-2021-2022-uch.god.pdf",
      label: t('curriculum.buttons.fiveYear2021'),
      icon: <FaDownload />
    },
    {
      href: "https://salymbekov.com/wp-content/uploads/2023/10/uchebnyj-plan-5-let-na-2023-2024-uch.god.pdf",
      label: t('curriculum.buttons.fiveYear2023'),
      icon: <FaDownload />
    },
    {
      href: "https://salymbekov.com/wp-content/uploads/2023/10/uchebnyj-plan-6-let-na-2021-2022-uch.god.pdf",
      label: t('curriculum.buttons.sixYear'),
      icon: <FaDownload />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.03, 0.1, 0.03],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaBook className="text-xl" />
            <span className="font-semibold">{t('curriculum.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('curriculum.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('curriculum.subtitle')}
          </p>
        </motion.div>

        {/* Учебные годы с аккордеоном */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="grid gap-6">
            {years.map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                        {year}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {t(`curriculum.year${year}.title`)}
                      </h2>
                    </div>
                    <motion.button
                      onClick={() => toggleYear(year)}
                      className="flex items-center gap-2 text-[#023E8A] font-semibold hover:bg-blue-50 px-4 py-2 rounded-xl transition-colors duration-300"
                    >
                      {expandedYears[year] ? t('curriculum.showLess') : t('curriculum.showMore')}
                      <motion.div
                        animate={{ rotate: expandedYears[year] ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-sm" />
                      </motion.div>
                    </motion.button>
                  </div>
                  
                  <div className="text-gray-600">
                    {expandedYears[year] ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4"
                      >
                        {formatTextWithBold(t(`curriculum.year${year}.description`))}
                      </motion.div>
                    ) : (
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {t(`curriculum.year${year}.description`).split('\n')[0].replace(/<strong>|<\/strong>/g, '')}
                      </p>
                    )}
                  </div>

                  {/* Дополнительная информация для развернутого состояния */}
                  {expandedYears[year] && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center gap-3 text-gray-600">
                          <FaClock className="text-[#023E8A]" />
                          <span>{t('curriculum.details.credits')}: 60 ECTS</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <FaBook className="text-[#023E8A]" />
                          <span>{t('curriculum.details.courses')}: 10-12</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <FaStethoscope className="text-[#023E8A]" />
                          <span>{t('curriculum.details.practice')}: {year >= 3 ? 'Да' : 'Нет'}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <FaUserGraduate className="text-[#023E8A]" />
                          <span>{t('curriculum.details.level')}: {year <= 2 ? 'Бакалавр' : 'Магистр'}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Кнопки учебных планов */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('curriculum.downloads.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('curriculum.downloads.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculumButtons.map((button, index) => (
              <motion.a
                key={index}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="flex items-center justify-center gap-3 text-[#023E8A] mb-3">
                  {button.icon}
                  <h3 className="text-xl font-bold">{button.label}</h3>
                </div>
                <div className="text-gray-600 text-sm">
                  {t('curriculum.downloads.format')} • {t('curriculum.downloads.size')}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('curriculum.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('curriculum.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#downloads"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('curriculum.cta.downloadAll')}
              <FaDownload />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('curriculum.cta.contactAdvisor')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CurriculumPage;