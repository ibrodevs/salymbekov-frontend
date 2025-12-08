import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaHome, FaWifi, FaUtensils, FaShower, FaBed, FaDesktop, FaMapMarkerAlt, FaHospital, FaHandHoldingHeart, FaBookOpen, FaGlobe, FaBrain, FaUsersCog, FaHeart, FaFirstAid, FaLaptopCode, FaLanguage, FaChartLine, FaMusic, FaPalette } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ElectiveCourses = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const opportunitiesSections = [
    { 
      path: "/student/opportunities/medical", 
      name: t('electiveCourses.sections.medical'), 
      icon: FaHospital,
    },
    { 
      path: "/student/opportunities/dorm", 
      name: t('electiveCourses.sections.dorm'), 
      icon: FaBed,
    },
    { 
      path: "/student/opportunities/social", 
      name: t('electiveCourses.sections.social'), 
      icon: FaHandHoldingHeart,
    },
    { 
      path: "/student/opportunities/courses", 
      name: t('electiveCourses.sections.courses'), 
      icon: FaBookOpen,
      active: true,
    },
    { 
      path: "/student/opportunities/mobility", 
      name: t('electiveCourses.sections.mobility'), 
      icon: FaGlobe,
    },
    { 
      path: "/student/opportunities/psychology", 
      name: t('electiveCourses.sections.psychology'), 
      icon: FaBrain,
    },
    { 
      path: "/student/opportunities/service-center", 
      name: t('electiveCourses.sections.serviceCenter'), 
      icon: FaUsersCog,
    },
    { 
      path: "/student/opportunities/adaptation", 
      name: t('electiveCourses.sections.adaptation'), 
      icon: FaUserGraduate,
    },
  ];

  const electiveCourses = [
    {
      icon: FaFirstAid,
      title: t('electiveCourses.courses.firstAid.title'),
      description: t('electiveCourses.courses.firstAid.description'),
      duration: t('electiveCourses.courses.firstAid.duration'),
      level: t('electiveCourses.courses.firstAid.level'),
      features: t('electiveCourses.courses.firstAid.features', { returnObjects: true })
    },
    {
      icon: FaLaptopCode,
      title: t('electiveCourses.courses.programming.title'),
      description: t('electiveCourses.courses.programming.description'),
      duration: t('electiveCourses.courses.programming.duration'),
      level: t('electiveCourses.courses.programming.level'),
      features: t('electiveCourses.courses.programming.features', { returnObjects: true })
    },
    {
      icon: FaLanguage,
      title: t('electiveCourses.courses.english.title'),
      description: t('electiveCourses.courses.english.description'),
      duration: t('electiveCourses.courses.english.duration'),
      level: t('electiveCourses.courses.english.level'),
      features: t('electiveCourses.courses.english.features', { returnObjects: true })
    },
    {
      icon: FaChartLine,
      title: t('electiveCourses.courses.entrepreneurship.title'),
      description: t('electiveCourses.courses.entrepreneurship.description'),
      duration: t('electiveCourses.courses.entrepreneurship.duration'),
      level: t('electiveCourses.courses.entrepreneurship.level'),
      features: t('electiveCourses.courses.entrepreneurship.features', { returnObjects: true })
    },
    {
      icon: FaMusic,
      title: t('electiveCourses.courses.music.title'),
      description: t('electiveCourses.courses.music.description'),
      duration: t('electiveCourses.courses.music.duration'),
      level: t('electiveCourses.courses.music.level'),
      features: t('electiveCourses.courses.music.features', { returnObjects: true })
    },
    {
      icon: FaPalette,
      title: t('electiveCourses.courses.design.title'),
      description: t('electiveCourses.courses.design.description'),
      duration: t('electiveCourses.courses.design.duration'),
      level: t('electiveCourses.courses.design.level'),
      features: t('electiveCourses.courses.design.features', { returnObjects: true })
    }
  ];

  // Получаем данные с проверкой типа
  const processSteps = Array.isArray(t('electiveCourses.process.steps', { returnObjects: true })) 
    ? t('electiveCourses.process.steps', { returnObjects: true }) 
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background - Ускоренная анимация */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
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
              duration: 2 + Math.random() * 1,
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
              duration: 8,
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
            {t('electiveCourses.backToStudent')}
          </button>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('electiveCourses.category')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('electiveCourses.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              {t('electiveCourses.subtitle')}
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
                  <h3 className="font-bold text-lg">{t('electiveCourses.sidebarTitle')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {opportunitiesSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        onClick={() => navigate(section.path)}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all duration-200 ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-blue-50'
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
              {/* Основная информация */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <FaBookOpen className="mr-3 text-[#023E8A]" />
                    {t('electiveCourses.mainTitle')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    {t('electiveCourses.mainDescription')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center p-3 bg-white/70 rounded-lg">
                      <FaBook className="text-[#023E8A] text-lg mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{t('electiveCourses.individualPlan')}</p>
                        <p className="text-gray-700 text-xs">{t('electiveCourses.individualPlanDetails')}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white/70 rounded-lg">
                      <FaRegCalendarAlt className="text-[#023E8A] text-lg mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{t('electiveCourses.regularClasses')}</p>
                        <p className="text-gray-700 text-xs">{t('electiveCourses.regularClassesDetails')}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-white/70 rounded-lg">
                      <FaGraduationCap className="text-[#023E8A] text-lg mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{t('electiveCourses.potentialDevelopment')}</p>
                        <p className="text-gray-700 text-xs">{t('electiveCourses.potentialDevelopmentDetails')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Особенный акцент на первой медицинской помощи */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-5 border border-red-200 mb-6"
                >
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <FaFirstAid className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {t('electiveCourses.firstAidHighlight.title')}
                      </h3>
                      <p className="text-gray-700 mb-3 text-sm">
                        {t('electiveCourses.firstAidHighlight.description')}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 bg-white/80 rounded-full text-xs text-gray-700 border border-red-300">
                          {t('electiveCourses.firstAidHighlight.badges.0')}
                        </span>
                        <span className="px-2 py-1 bg-white/80 rounded-full text-xs text-gray-700 border border-red-300">
                          {t('electiveCourses.firstAidHighlight.badges.1')}
                        </span>
                        <span className="px-2 py-1 bg-white/80 rounded-full text-xs text-gray-700 border border-red-300">
                          {t('electiveCourses.firstAidHighlight.badges.2')}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Доступные курсы */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('electiveCourses.availableCourses')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {electiveCourses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                        <course.icon className="text-white text-lg" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 text-base">{course.title}</h4>
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">{course.description}</p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          {course.duration}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                          {course.level}
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        {(Array.isArray(course.features) ? course.features : []).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 bg-[#023E8A] rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Процесс выбора курсов */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{t('electiveCourses.process.title')}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mx-auto mb-3 text-white font-bold text-sm">
                          {step.step}
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1 text-sm">{step.title}</h4>
                        <p className="text-gray-600 text-xs">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Дополнительная информация */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <FaBookOpen className="mr-2 text-[#023E8A]" />
                  {t('electiveCourses.additionalInfo.title')}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  {t('electiveCourses.additionalInfo.description')}
                </p>
                <motion.a 
                  href="https://salymbekov.com/ru/kursy-po-vyboru/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200 text-sm"
                >
                  <FaBook className="mr-2" />
                  {t('electiveCourses.additionalInfo.button')}
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Контактная информация */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-5 border border-yellow-200"
              >
                <div className="flex items-start">
                  <FaUserGraduate className="text-yellow-600 text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">
                      {t('electiveCourses.contact.title')}
                    </h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      {t('electiveCourses.contact.description')}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('electiveCourses.contact.phone')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('electiveCourses.contact.email')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('electiveCourses.contact.location')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('electiveCourses.contact.hours')}
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

export default ElectiveCourses;