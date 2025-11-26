import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaChild,
  FaGraduationCap,
  FaCalculator,
  FaBrain,
  FaPalette,
  FaUsers,
  FaBook,
  FaClock,
  FaMoneyBillWave,
  FaStar,
  FaRocket,
  FaHeart,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Smartik = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("about");

  // Статистика программы
  const stats = [
    { number: "5-7", label: t('smartik.stats.age'), icon: <FaChild className="text-[#023E8A]" /> },
    { number: "3", label: t('smartik.stats.months'), icon: <FaClock className="text-[#023E8A]" /> },
    { number: "5", label: t('smartik.stats.directions'), icon: <FaBook className="text-[#023E8A]" /> },
    { number: "4000", label: t('smartik.stats.price'), icon: <FaMoneyBillWave className="text-[#023E8A]" /> }
  ];

  // Направления "Пять в одном"
  const directions = [
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('smartik.directions.school.title'),
      description: t('smartik.directions.school.description'),
      color: "bg-[#023E8A]",
      features: t('smartik.directions.school.features', { returnObjects: true })
    },
    {
      icon: <FaCalculator className="text-white" size={24} />,
      title: t('smartik.directions.arithmetic.title'),
      description: t('smartik.directions.arithmetic.description'),
      color: "bg-[#0077B6]",
      features: t('smartik.directions.arithmetic.features', { returnObjects: true })
    },
    {
      icon: <FaBrain className="text-white" size={24} />,
      title: t('smartik.directions.logic.title'),
      description: t('smartik.directions.logic.description'),
      color: "bg-[#0096C7]",
      features: t('smartik.directions.logic.features', { returnObjects: true })
    },
    {
      icon: <FaPalette className="text-white" size={24} />,
      title: t('smartik.directions.art.title'),
      description: t('smartik.directions.art.description'),
      color: "bg-[#00B4D8]",
      features: t('smartik.directions.art.features', { returnObjects: true })
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('smartik.directions.parents.title'),
      description: t('smartik.directions.parents.description'),
      color: "bg-[#48CAE4]",
      features: t('smartik.directions.parents.features', { returnObjects: true })
    }
  ];

  // Преимущества
  const advantages = [
    {
      icon: <FaRocket className="text-[#023E8A]" size={20} />,
      text: t('smartik.advantages.methods')
    },
    {
      icon: <FaHeart className="text-[#023E8A]" size={20} />,
      text: t('smartik.advantages.gaming')
    },
    {
      icon: <FaUsers className="text-[#023E8A]" size={20} />,
      text: t('smartik.advantages.groups')
    },
    {
      icon: <FaStar className="text-[#023E8A]" size={20} />,
      text: t('smartik.advantages.professional')
    }
  ];

  // Результаты после 10 занятий
  const results = [
    t('smartik.results.reading'),
    t('smartik.results.counting'),
    t('smartik.results.writing'),
    t('smartik.results.communication'),
    t('smartik.results.creativity')
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaChild className="text-xl" />
            <span className="font-semibold">{t('smartik.badge')}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('smartik.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('smartik.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Основной контент */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* О программе */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {t('smartik.about.title')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('smartik.about.description1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('smartik.about.description2')}
                </p>
              </div>

              {/* Миссия */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-6 md:p-8 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaHeart className="text-xl" />
                  <h3 className="text-xl md:text-2xl font-bold">{t('smartik.mission.title')}</h3>
                </div>
                <p className="leading-relaxed opacity-90">
                  {t('smartik.mission.description')}
                </p>
              </motion.div>
            </motion.div>

            {/* Формат обучения */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {t('smartik.format.title')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaClock className="text-[#023E8A] flex-shrink-0" />
                  <span>{t('smartik.format.duration')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaUsers className="text-[#023E8A] flex-shrink-0" />
                  <span>{t('smartik.format.age')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaBook className="text-[#023E8A] flex-shrink-0" />
                  <span>{t('smartik.format.schedule')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaMoneyBillWave className="text-[#023E8A] flex-shrink-0" />
                  <span className="font-semibold text-[#023E8A]">{t('smartik.format.price')}</span>
                </div>
              </div>

              {/* Экономия */}
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-green-800 text-sm md:text-base">
                  {t('smartik.format.savings')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Направления "Пять в одном" */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('smartik.directions.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('smartik.directions.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {directions.map((direction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 ${direction.color} rounded-2xl flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {direction.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                  {direction.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
                  {direction.description}
                </p>
                <div className="space-y-1">
                 
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Результаты после 10 занятий */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {t('smartik.results.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('smartik.results.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-[#023E8A] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{result}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Преимущества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('smartik.advantages.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  {advantage.icon}
                  <h3 className="text-lg font-bold text-gray-800">{t('smartik.advantages.title')}</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{advantage.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {t('smartik.cta.title')}
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            {t('smartik.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('smartik.cta.enroll')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('smartik.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Smartik;