import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaCalendarAlt,
  FaGraduationCap,
  FaAward,
  FaUsers,
  FaClinicMedical,
  FaHeartbeat,
  FaAmbulance,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Internship = () => {
  const { t } = useTranslation();
  const [activeSpecialty, setActiveSpecialty] = useState(0);

  // Статистика интернатуры
  const stats = [
    { number: "3", label: t('internship.stats.years'), icon: <FaCalendarAlt className="text-[#023E8A]" /> },
    { number: "2", label: t('internship.stats.specialties'), icon: <FaUserMd className="text-[#023E8A]" /> },
    { number: "3", label: t('internship.stats.clinics'), icon: <FaHospital className="text-[#023E8A]" /> },
    { number: "100%", label: t('internship.stats.practical'), icon: <FaStethoscope className="text-[#023E8A]" /> }
  ];

  // Клиники университета
  const clinics = [
    {
      name: "DOC University Clinic",
      description: t('internship.clinics.docClinic'),
      icon: <FaClinicMedical className="text-white" size={24} />,
      color: "bg-[#023E8A]"
    },
    {
      name: "DOC University Hospital",
      description: t('internship.clinics.docHospital'),
      icon: <FaHospital className="text-white" size={24} />,
      color: "bg-[#0077B6]"
    },
    {
      name: "Lazmed Clinic",
      description: t('internship.clinics.lazmed'),
      icon: <FaHeartbeat className="text-white" size={24} />,
      color: "bg-[#0096C7]"
    }
  ];

  // Направления интернатуры
  const specialties = [
    {
      title: t('internship.specialties.gp.title'),
      description: t('internship.specialties.gp.description'),
      icon: <FaUserMd className="text-[#023E8A]" />,
      areas: t('internship.specialties.gp.areas', { returnObjects: true }),
      image: "https://salymbekov.com/wp-content/uploads/2023/03/9-1024x683.jpg"
    },
    {
      title: t('internship.specialties.emergency.title'),
      description: t('internship.specialties.emergency.description'),
      icon: <FaAmbulance className="text-[#023E8A]" />,
      areas: t('internship.specialties.emergency.areas', { returnObjects: true }),
      image: "https://salymbekov.com/wp-content/uploads/2023/03/6-1024x683.jpg"
    }
  ];

  // Преимущества интернатуры
  const benefits = [
    {
      icon: <FaUserMd className="text-white" size={24} />,
      title: t('internship.benefits.mentorship.title'),
      description: t('internship.benefits.mentorship.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaStethoscope className="text-white" size={24} />,
      title: t('internship.benefits.practice.title'),
      description: t('internship.benefits.practice.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('internship.benefits.education.title'),
      description: t('internship.benefits.education.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('internship.benefits.career.title'),
      description: t('internship.benefits.career.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  // Области медицины для практики
  const medicalAreas = t('internship.medicalAreas', { returnObjects: true });

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
            <span className="font-semibold">{t('internship.badge')}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('internship.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('internship.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-1 md:mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Основной контент */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* О программе */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {t('internship.about.title')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('internship.about.description1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('internship.about.description2')}
                </p>
              </div>

              {/* Формат обучения */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-6 md:p-8 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="text-xl" />
                  <h3 className="text-xl md:text-2xl font-bold">{t('internship.format.title')}</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCalendarAlt />
                    <span>{t('internship.format.duration')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUsers />
                    <span>{t('internship.format.basis')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaGraduationCap />
                    <span>{t('internship.format.requirement')}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Клиники */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {t('internship.clinics.title')}
              </h3>
              
              <div className="space-y-4">
                {clinics.map((clinic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                  >
                    <div className={`w-12 h-12 ${clinic.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {clinic.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{clinic.name}</h4>
                      <p className="text-gray-600 text-sm">{clinic.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Направления интернатуры */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('internship.specialties.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('internship.specialties.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Переключение специальностей */}
            <div className="flex border-b border-gray-200">
              {specialties.map((specialty, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSpecialty(index)}
                  className={`flex-1 py-4 px-6 text-lg font-semibold transition-colors duration-300 ${
                    activeSpecialty === index
                      ? 'bg-[#023E8A] text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3 justify-center">
                    {specialty.icon}
                    {specialty.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Контент специальности */}
            <div className="p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {specialties[activeSpecialty].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {specialties[activeSpecialty].description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-800">{t('internship.specialties.areas')}:</h4>
                   
                  </div>
                </div>
                
                <motion.div
                  key={activeSpecialty}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden"
                >
                  <img 
                    src={specialties[activeSpecialty].image}
                    alt={specialties[activeSpecialty].title}
                    className="w-full h-64 md:h-80 object-cover rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Области медицинской практики */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                {t('internship.practiceAreas.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('internship.practiceAreas.description')}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
           
            </div>
          </div>
        </motion.div>

        {/* Преимущества интернатуры */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('internship.benefits.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('internship.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {t('internship.cta.title')}
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            {t('internship.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('internship.cta.apply')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('internship.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Internship;