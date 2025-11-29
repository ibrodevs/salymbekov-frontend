import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaUsers,
  FaCalendarAlt,
  FaFileAlt,
  FaChartLine,
  FaGraduationCap,
  FaAward,
  FaLightbulb,
  FaHandshake,
  FaDownload,
  FaEye,
  FaArrowRight,
  FaClipboardList,
  FaUserTie
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const PedagogicalCouncilPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("plan");
  const [selectedImage, setSelectedImage] = useState(null);

  const stats = [
  ];

  const features = [
    {
      icon: <FaGraduationCap className="text-white" size={24} />,
      title: t('pedagogicalCouncil.features.education.title'),
      description: t('pedagogicalCouncil.features.education.description'),
      color: "bg-[#023E8A]"
    },
    {
      icon: <FaLightbulb className="text-white" size={24} />,
      title: t('pedagogicalCouncil.features.innovation.title'),
      description: t('pedagogicalCouncil.features.innovation.description'),
      color: "bg-[#0077B6]"
    },
    {
      icon: <FaAward className="text-white" size={24} />,
      title: t('pedagogicalCouncil.features.quality.title'),
      description: t('pedagogicalCouncil.features.quality.description'),
      color: "bg-[#0096C7]"
    },
    {
      icon: <FaHandshake className="text-white" size={24} />,
      title: t('pedagogicalCouncil.features.cooperation.title'),
      description: t('pedagogicalCouncil.features.cooperation.description'),
      color: "bg-[#00B4D8]"
    }
  ];

  const documents = [
    {
      id: "plan",
      title: t('pedagogicalCouncil.plan.title'),
      description: t('pedagogicalCouncil.plan.description'),
      image: "/plan.png",
      icon: <FaCalendarAlt className="text-[#023E8A]" />,
      downloadUrl: "#"
    },
    {
      id: "composition",
      title: t('pedagogicalCouncil.composition.title'),
      description: t('pedagogicalCouncil.composition.description'),
      image: "/COMPOSITION.png",
      icon: <FaUsers className="text-[#023E8A]" />,
      downloadUrl: "#"
    },
    {
      id: "regulation",
      title: t('pedagogicalCouncil.regulation.title'),
      description: t('pedagogicalCouncil.regulation.description'),
      image: "/REGULATION.png",
      icon: <FaClipboardList className="text-[#023E8A]" />,
      downloadUrl: "#"
    }
  ];

  const members = [
    {
      name: t('pedagogicalCouncil.members.chairman.name'),
      position: t('pedagogicalCouncil.members.chairman.position'),
      role: t('pedagogicalCouncil.members.chairman.role'),
      department: t('pedagogicalCouncil.members.chairman.department')
    },
    {
      name: t('pedagogicalCouncil.members.viceChairman1.name'),
      position: t('pedagogicalCouncil.members.viceChairman1.position'),
      role: t('pedagogicalCouncil.members.viceChairman1.role'),
      department: t('pedagogicalCouncil.members.viceChairman1.department')
    },
    {
      name: t('pedagogicalCouncil.members.viceChairman2.name'),
      position: t('pedagogicalCouncil.members.viceChairman2.position'),
      role: t('pedagogicalCouncil.members.viceChairman2.role'),
      department: t('pedagogicalCouncil.members.viceChairman2.department')
    },
    {
      name: t('pedagogicalCouncil.members.secretary.name'),
      position: t('pedagogicalCouncil.members.secretary.position'),
      role: t('pedagogicalCouncil.members.secretary.role'),
      department: t('pedagogicalCouncil.members.secretary.department')
    }
  ];

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
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
            <FaUsers className="text-xl" />
            <span className="font-semibold">{t('pedagogicalCouncil.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('pedagogicalCouncil.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('pedagogicalCouncil.subtitle')}
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

        {/* Особенности работы совета */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('pedagogicalCouncil.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('pedagogicalCouncil.features.subtitle')}
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

        {/* Табы навигации */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-2 mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {documents.map((doc) => (
              <motion.button
                key={doc.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(doc.id)}
                className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === doc.id
                    ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {doc.icon}
                {doc.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Контент документов */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          {documents.map((doc) => (
            activeTab === doc.id && (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {doc.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {doc.description}
                    </p>
                  </div>

                  <div className="relative group">
                    <motion.img 
                      src={doc.image} 
                      alt={doc.title}
                      className="w-full h-auto rounded-2xl shadow-lg cursor-pointer transition-all duration-300 group-hover:shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      onClick={() => openImageModal(doc.image)}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/90 text-gray-800 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg"
                        onClick={() => openImageModal(doc.image)}
                      >
                        <FaEye />
                        {t('pedagogicalCouncil.viewFullSize')}
                      </motion.button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <motion.a
                      href={doc.downloadUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <FaDownload />
                      {t('pedagogicalCouncil.download')}
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-[#023E8A] text-[#023E8A] px-6 py-3 rounded-2xl font-semibold hover:bg-[#023E8A] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                      onClick={() => openImageModal(doc.image)}
                    >
                      <FaEye />
                      {t('pedagogicalCouncil.view')}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </motion.div>

        {/* Состав совета */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('pedagogicalCouncil.members.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('pedagogicalCouncil.members.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaUserTie className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#023E8A] font-semibold mb-2">
                      {member.position}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {member.department}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('pedagogicalCouncil.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('pedagogicalCouncil.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('pedagogicalCouncil.cta.contact')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('pedagogicalCouncil.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Модальное окно для изображения */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Full size document"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
              onClick={closeImageModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default PedagogicalCouncilPage;