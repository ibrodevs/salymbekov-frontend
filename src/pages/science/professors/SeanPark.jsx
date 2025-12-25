import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaArrowLeft, 
  FaUserGraduate, 
  FaBook, 
  FaAward, 
  FaGlobeAmericas, 
  FaGraduationCap, 
  FaUserMd,
  FaStethoscope,
  FaFlask,
  FaHeartbeat
} from 'react-icons/fa';

const SeanPark = () => {
  const { t } = useTranslation();
  const seanParkPhoto = 'https://via.placeholder.com/300x400/023E8A/FFFFFF?text=Dr.+Sean+Park';

  const professorSections = [
    { 
      path: "/science/professors/sean-park", 
      nameKey: "seanPark.sections.seanPark",
      icon: FaUserGraduate,
      active: true 
    },
    { 
      path: "/science/professors/pendharkar", 
      nameKey: "seanPark.sections.pendharkar", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/potapova", 
      nameKey: "seanPark.sections.potapova", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/osmonov", 
      nameKey: "seanPark.sections.osmonov", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/erkebaev", 
      nameKey: "seanPark.sections.erkebaev", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/madaminov", 
      nameKey: "seanPark.sections.madaminov", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/bilgaziev", 
      nameKey: "seanPark.sections.bilgaziev", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/kubatov", 
      nameKey: "seanPark.sections.kubatov", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/shaltakova", 
      nameKey: "seanPark.sections.shaltakova", 
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/kachibek", 
      nameKey: "seanPark.sections.kachibek", 
      icon: FaUserGraduate 
    }
  ];

  // Быстрые анимационные варианты
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const quickVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.15
      }
    },
    hover: {
      scale: 1.02,
      y: -1,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Упрощенный анимированный фон */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => ( // Меньше элементов для скорости
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 60 + 30, // Меньше размеры
              height: Math.random() * 60 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -20, 0], // Меньше амплитуда
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2, // Быстрее анимация
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('translation.seanPark.badge')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('translation.seanPark.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('translation.seanPark.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
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
                  <FaUserGraduate className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('translation.seanPark.professors')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {professorSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <motion.div
                      key={section.path}
                      variants={quickVariants}
                      whileHover="hover"
                    >
                      <Link
                        to={section.path}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium text-sm">{t(section.nameKey)}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 transition-shadow"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Photo Section */}
                <motion.div
                  variants={itemVariants}
                  className="lg:w-80 flex-shrink-0"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={seanParkPhoto} 
                      alt={t('translation.seanPark.title')}
                      className="w-full h-96 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x400/023E8A/FFFFFF?text=Dr.+Sean+Park';
                      }}
                    />
                  </div>
                  
                  {/* Quick Info */}
                  <div className="mt-6 space-y-4">
                    <motion.div
                      variants={quickVariants}
                      whileHover="hover"
                      className="bg-blue-50 p-4 rounded-xl border border-blue-200"
                    >
                      <div className="flex items-center">
                        <FaUserMd className="text-[#023E8A] mr-3" />
                        <span className="font-semibold text-gray-900">
                          {t('translation.positionLabel')}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">
                        {t('translation.seanPark.position')}
                      </p>
                    </motion.div>

                    <motion.div
                      variants={quickVariants}
                      whileHover="hover"
                      className="bg-green-50 p-4 rounded-xl border border-green-200"
                    >
                      <div className="flex items-center">
                        <FaFlask className="text-[#023E8A] mr-3" />
                        <span className="font-semibold text-gray-900">
                          {t('translation.seanPark.subtitle')}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">
                        {t('translation.seanPark.subtitle')}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="flex-1">
                  <motion.h2 
                    variants={itemVariants}
                    className="text-3xl font-bold text-gray-900 mb-6"
                  >
                    {t('translation.seanPark.title')}
                  </motion.h2>
                  
                  {/* Description */}
                  <motion.div 
                    variants={itemVariants}
                    className="prose prose-lg max-w-none text-gray-700 mb-8"
                  >
                    <p className="text-lg leading-relaxed mb-6">
                      {t('translation.seanPark.description')}
                    </p>

                  </motion.div>

                  {/* Education */}
                  <motion.div
                    variants={itemVariants}
                    className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FaBook className="mr-3 text-[#023E8A]" />
                      {t('translation.educationTitle')}
                    </h4>
                    <div className="space-y-3">
                      {(Array.isArray(t('translation.seanPark.education', { returnObjects: true })) ? t('translation.seanPark.education', { returnObjects: true }) : []).map((item, index) => (
                        <motion.div
                          key={index}
                          variants={quickVariants}
                          className="flex items-center p-3 bg-white/70 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Professional Focus */}
                  <motion.div
                    variants={itemVariants}
                    className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FaStethoscope className="mr-3 text-[#023E8A]" />
                      {t('translation.experienceTitle')}
                    </h4>
                    <div className="space-y-3">
                      {(Array.isArray(t('translation.seanPark.experience', { returnObjects: true })) ? t('translation.seanPark.experience', { returnObjects: true }) : []).map((item, index) => (
                        <motion.div
                          key={index}
                          variants={quickVariants}
                          className="flex items-center p-3 bg-white/70 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    variants={itemVariants}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <FaAward className="mr-3 text-[#023E8A]" />
                      {t('translation.achievementsTitle')}
                    </h4>
                    <div className="space-y-3">
                      {(Array.isArray(t('translation.seanPark.achievements', { returnObjects: true })) ? t('translation.seanPark.achievements', { returnObjects: true }) : []).map((item, index) => (
                        <motion.div
                          key={index}
                          variants={quickVariants}
                          className="flex items-center p-3 bg-white/70 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                            <span className="text-white text-sm font-bold">{index + 1}</span>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SeanPark;