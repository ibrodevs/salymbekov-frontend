import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaUserMd,
  FaGraduationCap,
  FaUsers,
  FaAward,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
  FaCalendarAlt,
  FaHandshake,
  FaRocket,
  FaStethoscope
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const MedicalFacultyDeaneryPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("about");

  const stats = [
  ];

  const features = [
    {
      icon: <FaStethoscope className="text-white" size={24} />,
      title: t('medicalFacultyDeanery.features.practical.title'),
      description: t('medicalFacultyDeanery.features.practical.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaUserMd className="text-white" size={24} />,
      title: t('medicalFacultyDeanery.features.professors.title'),
      description: t('medicalFacultyDeanery.features.professors.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaRocket className="text-white" size={24} />,
      title: t('medicalFacultyDeanery.features.technology.title'),
      description: t('medicalFacultyDeanery.features.technology.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHandshake className="text-white" size={24} />,
      title: t('medicalFacultyDeanery.features.partnerships.title'),
      description: t('medicalFacultyDeanery.features.partnerships.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const leadership = [
    {
      id: "dean",
      name: t('medicalFacultyDeanery.leadership.dean.name'),
      position: t('medicalFacultyDeanery.leadership.dean.position'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/maana-300x200.jpg',
      text: t('medicalFacultyDeanery.leadership.dean.text'),
      achievements: t('medicalFacultyDeanery.leadership.dean.achievements', { returnObjects: true }),
      contact: {
        phone: t('medicalFacultyDeanery.leadership.dean.contact.phone'),
        email: t('medicalFacultyDeanery.leadership.dean.contact.email'),
        hours: t('medicalFacultyDeanery.leadership.dean.contact.hours')
      },
      social: {
        
      }
    },
    {
      id: "deputy",
      name: t('medicalFacultyDeanery.leadership.deputy.name'),
      position: t('medicalFacultyDeanery.leadership.deputy.position'),
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/arzieva-nazgul-nurmamatovna-300x200.jpg',
      text: t('medicalFacultyDeanery.leadership.deputy.text'),
      achievements: t('medicalFacultyDeanery.leadership.deputy.achievements', { returnObjects: true }),
      contact: {
        phone: t('medicalFacultyDeanery.leadership.deputy.contact.phone'),
        email: t('medicalFacultyDeanery.leadership.deputy.contact.email'),
        hours: t('medicalFacultyDeanery.leadership.deputy.contact.hours')
      },
      social: {
        linkedin: '#'
      }
    }
  ];

  const tabs = [
    { id: "about", label: t('medicalFacultyDeanery.tabs.about'), icon: <FaUserMd /> },
    { id: "leadership", label: t('medicalFacultyDeanery.tabs.leadership'), icon: <FaUsers /> },
    { id: "contact", label: t('medicalFacultyDeanery.tabs.contact'), icon: <FaPhone /> }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-white" size={20} />,
      title: t('medicalFacultyDeanery.contactInfo.address.title'),
      content: t('medicalFacultyDeanery.contactInfo.address.content'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaPhone className="text-white" size={20} />,
      title: t('medicalFacultyDeanery.contactInfo.phone.title'),
      content: t('medicalFacultyDeanery.contactInfo.phone.content'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaEnvelope className="text-white" size={20} />,
      title: t('medicalFacultyDeanery.contactInfo.email.title'),
      content: t('medicalFacultyDeanery.contactInfo.email.content'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaClock className="text-white" size={20} />,
      title: t('medicalFacultyDeanery.contactInfo.hours.title'),
      content: t('medicalFacultyDeanery.contactInfo.hours.content'),
      color: "bg-[#00B4D8]"
    }
  ];

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
            <FaUserMd className="text-xl" />
            <span className="font-semibold">{t('medicalFacultyDeanery.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('medicalFacultyDeanery.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('medicalFacultyDeanery.subtitle')}
          </p>
        </motion.div>

       

        {/* Табы навигации */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=" rounded-3xl shadow-2xl border border-gray-200 p-2 "
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Контент табов */}
        <div className="mb-16">
          {/* О факультете */}
          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className=" rounded-3xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  {t('medicalFacultyDeanery.about.title')}
                </h2>
                <div className="prose max-w-none">
                  {formatTextWithBold(t('medicalFacultyDeanery.about.content'))}
                </div>
              </div>

              {/* Особенности */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {t('medicalFacultyDeanery.features.title')}
                </h2>
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
              </div>
            </motion.div>
          )}

          {/* Руководство */}
          {activeTab === "leadership" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className=" rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Фото и контактная информация */}
                      <div className="lg:w-1/3">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative group mb-6"
                        >
                          <img 
                            src={leader.image} 
                            alt={leader.name}
                            className="w-full h-auto rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300"
                          />
                        </motion.div>

                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {leader.name}
                          </h3>
                          <p className="text-lg text-[#023E8A] font-semibold mb-4">
                            {leader.position}
                          </p>

                          {/* Контактная информация */}
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-gray-600">
                              <FaPhone className="text-[#023E8A] flex-shrink-0" />
                              <span>{leader.contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                              <FaEnvelope className="text-[#023E8A] flex-shrink-0" />
                              <span>{leader.contact.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                              <FaClock className="text-[#023E8A] flex-shrink-0" />
                              <span>{leader.contact.hours}</span>
                            </div>
                          </div>

                          
                        </div>
                      </div>

                      {/* Текст и достижения */}
                      <div className="lg:w-2/3">
                        <div className="prose max-w-none mb-8">
                          {formatTextWithBold(leader.text)}
                        </div>

                        {/* Достижения */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <FaAward className="text-[#023E8A]" />
                            {t('medicalFacultyDeanery.achievements')}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {leader.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-200"
                              >
                                <div className="w-3 h-3 bg-[#023E8A] rounded-full flex-shrink-0" />
                                <span className="text-gray-700">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Контакты */}
          {activeTab === "contact" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className=" rounded-3xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {t('medicalFacultyDeanery.contactInfo.title')}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl p-6 text-white text-center"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        {contact.icon}
                      </div>
                      <h3 className="font-semibold mb-2">{contact.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{contact.content}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Дополнительная контактная информация */}
                <div className="prose max-w-none">
                  {formatTextWithBold(t('medicalFacultyDeanery.contactInfo.additional'))}
                </div>
              </div>

              {/* Форма обратной связи */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {t('medicalFacultyDeanery.contactForm.title')}
                </h3>
                <p className="text-center mb-6 opacity-90">
                  {t('medicalFacultyDeanery.contactForm.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  
                
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

       
      </div>
    </div>
  );
};

export default MedicalFacultyDeaneryPage;