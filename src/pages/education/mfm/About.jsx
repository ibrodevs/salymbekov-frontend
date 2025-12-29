import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaArrowRight,
  FaHeart,
  FaUsers,
  FaGraduationCap,
  FaFlask,
  FaStethoscope,
  FaHospital,
  FaBookMedical,
  FaAward,
  FaGlobe,
  FaShieldAlt,
  FaMicroscope,
  FaUserMd,
  FaLaptopMedical
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MedicalFaculty = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Статистика факультета
  const stats = [
  ];

  // Преимущества обучения
  const benefits = [
    {
      icon: <FaStethoscope className="text-white" size={24} />,
      title: t('medicalFaculty.benefits.practice.title'),
      description: t('medicalFaculty.benefits.practice.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaBookMedical className="text-white" size={24} />,
      title: t('medicalFaculty.benefits.modernEducation.title'),
      description: t('medicalFaculty.benefits.modernEducation.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaGlobe className="text-white" size={24} />,
      title: t('medicalFaculty.benefits.international.title'),
      description: t('medicalFaculty.benefits.international.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaShieldAlt className="text-white" size={24} />,
      title: t('medicalFaculty.benefits.quality.title'),
      description: t('medicalFaculty.benefits.quality.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Лаборатории и оборудование
  const facilities = t('medicalFaculty.facilities.list', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.03, 0.1, 0.03],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Герой секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaStethoscope className="text-xl" />
            <span className="font-semibold">{t('medicalFaculty.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('medicalFaculty.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('medicalFaculty.hero.subtitle')}
          </p>
        </motion.div>


        {/* Кнопка Высшая школа медицины */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <motion.a
            href="https://www.su-medical-school.com/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t('medicalFaculty.higherSchoolButton')}
            <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>

        {/* Основной контент с аккордеоном */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="grid gap-6">
            {/* О факультете */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">{t('medicalFaculty.about.title')}</h2>
                  <motion.button
                    onClick={() => toggleSection('about')}
                    className="flex items-center gap-2 text-[#023E8A] font-semibold"
                  >
                    {expandedSections.about ? t('medicalFaculty.showLess') : t('medicalFaculty.showMore')}
                    <motion.div
                      animate={{ rotate: expandedSections.about ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight className="text-sm" />
                    </motion.div>
                  </motion.button>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('medicalFaculty.about.description1')}
                </p>
                
                {expandedSections.about && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {t('medicalFaculty.about.description2')}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Сотрудники и преподаватели */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">{t('medicalFaculty.staff.title')}</h2>
                  <motion.button
                    onClick={() => toggleSection('staff')}
                    className="flex items-center gap-2 text-[#023E8A] font-semibold"
                  >
                    {expandedSections.staff ? t('medicalFaculty.showLess') : t('medicalFaculty.showMore')}
                    <motion.div
                      animate={{ rotate: expandedSections.staff ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight className="text-sm" />
                    </motion.div>
                  </motion.button>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('medicalFaculty.staff.description1')}
                </p>
                
                {expandedSections.staff && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {t('medicalFaculty.staff.description2')}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Учебная база */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-800">{t('medicalFaculty.facilities.title')}</h2>
                  <motion.button
                    onClick={() => toggleSection('facilities')}
                    className="flex items-center gap-2 text-[#023E8A] font-semibold"
                  >
                    {expandedSections.facilities ? t('medicalFaculty.showLess') : t('medicalFaculty.showMore')}
                    <motion.div
                      animate={{ rotate: expandedSections.facilities ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight className="text-sm" />
                    </motion.div>
                  </motion.button>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('medicalFaculty.facilities.description1')}
                </p>
                
                {expandedSections.facilities && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 space-y-4"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {t('medicalFaculty.facilities.description2')}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {facilities.map((facility, index) => (
                        <div key={index} className="flex items-center gap-3 bg-blue-50 rounded-xl p-4">
                          <FaMicroscope className="text-[#023E8A] flex-shrink-0" />
                          <span className="text-gray-700">{facility}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {t('medicalFaculty.facilities.description3')}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Преимущества обучения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('medicalFaculty.whyChoose')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('medicalFaculty.whyChooseDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('medicalFaculty.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('medicalFaculty.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://www.su-medical-school.com/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('medicalFaculty.cta.visitSite')}
              <FaArrowRight />
            </motion.a>
           
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MedicalFaculty;