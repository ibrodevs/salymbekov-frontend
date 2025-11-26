// Departments.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaHistory,
  FaGraduationCap,
  FaBook,
  FaCogs,
  FaFlask,
  FaStethoscope,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaArrowRight
} from "react-icons/fa";

const DepartmentsPage = () => {
  const { t } = useTranslation();

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-6 leading-relaxed">
            <strong className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
              {line.replace(/<strong>|<\/strong>/g, '')}
            </strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-6 leading-relaxed text-lg text-gray-700">
          {line}
        </p>
      );
    });
  };

  const departmentSections = [
    {
      id: "history",
      icon: <FaHistory className="text-white" size={24} />,
      title: t('departments.sections.history'),
      content: t('departments.history'),
      color: "bg-[#023E8A]"
    },
    {
      id: "education",
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('departments.sections.education'),
      content: t('departments.educationalActivity'),
      color: "bg-[#0077B6]"
    },
    {
      id: "disciplines",
      icon: <FaBook className="text-white" size={24} />,
      title: t('departments.sections.disciplines'),
      content: t('departments.disciplines'),
      color: "bg-[#0096C7]"
    },
    {
      id: "methodology",
      icon: <FaCogs className="text-white" size={24} />,
      title: t('departments.sections.methodology'),
      content: t('departments.methodologicalWork'),
      color: "bg-[#00B4D8]"
    },
    {
      id: "morpho",
      icon: <FaFlask className="text-white" size={24} />,
      title: t('departments.sections.morpho'),
      content: t('departments.morphoPhysiological'),
      color: "bg-[#023E8A]"
    },
    {
      id: "clinical",
      icon: <FaStethoscope className="text-white" size={24} />,
      title: t('departments.sections.clinical'),
      content: t('departments.clinicalDepartment'),
      color: "bg-[#0077B6]"
    }
  ];

  const stats = [
    { number: "50+", label: t('departments.stats.years'), icon: <FaHistory className="text-[#023E8A]" /> },
    { number: "1000+", label: t('departments.stats.students'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "50+", label: t('departments.stats.professors'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "20+", label: t('departments.stats.programs'), icon: <FaLightbulb className="text-[#023E8A]" /> }
  ];

  const features = [
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('departments.features.innovation.title'),
      description: t('departments.features.innovation.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaChartLine className="text-white" size={24} />,
      title: t('departments.features.research.title'),
      description: t('departments.features.research.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('departments.features.community.title'),
      description: t('departments.features.community.description'),
      color: "bg-[#0096C7]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            <span className="font-semibold">{t('departments.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('departments.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('departments.subtitle')}
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

        {/* Основные разделы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid gap-8">
            {departmentSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${section.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {section.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="text-gray-700">
                    {formatTextWithBold(section.content)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Особенности кафедры */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('departments.whyChoose')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('departments.whyChooseDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
            {t('departments.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('departments.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('departments.cta.learnMore')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('departments.cta.contact')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DepartmentsPage;