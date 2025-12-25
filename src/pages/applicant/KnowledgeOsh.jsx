import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiMapPin, FiUsers, FiShare2 } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaWhatsapp, FaVk, FaTelegram } from 'react-icons/fa';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const KnowledgeOsh = () => {
  const { t } = useTranslation();

  // Импорт изображений правильно
  const imageContext = import.meta.glob('/src/assets/applicant/orientation/moredetails/osh/*.{jpg,jpeg,png,webp}', { eager: true });
  const images = Object.values(imageContext).map((module) => module.default || module);

  // Анимированные пузырьки с синими градиентами
  const animatedBalls = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      size: Math.random() * 120 + 60,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 3,
      delay: Math.random() * 2
    }));
  }, []);

  const floatingBubbles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      size: Math.random() * 80 + 40,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 3
    }));
  }, []);

  const smallBubbles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 25 + 15,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 1
    }));
  }, []);

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/sharer/sharer.php?u=https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://x.com/intent/tweet?text=%D0%91%D0%B8%D0%BB%D0%B8%D0%BC%20%D0%BA%D0%B5%D1%80%D0%B1%D0%B5%D0%BD%D0%B8%20%D0%9E%D1%88%20%D1%88%D0%B0%D0%B0%D1%80%D1%8B%D0%BD%D0%B4%D0%B0!%C2%A0https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/',
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/?text=%D0%91%D0%B8%D0%BB%D0%B8%D0%BC%20%D0%BA%D0%B5%D1%80%D0%B1%D0%B5%D0%BD%D0%B8%20%D0%9E%D1%88%20%D1%88%D0%B0%D0%B0%D1%80%D1%8B%D0%BD%D0%B4%D0%B0!%20https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'VK',
      icon: FaVk,
      url: 'https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%3A%2F%2Fsalymbekov.com%2Fru%2Fbilim-kerbeni-osh-shaarynda%2F%26title%3D%25D0%2591%25D0%25B8%25D0%25BB%25D0%25B8%25D0%25BC%2520%25D0%25BA%25D0%25B5%25D1%2580%25D0%25B1%25D0%25B5%25D0%25BD%25D0%25B8%2520%25D0%259E%25D1%2588%2520%25D1%2588%25D0%25B0%25D0%25B0%25D1%2580%25D1%258B%25D0%25BD%25D0%25B4%25D0%25B0%21&display=widget',
      color: 'bg-blue-800 hover:bg-blue-900'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: 'https://telegram.me/share/url?url=https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/&title=%D0%91%D0%B8%D0%BB%D0%B8%D0%BC%20%D0%BA%D0%B5%D1%80%D0%B1%D0%B5%D0%BD%D0%B8%20%D0%9E%D1%88%20%D1%88%D0%B0%D0%B0%D1%80%D1%8B%D0%BD%D0%B4%D0%B0!',
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements with blue gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {animatedBalls.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute rounded-full opacity-10"
            style={{
              width: ball.size,
              height: ball.size,
              left: ball.left,
              top: ball.top,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: ball.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: ball.delay
            }}
          />
        ))}
      </div>

      {/* Medium Floating Bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingBubbles.map((bubble) => (
          <motion.div
            key={`floating-${bubble.id}`}
            className="absolute rounded-full opacity-8"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Small Bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {smallBubbles.map((bubble) => (
          <motion.div
            key={`small-${bubble.id}`}
            className="absolute rounded-full opacity-12"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section with blue gradient */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Additional white bubbles in hero section for contrast */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hero-bubble-${i}`}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #ffffff, #e0f2fe)'
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/src/assets/applicant/orientation/2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <FiUsers className="w-10 h-10" />
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('knowledgeOsh.hero.title', 'Знаниевый караван в городе Ош')}
          </motion.h1>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-lg md:text-xl text-white/90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <FiCalendar className="w-6 h-6" />
              <span>{t('knowledgeOsh.hero.date', 'Дата проведения')}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-6 h-6" />
              <span>{t('knowledgeOsh.hero.location', 'Город Ош')}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiUsers className="w-6 h-6" />
              <span>{t('knowledgeOsh.hero.participants', 'Школьники')}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 -mt-12">
        <div className="max-w-6xl mx-auto">
          {/* Back Button and Social Share Top Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
          >
            <Link
              to="/applicants/career-guidance"
              className="inline-flex items-center gap-2 text-[#0077B6] hover:text-[#023E8A] transition-colors font-semibold text-lg group"
            >
              <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              {t('knowledgeOsh.backButton', 'Вернуться к мероприятиям')}
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium hidden sm:inline">
                {t('knowledgeOsh.social.share', 'Поделиться')}:
              </span>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    title={t('knowledgeOsh.social.shareOn', 'Поделиться в') + ` ${social.name}`}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-6">
              {t('knowledgeOsh.content.title', 'Знаниевый караван в городе Ош')}
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed text-base md:text-lg">
              <p>
                {t('knowledgeOsh.content.paragraph1', 'Университет имени Салымбекова совместно с мэрией города Ош, городским управлением образования и бизнес-школой Салымбекова в городе Ош провел семинар для школьников под названием')}{' '}
                <strong className="text-[#0077B6]">
                  {t('knowledgeOsh.content.seminarTitle', '«Современные тенденции в образовании, будущее место школьного образования»')}
                </strong>{' '}
                {t('knowledgeOsh.content.paragraph1Cont', '')}
              </p>
              <p>
                {t('knowledgeOsh.content.paragraph2', 'В ходе мероприятия заместитель мэра города Ош Нурбек Кадыров выступил с речью, подчеркнув важность получения образования.')}
              </p>
              <p>
                {t('knowledgeOsh.content.paragraph3', 'Для учащихся и учителей города Ош были показаны презентации о влиянии технологических изменений, происходящих во всем мире, на образование и рынок труда, а также о месте развивающихся направлений, таких как IT-технологии и биотехнологии, в XXI веке.')}
              </p>
            </div>

            {/* Speakers Section */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold text-[#023E8A] mb-6">
                {t('knowledgeOsh.content.speakersTitle', 'Спикеры семинара:')}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-[#023E8A] text-lg mb-2">Абдылдаев Рысбек</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {t('knowledgeOsh.content.speaker1', 'Профессор, онколог, доктор медицинских наук, вице-президент Университета имени Салымбекова')}
                  </p>
                  <div className="px-3 py-1.5 bg-gradient-to-r from-[#023E8A]/10 to-[#0077B6]/10 rounded-lg">
                    <p className="text-[#023E8A] font-medium text-sm">
                      {t('knowledgeOsh.content.topic1', '«Искусственный интеллект в медицине»')}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-[#023E8A] text-lg mb-2">Билгазиев Эмиль (PhD)</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {t('knowledgeOsh.content.speaker2', 'Основатель Американского технологического института, имеет степень PhD в области искусственного интеллекта от Хьюстонского университета (США), старший инженер в крупных компаниях, таких как Facebook, Instagram, UBER, более 15 лет')}
                  </p>
                  <div className="px-3 py-1.5 bg-gradient-to-r from-[#023E8A]/10 to-[#0077B6]/10 rounded-lg">
                    <p className="text-[#023E8A] font-medium text-sm">
                      {t('knowledgeOsh.content.topic2', '«В западных странах знания - это деньги»')}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1"
                >
                  <h4 className="font-bold text-[#023E8A] text-lg mb-2">Казаков Аваз</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {t('knowledgeOsh.content.speaker3', 'Проректор Университета имени Салымбекова')}
                  </p>
                  <div className="px-3 py-1.5 bg-gradient-to-r from-[#023E8A]/10 to-[#0077B6]/10 rounded-lg">
                    <p className="text-[#023E8A] font-medium text-sm">
                      {t('knowledgeOsh.content.topic3', '«Современные тенденции в образовании, изменения на рынке труда, реформы в школьном образовании»')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Photo Gallery */}
          {images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 mb-8"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#023E8A]">
                  {t('knowledgeOsh.gallery.title', 'Фотогалерея')}
                </h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiShare2 className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {images.length} {t('knowledgeOsh.gallery.photosCount', 'фото')}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                    whileHover={{ y: -5 }}
                  >
                    <img
                      src={img}
                      alt={t('knowledgeOsh.gallery.photoAlt', 'Знаниевый караван в городе Ош') + ` ${index + 1}`}
                      className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300/023E8A/FFFFFF?text=${encodeURIComponent('Фото ' + (index + 1))}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#023E8A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium">
                        {t('knowledgeOsh.gallery.photoAlt', 'Знаниевый караван в городе Ош')} #{index + 1}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeOsh;