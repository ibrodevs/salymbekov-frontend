import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFlask,
  FaBook,
  FaMicroscope,
  FaUsers,
  FaGraduationCap,
  FaLightbulb,
  FaCalendarAlt,
  FaTrophy,
  FaUniversity,
  FaChalkboardTeacher,
  FaNewspaper,
  FaMicrophone,
  FaComments,
  FaLayerGroup,
  FaUserFriends,
  FaMedal,
  FaVial,
  FaHospitalAlt,
  FaBaby,
  FaEye,
  FaRibbon
} from "react-icons/fa";

const ScienceMain = () => {
  const { t } = useTranslation();

  // Статистика
  const stats = [
    { number: "150+", label: t('science.main.stats.publications'), icon: <FaBook className="text-[#023E8A]" /> },
    { number: "25", label: t('science.main.stats.labs'), icon: <FaMicroscope className="text-[#023E8A]" /> },
    { number: "40+", label: t('science.main.stats.projects'), icon: <FaLightbulb className="text-[#023E8A]" /> },
    { number: "200+", label: t('science.main.stats.researchers'), icon: <FaUsers className="text-[#023E8A]" /> }
  ];

  // Быстрые ссылки
  const quickLinks = [
    { to: "/science/management", icon: <FaUniversity className="text-[#023E8A]" />, title: "Органы управления", desc: "Научно-технический совет", category: "management" },
    { to: "/science/professors", icon: <FaChalkboardTeacher className="text-[#023E8A]" />, title: "Профессорско-преподавательский состав", desc: "Наши ведущие профессора и преподаватели", category: "professors" },
    { to: "/science/publications/journal", icon: <FaBook className="text-[#023E8A]" />, title: "Научный журнал", desc: "Публикации наших исследователей", category: "publications" },
    { to: "/science/publications/periodicals", icon: <FaNewspaper className="text-[#023E8A]" />, title: "Периодические издания", desc: "Регулярные научные издания", category: "publications" },
    { to: "/science/events/conferences", icon: <FaMicrophone className="text-[#023E8A]" />, title: "Конференции", desc: "Научные конференции и симпозиумы", category: "events" },
    { to: "/science/events/master-classes", icon: <FaGraduationCap className="text-[#023E8A]" />, title: "Мастер-классы", desc: "Образовательные мастер-классы", category: "events" },
    { to: "/science/events/round-tables", icon: <FaComments className="text-[#023E8A]" />, title: "Круглые столы", desc: "Дискуссии и обсуждения", category: "events" },
    { to: "/science/library", icon: <FaLayerGroup className="text-[#023E8A]" />, title: "Библиотека", desc: "Электронная библиотека университета", category: "library" },
    { to: "/science/student-science/clubs", icon: <FaUserFriends className="text-[#023E8A]" />, title: "Научные кружки", desc: "Студенческие научные объединения", category: "students" },
    { to: "/science/student-science/conferences", icon: <FaMedal className="text-[#023E8A]" />, title: "Студенческие конференции", desc: "Научные мероприятия для студентов", category: "students" },
    { to: "/science/labs", icon: <FaVial className="text-[#023E8A]" />, title: "Лаборатории", desc: "Современные научные лаборатории", category: "labs" }
  ];

  // Научные проекты (некликабельные)
  const scientificProjects = [
    { title: "Урология", icon: <FaHospitalAlt className="text-[#023E8A]" /> },
    { title: "Гинекология", icon: <FaBaby className="text-[#023E8A]" /> },
    { title: "Офтальмология", icon: <FaEye className="text-[#023E8A]" /> },
    { title: "Онкология", icon: <FaRibbon className="text-[#023E8A]" /> }
  ];

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
        {/* Hero секция */}
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
            <FaFlask className="text-xl" />
            <span className="font-semibold">{t('science.main.badge')}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('science.main.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('science.main.subtitle')}
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

        {/* Приветствие */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t('science.main.greeting.title')}
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>{t('science.main.greeting.p1')}</p>
            <p>{t('science.main.greeting.p2')}</p>
            <p>{t('science.main.greeting.p3')}</p>
          </div>
        </motion.div>

        {/* Приоритетные направления */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t('science.main.priorities.title')}
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#023E8A] rounded-full mt-2" />
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('science.main.priorities.item1')}
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#023E8A] rounded-full mt-2" />
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('science.main.priorities.item2')}
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Быстрые ссылки */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('science.main.sections')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={link.to}
                  className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center h-full"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {link.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Научные проекты (некликабельные) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Научные проекты
            </h2>
            <p className="text-xl text-gray-600">
              Основные направления наших исследований
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scientificProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200 text-center"
              >
                <div className="text-5xl mb-4">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScienceMain;
