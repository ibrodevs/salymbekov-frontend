// OlderLeaders.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaUsers,
  FaGraduationCap,
  FaChartLine,
  FaBuilding,
  FaBullseye,
  FaRocket,
  FaAward,
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaStar,
  FaLightbulb,
  FaHeart,
  FaGlobe,
  FaBriefcase
} from "react-icons/fa";

const OlderLeaders = () => {
  const { t } = useTranslation();

  const programDirections = [
    {
      icon: <FaBullseye className="text-white" size={24} />,
      title: t('olderLeaders.directions.motivation.title'),
      description: t('olderLeaders.directions.motivation.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('olderLeaders.directions.lectures.title'),
      description: t('olderLeaders.directions.lectures.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaBuilding className="text-white" size={24} />,
      title: t('olderLeaders.directions.meetings.title'),
      description: t('olderLeaders.directions.meetings.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaGlobe className="text-white" size={24} />,
      title: t('olderLeaders.directions.english.title'),
      description: t('olderLeaders.directions.english.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const programStats = [
  ];

  const advantages = [
    {
      icon: <FaMoneyBillWave className="text-white" size={20} />,
      title: t('olderLeaders.advantages.affordable.title'),
      description: t('olderLeaders.advantages.affordable.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaChartLine className="text-white" size={20} />,
      title: t('olderLeaders.advantages.proven.title'),
      description: t('olderLeaders.advantages.proven.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaBriefcase className="text-white" size={20} />,
      title: t('olderLeaders.advantages.practical.title'),
      description: t('olderLeaders.advantages.practical.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaLightbulb className="text-white" size={20} />,
      title: t('olderLeaders.advantages.unique.title'),
      description: t('olderLeaders.advantages.unique.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const successStories = [
    {
      title: t('olderLeaders.success.adaptation.title'),
      description: t('olderLeaders.success.adaptation.description'),
      icon: <FaHeart className="text-[#0077B6]" />
    },
    {
      title: t('olderLeaders.success.competitive.title'),
      description: t('olderLeaders.success.competitive.description'),
      icon: <FaStar className="text-[#0077B6]" />
    },
    {
      title: t('olderLeaders.success.projects.title'),
      description: t('olderLeaders.success.projects.description'),
      icon: <FaRocket className="text-[#0077B6]" />
    },
    {
      title: t('olderLeaders.success.career.title'),
      description: t('olderLeaders.success.career.description'),
      icon: <FaAward className="text-[#0077B6]" />
    }
  ];

  const programFeatures = [
    {
      number: "9",
      label: t('olderLeaders.features.batches'),
      description: t('olderLeaders.features.batchesDesc')
    },
    {
      number: "5",
      label: t('olderLeaders.features.daysWeek'),
      description: t('olderLeaders.features.daysWeekDesc')
    },
    {
      number: "2-3",
      label: t('olderLeaders.features.hoursDay'),
      description: t('olderLeaders.features.hoursDayDesc')
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
            <FaAward className="text-xl" />
            <span className="font-semibold">{t('olderLeaders.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('olderLeaders.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('olderLeaders.subtitle')}
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
                {t('olderLeaders.about.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('olderLeaders.about.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('olderLeaders.about.description1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('olderLeaders.about.description2')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('olderLeaders.about.description3')}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">4 000</div>
                  <div className="text-lg opacity-90 mb-3">{t('olderLeaders.about.priceNote')}</div>
                  <p className="text-sm opacity-80">
                    {t('olderLeaders.about.priceComparison')}
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {programFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-blue-50 rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-[#023E8A] mb-1">
                        {feature.number}
                      </div>
                      <div className="text-xs text-gray-600 font-medium mb-1">
                        {feature.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {feature.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
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
              {t('olderLeaders.directions.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('olderLeaders.directions.subtitle')}
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
                <p className="text-gray-600 leading-relaxed text-sm">
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
              {t('olderLeaders.advantages.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('olderLeaders.advantages.subtitle')}
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

        {/* Успехи выпускников */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('olderLeaders.success.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('olderLeaders.success.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    {story.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

       
      </div>
    </div>
  );
};

export default OlderLeaders;