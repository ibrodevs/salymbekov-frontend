import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaDownload, FaFileAlt, FaCalendarCheck, FaClock, FaChartLine, FaRegFileAlt, FaLaptop, FaBookOpen, FaHospital, FaStethoscope, FaEye, FaClinicMedical, FaMapMarkerAlt, FaPhone, FaClock as FaTime, FaBed, FaHandHoldingHeart, FaGlobe, FaBrain, FaUsersCog } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import img1 from '../../../assets/science/studentsphoto/1.jpg';
import img2 from '../../../assets/science/studentsphoto/2.jpg';
import img3 from '../../../assets/science/studentsphoto/3.jpg';
import img4 from '../../../assets/science/studentsphoto/4.jpg';
import img5 from '../../../assets/science/studentsphoto/5.jpg';
import img6 from '../../../assets/science/studentsphoto/6.jpg';
import img7 from '../../../assets/science/studentsphoto/7.jpg';
import img8 from '../../../assets/science/studentsphoto/8.jpg';
import img9 from '../../../assets/science/studentsphoto/9.jpg';
import img10 from '../../../assets/science/studentsphoto/10.jpg';
import img11 from '../../../assets/science/studentsphoto/11.jpg';
import img12 from '../../../assets/science/studentsphoto/12.jpg';
import img13 from '../../../assets/science/studentsphoto/13.jpg';
import img14 from '../../../assets/science/studentsphoto/14.jpg';
import img15 from '../../../assets/science/studentsphoto/15.jpg';
import img16 from '../../../assets/science/studentsphoto/16.jpg';

