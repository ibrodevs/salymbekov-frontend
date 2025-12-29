import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGraduationCap,
  FaUsers,
  FaGlobe,
  FaAward,
  FaRocket,
  FaHeart,
  FaChartLine,
  FaLightbulb,
  FaBook,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaChevronDown,
  FaLanguage,
  FaChild,
  FaUserGraduate,
  FaStar
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Статистика бизнес-школы
  const stats = [
  ];

  // Направления обучения
  const programs = [
    {
      icon: <FaChild className="text-white" size={24} />,
      title: t('aboutBusinessSchool.programs.preschool.title'),
      description: t('aboutBusinessSchool.programs.preschool.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('aboutBusinessSchool.programs.school.title'),
      description: t('aboutBusinessSchool.programs.school.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('aboutBusinessSchool.programs.youth.title'),
      description: t('aboutBusinessSchool.programs.youth.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaLanguage className="text-white" size={24} />,
      title: t('aboutBusinessSchool.programs.languages.title'),
      description: t('aboutBusinessSchool.programs.languages.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Успехи выпускников
  const successAreas = [
    { area: t('aboutBusinessSchool.success.entrepreneurship'), icon: <FaChartLine /> },
    { area: t('aboutBusinessSchool.success.production'), icon: <FaRocket /> },
    { area: t('aboutBusinessSchool.success.creativity'), icon: <FaLightbulb /> },
    { area: t('aboutBusinessSchool.success.science'), icon: <FaGraduationCap /> },
    { area: t('aboutBusinessSchool.success.showbusiness'), icon: <FaStar /> }
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
            <FaUniversity className="text-xl" />
            <span className="font-semibold">{t('aboutBusinessSchool.badge')}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('aboutBusinessSchool.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('aboutBusinessSchool.subtitle')}
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
            {/* Основатель */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t('aboutBusinessSchool.founder.title')}
              </h2>
              <div className="aspect-w-16 aspect-h-12 mb-4">
                <img 
                  src="https://salymbekov.com/wp-content/uploads/2021/03/bc0b5813.jpg"
                  alt="Аскар Салымбеков с выпускниками"
                  className="w-full h-48 md:h-64 object-cover rounded-2xl"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t('aboutBusinessSchool.founder.description')}
              </p>
            </motion.div>

            {/* О бизнес-школе */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  {t('aboutBusinessSchool.school.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('aboutBusinessSchool.school.description1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('aboutBusinessSchool.school.description2')}
                </p>
              </div>

              {/* Миссия */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-6 md:p-8 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaHeart className="text-xl" />
                  <h3 className="text-xl md:text-2xl font-bold">{t('aboutBusinessSchool.mission.title')}</h3>
                </div>
                <p className="leading-relaxed opacity-90">
                  {t('aboutBusinessSchool.mission.description')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Направления обучения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('aboutBusinessSchool.programs.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('aboutBusinessSchool.programs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 ${program.color} rounded-2xl flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {program.description}
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
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {t('aboutBusinessSchool.success.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('aboutBusinessSchool.success.description')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {successAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-3 md:p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="text-[#023E8A] mb-2">
                    {area.icon}
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-700">
                    {area.area}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

       
      </div>
    </div>
  );
};

export default About;