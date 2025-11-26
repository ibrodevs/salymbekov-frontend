import { motion } from "framer-motion";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  FaCode,
  FaMobile,
  FaRocket,
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaCalendarAlt,
  FaArrowRight,
  FaArrowLeft,
  FaLaptop,
  FaCloud,
  FaDatabase,
  FaCog
} from "react-icons/fa";

const MobileDevelopmentPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselImages = [
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2481.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2512.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2476.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2487.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2574.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2662.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2562.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2577.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2674.jpg',
    'https://salymbekov.com/wp-content/uploads/2022/07/bc0b2664.jpg'
  ];

  const stats = [
    { number: "2", label: t('mobileDevelopment.stats.years'), icon: <FaCalendarAlt className="text-[#023E8A]" /> },
    { number: "85%", label: t('mobileDevelopment.stats.employment'), icon: <FaBriefcase className="text-[#023E8A]" /> },
    { number: "50+", label: t('mobileDevelopment.stats.projects'), icon: <FaRocket className="text-[#023E8A]" /> },
    { number: "1000+", label: t('mobileDevelopment.stats.students'), icon: <FaUsers className="text-[#023E8A]" /> }
  ];

  const features = [
    {
      icon: <FaMobile className="text-white" size={24} />,
      title: t('mobileDevelopment.features.mobile.title'),
      description: t('mobileDevelopment.features.mobile.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaLaptop className="text-white" size={24} />,
      title: t('mobileDevelopment.features.crossPlatform.title'),
      description: t('mobileDevelopment.features.crossPlatform.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaCloud className="text-white" size={24} />,
      title: t('mobileDevelopment.features.cloud.title'),
      description: t('mobileDevelopment.features.cloud.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaDatabase className="text-white" size={24} />,
      title: t('mobileDevelopment.features.database.title'),
      description: t('mobileDevelopment.features.database.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const careerPaths = [
    {
      title: t('mobileDevelopment.careerPaths.ios.title'),
      description: t('mobileDevelopment.careerPaths.ios.description'),
      salary: t('mobileDevelopment.careerPaths.ios.salary')
    },
    {
      title: t('mobileDevelopment.careerPaths.android.title'),
      description: t('mobileDevelopment.careerPaths.android.description'),
      salary: t('mobileDevelopment.careerPaths.android.salary')
    },
    {
      title: t('mobileDevelopment.careerPaths.crossPlatform.title'),
      description: t('mobileDevelopment.careerPaths.crossPlatform.description'),
      salary: t('mobileDevelopment.careerPaths.crossPlatform.salary')
    },
    {
      title: t('mobileDevelopment.careerPaths.architect.title'),
      description: t('mobileDevelopment.careerPaths.architect.description'),
      salary: t('mobileDevelopment.careerPaths.architect.salary')
    }
  ];

  const changeImage = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(newIndex);
      setIsTransitioning(false);
    }, 300);
  };

  const nextImage = () => {
    const newIndex = (currentImage + 1) % carouselImages.length;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImage - 1 + carouselImages.length) % carouselImages.length;
    changeImage(newIndex);
  };

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-6 leading-relaxed">
            <strong className="text-2xl font-bold text-gray-800">{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-6 leading-relaxed text-lg text-gray-600">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
            <FaCode className="text-xl" />
            <span className="font-semibold">{t('mobileDevelopment.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('mobileDevelopment.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('mobileDevelopment.subtitle')}
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Обзор программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              {t('mobileDevelopment.overview.title')}
            </h2>
            <div className="prose max-w-none">
              {formatTextWithBold(t('mobileDevelopment.overview.content'))}
            </div>
          </div>
        </motion.div>

        {/* Карусель */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {t('mobileDevelopment.gallery.title')}
            </h2>
            
            <div className="relative">
              <motion.div
                className={`overflow-hidden rounded-2xl transition-all duration-300 ease-in-out ${
                  isTransitioning 
                    ? 'shadow-2xl scale-105' 
                    : 'shadow-lg scale-100'
                }`}
              >
                <img 
                  src={carouselImages[currentImage]} 
                  alt={`Carousel ${currentImage + 1}`}
                  className="w-full h-96 object-cover transition-all duration-300 ease-in-out"
                />
              </motion.div>
              
              {/* Carousel Controls */}
              <motion.button 
                onClick={prevImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-all duration-300 hover:shadow-lg"
              >
                <FaArrowLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button 
                onClick={nextImage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-all duration-300 hover:shadow-lg"
              >
                <FaArrowRight className="w-6 h-6" />
              </motion.button>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 space-x-3">
                {carouselImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => changeImage(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentImage 
                        ? 'bg-[#023E8A] shadow-md scale-110' 
                        : 'bg-gray-300 hover:bg-gray-400 hover:shadow-sm'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Особенности программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('mobileDevelopment.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('mobileDevelopment.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Цели программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              {t('mobileDevelopment.programGoal.title')}
            </h2>
            <div className="prose max-w-none">
              {formatTextWithBold(t('mobileDevelopment.programGoal.content'))}
            </div>
          </div>
        </motion.div>

       

        {/* Другие программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              {t('mobileDevelopment.otherPrograms.title')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                onClick={() => navigate('/education/itCollege/specialties/diplom-computer-science')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white rounded-2xl hover:shadow-xl transition-all duration-300 text-lg font-semibold shadow-lg flex items-center gap-3"
              >
                <FaCode />
                {t('mobileDevelopment.otherPrograms.button1')}
              </motion.button>
              <motion.button 
                onClick={() => navigate('/education/itCollege/specialties/diplom-mobile-computing')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#0096C7] to-[#00B4D8] text-white rounded-2xl hover:shadow-xl transition-all duration-300 text-lg font-semibold shadow-lg flex items-center gap-3"
              >
                <FaMobile />
                {t('mobileDevelopment.otherPrograms.button2')}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('mobileDevelopment.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('mobileDevelopment.cta.description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t('mobileDevelopment.cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileDevelopmentPage;