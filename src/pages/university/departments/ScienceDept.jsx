import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaMicroscope,
  FaFlask,
  FaBook,
  FaUsers,
  FaAward,
  FaChartLine,
  FaGraduationCap,
  FaRocket,
  FaLightbulb,
  FaGlobeAmericas,
  FaHandshake,
  FaCalendarAlt,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaSearch,
  FaStar,
  FaCheckCircle,
  FaUniversity
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ScienceDept = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("research");
  const [selectedField, setSelectedField] = useState("all");

  // Основной цвет и градиенты
  const primaryColor = "#023E8A";
  const gradientFrom = "from-[#023E8A]";
  const gradientTo = "to-[#0077B6]";

  const scienceStats = [
  ];

  const researchFields = [
    {
      id: "all",
      name: t('scienceUniversity.fields.all'),
      count: 8
    },
    {
      id: "medical",
      name: t('scienceUniversity.fields.medical'),
      count: 3
    },
    {
      id: "technical",
      name: t('scienceUniversity.fields.technical'),
      count: 2
    },
    {
      id: "biological",
      name: t('scienceUniversity.fields.biological'),
      count: 2
    },
    {
      id: "social",
      name: t('scienceUniversity.fields.social'),
      count: 1
    }
  ];

  const researchAreas = [
    {
      icon: <FaMicroscope className="text-white" size={24} />,
      title: t('scienceUniversity.areas.biotech.title'),
      description: t('scienceUniversity.areas.biotech.description'),
      projects: "15",
      publications: "45",
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('scienceUniversity.areas.nanotech.title'),
      description: t('scienceUniversity.areas.nanotech.description'),
      projects: "12",
      publications: "38",
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaLightbulb className="text-white" size={24} />,
      title: t('scienceUniversity.areas.ai.title'),
      description: t('scienceUniversity.areas.ai.description'),
      projects: "18",
      publications: "52",
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaGlobeAmericas className="text-white" size={24} />,
      title: t('scienceUniversity.areas.environment.title'),
      description: t('scienceUniversity.areas.environment.description'),
      projects: "10",
      publications: "28",
      color: "bg-[#00B4D8]"
    }
  ];

  const researchProjects = [
    {
      id: 1,
      title: t('scienceUniversity.projects.genome.title'),
      description: t('scienceUniversity.projects.genome.description'),
      field: "medical",
      duration: t('scienceUniversity.projects.genome.duration'),
      budget: t('scienceUniversity.projects.genome.budget'),
      status: "active",
      team: "8",
      icon: <FaMicroscope className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      outcomes: [
        t('scienceUniversity.projects.genome.outcomes.publications'),
        t('scienceUniversity.projects.genome.outcomes.patents'),
        t('scienceUniversity.projects.genome.outcomes.conferences')
      ]
    },
    {
      id: 2,
      title: t('scienceUniversity.projects.nanomaterials.title'),
      description: t('scienceUniversity.projects.nanomaterials.description'),
      field: "technical",
      duration: t('scienceUniversity.projects.nanomaterials.duration'),
      budget: t('scienceUniversity.projects.nanomaterials.budget'),
      status: "active",
      team: "6",
      icon: <FaRocket className="text-2xl" />,
      color: "from-green-500 to-emerald-500",
      outcomes: [
        t('scienceUniversity.projects.nanomaterials.outcomes.applications'),
        t('scienceUniversity.projects.nanomaterials.outcomes.industry'),
        t('scienceUniversity.projects.nanomaterials.outcomes.research')
      ]
    },
    {
      id: 3,
      title: t('scienceUniversity.projects.climate.title'),
      description: t('scienceUniversity.projects.climate.description'),
      field: "environmental",
      duration: t('scienceUniversity.projects.climate.duration'),
      budget: t('scienceUniversity.projects.climate.budget'),
      status: "completed",
      team: "10",
      icon: <FaGlobeAmericas className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      outcomes: [
        t('scienceUniversity.projects.climate.outcomes.models'),
        t('scienceUniversity.projects.climate.outcomes.policy'),
        t('scienceUniversity.projects.climate.outcomes.publications')
      ]
    }
  ];

  const laboratories = [
    {
      name: t('scienceUniversity.labs.biotech.title'),
      equipment: t('scienceUniversity.labs.biotech.equipment'),
      capacity: t('scienceUniversity.labs.biotech.capacity'),
      research: t('scienceUniversity.labs.biotech.research'),
      supervisor: t('scienceUniversity.labs.biotech.supervisor'),
      status: "available",
      icon: <FaFlask className="text-lg" />
    },
    {
      name: t('scienceUniversity.labs.nano.title'),
      equipment: t('scienceUniversity.labs.nano.equipment'),
      capacity: t('scienceUniversity.labs.nano.capacity'),
      research: t('scienceUniversity.labs.nano.research'),
      supervisor: t('scienceUniversity.labs.nano.supervisor'),
      status: "available",
      icon: <FaMicroscope className="text-lg" />
    },
    {
      name: t('scienceUniversity.labs.computational.title'),
      equipment: t('scienceUniversity.labs.computational.equipment'),
      capacity: t('scienceUniversity.labs.computational.capacity'),
      research: t('scienceUniversity.labs.computational.research'),
      supervisor: t('scienceUniversity.labs.computational.supervisor'),
      status: "renovation",
      icon: <FaLightbulb className="text-lg" />
    }
  ];

  const publications = [
    {
      title: t('scienceUniversity.publications.journal1.title'),
      authors: t('scienceUniversity.publications.journal1.authors'),
      journal: t('scienceUniversity.publications.journal1.journal'),
      date: t('scienceUniversity.publications.journal1.date'),
      impact: "4.5",
      citations: "28",
      link: "#"
    },
    {
      title: t('scienceUniversity.publications.journal2.title'),
      authors: t('scienceUniversity.publications.journal2.authors'),
      journal: t('scienceUniversity.publications.journal2.journal'),
      date: t('scienceUniversity.publications.journal2.date'),
      impact: "3.8",
      citations: "15",
      link: "#"
    },
    {
      title: t('scienceUniversity.publications.conference.title'),
      authors: t('scienceUniversity.publications.conference.authors'),
      journal: t('scienceUniversity.publications.conference.journal'),
      date: t('scienceUniversity.publications.conference.date'),
      impact: "-",
      citations: "12",
      link: "#"
    }
  ];

  const events = [
    {
      title: t('scienceUniversity.events.conference.title'),
      date: t('scienceUniversity.events.conference.date'),
      type: t('scienceUniversity.events.conference.type'),
      location: t('scienceUniversity.events.conference.location'),
      deadline: t('scienceUniversity.events.conference.deadline'),
      status: "upcoming"
    },
    {
      title: t('scienceUniversity.events.seminar.title'),
      date: t('scienceUniversity.events.seminar.date'),
      type: t('scienceUniversity.events.seminar.type'),
      location: t('scienceUniversity.events.seminar.location'),
      deadline: t('scienceUniversity.events.seminar.deadline'),
      status: "ongoing"
    },
    {
      title: t('scienceUniversity.events.workshop.title'),
      date: t('scienceUniversity.events.workshop.date'),
      type: t('scienceUniversity.events.workshop.type'),
      location: t('scienceUniversity.events.workshop.location'),
      deadline: t('scienceUniversity.events.workshop.deadline'),
      status: "completed"
    }
  ];

  const contactInfo = {
    phone: "+996 778 99 88 55",
    email: "research@salymbekov.com",
    hours: t('scienceUniversity.contact.hours'),
    location: t('scienceUniversity.contact.location')
  };

  const tabs = [
    { id: "research", label: t('scienceUniversity.tabs.research'), icon: <FaMicroscope /> },
    { id: "labs", label: t('scienceUniversity.tabs.labs'), icon: <FaFlask /> },
    { id: "publications", label: t('scienceUniversity.tabs.publications'), icon: <FaBook /> }
  ];

  const filteredProjects = selectedField === "all" 
    ? researchProjects 
    : researchProjects.filter(project => project.field === selectedField);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaMicroscope className="text-xl" />
            <span className="font-semibold">{t('scienceUniversity.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('scienceUniversity.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('scienceUniversity.subtitle')}
          </p>
        </motion.div>

        {/* Статистика исследований */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {scienceStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-800 font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Направления исследований */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('scienceUniversity.areas.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('scienceUniversity.areas.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${area.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{area.projects} {t('scienceUniversity.areas.projects')}</span>
                  <span>{area.publications} {t('scienceUniversity.areas.publications')}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Основной контент с табами */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Заголовок и табы */}
            <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-50">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    {t('scienceUniversity.researchActivities')}
                  </h2>
                  <p className="text-gray-600">
                    {t('scienceUniversity.selectField')}
                  </p>
                </div>
                
                {/* Фильтр направлений */}
                <div className="flex flex-wrap gap-2">
                  {researchFields.map((field) => (
                    <motion.button
                      key={field.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedField(field.id)}
                      className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                        selectedField === field.id
                          ? 'bg-[#023E8A] text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {field.name}
                      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                        selectedField === field.id 
                          ? 'bg-white/20' 
                          : 'bg-gray-100'
                      }`}>
                        {field.count}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Переключение табов */}
              <div className="flex flex-col sm:flex-row gap-3">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Контент табов */}
            <div className="p-8">
              {activeTab === "research" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('scienceUniversity.projects.title')}
                  </h3>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          {project.icon}
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                          {project.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                          {project.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{t('scienceUniversity.projects.duration')}</span>
                            <span className="font-semibold text-[#023E8A]">{project.duration}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{t('scienceUniversity.projects.budget')}</span>
                            <span className="font-semibold text-[#023E8A]">{project.budget}</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{t('scienceUniversity.projects.team')}</span>
                            <span className="font-semibold text-[#023E8A]">{project.team} {t('scienceUniversity.projects.members')}</span>
                          </div>
                        </div>

                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-4 ${
                          project.status === "active" 
                            ? "bg-green-100 text-green-700" 
                            : "bg-gray-100 text-gray-600"
                        }`}>
                          <FaChartLine className="text-xs" />
                          {t(`scienceUniversity.projects.status.${project.status}`)}
                        </div>

                        <ul className="space-y-2 mb-6">
                          {project.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <FaCheckCircle className="text-green-500 text-xs" />
                              {outcome}
                            </li>
                          ))}
                        </ul>

                        
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "labs" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('scienceUniversity.labs.title')}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {laboratories.map((lab, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-[#023E8A]">
                            {lab.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800">
                              {lab.name}
                            </h4>
                            <div className={`text-xs px-2 py-1 rounded ${
                              lab.status === "available" 
                                ? "bg-green-100 text-green-700" 
                                : "bg-yellow-100 text-yellow-700"
                            }`}>
                              {t(`scienceUniversity.labs.status.${lab.status}`)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 text-sm text-gray-600">
                          <div>
                            <strong>{t('scienceUniversity.labs.equipment')}:</strong> {lab.equipment}
                          </div>
                          <div>
                            <strong>{t('scienceUniversity.labs.capacity')}:</strong> {lab.capacity}
                          </div>
                          <div>
                            <strong>{t('scienceUniversity.labs.research')}:</strong> {lab.research}
                          </div>
                          <div>
                            <strong>{t('scienceUniversity.labs.supervisor')}:</strong> {lab.supervisor}
                          </div>
                        </div>

                        
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "publications" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {t('scienceUniversity.publications.title')}
                  </h3>
                  <div className="space-y-4">
                    {publications.map((pub, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <h4 className="text-lg font-bold text-gray-800 mb-3">
                          {pub.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">
                          <strong>{t('scienceUniversity.publications.authors')}:</strong> {pub.authors}
                        </p>
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-gray-700 text-sm">
                              <strong>{t('scienceUniversity.publications.journal')}:</strong> {pub.journal}
                            </p>
                            <p className="text-gray-600 text-sm">
                              <strong>{t('scienceUniversity.publications.date')}:</strong> {pub.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            {pub.impact !== "-" && (
                              <span>
                                <strong>Impact:</strong> {pub.impact}
                              </span>
                            )}
                            <span>
                              <strong>{t('scienceUniversity.publications.citations')}:</strong> {pub.citations}
                            </span>
                            
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Научные события */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <FaCalendarAlt className="text-[#023E8A] text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{t('science.events.title')}</h3>
            </div>
            
            <div className="space-y-4">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-4 rounded-xl border-2 ${
                    event.status === "upcoming" 
                      ? "border-blue-200 bg-blue-50" 
                      : event.status === "ongoing"
                      ? "border-green-200 bg-green-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-800">{event.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      event.status === "upcoming" 
                        ? "bg-blue-100 text-blue-700" 
                        : event.status === "ongoing"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {t(`science.events.status.${event.status}`)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>{t('science.events.date')}:</strong> {event.date}</p>
                    <p><strong>{t('science.events.type')}:</strong> {event.type}</p>
                    <p><strong>{t('science.events.location')}:</strong> {event.location}</p>
                    {event.deadline && (
                      <p><strong>{t('science.events.deadline')}:</strong> {event.deadline}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

           
          </motion.div>

          {/* Контактная информация */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <FaUniversity className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">{t('science.contact.title')}</h3>
            </div>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{t('science.contact.phone')}</p>
                  <p className="font-semibold">{contactInfo.phone}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{t('science.contact.email')}</p>
                  <p className="font-semibold">{contactInfo.email}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">{t('science.contact.location')}</p>
                  <p className="font-semibold">{contactInfo.location}</p>
                </div>
              </motion.div>

              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScienceDept;