import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaFileAlt, FaDatabase, FaUniversity } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ELibrary = () => {
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
    },
    { 
      name: t('studentResources.sections.library'), 
      icon: FaBook,
      disabled: true,
      active: true,
    },
    { 
      path: "/student/resources/edu-resources", 
      name: t('studentResources.sections.eduResources'), 
      icon: FaUniversity,
    },
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
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.button
            onClick={() => navigate('/student')}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -3 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-white mb-6 hover:text-blue-200 transition-colors duration-200"
          >
            <FaArrowLeft />
            <span>{t('studentResources.backToStudent')}</span>
          </motion.button>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t('eLibrary.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-blue-100 text-lg"
          >
            {t('eLibrary.subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
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
                        } ${section.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                      >
                        <SectionIcon className={`mr-3 ${section.active ? 'text-blue-600' : 'text-gray-500'}`} />
                        <span className="text-xs font-semibold">{section.name}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Content */}
          <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center py-12">
                <FaBook className="text-5xl text-blue-500 mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {t('eLibrary.content.title')}
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  {t('eLibrary.content.status')}
                </p>
                <div className="max-w-2xl mx-auto text-left bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg text-blue-900 mb-3">
                    {t('eLibrary.content.featuresTitle')}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    {t('eLibrary.content.features', { returnObjects: true }).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default ELibrary;