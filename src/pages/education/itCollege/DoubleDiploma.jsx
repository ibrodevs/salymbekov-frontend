import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGraduationCap,
  FaGlobe,
  FaAward,
  FaUsers,
  FaRocket,
  FaBook,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaUniversity,
  FaLanguage,
  FaHandshake
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const DoubleDiploma = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { number: "2", label: t('doubleDiploma.stats.diplomas'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "10+", label: t('doubleDiploma.stats.universities'), icon: <FaUniversity className="text-[#023E8A]" /> },
    { number: "95%", label: t('doubleDiploma.stats.employment'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "50+", label: t('doubleDiploma.stats.countries'), icon: <FaGlobe className="text-[#023E8A]" /> }
  ];

  const features = [
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('doubleDiploma.features.international.title'),
      description: t('doubleDiploma.features.international.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaLanguage className="text-white" size={24} />,
      title: t('doubleDiploma.features.language.title'),
      description: t('doubleDiploma.features.language.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaGlobe className="text-white" size={24} />,
      title: t('doubleDiploma.features.mobility.title'),
      description: t('doubleDiploma.features.mobility.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHandshake className="text-white" size={24} />,
      title: t('doubleDiploma.features.network.title'),
      description: t('doubleDiploma.features.network.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const programs = [
    {
      university: t('doubleDiploma.programs.program1.university'),
      country: t('doubleDiploma.programs.program1.country'),
      duration: t('doubleDiploma.programs.program1.duration'),
      degree: t('doubleDiploma.programs.program1.degree'),
      features: t('doubleDiploma.programs.program1.features', { returnObjects: true })
    },
    {
      university: t('doubleDiploma.programs.program2.university'),
      country: t('doubleDiploma.programs.program2.country'),
      duration: t('doubleDiploma.programs.program2.duration'),
      degree: t('doubleDiploma.programs.program2.degree'),
      features: t('doubleDiploma.programs.program2.features', { returnObjects: true })
    },
    {
      university: t('doubleDiploma.programs.program3.university'),
      country: t('doubleDiploma.programs.program3.country'),
      duration: t('doubleDiploma.programs.program3.duration'),
      degree: t('doubleDiploma.programs.program3.degree'),
      features: t('doubleDiploma.programs.program3.features', { returnObjects: true })
    }
  ];

  const benefits = [
    {
      title: t('doubleDiploma.benefits.career.title'),
      description: t('doubleDiploma.benefits.career.description'),
      icon: <FaRocket className="text-[#023E8A]" />
    },
    {
      title: t('doubleDiploma.benefits.education.title'),
      description: t('doubleDiploma.benefits.education.description'),
      icon: <FaBook className="text-[#023E8A]" />
    },
    {
      title: t('doubleDiploma.benefits.cultural.title'),
      description: t('doubleDiploma.benefits.cultural.description'),
      icon: <FaGlobe className="text-[#023E8A]" />
    }
  ];

  const tabs = [
    { id: "overview", label: t('doubleDiploma.tabs.overview') },
    { id: "programs", label: t('doubleDiploma.tabs.programs') },
    { id: "admission", label: t('doubleDiploma.tabs.admission') },
    { id: "partners", label: t('doubleDiploma.tabs.partners') }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
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
            <FaGraduationCap className="text-xl" />
            <span className="font-semibold">{t('doubleDiploma.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('doubleDiploma.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('doubleDiploma.subtitle')}
          </p>
        </motion.div>

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

        {/* Табы навигации */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-2 mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Контент табов */}
        <div className="mb-16">
          {/* Обзор */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  {t('doubleDiploma.overview.title')}
                </h2>
                <div className="prose max-w-none text-gray-600 text-lg leading-relaxed space-y-4">
                  {t('doubleDiploma.overview.content').split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Особенности */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {t('doubleDiploma.features.title')}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                    >
                      <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  {t('doubleDiploma.benefits.title')}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        {benefit.icon}
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                      </div>
                      <p className="text-white/90 leading-relaxed">
                        {benefit.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Программы */}
          {activeTab === "programs" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      <div className="lg:w-1/3">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {program.university}
                        </h3>
                        <div className="space-y-2 text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <FaGlobe className="text-[#023E8A]" />
                            <span>{program.country}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaClock className="text-[#023E8A]" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaAward className="text-[#023E8A]" />
                            <span>{program.degree}</span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-2/3">
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                          {t('doubleDiploma.programs.featuresTitle')}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {program.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                              <FaCheckCircle className="text-[#023E8A] text-sm" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Поступление */}
          {activeTab === "admission" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('doubleDiploma.admission.title')}
              </h2>
              <div className="prose max-w-none text-gray-600 text-lg leading-relaxed space-y-4">
                {t('doubleDiploma.admission.content').split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {t('doubleDiploma.admission.requirementsTitle')}
                </h3>
                <ul className="space-y-3">
                  {t('doubleDiploma.admission.requirements', { returnObjects: true }).map((req, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <FaCheckCircle className="text-[#023E8A] flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Партнеры */}
          {activeTab === "partners" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                {t('doubleDiploma.partners.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                {t('doubleDiploma.partners.subtitle')}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <FaUniversity className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {t(`doubleDiploma.partners.university${item}`)}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t(`doubleDiploma.partners.country${item}`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('doubleDiploma.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('doubleDiploma.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('doubleDiploma.cta.applyNow')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('doubleDiploma.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoubleDiploma;