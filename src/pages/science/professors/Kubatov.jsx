import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaUserGraduate, FaBook, FaAward, FaGraduationCap } from 'react-icons/fa';
import kubatovPhoto from '../../../assets/science/professors/jeduard-kubatov-221x300.png';
import "../../../i18n";

const Kubatov = () => {
  const { t } = useTranslation();

  // Get arrays from translations
  const educationItems = t('science.kubatov.education', { returnObjects: true });
  const experienceItems = t('science.kubatov.experience', { returnObjects: true });
  const achievementItems = t('science.kubatov.achievements', { returnObjects: true });

  const professorSections = [
    { 
      path: "/science/professors/sean-park", 
      nameKey: "science.seanPark.name",
      icon: FaUserGraduate,
    },
    { 
      path: "/science/professors/pendharkar", 
      nameKey: "science.pendharkar.name",
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/potapova", 
      nameKey: "science.potapova.name",
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/osmonov", 
      nameKey: "science.osmonov.name",
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/erkebaev", 
      nameKey: "science.erkebaev.name",
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/madaminov", 
      nameKey: "science.madaminov.name",
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/bilgaziev", 
      nameKey: "science.bilgaziev.name",
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/kubatov", 
      nameKey: "science.kubatov.name",
      icon: FaUserGraduate,
      active: true 
    },
    { 
      path: "/science/professors/shaltakova", 
      nameKey: "science.shaltakova.name",
      icon: FaUserGraduate 
    },
    { 
      path: "/science/professors/kachibek", 
      nameKey: "science.kachibek.name",
      icon: FaUserGraduate 
    }
  ];

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
          <Link 
            to="/science"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t('science.backButton')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('science.pageTitle')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('science.kubatov.name')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('science.kubatov.position')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with Professor List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FaUserGraduate className="mr-2 text-[#023E8A]" />
                {t('science.allProfessors')}
              </h3>
              <div className="space-y-2">
                {professorSections.map((section, index) => (
                  <Link
                    key={index}
                    to={section.path}
                    className={`block px-4 py-3 rounded-lg transition-all transform hover:scale-105 ${
                      section.active
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <section.icon className="mr-2" />
                      <span className="text-sm font-medium">{t(section.nameKey)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Photo Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-80 flex-shrink-0"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={kubatovPhoto} 
                      alt={t('science.kubatov.name')} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {/* Description */}
                    <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                      <p className="text-lg leading-relaxed">
                        {t('science.kubatov.description')}
                      </p>
                    </div>

                    {/* Education Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaGraduationCap className="mr-3 text-[#023E8A]" />
                        {t('science.educationTitle')}
                      </h4>
                      <div className="space-y-4">
                        {Array.isArray(educationItems) && educationItems.length > 0 ? (
                          educationItems.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="flex items-start p-4 bg-white/70 rounded-lg border border-gray-200"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                <span className="text-white text-sm font-bold">{index + 1}</span>
                              </div>
                              <div>
                                <p className="text-gray-700 text-sm">{item}</p>
                              </div>
                            </motion.div>
                          ))
                        ) : (
                          <div className="text-gray-500 text-center py-4">
                            {t('science.noEducation')}
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Experience Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaBook className="mr-3 text-[#023E8A]" />
                        {t('science.experienceTitle')}
                      </h4>
                      <div className="space-y-4">
                        {Array.isArray(experienceItems) && experienceItems.length > 0 ? (
                          experienceItems.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="flex items-start p-4 bg-white/70 rounded-lg border border-gray-200"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                <span className="text-white text-sm font-bold">{index + 1}</span>
                              </div>
                              <div>
                                <p className="text-gray-700 text-sm">{item}</p>
                              </div>
                            </motion.div>
                          ))
                        ) : (
                          <div className="text-gray-500 text-center py-4">
                            {t('science.noExperience')}
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Achievements Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaAward className="mr-3 text-[#023E8A]" />
                        {t('science.achievementsTitle')}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Array.isArray(achievementItems) && achievementItems.length > 0 ? (
                          achievementItems.map((achievement, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.1 }}
                              className="flex items-start p-4 bg-white/50 rounded-lg border border-purple-100"
                            >
                              <div className="text-purple-600 mr-3 mt-1 flex-shrink-0">
                                ✓
                              </div>
                              <span className="text-gray-700 text-sm">{achievement}</span>
                            </motion.div>
                          ))
                        ) : (
                          <div className="col-span-2 text-gray-500 text-center py-4">
                            {t('science.noAchievements')}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Kubatov;

