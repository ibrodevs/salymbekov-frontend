// Director.jsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaUserTie,
  FaGraduationCap,
  FaAward,
  FaBriefcase,
  FaRocket,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUniversity,
  FaCertificate,
  FaTrophy,
  FaArrowRight,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Director = () => {
  const { t } = useTranslation();

  const careerTimeline = [
    {
      year: "2016-2017",
      position: t('director.career.legalAssistant.position'),
      company: t('director.career.legalAssistant.company'),
      icon: <FaBriefcase className="text-[#0077B6]" />
    },
    {
      year: "2017-2018",
      position: t('director.career.projectManager.position'),
      company: t('director.career.projectManager.company'),
      icon: <FaRocket className="text-[#0077B6]" />
    },
    {
      year: "2017",
      position: t('director.career.founder.position'),
      company: t('director.career.founder.company'),
      icon: <FaUserTie className="text-[#0077B6]" />
    },
    {
      year: "2018-2019",
      position: t('director.career.socialWorker.position'),
      company: t('director.career.socialWorker.company'),
      icon: <FaUniversity className="text-[#0077B6]" />
    },
    {
      year: "2019-2020",
      position: t('director.career.businessSchoolDirector.position'),
      company: t('director.career.businessSchoolDirector.company'),
      icon: <FaGraduationCap className="text-[#0077B6]" />
    },
    {
      year: "2020-2022",
      position: t('director.career.nationalDirector.position'),
      company: t('director.career.nationalDirector.company'),
      icon: <FaAward className="text-[#0077B6]" />
    }
  ];

  const achievements = [
    {
      year: "2020",
      title: t('director.achievements.studentAward.title'),
      organization: t('director.achievements.studentAward.organization'),
      icon: <FaTrophy className="text-white" size={20} />
    },
    {
      year: "2020",
      title: t('director.achievements.ministryAward.title'),
      organization: t('director.achievements.ministryAward.organization'),
      icon: <FaCertificate className="text-white" size={20} />
    },
    {
      year: "2021",
      title: t('director.achievements.languageAward.title'),
      organization: t('director.achievements.languageAward.organization'),
      icon: <FaAward className="text-white" size={20} />
    },
    {
      year: "2021",
      title: t('director.achievements.cultureAward.title'),
      organization: t('director.achievements.cultureAward.organization'),
      icon: <FaCertificate className="text-white" size={20} />
    },
    {
      year: "2021",
      title: t('director.achievements.youngLeaders.title'),
      organization: t('director.achievements.youngLeaders.organization'),
      icon: <FaUserTie className="text-white" size={20} />
    },
    {
      year: "2022",
      title: t('director.achievements.parliamentAward.title'),
      organization: t('director.achievements.parliamentAward.organization'),
      icon: <FaAward className="text-white" size={20} />
    }
  ];

  const certificates = [
    {
      year: "2012",
      title: t('director.certificates.coaching.title'),
      organization: t('director.certificates.coaching.organization')
    },
    {
      year: "2014",
      title: t('director.certificates.youngLeaders.title'),
      organization: t('director.certificates.youngLeaders.organization')
    },
    {
      year: "2017",
      title: t('director.certificates.breakthrough.title'),
      organization: t('director.certificates.breakthrough.organization')
    },
    {
      year: "2018",
      title: t('director.certificates.rhetoric.title'),
      organization: t('director.certificates.rhetoric.organization')
    },
    {
      year: "2021",
      title: t('director.certificates.entrepreneurship.title'),
      organization: t('director.certificates.entrepreneurship.organization')
    },
    {
      year: "2022",
      title: t('director.certificates.youngEntrepreneur.title'),
      organization: t('director.certificates.youngEntrepreneur.organization')
    },
    {
      year: "2022",
      title: t('director.certificates.civicEducation.title'),
      organization: t('director.certificates.civicEducation.organization')
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
            <FaUserTie className="text-xl" />
            <span className="font-semibold">{t('director.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('director.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('director.subtitle')}
          </p>
        </motion.div>

        {/* Основная информация */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Фото и контакты */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center"
          >
            <div className="w-48 h-48 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-6xl font-bold">
              ЖБ
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {t('director.name')}
            </h2>
            <p className="text-gray-600 mb-6">{t('director.position')}</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <FaUniversity className="text-[#0077B6]" />
                <span className="text-sm">{t('director.education')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FaMapMarkerAlt className="text-[#0077B6]" />
                <span className="text-sm">{t('director.location')}</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-[#0077B6] text-white rounded-xl flex items-center justify-center hover:bg-[#023E8A] transition-colors duration-300"
              >
                <FaLinkedin />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-[#0077B6] text-white rounded-xl flex items-center justify-center hover:bg-[#023E8A] transition-colors duration-300"
              >
                <FaEnvelope />
              </motion.button>
            </div>
          </motion.div>

          {/* Образование и сертификаты */}
          <div className="lg:col-span-2 space-y-8">
            {/* Образование */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <FaGraduationCap className="text-[#023E8A]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t('director.educationTitle')}
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('director.educationDetails')}
              </p>
            </motion.div>

            {/* Сертификаты */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                  <FaCertificate className="text-[#023E8A]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t('director.certificatesTitle')}
                </h3>
              </div>
              <div className="grid gap-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-[#0077B6] text-white rounded-lg flex items-center justify-center font-bold">
                      {cert.year}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{cert.organization}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Карьера */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('director.careerTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('director.careerSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerTimeline.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {job.icon}
                  <span className="text-sm font-semibold text-[#0077B6] bg-blue-50 px-3 py-1 rounded-full">
                    {job.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {job.position}
                </h3>
                <p className="text-gray-600 text-sm">
                  {job.company}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Достижения */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('director.achievementsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('director.achievementsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl p-6 text-white relative overflow-hidden group"
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  {achievement.icon}
                </div>
                <div className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
                  {achievement.year}
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-blue-100 text-sm opacity-90">
                  {achievement.organization}
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">
            {t('director.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('director.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
            >
              {t('director.cta.contact')}
              <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('director.cta.learnMore')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Director;