import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaUserTie,
  FaAward,
  FaGraduationCap,
  FaQuoteLeft,
  FaQuoteRight,
  FaHandshake,
  FaRocket,
  FaHeart,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBook,
  FaUsers,
  FaLightbulb
} from "react-icons/fa";

const CollegeDirectorPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("about");

  const stats = [
    { number: "15+", label: t('directorItCollage.stats.experience'), icon: <FaAward className="text-[#023E8A]" /> },
    { number: "5000+", label: t('directorItCollage.stats.students'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "50+", label: t('directorItCollage.stats.programs'), icon: <FaBook className="text-[#023E8A]" /> },
    { number: "100+", label: t('directorItCollage.stats.projects'), icon: <FaRocket className="text-[#023E8A]" /> }
  ];

  const achievements = [
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('directorItCollage.achievements.excellence.title'),
      description: t('directorItCollage.achievements.excellence.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaUsers className="text-white" size={24} />,
      title: t('directorItCollage.achievements.leadership.title'),
      description: t('directorItCollage.achievements.leadership.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaLightbulb className="text-white" size={24} />,
      title: t('directorItCollage.achievements.innovation.title'),
      description: t('directorItCollage.achievements.innovation.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHeart className="text-white" size={24} />,
      title: t('directorItCollage.achievements.community.title'),
      description: t('directorItCollage.achievements.community.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-[#023E8A]" />,
      label: t('directorItCollage.contact.email'),
      value: "director@salymbekov.com",
      link: "mailto:director@salymbekov.com"
    },
    {
      icon: <FaPhone className="text-[#023E8A]" />,
      label: t('directorItCollage.contact.phone'),
      value: "+996 (312) 54-19-15",
      link: "tel:+996312541915"
    },
    {
      icon: <FaMapMarkerAlt className="text-[#023E8A]" />,
      label: t('directorItCollage.contact.address'),
      value: t('directorItCollage.contact.addressValue'),
      link: "#"
    },
    {
      icon: <FaLinkedin className="text-[#023E8A]" />,
      label: "LinkedIn",
      value: t('directorItCollage.contact.linkedin'),
      link: "#"
    }
  ];

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
            <FaUserTie size={200} className="text-white" />
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
              <FaUserTie className="text-xl" />
              <span className="font-semibold">{t('directorItCollage.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t('directorItCollage.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {t('directorItCollage.subtitle')}
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
            {/* Приветственная секция */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6">
                <FaQuoteLeft className="text-lg" />
                <span className="font-semibold">{t('directorItCollage.greeting.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                {t('directorItCollage.greeting.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('directorItCollage.greeting.subtitle')}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Фото и контактная информация */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden sticky top-8">
                  {/* Фото директора */}
                  <div className="relative">
                    <img 
                      src="https://salymbekov.com/wp-content/uploads/2023/02/zhunushalieva-nurzat-manasovna-e1676031324273-975x1024.jpg" 
                      alt={t('directorItCollage.image.alt')}
                      className="w-full h-80 object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{t('director.name')}</h3>
                      <p className="text-white/90">{t('director.position')}</p>
                    </div>
                  </div>

                  {/* Контактная информация */}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('directorItCollage.contact.title')}</h4>
                    <div className="space-y-3">
                      {contactInfo.map((contact, index) => (
                        <motion.a
                          key={index}
                          href={contact.link}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {contact.icon}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-gray-600">{contact.label}</div>
                            <div className="font-medium text-gray-800">{contact.value}</div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Основной текст и вкладки */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                {/* Вкладки */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden mb-8">
                  <div className="flex overflow-x-auto">
                    {['about', 'vision', 'message'].map((tab) => (
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
                        {t(`directorItCollage.tabs.${tab}`)}
                      </motion.button>
                    ))}
                  </div>

                  {/* Контент вкладок */}
                  <div className="p-8">
                    {activeTab === 'about' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                          {formatTextWithBold(t('directorItCollage.about.content'))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'vision' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                          {formatTextWithBold(t('directorItCollage.vision.content'))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'message' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="relative">
                          <FaQuoteLeft className="text-4xl text-[#023E8A] opacity-20 mb-4" />
                          <div className="prose max-w-none text-gray-700 text-lg leading-relaxed">
                            {formatTextWithBold(t('directorItCollage.message.content'))}
                          </div>
                          <FaQuoteRight className="text-4xl text-[#023E8A] opacity-20 mt-4 ml-auto" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Цитата */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white text-center"
                >
                  <FaQuoteLeft className="text-3xl opacity-50 mb-4 mx-auto" />
                  <blockquote className="text-xl md:text-2xl font-light italic mb-4">
                    {t('directorItCollage.quote.text')}
                  </blockquote>
                  <div className="text-white/80 font-semibold">
                    — {t('directorItCollage.quote.author')}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Достижения */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                {t('directorItCollage.achievements.title')}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
                  >
                    <div className={`w-16 h-16 ${achievement.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
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
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                {t('directorItCollage.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {t('directorItCollage.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('directorItCollage.cta.contact')}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#023E8A] text-[#023E8A] px-8 py-4 rounded-2xl font-semibold hover:bg-[#023E8A] hover:text-white transition-all duration-300"
                >
                  {t('directorItCollage.cta.learnMore')}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CollegeDirectorPage;