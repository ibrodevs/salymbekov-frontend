// SixYears.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaChild,
  FaGraduationCap,
  FaBook,
  FaUsers,
  FaHeart,
  FaChartLine,
  FaRocket,
  FaArrowRight,
  FaCalendarAlt,
  FaUserGraduate,
  FaLightbulb,
  FaHandsHelping
} from "react-icons/fa";

const SixYears = () => {
  const { t } = useTranslation();

  const programFeatures = [
    {
      icon: <FaChild className="text-white" size={24} />,
      title: t('education.mfm.programs.6age.features.earlyDevelopment.title'),
      description: t('education.mfm.programs.6age.features.earlyDevelopment.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaBook className="text-white" size={24} />,
      title: t('education.mfm.programs.6age.features.comprehensiveLearning.title'),
      description: t('education.mfm.programs.6age.features.comprehensiveLearning.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('education.mfm.programs.6age.features.socialSkills.title'),
      description: t('education.mfm.programs.6age.features.socialSkills.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHeart className="text-white" size={24} />,
      title: t('education.mfm.programs.6age.features.healthCare.title'),
      description: t('education.mfm.programs.6age.features.healthCare.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const curriculumSections = [
    {
      title: t('education.mfm.programs.6age.curriculum.academic.title'),
      items: t('education.mfm.programs.6age.curriculum.academic.items', { returnObjects: true }),
      icon: <FaGraduationCap className="text-[#023E8A]" />
    },
    {
      title: t('education.mfm.programs.6age.curriculum.creative.title'),
      items: t('education.mfm.programs.6age.curriculum.creative.items', { returnObjects: true }),
      icon: <FaLightbulb className="text-[#0077B6]" />
    },
    {
      title: t('education.mfm.programs.6age.curriculum.physical.title'),
      items: t('education.mfm.programs.6age.curriculum.physical.items', { returnObjects: true }),
      icon: <FaHeart className="text-[#0096C7]" />
    }
  ];

  const stats = [
  ];

  const admissionSteps = [
    {
      step: "01",
      title: t('education.mfm.programs.6age.admission.consultation.title'),
      description: t('education.mfm.programs.6age.admission.consultation.description')
    },
    {
      step: "02",
      title: t('education.mfm.programs.6age.admission.assessment.title'),
      description: t('education.mfm.programs.6age.admission.assessment.description')
    },
    {
      step: "03",
      title: t('education.mfm.programs.6age.admission.enrollment.title'),
      description: t('education.mfm.programs.6age.admission.enrollment.description')
    },
    {
      step: "04",
      title: t('education.mfm.programs.6age.admission.orientation.title'),
      description: t('education.mfm.programs.6age.admission.orientation.description')
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
            <FaChild className="text-xl" />
            <span className="font-semibold">{t('education.mfm.programs.6age.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('education.mfm.programs.6age.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('education.mfm.programs.6age.subtitle')}
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

        {/* Особенности программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('education.mfm.programs.6age.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('education.mfm.programs.6age.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programFeatures.map((feature, index) => (
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
        </motion.div>

        {/* Учебный план */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('education.mfm.programs.6age.curriculum.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('education.mfm.programs.6age.curriculum.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {curriculumSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {section.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-gray-600">
                        <div className="w-2 h-2 bg-[#0077B6] rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Процесс поступления */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('education.mfm.programs.6age.admission.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('education.mfm.programs.6age.admission.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group relative"
              >
                <div className="text-4xl font-bold text-gray-200 absolute top-4 right-4 group-hover:text-[#0077B6] transition-colors duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 pr-12">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('education.mfm.programs.6age.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('education.mfm.programs.6age.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('education.mfm.programs.6age.cta.applyNow')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('education.mfm.programs.6age.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SixYears;