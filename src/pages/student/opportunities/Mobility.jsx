import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, 
  FaRegCalendarAlt, FaUserGraduate, FaHome, FaWifi, FaUtensils, 
  FaShower, FaBed, FaDesktop, FaMapMarkerAlt, FaHospital, 
  FaHandHoldingHeart, FaBookOpen, FaGlobe, FaBrain, FaUsersCog,
  FaPlane, FaUniversity, FaMicroscope, FaFlask, FaUserMd, FaFilePdf, FaDownload 
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import img48 from '../../../assets/science/studentsphoto/48.jpeg';
import img49 from '../../../assets/science/studentsphoto/49.jpeg';
import img50 from '../../../assets/science/studentsphoto/50.jpeg';
import img51 from '../../../assets/science/studentsphoto/51.jpeg';

const Mobility = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const opportunitiesSections = [
    { 
      path: "/student/opportunities/medical", 
      name: t('mobility.sections.medical'), 
      icon: FaHospital,
    },
    { 
      path: "/student/opportunities/dorm", 
      name: t('mobility.sections.dorm'), 
      icon: FaBed,
    },
    { 
      path: "/student/opportunities/social", 
      name: t('mobility.sections.social'), 
      icon: FaHandHoldingHeart,
    },
    { 
      path: "/student/opportunities/courses", 
      name: t('mobility.sections.courses'), 
      icon: FaBookOpen,
    },
    { 
      path: "/student/opportunities/mobility", 
      name: t('mobility.sections.mobility'), 
      icon: FaGlobe,
      active: true,
    },
    { 
      path: "/student/opportunities/psychology", 
      name: t('mobility.sections.psychology'), 
      icon: FaBrain,
    },
    { 
      path: "/student/opportunities/service-center", 
      name: t('mobility.sections.serviceCenter'), 
      icon: FaUsersCog,
    },
    { 
      path: "/student/opportunities/adaptation", 
      name: t('mobility.sections.adaptation'), 
      icon: FaUserGraduate,
    },
  ];

  const iconMap = {
    FaUserMd,
    FaMicroscope,
    FaFlask,
    FaUniversity,
    FaPlane
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
      y: -5,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const photos = [img48, img49, img50, img51];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 100 + 30,
              height: Math.random() * 100 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
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
          <motion.button 
            onClick={() => navigate('/student')}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t('mobility.backToStudent')}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('mobility.category')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('mobility.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('mobility.subtitle')}
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
                  <h3 className="font-bold text-lg">{t('mobility.sidebarTitle')}</h3>
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
              {/* Основная информация */}
              <motion.div
                variants={itemVariants}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaGlobe className="mr-3 text-[#023E8A]" />
                    {t('mobility.mainTitle')}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {t('mobility.mainDescription')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {t('mobility.features', { returnObjects: true }).map((feature, index) => {
                      const FeatureIcon = iconMap[feature.icon];
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover="hover"
                          variants={cardHoverVariants}
                          className="flex items-center p-4 bg-white/70 rounded-lg hover:shadow-md transition-all"
                        >
                          <div className="text-[#023E8A] text-xl mr-4">
                            <FeatureIcon />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{feature.title}</p>
                            <p className="text-gray-700">{feature.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Научные направления */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('mobility.researchAreas')}
                </h3>
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  variants={containerVariants}
                >
                  {t('mobility.researchCategories', { returnObjects: true }).map((area, index) => {
                    const AreaIcon = iconMap[area.icon];
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover="hover"
                        className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 text-center hover:shadow-lg transition-all"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <AreaIcon className="text-white text-2xl" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-3">{area.title}</h4>
                        <div className="space-y-1">
                          {area.topics.map((topic, topicIndex) => (
                            <motion.div
                              key={topicIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: topicIndex * 0.1 }}
                              className="text-sm text-gray-600"
                            >
                              • {topic}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* Презентации по университетам */}
              <motion.div
                variants={itemVariants}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('mobility.presentations')}
                </h3>
                
                <div className="space-y-6">
                  {t('mobility.mobilityPrograms', { returnObjects: true }).map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex flex-col lg:flex-row gap-6 mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <FaUniversity className="mr-3 text-[#023E8A]" />
                            {program.university}
                          </h4>
                        </div>
                        {photos[index] && (
                          <motion.div 
                            className="w-full lg:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img src={photos[index]} alt={program.university} className="w-full h-full object-cover" />
                          </motion.div>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {program.presentations.map((presentation, presIndex) => (
                          <motion.div
                            key={presIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: presIndex * 0.05 }}
                            className="flex items-start p-3 bg-white/70 rounded-lg border border-white hover:bg-white hover:shadow-sm transition-all"
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-2 h-2 bg-[#023E8A] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{presentation}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Файлы для скачивания */}
              <motion.div
                variants={itemVariants}
                className="mb-12"
              >
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FaFilePdf className="mr-3 text-[#023E8A]" />
                    {t('mobility.materials')}
                  </h3>
                  
                  <div className="space-y-4">
                    {t('mobility.files', { returnObjects: true }).map((file, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white/80 rounded-lg border border-yellow-300 hover:shadow-md transition-shadow"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center">
                          <FaFilePdf className="text-red-500 text-xl mr-4" />
                          <div>
                            <h4 className="font-semibold text-gray-900">{file.name}</h4>
                            <p className="text-sm text-gray-600">{file.type} • {file.size}</p>
                          </div>
                        </div>
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center px-4 py-2 bg-[#023E8A] text-white rounded-lg hover:bg-[#0077B6] transition-colors"
                        >
                          <FaDownload className="mr-2" />
                          {t('mobility.download')}
                        </motion.a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Галерея фотографий */}
              <motion.div
                variants={itemVariants}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('mobility.gallery')}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="aspect-square rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img 
                        src={photo} 
                        alt={`Academic mobility ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                  {[4, 5, 6, 7].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: item * 0.1 }}
                      className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center text-gray-400"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaUniversity className="text-4xl" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Дополнительная информация */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBookOpen className="mr-3 text-[#023E8A]" />
                  {t('mobility.additionalInfo.title')}
                </h3>
                <p className="text-gray-700 mb-6">
                  {t('mobility.additionalInfo.description')}
                </p>
                <motion.a 
                  href="https://salymbekov.com/ru/akademmobilnost/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <FaGlobe className="mr-3" />
                  {t('mobility.additionalInfo.button')}
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
                  <div>
                    <FaUsersCog className="text-blue-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {t('mobility.contact.title')}
                    </h4>
                    <p className="text-gray-700 mb-3">
                      {t('mobility.contact.description')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        t('mobility.contact.phone'),
                        t('mobility.contact.email'),
                        t('mobility.contact.location'),
                        t('mobility.contact.hours')
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

export default Mobility;