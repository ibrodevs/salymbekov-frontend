import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaUsers,
  FaGraduationCap,
  FaGlobe,
  FaBrain,
  FaChartLine,
  FaAward,
  FaBook,
  FaClock,
  FaMoneyBillWave,
  FaStar,
  FaRocket,
  FaHeart,
  FaArrowRight,
  FaCheckCircle,
  FaUserFriends,
  FaLightbulb
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const YoungLeaders = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("about");

  // Статистика программы
  const stats = [
  ];

  // Направления "Три в одном"
  const directions = [
    {
      icon: <FaGlobe className="text-white" size={24} />,
      title: t('youngLeaders.directions.english.title'),
      description: t('youngLeaders.directions.english.description'),
      color: "bg-[#023E8A]",
      features: t('youngLeaders.directions.english.features', { returnObjects: true })
    },
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('youngLeaders.directions.motivation.title'),
      description: t('youngLeaders.directions.motivation.description'),
      color: "bg-[#0077B6]",
      features: t('youngLeaders.directions.motivation.features', { returnObjects: true })
    },
    {
      icon: <FaBrain className="text-white" size={24} />,
      title: t('youngLeaders.directions.arithmetic.title'),
      description: t('youngLeaders.directions.arithmetic.description'),
      color: "bg-[#0096C7]",
      features: t('youngLeaders.directions.arithmetic.features', { returnObjects: true })
    }
  ];

  // Преимущества программы
  const advantages = [
    {
      icon: <FaChartLine className="text-[#023E8A]" size={20} />,
      title: t('youngLeaders.advantages.academic.title'),
      description: t('youngLeaders.advantages.academic.description')
    },
    {
      icon: <FaUserFriends className="text-[#023E8A]" size={20} />,
      title: t('youngLeaders.advantages.social.title'),
      description: t('youngLeaders.advantages.social.description')
    },
    {
      icon: <FaHeart className="text-[#023E8A]" size={20} />,
      title: t('youngLeaders.advantages.family.title'),
      description: t('youngLeaders.advantages.family.description')
    },
    {
      icon: <FaAward className="text-[#023E8A]" size={20} />,
      title: t('youngLeaders.advantages.confidence.title'),
      description: t('youngLeaders.advantages.confidence.description')
    }
  ];

  // Результаты выпускников
  const results = [
    {
      number: "100%",
      title: t('youngLeaders.results.university.title'),
      description: t('youngLeaders.results.university.description')
    },
    {
      number: "20+",
      title: t('youngLeaders.results.projects.title'),
      description: t('youngLeaders.results.projects.description')
    },
    {
      number: "7",
      title: t('youngLeaders.results.generations.title'),
      description: t('youngLeaders.results.generations.description')
    }
  ];

  // Тренеры и преподаватели
  const trainers = [
    t('youngLeaders.trainers.experts'),
    t('youngLeaders.trainers.professionals'),
    t('youngLeaders.trainers.motivators'),
    t('youngLeaders.trainers.mentors')
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
            <FaUsers className="text-xl" />
            <span className="font-semibold">{t('youngLeaders.badge')}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('youngLeaders.title')}
          </h1>
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-lg md:text-xl font-bold mb-4">
           
          </div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('youngLeaders.subtitle')}
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
                  {t('youngLeaders.about.title')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('youngLeaders.about.description1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('youngLeaders.about.description2')}
                </p>
              </div>

              {/* Платформа развития */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-6 md:p-8 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaLightbulb className="text-xl" />
                  <h3 className="text-xl md:text-2xl font-bold">{t('youngLeaders.platform.title')}</h3>
                </div>
                <p className="leading-relaxed opacity-90">
                  {t('youngLeaders.platform.description')}
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
                {t('youngLeaders.format.title')}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaClock className="text-[#023E8A] flex-shrink-0" />
                  <span>{t('youngLeaders.format.duration')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaGraduationCap className="text-[#023E8A] flex-shrink-0" />
                  <span>{t('youngLeaders.format.grades')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaBook className="text-[#023E8A] flex-shrink-0" />
                  <span>{t('youngLeaders.format.schedule')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <FaMoneyBillWave className="text-[#023E8A] flex-shrink-0" />
                  <span className="font-semibold text-[#023E8A]">{t('youngLeaders.format.price')}</span>
                </div>
              </div>

              {/* Экономия */}
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-green-800 text-sm md:text-base">
                  <strong>{t('youngLeaders.format.savings.title')}</strong> {t('youngLeaders.format.savings.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Направления "Три в одном" */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('youngLeaders.directions.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('youngLeaders.directions.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
                  {direction.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" size={12} />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Преимущества программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('youngLeaders.advantages.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('youngLeaders.advantages.subtitle')}
            </p>
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
                  <h3 className="text-lg font-bold text-gray-800">{advantage.title}</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Результаты выпускников */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {t('youngLeaders.results.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('youngLeaders.results.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                    {result.number}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{result.title}</h4>
                  <p className="text-gray-600 text-sm">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Тренеры */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-6 md:p-8 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                {t('youngLeaders.trainers.title')}
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                {t('youngLeaders.trainers.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {trainers.map((trainer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                >
                  <FaStar className="text-yellow-300 flex-shrink-0" />
                  <span className="text-sm md:text-base">{trainer}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

       
      </div>
    </div>
  );
};

export default YoungLeaders;