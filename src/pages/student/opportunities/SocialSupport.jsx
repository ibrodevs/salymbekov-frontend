import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, 
  FaRegCalendarAlt, FaUserGraduate, FaHome, FaWifi, FaUtensils, 
  FaShower, FaBed, FaDesktop, FaMapMarkerAlt, FaHospital, 
  FaHandHoldingHeart, FaBookOpen, FaGlobe, FaBrain, FaUsersCog 
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SocialSupport = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const opportunitiesSections = [
    { 
      path: "/student/opportunities/medical", 
      name: t('socialSupport.sections.medical'), 
      icon: FaHospital,
    },
    { 
      path: "/student/opportunities/dorm", 
      name: t('socialSupport.sections.dorm'), 
      icon: FaBed,
    },
    { 
      path: "/student/opportunities/social", 
      name: t('socialSupport.sections.social'), 
      icon: FaHandHoldingHeart,
      active: true,
    },
    { 
      path: "/student/opportunities/courses", 
      name: t('socialSupport.sections.courses'), 
      icon: FaBookOpen,
    },
    { 
      path: "/student/opportunities/mobility", 
      name: t('socialSupport.sections.mobility'), 
      icon: FaGlobe,
    },
    { 
      path: "/student/opportunities/psychology", 
      name: t('socialSupport.sections.psychology'), 
      icon: FaBrain,
    },
    { 
      path: "/student/opportunities/service-center", 
      name: t('socialSupport.sections.serviceCenter'), 
      icon: FaUsersCog,
    },
    { 
      path: "/student/opportunities/adaptation", 
      name: t('socialSupport.sections.adaptation'), 
      icon: FaUserGraduate,
    },
  ];

  const iconMap = {
    FaGraduationCap,
    FaHome,
    FaUtensils,
    FaRegCalendarAlt,
    FaUserFriends,
    FaBook
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0]
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('socialSupport.category')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('socialSupport.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('socialSupport.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Menu */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUsers className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('socialSupport.sidebarTitle')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {opportunitiesSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path}
                      whileHover="hover"
                      whileTap="tap"
                      variants={cardHoverVariants}
                    >
                      <button
                        onClick={() => navigate(section.path)}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
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
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Общие положения */}
              <motion.div
                variants={itemVariants}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaHandHoldingHeart className="mr-3 text-[#023E8A]" />
                    {t('socialSupport.generalProvisions')}
                  </h2>
                  
                  <div className="space-y-6 text-gray-700">
                    {t('socialSupport.provisions', { returnObjects: true }).map((provision, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-4 bg-white/70 rounded-lg border-l-4 border-[#023E8A] hover:shadow-md transition-shadow"
                        whileHover={{ 
                          scale: 1.02,
                          borderLeftColor: "#0077B6"
                        }}
                      >
                        <p className="leading-relaxed">{provision}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Виды социальной поддержки */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('socialSupport.supportTypes')}
                </h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                >
                  {t('socialSupport.supportCategories', { returnObjects: true }).map((support, index) => {
                    const SupportIcon = iconMap[support.icon];
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover="hover"
                        className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 text-center hover:shadow-lg transition-all"
                      >
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4"
                          {...floatingAnimation}
                        >
                          <SupportIcon className="text-white text-2xl" />
                        </motion.div>
                        <h4 className="font-bold text-gray-900 mb-2">{support.title}</h4>
                        <p className="text-gray-700 text-sm">{support.description}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* Порядок предоставления поддержки */}
              <motion.div
                variants={itemVariants}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t('socialSupport.supportProcedure')}
                  </h3>
                  
                  <div className="space-y-6">
                    {t('socialSupport.procedureSteps', { returnObjects: true }).map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/70 rounded-xl p-6 border border-white shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ 
                          scale: 1.02,
                          borderColor: "#023E8A"
                        }}
                      >
                        <motion.h4 
                          className="font-bold text-[#023E8A] mb-3 text-lg"
                          whileHover={{ color: "#0077B6" }}
                        >
                          {item.title}
                        </motion.h4>
                        <p className="text-gray-700 leading-relaxed">{item.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Дополнительная информация */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBook className="mr-3 text-[#023E8A]" />
                  {t('socialSupport.additionalInfo.title')}
                </h3>
                <p className="text-gray-700 mb-6">
                  {t('socialSupport.additionalInfo.description')}
                </p>
                <motion.a 
                  href="https://salymbekov.com/ru/komissija-po-socialnoj-podderzhke-studentov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <FaBookOpen className="mr-3" />
                  {t('socialSupport.additionalInfo.button')}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Контактная информация */}
              <motion.div
                variants={itemVariants}
                className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
              >
                <div className="flex items-start">
                  <motion.div
                    {...floatingAnimation}
                  >
                    <FaUsersCog className="text-blue-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {t('socialSupport.contact.title')}
                    </h4>
                    <p className="text-gray-700 mb-3">
                      {t('socialSupport.contact.description')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        t('socialSupport.contact.phone'),
                        t('socialSupport.contact.email'),
                        t('socialSupport.contact.location'),
                        t('socialSupport.contact.hours')
                      ].map((contact, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="px-3 py-1 bg-white/80 rounded-lg text-sm text-gray-700 border border-blue-300 hover:bg-white hover:shadow-sm transition-all"
                          whileHover={{ scale: 1.05 }}
                        >
                          {contact}
                        </motion.span>
                      ))}
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

export default SocialSupport;