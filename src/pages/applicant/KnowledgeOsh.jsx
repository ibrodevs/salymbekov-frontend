import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaWhatsapp, FaVk, FaTelegram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const KnowledgeOsh = () => {
  const { t } = useTranslation();

  const imageNames = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg'
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = imageNames.map(name =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = `/src/assets/applicant/orientation/moredetails/osh/${name}`;
          img.onload = () => resolve(img.src);
          img.onerror = () => resolve(null);
        })
      );
      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages.filter(img => img !== null));
    };
    loadImages();
  }, []);

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/sharer/sharer.php?u=https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://x.com/intent/tweet?text=%D0%91%D0%B8%D0%BB%D0%B8%D0%BC%20%D0%BA%D0%B5%D1%80%D0%B1%D0%B5%D0%BD%D0%B8%20%D0%9E%D1%88%20%D1%88%D0%B0%D0%B0%D1%80%D1%8B%D0%BD%D0%B4%D0%B0!%C2%A0https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/',
      color: 'hover:bg-sky-500'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/?text=%D0%91%D0%B8%D0%BB%D0%B8%D0%BC%20%D0%BA%D0%B5%D1%80%D0%B1%D0%B5%D0%BD%D0%B8%20%D0%9E%D1%88%20%D1%88%D0%B0%D0%B0%D1%80%D1%8B%D0%BD%D0%B4%D0%B0!%20https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/',
      color: 'hover:bg-green-500'
    },
    {
      name: 'VK',
      icon: FaVk,
      url: 'https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Furl%3Dhttps%3A%2F%2Fsalymbekov.com%2Fru%2Fbilim-kerbeni-osh-shaarynda%2F%26title%3D%25D0%2591%25D0%25B8%25D0%25BB%25D0%25B8%25D0%25BC%2520%25D0%25BA%25D0%25B5%25D1%2580%25D0%25B1%25D0%25B5%25D0%25BD%25D0%25B8%2520%25D0%259E%25D1%2588%2520%25D1%2588%25D0%25B0%25D0%25B0%25D1%2580%25D1%258B%25D0%25BD%25D0%25B4%25D0%25B0%21&display=widget',
      color: 'hover:bg-blue-700'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: 'https://telegram.me/share/url?url=https://salymbekov.com/ru/bilim-kerbeni-osh-shaarynda/&title=%D0%91%D0%B8%D0%BB%D0%B8%D0%BC%20%D0%BA%D0%B5%D1%80%D0%B1%D0%B5%D0%BD%D0%B8%20%D0%9E%D1%88%20%D1%88%D0%B0%D0%B0%D1%80%D1%8B%D0%BD%D0%B4%D0%B0!',
      color: 'hover:bg-blue-500'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/src/assets/applicant/orientation/2.jpg"
            alt={t('knowledgeOsh.hero.alt', 'Билим кербени Ош шаарында')}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1920x1080/6B46C1/FFFFFF?text=' + encodeURIComponent(t('knowledgeOsh.hero.alt', 'Билим кербени Ош шаарында'));
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4C1D95]/90 to-[#6B46C1]/90" />
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#4C1D95] to-[#6B46C1] text-white text-sm font-semibold mb-6 shadow-lg">
            {t('knowledgeOsh.hero.category', 'Профориентация')}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('knowledgeOsh.hero.title', 'Билим кербени Ош шаарында')}
          </h1>
          <div className="flex items-center justify-center gap-8 text-purple-100 text-lg">
            <div className="flex items-center gap-2">
              <FiCalendar className="w-6 h-6" />
              <span>{t('knowledgeOsh.hero.date', 'Дата проведения')}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="w-6 h-6" />
              <span>{t('knowledgeOsh.hero.location', 'Ош шаары')}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiUsers className="w-6 h-6" />
              <span>{t('knowledgeOsh.hero.participants', 'Мектеп окуучулары')}</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8">
            {/* Social Share Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block sticky top-24 h-fit"
            >
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-3 bg-white rounded-full shadow-lg ${social.color} text-gray-600 hover:text-white transition-all duration-300 hover:scale-110`}
                    title={t('knowledgeOsh.social.share', 'Поделиться в') + ` ${social.name}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-12"
              >
                <Link
                  to="/applicants/career-guidance"
                  className="inline-flex items-center gap-2 text-[#6B46C1] hover:text-[#4C1D95] transition-colors font-semibold text-lg"
                >
                  <FiArrowLeft className="w-5 h-5" />
                  {t('knowledgeOsh.backButton', 'Вернуться к мероприятиям')}
                </Link>
              </motion.div>

              {/* Mobile Social Share */}
              <div className="lg:hidden mb-8">
                <div className="flex gap-3 justify-center flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white rounded-full shadow-lg ${social.color} text-gray-600 hover:text-white transition-all duration-300`}
                      title={t('knowledgeOsh.social.share', 'Поделиться в') + ` ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-2xl p-10 mb-12"
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#4C1D95] to-[#6B46C1] bg-clip-text text-transparent mb-8">
                  {t('knowledgeOsh.content.title', 'Билим кербени Ош шаарында')}
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    {t('knowledgeOsh.content.paragraph1', 'Салымбеков Университет Ош шаарынын мэриясы, Ош шаардык билим берүү башкармалыгы, жана Ош шаарындагы Салымбеков бизнес мектеби менен биргеликте мектеп окуучулар үчүн')} <strong className="text-[#6B46C1]">{t('knowledgeOsh.content.seminarTitle', '«Билим берүүдөгү заманбап тенденциялар, мектеп билим берүүсүнүн келечектеги орду»')}</strong> {t('knowledgeOsh.content.paragraph1Cont', 'аталышындагы семинар өткөрдү.')}
                  </p>
                  <p>
                    {t('knowledgeOsh.content.paragraph2', 'Иш чаранын жүрүшүндө Ош шаарынын мэринин орун басары Нурбек Кадыров сөз сүйлөп, билим алуунун маанилүүлүгүн баса белгиледи.')}
                  </p>
                  <p>
                    {t('knowledgeOsh.content.paragraph3', 'Ош шаарынын окуучулары жана мугалимдерине дүйнө жүзүндө болуп жаткан технологиялык өзгөрүүлөрдүн билим берүү жана эмгек рыногуна тийгизип жаткан таасирлери, 21-кылымдагы алдыга чыгып жаткан IT технологиялар жана биотехнология сыяктуу багыттардын орду жөнүндө баяндамалар көрсөтүлдү.')}
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-2xl font-bold text-[#4C1D95] mb-6">
                      {t('knowledgeOsh.content.speakersTitle', 'Семинардын спикерлери:')}
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-purple-50 rounded-xl p-5">
                        <h4 className="font-bold text-[#6B46C1] text-lg">Абдылдаев Рысбек</h4>
                        <p className="text-gray-600">{t('knowledgeOsh.content.speaker1', 'Профессор, онколог, медицина илимдеринин доктору, Салымбеков Университеттин вице-президенти')}</p>
                        <p className="text-[#4C1D95] font-medium mt-2">{t('knowledgeOsh.content.topic1', '«Медицинадагы жасалма интеллект»')}</p>
                      </div>

                      <div className="bg-purple-50 rounded-xl p-5">
                        <h4 className="font-bold text-[#6B46C1] text-lg">Билгазиев Эмиль (PhD)</h4>
                        <p className="text-gray-600">{t('knowledgeOsh.content.speaker2', 'Америка Технологиялар Институнун негиздөөчүсү, АКШнын Хьюстон университетинин жасалма интеллект багытында докторлук (PhD) даражасын алган, 15 жылдан ашык Facebook, Instagram, UBER сыяктуу ири компанияларда ага инженер')}</p>
                        <p className="text-[#4C1D95] font-medium mt-2">{t('knowledgeOsh.content.topic2', '«Батыш өлкөлөрүндө билим – бул акча»')}</p>
                      </div>

                      <div className="bg-purple-50 rounded-xl p-5">
                        <h4 className="font-bold text-[#6B46C1] text-lg">Казаков Аваз</h4>
                        <p className="text-gray-600">{t('knowledgeOsh.content.speaker3', 'Салымбеков Университеттин проректору')}</p>
                        <p className="text-[#4C1D95] font-medium mt-2">{t('knowledgeOsh.content.topic3', '«Билим берүүдөгү заманбап тенденциялар, кесип рыногундагы өзгөрүүлөр, мектеп билим берүүсүндөгү реформалар»')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Photo Gallery */}
              {images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h3 className="text-3xl font-bold text-[#4C1D95] mb-6">
                    {t('knowledgeOsh.gallery.title', 'Фотогалерея')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow group"
                      >
                        <img
                          src={img}
                          alt={t('knowledgeOsh.gallery.photoAlt', 'Билим кербени Ош шаарында') + ` ${index + 1}`}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeOsh;