import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaLaptop, FaInfoCircle, FaBookOpen, FaGlobe, FaDatabase, FaUniversity, FaSearch, FaGraduationCap, FaFileAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const EducationalResources = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const resourcesSections = [
    { 
      path: "/student/resources/instructions", 
      name: t('educationalResources.sections.instructions'), 
      icon: FaFileAlt,
    },
    { 
      path: "/student/resources/infosystem", 
      name: t('educationalResources.sections.infosystem'), 
      icon: FaDatabase,
    },
    { 
      name: t('educationalResources.sections.library'), 
      icon: FaBook,
      disabled: true,
    },
    { 
      path: "/student/resources/edu-resources", 
      name: t('educationalResources.sections.eduResources'), 
      icon: FaUniversity,
      active: true 
    }
  ];

  const resourcesData = [
    {
      icon: FaGlobe,
      title: t('educationalResources.resources.research4life.title'),
      description: t('educationalResources.resources.research4life.description'),
      stats: [
        t('educationalResources.resources.research4life.stats.0'),
        t('educationalResources.resources.research4life.stats.1'),
        t('educationalResources.resources.research4life.stats.2'),
        t('educationalResources.resources.research4life.stats.3')
      ],
      access: t('educationalResources.resources.research4life.access'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaBook,
      title: t('educationalResources.resources.sage.title'),
      description: t('educationalResources.resources.sage.description'),
      stats: [
        t('educationalResources.resources.sage.stats.0'),
        t('educationalResources.resources.sage.stats.1'),
        t('educationalResources.resources.sage.stats.2'),
        t('educationalResources.resources.sage.stats.3')
      ],
      access: t('educationalResources.resources.sage.access'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaDatabase,
      title: t('educationalResources.resources.degruyter.title'),
      description: t('educationalResources.resources.degruyter.description'),
      stats: [
        t('educationalResources.resources.degruyter.stats.0'),
        t('educationalResources.resources.degruyter.stats.1'),
        t('educationalResources.resources.degruyter.stats.2'),
        t('educationalResources.resources.degruyter.stats.3')
      ],
      access: t('educationalResources.resources.degruyter.access'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaUniversity,
      title: t('educationalResources.resources.lincoln.title'),
      description: t('educationalResources.resources.lincoln.description'),
      stats: [
        t('educationalResources.resources.lincoln.stats.0'),
        t('educationalResources.resources.lincoln.stats.1'),
        t('educationalResources.resources.lincoln.stats.2'),
        t('educationalResources.resources.lincoln.stats.3')
      ],
      access: t('educationalResources.resources.lincoln.access'),
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FaSearch,
      title: t('educationalResources.resources.ebsco.title'),
      description: t('educationalResources.resources.ebsco.description'),
      stats: [
        t('educationalResources.resources.ebsco.stats.0'),
        t('educationalResources.resources.ebsco.stats.1'),
        t('educationalResources.resources.ebsco.stats.2'),
        t('educationalResources.resources.ebsco.stats.3')
      ],
      access: t('educationalResources.resources.ebsco.access'),
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: FaGraduationCap,
      title: t('educationalResources.resources.knox.title'),
      description: t('educationalResources.resources.knox.description'),
      stats: [
        t('educationalResources.resources.knox.stats.0'),
        t('educationalResources.resources.knox.stats.1'),
        t('educationalResources.resources.knox.stats.2'),
        t('educationalResources.resources.knox.stats.3')
      ],
      access: t('educationalResources.resources.knox.access'),
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background - Ускоренная анимация */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/student')}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            {t('educationalResources.backToStudent')}
          </button>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('educationalResources.category')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('educationalResources.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              {t('educationalResources.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUsers className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('educationalResources.sidebarTitle')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {resourcesSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path || section.name}
                      whileHover={section.disabled ? {} : { scale: 1.02 }}
                      whileTap={section.disabled ? {} : { scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        onClick={section.disabled ? undefined : () => navigate(section.path)}
                        disabled={section.disabled}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all duration-200 ${
                          section.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                        } ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium text-sm">{section.name}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Введение */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b-2 border-[#023E8A] pb-3">
                  {t('educationalResources.library.title')}
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {t('educationalResources.library.description.0')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('educationalResources.library.description.1')}
                  </p>
                </div>
              </motion.div>

              {/* Образовательные ресурсы */}
              <div className="space-y-6">
                {resourcesData.map((resource, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-5">
                      {/* Иконка и заголовок */}
                      <div className="lg:w-1/4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-3`}>
                          <resource.icon className="text-white text-xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {resource.title}
                        </h3>
                        <div className="bg-white/80 rounded-lg p-2 border border-green-200">
                          <p className="text-xs text-[#023E8A] font-semibold">
                            {resource.access}
                          </p>
                        </div>
                      </div>

                      {/* Описание и статистика */}
                      <div className="lg:w-3/4">
                        <p className="text-gray-700 mb-3 leading-relaxed text-sm">
                          {resource.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {resource.stats.map((stat, statIndex) => (
                            <motion.div
                              key={statIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: statIndex * 0.05 }}
                              className="flex items-center p-2 bg-white/70 rounded-lg"
                            >
                              <div className="w-5 h-5 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                              <span className="text-gray-700 text-xs">{stat}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Преимущества доступа */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <FaBookOpen className="mr-2 text-[#023E8A]" />
                  {t('educationalResources.advantages.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {t('educationalResources.advantages.items', { returnObjects: true }).map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center p-2 bg-white/70 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 text-xs">{advantage}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Контактная информация библиотеки */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-5 border border-yellow-200"
              >
                <div className="flex items-start">
                  <FaBookOpen className="text-yellow-600 text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">
                      {t('educationalResources.contact.title')}
                    </h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      {t('educationalResources.contact.description')}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('educationalResources.contact.phone')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('educationalResources.contact.email')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('educationalResources.contact.hours')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('educationalResources.contact.location')}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;