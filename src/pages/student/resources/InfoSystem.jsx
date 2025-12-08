import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaFileAlt, FaDatabase, FaUniversity, FaGlobe, FaGraduationCap, FaLaptop } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const InfoSystem = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const resourcesSections = [
    { 
      path: "/student/resources/instructions", 
      name: t('studentResources.sections.instructions'), 
      icon: FaFileAlt,
    },
    { 
      path: "/student/resources/infosystem", 
      name: t('studentResources.sections.infosystem'), 
      icon: FaDatabase,
      active: true,
    },
    { 
      name: t('studentResources.sections.library'), 
      icon: FaBook,
      disabled: true,
    },
    { 
      path: "/student/resources/edu-resources", 
      name: t('studentResources.sections.eduResources'), 
      icon: FaUniversity,
    },
  ];

  const systemsData = [
    {
      icon: FaGlobe,
      title: t('infoSystem.systems.ebilim.title'),
      description: t('infoSystem.systems.ebilim.description'),
      features: t('infoSystem.systems.ebilim.features', { returnObjects: true }) || [
        "Доступ к учебным материалам",
        "Онлайн-тесты и задания",
        "Расписание занятий",
        "Электронный журнал"
      ],
      url: "https://ebilim.salymbekov.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaDatabase,
      title: t('infoSystem.systems.edu.title'),
      description: t('infoSystem.systems.edu.description'),
      features: t('infoSystem.systems.edu.features', { returnObjects: true }) || [
        "Управление учебным процессом",
        "Запись на курсы",
        "Просмотр оценок",
        "Академическая информация"
      ],
      url: "https://edu.salymbekov.com",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaUniversity,
      title: t('infoSystem.systems.lincoln.title'),
      description: t('infoSystem.systems.lincoln.description'),
      features: t('infoSystem.systems.lincoln.features', { returnObjects: true }) || [
        "Международное образование",
        "Онлайн-курсы",
        "Совместные программы",
        "Академический обмен"
      ],
      url: "http://online.collaborative.lincoln.edu.my/",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaBook,
      title: t('infoSystem.systems.ekyzmat.title'),
      description: t('infoSystem.systems.ekyzmat.description'),
      features: t('infoSystem.systems.ekyzmat.features', { returnObjects: true }) || [
        "Электронные услуги",
        "Онлайн-заявки",
        "Документооборот",
        "Госуслуги"
      ],
      url: "#",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: FaGraduationCap,
      title: t('infoSystem.systems.elibrary.title'),
      description: t('infoSystem.systems.elibrary.description'),
      features: t('infoSystem.systems.elibrary.features', { returnObjects: true }) || [
        "Электронные книги",
        "Научные статьи",
        "Исследовательские работы",
        "Периодические издания"
      ],
      url: "#",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background - Ускоренная анимация */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
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
              y: [0, -15, 0],
              x: [0, 8, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
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
              duration: 12,
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
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group duration-200"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            {t('studentResources.backToStudent')}
          </button>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('infoSystem.category')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('infoSystem.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              {t('infoSystem.subtitle')}
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
                  <h3 className="font-bold text-lg">{t('studentResources.sidebarTitle')}</h3>
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
                          section.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50'
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
              {/* Информационные системы */}
              <div className="space-y-6">
                {systemsData.map((system, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-5">
                      {/* Иконка и заголовок */}
                      <div className="lg:w-1/4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${system.color} rounded-2xl flex items-center justify-center mb-3`}>
                          <system.icon className="text-white text-xl" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {system.title}
                        </h3>
                        {system.url !== "#" && (
                          <motion.a
                            href={system.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex items-center px-3 py-2 bg-white text-[#023E8A] font-semibold rounded-lg border border-[#023E8A] hover:bg-[#023E8A] hover:text-white transition-all duration-200 text-sm"
                          >
                            <FaGlobe className="mr-2" />
                            {t('infoSystem.goToSystem')}
                          </motion.a>
                        )}
                      </div>

                      {/* Описание и функции */}
                      <div className="lg:w-3/4">
                        <p className="text-gray-700 mb-3 leading-relaxed text-sm">
                          {system.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {(Array.isArray(system.features) ? system.features : []).map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                              className="flex items-center p-2 bg-white/70 rounded-lg"
                            >
                              <div className="w-5 h-5 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                                <span className="text-white text-xs font-bold">✓</span>
                              </div>
                              <span className="text-gray-700 text-xs">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Преимущества использования */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <FaLaptop className="mr-2 text-[#023E8A]" />
                  {t('infoSystem.advantages.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {(Array.isArray(t('infoSystem.advantages.items', { returnObjects: true })) 
                    ? t('infoSystem.advantages.items', { returnObjects: true }) 
                    : []
                  ).map((advantage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-white/70 p-3 rounded-lg text-center"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">{advantage.title}</h4>
                      <p className="text-xs text-gray-600">{advantage.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Техническая поддержка */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200"
              >
                <div className="flex items-start">
                  <FaLaptop className="text-purple-600 text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">
                      {t('infoSystem.support.title')}
                    </h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      {t('infoSystem.support.description')}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-purple-300">
                        {t('infoSystem.support.phone')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-purple-300">
                        {t('infoSystem.support.email')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-purple-300">
                        {t('infoSystem.support.location')}
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

export default InfoSystem;