import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaQuoteLeft,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaRocket
} from "react-icons/fa";

const InstituteLeadershipPage = () => {
  const { t } = useTranslation();

  const leadership = [
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/02/2-300x300.png',
      name: t('instituteLeadership.leaders.leader1.name'),
      position: t('instituteLeadership.leaders.leader1.position'),
      text: t('instituteLeadership.leaders.leader1.text'),
      achievements: t('instituteLeadership.leaders.leader1.achievements', { returnObjects: true }),
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/photo_2023-06-09_17-07-45-225x300.webp',
      name: t('instituteLeadership.leaders.leader2.name'),
      position: t('instituteLeadership.leaders.leader2.position'),
      text: t('instituteLeadership.leaders.leader2.text'),
      achievements: t('instituteLeadership.leaders.leader2.achievements', { returnObjects: true }),
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2023/06/photo_2023-06-09_17-17-49-225x300.webp',
      name: t('instituteLeadership.leaders.leader3.name'),
      position: t('instituteLeadership.leaders.leader3.position'),
      text: t('instituteLeadership.leaders.leader3.text'),
      achievements: t('instituteLeadership.leaders.leader3.achievements', { returnObjects: true }),
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    },
    {
      image: 'https://salymbekov.com/wp-content/uploads/2022/05/rysbek-aldagandaevich-250x300.jpg',
      name: t('instituteLeadership.leaders.leader4.name'),
      position: t('instituteLeadership.leaders.leader4.position'),
      text: t('instituteLeadership.leaders.leader4.text'),
      achievements: t('instituteLeadership.leaders.leader4.achievements', { returnObjects: true }),
      social: {
        linkedin: '#',
        twitter: '#',
        email: '#'
      }
    }
  ];

  const stats = [
    { number: "20+", label: t('instituteLeadership.stats.yearsExperience'), icon: <FaBriefcase className="text-[#023E8A]" /> },
    { number: "50+", label: t('instituteLeadership.stats.projects'), icon: <FaRocket className="text-[#023E8A]" /> },
    { number: "1000+", label: t('instituteLeadership.stats.students'), icon: <FaGraduationCap className="text-[#023E8A]" /> },
    { number: "15+", label: t('instituteLeadership.stats.awards'), icon: <FaAward className="text-[#023E8A]" /> }
  ];

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
            <FaAward className="text-xl" />
            <span className="font-semibold">{t('instituteLeadership.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('instituteLeadership.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('instituteLeadership.subtitle')}
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

        {/* Руководство */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-12 mb-20"
        >
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Фото и основная информация */}
                  <div className="lg:w-1/3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-auto rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <div className="text-center mt-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-lg text-[#023E8A] font-semibold mb-4">
                        {leader.position}
                      </p>

                      {/* Социальные сети */}
                      <div className="flex justify-center gap-4 mb-6">
                        <motion.a
                          whileHover={{ scale: 1.2, y: -2 }}
                          href={leader.social.linkedin}
                          className="bg-gray-100 text-[#023E8A] p-3 rounded-xl hover:bg-[#023E8A] hover:text-white transition-all duration-300"
                        >
                          <FaLinkedin />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2, y: -2 }}
                          href={leader.social.twitter}
                          className="bg-gray-100 text-[#023E8A] p-3 rounded-xl hover:bg-[#023E8A] hover:text-white transition-all duration-300"
                        >
                          <FaTwitter />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.2, y: -2 }}
                          href={`mailto:${leader.social.email}`}
                          className="bg-gray-100 text-[#023E8A] p-3 rounded-xl hover:bg-[#023E8A] hover:text-white transition-all duration-300"
                        >
                          <FaEnvelope />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Текст и достижения */}
                  <div className="lg:w-2/3">
                    <div className="flex items-start gap-3 mb-6">
                      <FaQuoteLeft className="text-3xl text-[#023E8A] mt-1 flex-shrink-0" />
                      <p className="text-lg text-gray-700 leading-relaxed italic">
                        {leader.text}
                      </p>
                    </div>

                    {/* Достижения */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <FaAward className="text-[#023E8A]" />
                        {t('instituteLeadership.achievements')}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
            {t('instituteLeadership.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('instituteLeadership.cta.description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#023E8A] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t('instituteLeadership.cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default InstituteLeadershipPage;