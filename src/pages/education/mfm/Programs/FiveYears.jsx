import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaStethoscope,
  FaDownload,
  FaGraduationCap,
  FaUserMd,
  FaHeartbeat,
  FaCalendarAlt,
  FaAward,
  FaUsers,
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaPause
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const GeneralMedicinePage = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTextWithBold = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.includes('<strong>')) {
        return (
          <p key={index} className="mb-6 leading-relaxed">
            <strong className="text-2xl text-[#023E8A] font-bold">{line.replace(/<strong>|<\/strong>/g, '')}</strong>
          </p>
        );
      }
      return (
        <p key={index} className="mb-6 leading-relaxed text-lg text-gray-700">
          {line}
        </p>
      );
    });
  };

  const carouselImages = [
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b6732.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b6708.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b6617.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b5048.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b6580.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b5031.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b5004.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b5012.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b4697.jpg',
    'https://salymbekov.com/wp-content/uploads/2023/03/bc0b4673.jpg'
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Автопрокрутка карусели
  useState(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextImage, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Статистика программы
  const stats = [
  ];

  // Особенности программы
  const features = [
    {
      icon: <FaStethoscope className="text-white" size={24} />,
      title: t('generalMedicine.features.clinical.title'),
      description: t('generalMedicine.features.clinical.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaHeartbeat className="text-white" size={24} />,
      title: t('generalMedicine.features.practical.title'),
      description: t('generalMedicine.features.practical.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('generalMedicine.features.international.title'),
      description: t('generalMedicine.features.international.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('generalMedicine.features.quality.title'),
      description: t('generalMedicine.features.quality.description'),
      color: "bg-[#00B4D8]"
    }
  ];

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
            <span className="font-semibold">{t('generalMedicine.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('generalMedicine.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('generalMedicine.subtitle')}
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

        {/* Основной контент */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Текстовый контент */}
            <div className="space-y-8">
              {/* Введение */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
              >
                <div className="text-gray-700">
                  {formatTextWithBold(t('generalMedicine.introduction'))}
                </div>
              </motion.div>

              {/* Информация о программе */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
              >
                <div className="text-gray-700">
                  {formatTextWithBold(t('generalMedicine.programInfo'))}
                </div>
              </motion.div>

              {/* Кнопка загрузки учебного плана */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <motion.a
                  href="https://salymbekov.com/wp-content/uploads/2024/01/curriculum-general-medicine.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaDownload className="text-xl" />
                  {t('generalMedicine.curriculumButton')}
                </motion.a>
              </motion.div>
            </div>

            {/* Карусель изображений */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200"
            >
              <div className="relative">
                {/* Основное изображение */}
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <img 
                    src={carouselImages[currentImage]}
                    alt={`Medical education ${currentImage + 1}`}
                    className="w-full h-80 md:h-96 object-cover rounded-2xl"
                  />
                  
                  {/* Наложение градиента */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                  
                  {/* Номер изображения */}
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImage + 1} / {carouselImages.length}
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
                    <FaArrowLeft className="text-lg" />
                  </motion.button>
                  
                 
                  
                  <motion.button
                    onClick={nextImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300"
                  >
                    <FaArrowRight className="text-lg" />
                  </motion.button>
                </div>
              </div>

              {/* Индикаторы */}
              <div className="flex justify-center mt-6 space-x-2">
                {carouselImages.map((_, index) => (
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

        {/* Дополнительный контент */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="grid gap-8">
            {/* Описание программы */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="text-gray-700">
                {formatTextWithBold(t('generalMedicine.programDescription'))}
              </div>
            </motion.div>

            {/* Цели программы */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="text-gray-700">
                {formatTextWithBold(t('generalMedicine.programGoal'))}
              </div>
            </motion.div>

            {/* Профессиональная деятельность */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
            >
              <div className="text-gray-700">
                {formatTextWithBold(t('generalMedicine.professionalActivities'))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Особенности программы */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('generalMedicine.featuresTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('generalMedicine.featuresDescription')}
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

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('generalMedicine.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('generalMedicine.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://salymbekov.com/wp-content/uploads/2024/01/curriculum-general-medicine.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('generalMedicine.cta.downloadPlan')}
              <FaDownload />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('generalMedicine.cta.contact')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GeneralMedicinePage;