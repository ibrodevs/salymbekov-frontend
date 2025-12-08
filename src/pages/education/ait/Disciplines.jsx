import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaGraduationCap,
  FaLaptopCode,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaBook,
  FaUsers,
  FaStar,
  FaClock
} from "react-icons/fa";

const InstituteDisciplinesPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedDiscipline, setExpandedDiscipline] = useState(null);

  const filters = [
    { id: "all", label: t('disciplines.filters.all'), count: 12 },
    { id: "programming", label: t('disciplines.filters.programming'), count: 5 },
    { id: "design", label: t('disciplines.filters.design'), count: 3 },
    { id: "business", label: t('disciplines.filters.business'), count: 2 },
    { id: "ai", label: t('disciplines.filters.ai'), count: 2 }
  ];

  const disciplines = [
    {
      id: 1,
      title: t('disciplines.items.frontend.title'),
      category: "programming",
      icon: <FaCode className="text-3xl" />,
      duration: t('disciplines.items.frontend.duration'),
      level: t('disciplines.items.frontend.level'),
      students: "250+",
      rating: "4.9",
      description: t('disciplines.items.frontend.description'),
      topics: t('disciplines.items.frontend.topics', { returnObjects: true }),
      skills: t('disciplines.items.frontend.skills', { returnObjects: true }),
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-500"
    },
    {
      id: 2,
      title: t('disciplines.items.uiux.title'),
      category: "design",
      icon: <FaPaintBrush className="text-3xl" />,
      duration: t('disciplines.items.uiux.duration'),
      level: t('disciplines.items.uiux.level'),
      students: "180+",
      rating: "4.8",
      description: t('disciplines.items.uiux.description'),
      topics: t('disciplines.items.uiux.topics', { returnObjects: true }),
      skills: t('disciplines.items.uiux.skills', { returnObjects: true }),
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-500"
    },
    {
      id: 3,
      title: t('disciplines.items.dataScience.title'),
      category: "ai",
      icon: <FaChartLine className="text-3xl" />,
      duration: t('disciplines.items.dataScience.duration'),
      level: t('disciplines.items.dataScience.level'),
      students: "120+",
      rating: "4.9",
      description: t('disciplines.items.dataScience.description'),
      topics: t('disciplines.items.dataScience.topics', { returnObjects: true }),
      skills: t('disciplines.items.dataScience.skills', { returnObjects: true }),
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-500"
    },
    {
      id: 4,
      title: t('disciplines.items.mobileDev.title'),
      category: "programming",
      icon: <FaMobile className="text-3xl" />,
      duration: t('disciplines.items.mobileDev.duration'),
      level: t('disciplines.items.mobileDev.level'),
      students: "200+",
      rating: "4.7",
      description: t('disciplines.items.mobileDev.description'),
      topics: t('disciplines.items.mobileDev.topics', { returnObjects: true }),
      skills: t('disciplines.items.mobileDev.skills', { returnObjects: true }),
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-500"
    },
    {
      id: 5,
      title: t('disciplines.items.backend.title'),
      category: "programming",
      icon: <FaDatabase className="text-3xl" />,
      duration: t('disciplines.items.backend.duration'),
      level: t('disciplines.items.backend.level'),
      students: "220+",
      rating: "4.8",
      description: t('disciplines.items.backend.description'),
      topics: t('disciplines.items.backend.topics', { returnObjects: true }),
      skills: t('disciplines.items.backend.skills', { returnObjects: true }),
      color: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-500"
    },
    {
      id: 6,
      title: t('disciplines.items.cloud.title'),
      category: "programming",
      icon: <FaCloud className="text-3xl" />,
      duration: t('disciplines.items.cloud.duration'),
      level: t('disciplines.items.cloud.level'),
      students: "150+",
      rating: "4.9",
      description: t('disciplines.items.cloud.description'),
      topics: t('disciplines.items.cloud.topics', { returnObjects: true }),
      skills: t('disciplines.items.cloud.skills', { returnObjects: true }),
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-500"
    }
  ];

  const stats = [
  ];

  const features = [
    {
      icon: <FaLaptopCode className="text-white" size={24} />,
      title: t('disciplines.features.practical.title'),
      description: t('disciplines.features.practical.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('disciplines.features.mentors.title'),
      description: t('disciplines.features.mentors.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaChartLine className="text-white" size={24} />,
      title: t('disciplines.features.career.title'),
      description: t('disciplines.features.career.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaShieldAlt className="text-white" size={24} />,
      title: t('disciplines.features.support.title'),
      description: t('disciplines.features.support.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const filteredDisciplines = disciplines.filter(discipline => {
    const matchesFilter = activeFilter === "all" || discipline.category === activeFilter;
    const matchesSearch = discipline.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discipline.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleDisciplineExpansion = (disciplineId) => {
    setExpandedDiscipline(expandedDiscipline === disciplineId ? null : disciplineId);
  };

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
            <strong className="font-bold text-[#023E8A]">
              {line.replace(/<strong>|<\/strong>/g, '')}
            </strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
          {line}
        </p>
      );
    });
  };

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
            <FaBook className="text-xl" />
            <span className="font-semibold">{t('disciplines.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('disciplines.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('disciplines.subtitle')}
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

        {/* Описание */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 mb-16"
        >
          <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
            {formatTextWithBold(t('disciplines.content'))}
          </div>
        </motion.div>

        {/* Поиск и фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Поиск */}
            <div className="flex-1 w-full">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('disciplines.search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#023E8A] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Фильтры */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <FaFilter className="text-sm" />
                  {filter.label}
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Список дисциплин */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="grid gap-8">
            {filteredDisciplines.map((discipline, index) => (
              <motion.div
                key={discipline.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    {/* Основная информация */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${discipline.color} flex items-center justify-center text-white shadow-lg`}>
                          {discipline.icon}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className={`inline-flex items-center gap-1 ${discipline.bgColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                            {discipline.category}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                            <FaStar className="text-xs" />
                            {discipline.rating}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {discipline.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {discipline.description}
                      </p>

                      {/* Детали дисциплины */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaClock className="text-[#023E8A]" />
                          <span>{discipline.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaGraduationCap className="text-[#023E8A]" />
                          <span>{discipline.level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaUsers className="text-[#023E8A]" />
                          <span>{discipline.students}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaStar className="text-[#023E8A]" />
                          <span>{discipline.rating}/5.0</span>
                        </div>
                      </div>

                      {/* Расширенная информация */}
                      {expandedDiscipline === discipline.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-6"
                        >
                          {/* Темы */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">
                              {t('disciplines.topics')}
                            </h4>
                            <ul className="grid md:grid-cols-2 gap-2">
                              {discipline.topics.map((topic, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600">
                                  <div className="w-2 h-2 bg-[#023E8A] rounded-full" />
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Навыки */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">
                              {t('disciplines.skills')}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {discipline.skills.map((skill, idx) => (
                                <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Боковая панель с действиями */}
                    <div className="flex flex-col gap-4 lg:w-48">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {t('disciplines.enroll')}
                      </motion.button>

                      <motion.button
                        onClick={() => toggleDisciplineExpansion(discipline.id)}
                        className="flex items-center justify-center gap-2 text-[#023E8A] font-semibold py-2 hover:bg-blue-50 rounded-xl transition-colors duration-300"
                      >
                        {expandedDiscipline === discipline.id ? t('disciplines.showLess') : t('disciplines.showMore')}
                        <motion.div
                          animate={{ rotate: expandedDiscipline === discipline.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaArrowRight className="text-sm" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Особенности обучения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('disciplines.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('disciplines.features.subtitle')}
            </p>
          </div>

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
            {t('disciplines.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('disciplines.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('disciplines.cta.enrollNow')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('disciplines.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InstituteDisciplinesPage;