const MedicalCenter = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const opportunitiesSections = [
    { 
      path: "/student/opportunities/medical", 
      name: t('medicalCenter.sections.medical'), 
      icon: FaHospital,
      active: true,
    },
    { 
      path: "/student/opportunities/dorm", 
      name: t('medicalCenter.sections.dorm'), 
      icon: FaBed,
    },
    { 
      path: "/student/opportunities/social", 
      name: t('medicalCenter.sections.social'), 
      icon: FaHandHoldingHeart,
    },
    { 
      path: "/student/opportunities/courses", 
      name: t('medicalCenter.sections.courses'), 
      icon: FaBookOpen,
    },
    { 
      path: "/student/opportunities/mobility", 
      name: t('medicalCenter.sections.mobility'), 
      icon: FaGlobe,
    },
    { 
      path: "/student/opportunities/psychology", 
      name: t('medicalCenter.sections.psychology'), 
      icon: FaBrain,
    },
    { 
      path: "/student/opportunities/service-center", 
      name: t('medicalCenter.sections.serviceCenter'), 
      icon: FaUsersCog,
    },
    { 
      path: "/student/opportunities/adaptation", 
      name: t('medicalCenter.sections.adaptation'), 
      icon: FaUserGraduate,
    },
  ];

  const medicalCenters = [
    {
      icon: FaHospital,
      title: t('medicalCenter.centers.clinic.title'),
      description: t('medicalCenter.centers.clinic.description'),
      details: t('medicalCenter.centers.clinic.details', { returnObjects: true }),
      specializations: t('medicalCenter.centers.clinic.specializations', { returnObjects: true }),
      address: t('medicalCenter.centers.clinic.address'),
      color: "from-blue-500 to-cyan-500",
      images: [img1, img2, img3, img4]
    },
    {
      icon: FaClinicMedical,
      title: t('medicalCenter.centers.hospital.title'),
      description: t('medicalCenter.centers.hospital.description'),
      details: t('medicalCenter.centers.hospital.details', { returnObjects: true }),
      specializations: t('medicalCenter.centers.hospital.specializations', { returnObjects: true }),
      address: t('medicalCenter.centers.hospital.address'),
      color: "from-green-500 to-emerald-500",
      images: [img5, img6, img7, img8]
    },
    {
      icon: FaStethoscope,
      title: t('medicalCenter.centers.lazmed.title'),
      description: t('medicalCenter.centers.lazmed.description'),
      details: t('medicalCenter.centers.lazmed.details', { returnObjects: true }),
      specializations: t('medicalCenter.centers.lazmed.specializations', { returnObjects: true }),
      address: t('medicalCenter.centers.lazmed.address'),
      color: "from-purple-500 to-pink-500",
      images: [img9, img10, img11, img12]
    },
    {
      icon: FaEye,
      title: t('medicalCenter.centers.eyeCenter.title'),
      description: t('medicalCenter.centers.eyeCenter.description'),
      details: t('medicalCenter.centers.eyeCenter.details', { returnObjects: true }),
      specializations: t('medicalCenter.centers.eyeCenter.specializations', { returnObjects: true }),
      equipment: t('medicalCenter.centers.eyeCenter.equipment', { returnObjects: true }),
      address: t('medicalCenter.centers.eyeCenter.address'),
      color: "from-orange-500 to-red-500",
      images: [img13, img14, img15, img16]
    }
  ];

  // Получаем данные с проверкой типа
  const medicalPoints = Array.isArray(t('medicalCenter.medicalPoints.locations', { returnObjects: true })) 
    ? t('medicalCenter.medicalPoints.locations', { returnObjects: true }) 
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('medicalCenter.category')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('medicalCenter.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              {t('medicalCenter.subtitle')}
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
                  <h3 className="font-bold text-lg">{t('medicalCenter.sidebarTitle')}</h3>
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
              {/* Введение */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                    <FaHospital className="mr-3 text-[#023E8A]" />
                    {t('medicalCenter.networkTitle')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t('medicalCenter.networkDescription')}
                  </p>
                </div>
              </motion.div>

              {/* Медицинские центры */}
              <div className="space-y-6">
                {medicalCenters.map((center, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row gap-5">
                      {/* Основная информация */}
                      <div className="lg:w-2/3">
                        <div className="flex items-start mb-4">
                          <div className={`w-14 h-14 bg-gradient-to-br ${center.color} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0`}>
                            <center.icon className="text-white text-xl" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {center.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm mb-3">
                              {center.description}
                            </p>
                          </div>
                        </div>

                        {/* Детали */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                              <FaMapMarkerAlt className="mr-2 text-[#023E8A]" />
                              {t('medicalCenter.address')}
                            </h4>
                            <p className="text-gray-700 text-sm">{center.address}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm">{t('medicalCenter.features')}</h4>
                            <div className="space-y-1">
                              {(Array.isArray(center.details) ? center.details : []).map((detail, idx) => (
                                <p key={idx} className="text-gray-700 text-xs">• {detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Специализации */}
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">{t('medicalCenter.specializations')}</h4>
                          <div className="flex flex-wrap gap-1">
                            {(Array.isArray(center.specializations) ? center.specializations : []).map((spec, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-white/70 rounded-full text-xs text-gray-700 border border-green-200"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Оборудование (если есть) */}
                        {center.equipment && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm">{t('medicalCenter.equipment')}</h4>
                            <div className="space-y-1">
                              {(Array.isArray(center.equipment) ? center.equipment : []).map((equip, idx) => (
                                <p key={idx} className="text-gray-700 text-xs">• {equip}</p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Галерея изображений */}
                      <div className="lg:w-1/3">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">{t('medicalCenter.gallery')}</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {center.images.map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: imgIndex * 0.05 }}
                              className="aspect-square bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-200"
                            >
                              <img 
                                src={image} 
                                alt={`${center.title} - ${imgIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Медпункты */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
                className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <FaClinicMedical className="mr-2 text-[#023E8A]" />
                  {t('medicalCenter.medicalPoints.title')}
                </h3>
                <p className="text-gray-700 mb-3 text-sm">
                  {t('medicalCenter.medicalPoints.description')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {medicalPoints.map((location, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center p-2 bg-white/70 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-white text-xs font-bold">+</span>
                      </div>
                      <span className="text-gray-700 text-xs">{location}</span>
                    </motion.div>
                  ))}
                </div>
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
                  <FaHospital className="text-yellow-600 text-xl mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">
                      {t('medicalCenter.contact.title')}
                    </h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      {t('medicalCenter.contact.description')}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('medicalCenter.contact.phone')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('medicalCenter.contact.email')}
                      </span>
                      <span className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 border border-yellow-300">
                        {t('medicalCenter.contact.hours')}
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

export default MedicalCenter;