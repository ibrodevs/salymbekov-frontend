import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaUniversity,
  FaGraduationCap,
  FaUsers,
  FaRocket,
  FaAward,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
  FaFileAlt,
  FaCertificate,
  FaTimes
} from "react-icons/fa";

const AboutInstitutePage = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeDocument, setActiveDocument] = useState(null);

  const carouselImages = [
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5232.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5240.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5280.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5148.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5188.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5211.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5124.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5306.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5370.jpg',
    'https://salymbekov.com/wp-content/uploads/2025/10/img_5361.jpg'
  ];

  const documents = [
    {
      id: 'license',
      title: t('about.license.title'),
      description: t('about.license.description'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/07/licenzija-ait_00001-300x211.webp',
      icon: <FaFileAlt className="text-4xl" />,
      color: "from-[#023E8A] to-[#0077B6]",
      buttonText: t('about.license.button')
    },
    {
      id: 'certificate',
      title: t('about.certificate.title'),
      description: t('about.certificate.description'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/07/qip-shot-screen-137-300x210.png',
      icon: <FaCertificate className="text-4xl" />,
      color: "from-[#0096C7] to-[#00B4D8]",
      buttonText: t('about.certificate.button')
    }
  ];

  const stats = [
    { number: "15+", label: t('about.stats.years'), icon: <FaAward className="text-[#023E8A]" /> },
    { number: "5000+", label: t('about.stats.students'), icon: <FaUsers className="text-[#023E8A]" /> },
    { number: "50+", label: t('about.stats.programs'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "95%", label: t('about.stats.employment'), icon: <FaRocket className="text-[#023E8A]" /> }
  ];

  const values = [
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('about.values.community.title'),
      description: t('about.values.community.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaGlobe className="text-white" size={24} />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('about.values.future.title'),
      description: t('about.values.future.description'),
      color: "bg-[#00B4D8]"
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

  const handleDocumentClick = (documentId) => {
    setActiveDocument(documentId);
  };

  const closeDocumentView = () => {
    setActiveDocument(null);
  };

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
            <strong className="font-bold text-[#023E8A]">
              {line.replace(/<strong>|<\/strong>/g, '')}
            </strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
              y: [0, -30, 0],
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Герой секция */}
        <section className="relative py-24 bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7] overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-10 right-10 opacity-10">
            <FaUniversity size={200} className="text-white" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <FaGraduationCap size={150} className="text-white" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative container mx-auto px-4 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/20 text-white px-6 py-3 rounded-full mb-6 backdrop-blur-sm"
            >
              <FaUniversity className="text-xl" />
              <span className="font-semibold">{t('about.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </section>

        {/* Статистика */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
          </div>
        </section>

        {/* Основной контент */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                {formatTextWithBold(t('about.content'))}
              </div>
            </motion.div>

            {/* Кнопки документов */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 mb-16"
            >
              {documents.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${doc.color} rounded-3xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
                  onClick={() => handleDocumentClick(doc.id)}
                >
                  <div className="mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {doc.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{doc.title}</h3>
                  <p className="text-white/90 mb-6">{doc.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                  >
                    {doc.buttonText}
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>

            {/* Приветственная секция */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6">
                <FaQuoteLeft className="text-lg" />
                <span className="font-semibold">{t('about.welcome.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                {t('about.welcome.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('about.welcome.subtitle')}
              </p>
            </motion.div>

            {/* Наши ценности */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                {t('about.values.title')}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                  >
                    <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Карусель */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className={`overflow-hidden rounded-3xl transition-all duration-500 ease-in-out ${
                isTransitioning 
                  ? 'shadow-2xl scale-105' 
                  : 'shadow-xl scale-100'
              }`}>
                <motion.img 
                  src={carouselImages[currentImage]} 
                  alt={`${t('about.carousel.alt')} ${currentImage + 1}`}
                  className="w-full h-96 md:h-[500px] object-cover transition-all duration-500 ease-in-out"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              {/* Элементы управления каруселью */}
              <motion.button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-[#023E8A] p-4 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-[#023E8A] p-4 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Индикаторы карусели */}
              <div className="flex justify-center mt-6 space-x-3">
                {carouselImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => changeImage(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentImage 
                        ? 'bg-[#023E8A] shadow-lg scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400 hover:shadow-md'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      {/* Модальное окно для просмотра документов */}
      <AnimatePresence>
        {activeDocument && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeDocumentView}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeDocumentView}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <FaTimes className="w-5 h-5" />
              </button>
              
              <div className="p-8 max-h-[80vh] overflow-y-auto">
                {documents
                  .filter(doc => doc.id === activeDocument)
                  .map((doc) => (
                    <div key={doc.id} className="text-center">
                      <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${doc.color} text-white px-6 py-3 rounded-full mb-6`}>
                        {doc.icon}
                        <span className="font-semibold text-xl">{doc.title}</span>
                      </div>
                      <p className="text-gray-600 mb-8 text-lg">{doc.description}</p>
                      <motion.img
                        src={doc.image}
                        alt={doc.title}
                        className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutInstitutePage;