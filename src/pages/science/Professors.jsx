import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUserGraduate, FaBook, FaAward, FaGlobeAmericas, FaGraduationCap } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Локальные фото профессоров
import seanParkPhoto from '../../assets/science/professors/99.png';
import pendharkarPhoto from '../../assets/science/professors/dinesh-pendharkar-211x300.png';
import potapovaPhoto from '../../assets/science/professors/qip-shot-screen-152-300x207.png';
import osmonovPhoto from '../../assets/science/professors/qip-shot-screen-153-257x300.png';
// import bilgazievPhoto from '../../assets/science/professors/photo_2023-06-09_17-07-45-225x300.webp';
import erkebaevPhoto from '../../assets/science/professors/qip-shot-screen-151-300x293.png';
import madaminovPhoto from '../../assets/science/professors/gapyr-madaminov-300x257.png';
// import kubatovPhoto from '../../assets/science/professors/jeduard-kubatov-221x300.png';
import shaltakovaPhoto from '../../assets/science/professors/shaltakova-gulbu-chalovna-300x300.png';

const Professors = () => {
  const { t } = useTranslation();
  const [activeProfessor, setActiveProfessor] = useState('seanPark');

  const professorSections = [
    { id: 'seanPark', nameKey: 'science.seanPark.name', icon: FaUserGraduate, photo: seanParkPhoto },
    { id: 'pendharkar', nameKey: 'science.pendharkar.name', icon: FaUserGraduate, photo: pendharkarPhoto },
    { id: 'potapova', nameKey: 'science.potapova.name', icon: FaUserGraduate, photo: osmonovPhoto },
    { id: 'osmonov', nameKey: 'science.osmonov.name', icon: FaUserGraduate, photo: potapovaPhoto },
    { id: 'erkebaev', nameKey: 'science.erkebaev.name', icon: FaUserGraduate, photo: erkebaevPhoto },
    { id: 'madaminov', nameKey: 'science.madaminov.name', icon: FaUserGraduate, photo: madaminovPhoto },
    // { id: 'bilgaziev', nameKey: 'science.bilgaziev.name', icon: FaUserGraduate, photo: bilgazievPhoto },
    // { id: 'kubatov', nameKey: 'science.kubatov.name', icon: FaUserGraduate, photo: kubatovPhoto },
    { id: 'shaltakova', nameKey: 'science.shaltakova.name', icon: FaUserGraduate, photo: shaltakovaPhoto },
    { id: 'kachibek', nameKey: 'science.kachibek.name', icon: FaUserGraduate, photo: "https://salymbekov.com/wp-content/uploads/2025/10/560461145_18089210416843726_5595910347630151498_n-300x300.jpg" }
  ];

  const professorKey = activeProfessor;
  
  // Get translation data with error handling
  let educationData, experienceData, achievementsData;
  try {
    educationData = t(`science.${professorKey}.education`, { returnObjects: true });
    experienceData = t(`science.${professorKey}.experience`, { returnObjects: true });
    achievementsData = t(`science.${professorKey}.achievements`, { returnObjects: true });
  } catch (error) {
    console.error(`Translation error for ${professorKey}:`, error);
    educationData = [];
    experienceData = [];
    achievementsData = [];
  }
  
  const currentProfessor = {
    name: t(`science.${professorKey}.name`, { defaultValue: professorKey }),
    position: t(`science.${professorKey}.position`, { defaultValue: '' }),
    photo: professorSections.find(p => p.id === activeProfessor)?.photo || seanParkPhoto,
    description: t(`science.${professorKey}.description`, { defaultValue: '' }),
    education: Array.isArray(educationData) ? educationData : [],
    experience: Array.isArray(experienceData) ? experienceData : [],
    achievements: Array.isArray(achievementsData) ? achievementsData : []
  };

  // Safety check: if professor data is missing, show error in console but still render
  if (!currentProfessor.name || currentProfessor.name === professorKey) {
    console.warn(`Professor translation missing for: ${activeProfessor}`);
  }


  return (
    <div className="min-h-screen bg-gray-50">
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
                {t('science.common.professors')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {currentProfessor.name}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {currentProfessor.position}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUserGraduate className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('science.common.professors')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {professorSections.map((section) => {
                  const SectionIcon = section.icon;
                  // const hasOwnPage = section.id === 'bilgaziev' || section.id === 'kubatov';
                  const hasOwnPage = false;
                  
                  if (hasOwnPage) {
                    return (
                      <motion.div
                        key={section.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          to={`/science/professors/${section.id}`}
                          className="flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all text-gray-700 hover:bg-gray-50"
                        >
                          <SectionIcon className="mr-3 text-lg" />
                          <span className="font-medium text-sm">{t(section.nameKey)}</span>
                        </Link>
                      </motion.div>
                    );
                  }
                  
                  // Skip rendering content for professors with own pages in main view
                  if (activeProfessor === section.id && hasOwnPage) {
                    return null;
                  }
                  
                  return (
                    <motion.div
                      key={section.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => setActiveProfessor(section.id)}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          activeProfessor === section.id
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium text-sm">{t(section.nameKey)}</span>
                      </button>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>

          <main className="flex-1">
            <motion.div
              key={activeProfessor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-80 flex-shrink-0"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={currentProfessor.photo} 
                      alt={currentProfessor.name}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-blue-50 p-4 rounded-xl border border-blue-200"
                    >
                      <div className="flex items-center">
                        <FaGraduationCap className="text-[#023E8A] mr-3" />
                        <span className="font-semibold text-gray-900">{t('science.common.professorsTitle')}</span>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">{currentProfessor.position}</p>
                    </motion.div>
                  </div>
                </motion.div>

                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{currentProfessor.name}</h2>
                    
                    <div className="prose prose-lg max-w-none text-gray-700 mb-8">
                      <p className="text-lg leading-relaxed mb-6">
                        {currentProfessor.description}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaBook className="mr-3 text-[#023E8A]" />
                        {t('science.common.educationTitle')}
                      </h4>
                      <div className="space-y-3">
                        {currentProfessor.education.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
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

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaGlobeAmericas className="mr-3 text-[#023E8A]" />
                        {t('science.common.experienceTitle')}
                      </h4>
                      <div className="space-y-3">
                        {currentProfessor.experience.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
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

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaAward className="mr-3 text-[#023E8A]" />
                        {t('science.common.achievementsTitle')}
                      </h4>
                      <div className="space-y-3">
                        {currentProfessor.achievements.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
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

export default Professors;