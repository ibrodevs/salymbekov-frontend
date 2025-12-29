// PhD.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaGraduationCap,
  FaFlask,
  FaBook,
  FaUserGraduate,
  FaChartLine,
  FaUniversity,
  FaAward,
  FaArrowRight,
  FaCalendarAlt,
  FaMicroscope,
  FaSearch,
  FaBriefcase
} from "react-icons/fa";

const PhD = () => {
  const { t } = useTranslation();

  const programFeatures = [
    {
      icon: <FaFlask className="text-white" size={24} />,
      title: t('phd.features.research.title'),
      description: t('phd.features.research.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaBook className="text-white" size={24} />,
      title: t('phd.features.curriculum.title'),
      description: t('phd.features.curriculum.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaUserGraduate className="text-white" size={24} />,
      title: t('phd.features.dissertation.title'),
      description: t('phd.features.dissertation.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaBriefcase className="text-white" size={24} />,
      title: t('phd.features.career.title'),
      description: t('phd.features.career.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const programStats = [
  ];

  const researchAreas = [
    {
      title: t('phd.research.biomedical.title'),
      description: t('phd.research.biomedical.description'),
      icon: <FaMicroscope className="text-[#0077B6]" />
    },
    {
      title: t('phd.research.clinical.title'),
      description: t('phd.research.clinical.description'),
      icon: <FaFlask className="text-[#0077B6]" />
    },
    {
      title: t('phd.research.publicHealth.title'),
      description: t('phd.research.publicHealth.description'),
      icon: <FaChartLine className="text-[#0077B6]" />
    },
    {
      title: t('phd.research.medicalEducation.title'),
      description: t('phd.research.medicalEducation.description'),
      icon: <FaUniversity className="text-[#0077B6]" />
    }
  ];

  const careerPaths = [
    {
      title: t('phd.career.researcher.title'),
      description: t('phd.career.researcher.description'),
      icon: <FaFlask className="text-white" size={20} />
    },
    {
      title: t('phd.career.professor.title'),
      description: t('phd.career.professor.description'),
      icon: <FaUniversity className="text-white" size={20} />
    },
    {
      title: t('phd.career.pharma.title'),
      description: t('phd.career.pharma.description'),
      icon: <FaBriefcase className="text-white" size={20} />
    },
    {
      title: t('phd.career.consultant.title'),
      description: t('phd.career.consultant.description'),
      icon: <FaUserGraduate className="text-white" size={20} />
    }
  ];

  const programStructure = [
    {
      phase: t('phd.structure.year1.title'),
      description: t('phd.structure.year1.description')
    },
    {
      phase: t('phd.structure.year2.title'),
      description: t('phd.structure.year2.description')
    },
    {
      phase: t('phd.structure.year3.title'),
      description: t('phd.structure.year3.description')
    }
  ];

  const admissionRequirements = [
    {
      requirement: t('phd.admission.masters.title'),
      description: t('phd.admission.masters.description')
    },
    {
      requirement: t('phd.admission.researchProposal.title'),
      description: t('phd.admission.researchProposal.description')
    },
    {
      requirement: t('phd.admission.interview.title'),
      description: t('phd.admission.interview.description')
    },
    {
      requirement: t('phd.admission.publications.title'),
      description: t('phd.admission.publications.description')
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
            <FaGraduationCap className="text-xl" />
            <span className="font-semibold">{t('phd.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('phd.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('phd.subtitle')}
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
                {t('phd.about.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('phd.about.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('phd.about.description1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('phd.about.description2')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('phd.about.description3')}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  {t('phd.about.researchFocus')}
                </h3>
                <p className="text-lg leading-relaxed opacity-90">
                  {t('phd.about.researchDescription')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Особенности программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('phd.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('phd.features.subtitle')}
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
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Направления исследований */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('phd.research.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('phd.research.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Структура программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('phd.structure.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('phd.structure.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programStructure.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl font-bold text-[#023E8A] mb-3">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {phase.phase}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Карьерные возможности */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('phd.career.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('phd.career.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl p-6 text-white relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  {path.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 relative z-10">
                  {path.title}
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed opacity-90 relative z-10">
                  {path.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Требования к поступлению */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t('phd.admission.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('phd.admission.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {admissionRequirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-blue-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0077B6] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {requirement.requirement}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {requirement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      
      </div>
    </div>
  );
};

export default PhD;