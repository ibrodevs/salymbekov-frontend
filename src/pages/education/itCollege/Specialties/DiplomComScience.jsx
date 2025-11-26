import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaLaptop,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaStar,
  FaCalendarAlt,
  FaCog,
  FaNetworkWired,
  FaPython,
  FaJava,
  FaJs
} from "react-icons/fa";

const SoftwareDevelopmentPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

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
    { number: "2.5", label: t('softwareDevelopment.stats.duration'), icon: <FaCalendarAlt className="text-[#023E8A]" /> },
    { number: "95%", label: t('softwareDevelopment.stats.employment'), icon: <FaBriefcase className="text-[#023E8A]" /> },
    { number: "500+", label: t('softwareDevelopment.stats.graduates'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "4.8", label: t('softwareDevelopment.stats.rating'), icon: <FaStar className="text-[#023E8A]" /> }
  ];

  const technologies = [
    {
      icon: <FaPython className="text-3xl" />,
      name: "Python",
      level: t('softwareDevelopment.technologies.advanced'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaJava className="text-3xl" />,
      name: "Java",
      level: t('softwareDevelopment.technologies.advanced'),
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <FaJs className="text-3xl" />,
      name: "JavaScript",
      level: t('softwareDevelopment.technologies.expert'),
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <FaDatabase className="text-3xl" />,
      name: "SQL/NoSQL",
      level: t('softwareDevelopment.technologies.advanced'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaCloud className="text-3xl" />,
      name: "Cloud",
      level: t('softwareDevelopment.technologies.intermediate'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaMobile className="text-3xl" />,
      name: "Mobile Dev",
      level: t('softwareDevelopment.technologies.intermediate'),
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const careerPaths = [
    {
      icon: <FaCode className="text-white" size={24} />,
      title: t('softwareDevelopment.careers.frontend.title'),
      description: t('softwareDevelopment.careers.frontend.description'),
      salary: t('softwareDevelopment.careers.frontend.salary'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaCog className="text-white" size={24} />,
      title: t('softwareDevelopment.careers.backend.title'),
      description: t('softwareDevelopment.careers.backend.description'),
      salary: t('softwareDevelopment.careers.backend.salary'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaMobile className="text-white" size={24} />,
      title: t('softwareDevelopment.careers.mobile.title'),
      description: t('softwareDevelopment.careers.mobile.description'),
      salary: t('softwareDevelopment.careers.mobile.salary'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaDatabase className="text-white" size={24} />,
      title: t('softwareDevelopment.careers.database.title'),
      description: t('softwareDevelopment.careers.database.description'),
      salary: t('softwareDevelopment.careers.database.salary'),
      color: "bg-[#00B4D8]"
    }
  ];

  const otherPrograms = [
    {
      title: t('softwareDevelopment.otherPrograms.multiApps.title'),
      description: t('softwareDevelopment.otherPrograms.multiApps.description'),
      icon: <FaNetworkWired className="text-3xl" />,
      color: "from-green-600 to-emerald-600",
      path: '/education/itCollege/specialties/diplom-multi-applications'
    },
    {
      title: t('softwareDevelopment.otherPrograms.mobileComp.title'),
      description: t('softwareDevelopment.otherPrograms.mobileComp.description'),
      icon: <FaMobile className="text-3xl" />,
      color: "from-purple-600 to-pink-600",
      path: '/education/itCollege/specialties/diplom-mobile-computing'
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

      <div className="relative z-10">
        {/* Герой секция */}
        <section className="relative py-24 bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7] overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-10 right-10 opacity-10">
            <FaCode size={200} className="text-white" />
          </div>
          <div className="absolute bottom-10 left-10 opacity-10">
            <FaLaptop size={150} className="text-white" />
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
              <FaCode className="text-xl" />
              <span className="font-semibold">{t('softwareDevelopment.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t('softwareDevelopment.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {t('softwareDevelopment.subtitle')}
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
            {/* Вкладки */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-12"
            >
              <div className="flex overflow-x-auto">
                {['overview', 'program', 'careers', 'technologies'].map((tab) => (
                  <motion.button
                    key={tab}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {t(`softwareDevelopment.tabs.${tab}`)}
                  </motion.button>
                ))}
              </div>

              {/* Контент вкладок */}
              <div className="p-8">
                {activeTab === 'overview' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      {t('softwareDevelopment.itEducation.title')}
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                      {formatTextWithBold(t('softwareDevelopment.itEducation.content'))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'program' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      {t('softwareDevelopment.programDescription.title')}
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                      {formatTextWithBold(t('softwareDevelopment.programDescription.content'))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-6">
                      {t('softwareDevelopment.programGoal.title')}
                    </h3>
                    <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                      {formatTextWithBold(t('softwareDevelopment.programGoal.content'))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'careers' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      {t('softwareDevelopment.careerOpportunities.title')}
                    </h2>
                    <div className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-8">
                      {formatTextWithBold(t('softwareDevelopment.careerOpportunities.content'))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {careerPaths.map((career, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className={`w-16 h-16 ${career.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            {career.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3">
                            {career.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {career.description}
                          </p>
                          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                            {career.salary}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'technologies' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                      {t('softwareDevelopment.technologies.title')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 text-white`}>
                            {tech.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {tech.name}
                          </h3>
                          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {tech.level}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Карусель */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mb-16"
            >
              <div className={`overflow-hidden rounded-3xl transition-all duration-500 ease-in-out ${
                isTransitioning 
                  ? 'shadow-2xl scale-105' 
                  : 'shadow-xl scale-100'
              }`}>
                <motion.img 
                  src={carouselImages[currentImage]} 
                  alt={`${t('softwareDevelopment.carousel.alt')} ${currentImage + 1}`}
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

            {/* Другие программы */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                {t('softwareDevelopment.otherPrograms.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {otherPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${program.color} rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
                    onClick={() => navigate(program.path)}
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">{program.description}</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300"
                    >
                      {t('softwareDevelopment.otherPrograms.learnMore')}
                      <FaArrowRight className="text-sm" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Призыв к действию */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-4">
                {t('softwareDevelopment.cta.title')}
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                {t('softwareDevelopment.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {t('softwareDevelopment.cta.applyNow')}
                  <FaArrowRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  {t('softwareDevelopment.cta.contact')}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SoftwareDevelopmentPage;