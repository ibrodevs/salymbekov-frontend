// FutureLeaders.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaUsers,
  FaGraduationCap,
  FaBrain,
  FaPalette,
  FaBullseye,
  FaRocket,
  FaChartLine,
  FaAward,
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaStar,
  FaLightbulb,
  FaHeart
} from "react-icons/fa";

const FutureLeaders = () => {
  const { t } = useTranslation();

  const programDirections = [
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('futureLeaders.directions.english.title'),
      description: t('futureLeaders.directions.english.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaBullseye className="text-white" size={24} />,
      title: t('futureLeaders.directions.motivation.title'),
      description: t('futureLeaders.directions.motivation.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaBrain className="text-white" size={24} />,
      title: t('futureLeaders.directions.mentalMath.title'),
      description: t('futureLeaders.directions.mentalMath.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaPalette className="text-white" size={24} />,
      title: t('futureLeaders.directions.creative.title'),
      description: t('futureLeaders.directions.creative.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const programStats = [
  ];

  const advantages = [
    {
      icon: <FaMoneyBillWave className="text-white" size={20} />,
      title: t('futureLeaders.advantages.affordable.title'),
      description: t('futureLeaders.advantages.affordable.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaChartLine className="text-white" size={20} />,
      title: t('futureLeaders.advantages.effective.title'),
      description: t('futureLeaders.advantages.effective.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaHeart className="text-white" size={20} />,
      title: t('futureLeaders.advantages.harmonious.title'),
      description: t('futureLeaders.advantages.harmonious.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaLightbulb className="text-white" size={20} />,
      title: t('futureLeaders.advantages.innovative.title'),
      description: t('futureLeaders.advantages.innovative.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const benefits = [
    {
      title: t('futureLeaders.benefits.independence.title'),
      description: t('futureLeaders.benefits.independence.description'),
      icon: <FaStar className="text-[#0077B6]" />
    },
    {
      title: t('futureLeaders.benefits.responsibility.title'),
      description: t('futureLeaders.benefits.responsibility.description'),
      icon: <FaAward className="text-[#0077B6]" />
    },
    {
      title: t('futureLeaders.benefits.academicPerformance.title'),
      description: t('futureLeaders.benefits.academicPerformance.description'),
      icon: <FaChartLine className="text-[#0077B6]" />
    },
    {
      title: t('futureLeaders.benefits.relationships.title'),
      description: t('futureLeaders.benefits.relationships.description'),
      icon: <FaHeart className="text-[#0077B6]" />
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
            <FaRocket className="text-xl" />
            <span className="font-semibold">{t('futureLeaders.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('futureLeaders.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('futureLeaders.subtitle')}
          </p>
        </motion.div>

        {/* Статистика программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {programStats.map((stat, index) => (
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

        {/* О программе */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('futureLeaders.about.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('futureLeaders.about.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('futureLeaders.about.description1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('futureLeaders.about.description2')}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl p-8 text-white text-center">
                <div className="text-5xl font-bold mb-2">4 000 </div>
                <div className="text-lg opacity-90 mb-4">{t('futureLeaders.about.priceNote')}</div>
                <p className="text-sm opacity-80">
                  {t('futureLeaders.about.priceComparison')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Направления обучения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('futureLeaders.directions.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('futureLeaders.directions.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programDirections.map((direction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${direction.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {direction.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {direction.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {direction.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Преимущества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('futureLeaders.advantages.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('futureLeaders.advantages.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-12 h-12 ${advantage.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Результаты обучения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('futureLeaders.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('futureLeaders.benefits.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('futureLeaders.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('futureLeaders.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('futureLeaders.cta.enroll')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('futureLeaders.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureLeaders;