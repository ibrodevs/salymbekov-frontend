import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaBuilding,
  FaRocket
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const ContactsPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-white" size={24} />,
      title: t('contacts.contactInfo.address.title'),
      content: t('contacts.contactInfo.address.content'),
      link: '#',
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaPhone className="text-white" size={24} />,
      title: t('contacts.contactInfo.phone.title'),
      content: t('contacts.contactInfo.phone.content'),
      link: 'tel:+996312345678',
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaEnvelope className="text-white" size={24} />,
      title: t('contacts.contactInfo.email.title'),
      content: t('contacts.contactInfo.email.content'),
      link: 'mailto:info@salymbekov.com',
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaClock className="text-white" size={24} />,
      title: t('contacts.contactInfo.hours.title'),
      content: t('contacts.contactInfo.hours.content'),
      link: '#',
      color: "bg-[#00B4D8]"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-white" size={20} />,
      name: 'LinkedIn',
      url: '#',
      color: 'bg-[#0077B5]'
    },
    {
      icon: <FaTwitter className="text-white" size={20} />,
      name: 'Twitter',
      url: '#',
      color: 'bg-[#1DA1F2]'
    },
    {
      icon: <FaFacebook className="text-white" size={20} />,
      name: 'Facebook',
      url: '#',
      color: 'bg-[#1877F2]'
    },
    {
      icon: <FaInstagram className="text-white" size={20} />,
      name: 'Instagram',
      url: '#',
      color: 'bg-[#E4405F]'
    }
  ];

  const departments = [
    {
      name: t('contacts.departments.admissions.name'),
      email: t('contacts.departments.admissions.email'),
      phone: t('contacts.departments.admissions.phone')
    },
    {
      name: t('contacts.departments.technical.name'),
      email: t('contacts.departments.technical.email'),
      phone: t('contacts.departments.technical.phone')
    },
    {
      name: t('contacts.departments.careers.name'),
      email: t('contacts.departments.careers.email'),
      phone: t('contacts.departments.careers.phone')
    },
    {
      name: t('contacts.departments.partnerships.name'),
      email: t('contacts.departments.partnerships.email'),
      phone: t('contacts.departments.partnerships.phone')
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const stats = [
    { number: "24/7", label: t('contacts.stats.support'), icon: <FaClock className="text-[#023E8A]" /> },
    { number: "1h", label: t('contacts.stats.response'), icon: <FaComment className="text-[#023E8A]" /> },
    { number: "50+", label: t('contacts.stats.countries'), icon: <FaGlobe className="text-[#023E8A]" /> },
    { number: "100%", label: t('contacts.stats.satisfaction'), icon: <FaRocket className="text-[#023E8A]" /> }
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
            <FaPaperPlane className="text-xl" />
            <span className="font-semibold">{t('contacts.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('contacts.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('contacts.subtitle')}
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 mb-8">
            <div className="prose max-w-none">
              {formatTextWithBold(t('contacts.content'))}
            </div>
          </div>
        </motion.div>

        {/* Контактная информация и форма */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Контактная информация */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('contacts.contactInfo.title')}
            </h2>
            
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {contact.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Социальные сети */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t('contacts.social.title')}
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {t('contacts.form.title')}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contacts.form.name')}
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#023E8A] focus:border-transparent transition-all duration-300"
                      placeholder={t('contacts.form.namePlaceholder')}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('contacts.form.email')}
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#023E8A] focus:border-transparent transition-all duration-300"
                      placeholder={t('contacts.form.emailPlaceholder')}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contacts.form.subject')}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#023E8A] focus:border-transparent transition-all duration-300"
                  placeholder={t('contacts.form.subjectPlaceholder')}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contacts.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#023E8A] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={t('contacts.form.messagePlaceholder')}
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <FaPaperPlane />
                {t('contacts.form.submit')}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Отделы и департаменты */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('contacts.departments.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contacts.departments.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-[#023E8A] rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FaBuilding className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {dept.name}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{dept.email}</p>
                  <p>{dept.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Карта и призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('contacts.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('contacts.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+996312345678"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaPhone />
              {t('contacts.cta.callNow')}
            </motion.a>
            <motion.a
              href="mailto:info@salymbekov.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('contacts.cta.sendEmail')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactsPage;