import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaGraduationCap,
  FaFlask,
  FaLaptopCode,
  FaCalculator,
  FaUsers,
  FaBook,
  FaTrophy,
  FaLightbulb,
  FaMicroscope,
  FaRobot,
  FaArrowRight,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaAward
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  // Изображения центра
  const galleryImages = [
    "https://salymbekov.com/wp-content/uploads/2023/11/img_1300-jpg.webp", "https://salymbekov.com/wp-content/uploads/2023/11/img_1345-jpg.webp", "https://salymbekov.com/wp-content/uploads/2023/11/img_1280-jpg.webp", "https://salymbekov.com/wp-content/uploads/2023/11/img_1203-jpg.webp", "https://salymbekov.com/wp-content/uploads/2023/11/img_1420-jpg.webp",
    "https://salymbekov.com/wp-content/uploads/2023/11/img_1284-jpg.webp", "https://salymbekov.com/wp-content/uploads/2023/11/img_1400-jpg.webp", "https://salymbekov.com/wp-content/uploads/2023/11/img_1251-jpg.webp",
     "https://salymbekov.com/wp-content/uploads/2023/11/img_1221-jpg.webp", "https://salymbekov.com/wp-content/uploads/2023/11/img_1228-jpg.webp","https://salymbekov.com/wp-content/uploads/2023/11/img_1201-jpg.webp",
      "https://salymbekov.com/wp-content/uploads/2023/11/img_1338-jpg.webp", "https://salymbekov.com/wp-content/uploads/2023/11/img_1258-jpg.webp", "https://salymbekov.com/wp-content/uploads/2023/11/img_1238-jpg.webp", "https://salymbekov.com/wp-content/uploads/2023/11/img_1219-jpg.webp"
  ].map(img => `${img}?w=800&h=600&fit=crop`);

  // Статистика центра
  const stats = [
  ];

  // Направления деятельности
  const programs = [
    {
      icon: <FaChalkboardTeacher className="text-white" size={24} />,
      title: t('aboutCenter.programs.courses.title'),
      description: t('aboutCenter.programs.courses.description'),
      color: "bg-[#023E8A]",
      features: t('aboutCenter.programs.courses.features', { returnObjects: true })
    },
    {
      icon: <FaFlask className="text-white" size={24} />,
      title: t('aboutCenter.programs.methods.title'),
      description: t('aboutCenter.programs.methods.description'),
      color: "bg-[#0077B6]",
      features: t('aboutCenter.programs.methods.features', { returnObjects: true })
    },
    {
      icon: <FaTrophy className="text-white" size={24} />,
      title: t('aboutCenter.programs.events.title'),
      description: t('aboutCenter.programs.events.description'),
      color: "bg-[#0096C7]",
      features: t('aboutCenter.programs.events.features', { returnObjects: true })
    },
    {
      icon: <FaLaptopCode className="text-white" size={24} />,
      title: t('aboutCenter.programs.resources.title'),
      description: t('aboutCenter.programs.resources.description'),
      color: "bg-[#00B4D8]",
      features: t('aboutCenter.programs.resources.features', { returnObjects: true })
    }
  ];

  // STEM направления
  const stemAreas = [
    { name: t('aboutCenter.stem.science'), icon: <FaFlask className="text-[#023E8A]" /> },
    { name: t('aboutCenter.stem.technology'), icon: <FaLaptopCode className="text-[#023E8A]" /> },
    { name: t('aboutCenter.stem.engineering'), icon: <FaRobot className="text-[#023E8A]" /> },
    { name: t('aboutCenter.stem.math'), icon: <FaCalculator className="text-[#023E8A]" /> }
  ];

  // Электронные ресурсы
  const digitalResources = [
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
            <FaMapMarkerAlt className="text-xl" />
            <span className="font-semibold">{t('aboutCenter.badge')}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('aboutCenter.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('aboutCenter.subtitle')}
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
            {/* О центре */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {t('aboutCenter.description.title')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {t('aboutCenter.description.content1')}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t('aboutCenter.description.content2')}
                </p>
              </div>

              {/* STEM направления */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-6 md:p-8 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaLightbulb className="text-xl" />
                  <h3 className="text-xl md:text-2xl font-bold">{t('aboutCenter.stem.title')}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {stemAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {area.icon}
                      <span className="font-medium">{area.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Галерея */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200"
            >
              <div className="relative">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <img 
                    src={galleryImages[currentImage]}
                    alt={`Центр образования ${currentImage + 1}`}
                    className="w-full h-64 md:h-80 object-cover rounded-2xl"
                  />
                  
                  {/* Наложение градиента */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                  
                  {/* Номер изображения */}
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImage + 1} / {galleryImages.length}
                  </div>
                </motion.div>

                {/* Кнопки навигации */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <motion.button
                    onClick={prevImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  
                  <motion.button
                    onClick={nextImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Индикаторы */}
              <div className="flex justify-center mt-6 space-x-2">
                {galleryImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    whileHover={{ scale: 1.2 }}
                    className={`w-3 h-3 rounded-full transition duration-300 ${
                      index === currentImage ? 'bg-[#023E8A]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Направления деятельности */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t('aboutCenter.programs.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('aboutCenter.programs.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 ${program.color} rounded-2xl flex items-center justify-center mb-3 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
                  {program.description}
                </p>
                <div className="space-y-1">
                  
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Электронные ресурсы */}
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
                {t('aboutCenter.resources.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('aboutCenter.resources.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {digitalResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 md:p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                    {resource.name}
                  </div>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Миссия центра */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 md:p-12 text-center text-white">
            <FaAward className="text-4xl md:text-5xl mx-auto mb-6 text-yellow-300" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {t('aboutCenter.mission.title')}
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              {t('aboutCenter.mission.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <FaUsers className="text-yellow-300" />
                <span>{t('aboutCenter.mission.forAll')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLightbulb className="text-yellow-300" />
                <span>{t('aboutCenter.mission.innovation')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-yellow-300" />
                <span>{t('aboutCenter.mission.preparation')}</span>
              </div>
            </div>
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
            {t('aboutCenter.cta.title')}
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            {t('aboutCenter.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('aboutCenter.cta.visit')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('aboutCenter.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;