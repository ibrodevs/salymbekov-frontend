import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaCogs,
  FaTasks,
  FaSitemap,
  FaBullseye,
  FaFileAlt,
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaDownload
} from "react-icons/fa";

const MethodologicalCouncilPage = () => {
  const { t, i18n } = useTranslation();

  // Debug: log current language and tasks
  React.useEffect(() => {
    const tasksArray = t('science.management.scientificCouncil.tasks');
    console.log('[TechnicalCouncil] Current language:', i18n.language);
    console.log('[TechnicalCouncil] Tasks type:', typeof tasksArray);
    console.log('[TechnicalCouncil] Is array?', Array.isArray(tasksArray));
    if (Array.isArray(tasksArray) && tasksArray.length > 0) {
      console.log('[TechnicalCouncil] First task:', tasksArray[0].substring(0, 50));
    }
  }, [i18n.language, t]);

  // Статистика
  const stats = [
  ];

  // Задачи совета - пересчитываются при смене языка
  const tasks = React.useMemo(() => {
    const tasksArray = t('science.management.scientificCouncil.tasks');
    return Array.isArray(tasksArray) ? tasksArray : [];
  }, [i18n.language, t]);

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

      <div className="relative z-10">
        {/* Герой секция  */}
        <section className="relative py-20 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
            >
              <FaCogs className="text-xl" />
              <span className="font-semibold">{t('science.management.scientificCouncil.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {t('science.management.scientificCouncil.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#023E8A] to-[#0077B6] mx-auto rounded-full"></div>
          </motion.div>
        </section>

        {/* Основной контент */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          {/* Статистика */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Общие положения */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
                  <FaFileAlt className="text-white text-lg" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {t('science.management.scientificCouncil.generalTitle')}
                </h2>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#023E8A]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('science.management.scientificCouncil.generalText')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#0077B6]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('science.management.scientificCouncil.goalsTitle')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#0096C7]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('science.management.scientificCouncil.goalsText')}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Структура и взаимодействие */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
                  <FaSitemap className="text-white text-lg" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {t('science.management.scientificCouncil.compositionTitle')}
                </h2>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-4 bg-blue-50 rounded-xl border-l-4 border-[#023E8A]"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('science.management.scientificCouncil.compositionTitle')}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Цели и задачи */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center">
                  <FaBullseye className="text-white text-lg" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {t('science.management.scientificCouncil.downloadTitle')}
                </h2>
              </div>

              {/* Основная цель */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">
                    {t('science.management.scientificCouncil.downloadTitle')}
                  </h3>
                  <p className="text-lg leading-relaxed">
                    {t('science.management.scientificCouncil.downloadDesc')}
                  </p>
                </div>
              </motion.div>

              {/* Основные задачи */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-lg flex items-center justify-center">
                    <FaLightbulb className="text-white text-sm" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {t('science.management.scientificCouncil.tasksTitle')}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {tasks.map((task, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-gray-700 leading-relaxed">
                          {task}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Ссылка на положение */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('science.management.scientificCouncil.downloadTitle')}
              </h3>
              <p className="text-lg mb-6 opacity-90">
                {t('science.management.scientificCouncil.downloadDesc')}
              </p>
              <motion.a
                href="https://salymbekov.com/wp-content/uploads/2022/05/polozhenie-ob-ums.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaDownload className="mr-3" />
                {t('science.management.scientificCouncil.downloadBtn')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MethodologicalCouncilPage;