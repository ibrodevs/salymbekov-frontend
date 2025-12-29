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

  // Быстрые ссылки
  const quickLinks = [
    {
      to: "/science/management",
      icon: <FaUniversity className="text-[#023E8A]" />,
      title: t("science.main.links.management"),
      desc: t("science.main.links.managementDesc"),
      category: "management"
    },
    {
      to: "/science/professors",
      icon: <FaChalkboardTeacher className="text-[#023E8A]" />,
      title: t("science.main.links.professors"),
      desc: t("science.main.links.professorsDesc"),
      category: "professors"
    },
    {
      to: "/science/publications/journal",
      icon: <FaBook className="text-[#023E8A]" />,
      title: t("science.main.links.journal"),
      desc: t("science.main.links.journalDesc"),
      category: "publications"
    },
    {
      to: "/science/publications/periodicals",
      icon: <FaNewspaper className="text-[#023E8A]" />,
      title: t("science.main.links.periodicals"),
      desc: t("science.main.links.periodicalsDesc"),
      category: "publications"
    },
    {
      to: "/science/events/conferences",
      icon: <FaMicrophone className="text-[#023E8A]" />,
      title: t("science.main.links.conferences"),
      desc: t("science.main.links.conferencesDesc"),
      category: "events"
    },
    {
      to: "/science/events/master-classes",
      icon: <FaGraduationCap className="text-[#023E8A]" />,
      title: t("science.main.links.masterClasses"),
      desc: t("science.main.links.masterClassesDesc"),
      category: "events"
    },
    {
      to: "/science/events/round-tables",
      icon: <FaComments className="text-[#023E8A]" />,
      title: t("science.main.links.roundTables"),
      desc: t("science.main.links.roundTablesDesc"),
      category: "events"
    },
    {
      to: "/science/library",
      icon: <FaLayerGroup className="text-[#023E8A]" />,
      title: t("science.main.links.library"),
      desc: t("science.main.links.libraryDesc"),
      category: "library"
    },
    {
      to: "/science/student-science/clubs",
      icon: <FaUserFriends className="text-[#023E8A]" />,
      title: t("science.main.links.studentClubs"),
      desc: t("science.main.links.studentClubsDesc"),
      category: "students"
    },
    {
      to: "/science/student-science/conferences",
      icon: <FaMedal className="text-[#023E8A]" />,
      title: t("science.main.links.studentConferences"),
      desc: t("science.main.links.studentConferencesDesc"),
      category: "students"
    },
    {
      to: "/science/labs",
      icon: <FaVial className="text-[#023E8A]" />,
      title: t("science.main.links.labs"),
      desc: t("science.main.links.labsDesc"),
      category: "labs"
    }
  ];

  // Научные проекты (некликабельные)
  const scientificProjects = [
    { title: t("science.main.projectShowcase.items.urology"), comingSoon: t("science.main.projectShowcase.items.urologyComingSoon"), icon: <FaHospitalAlt className="text-[#023E8A]" /> },
    { title: t("science.main.projectShowcase.items.gynecology"), comingSoon: t("science.main.projectShowcase.items.gynecologyComingSoon"), icon: <FaBaby className="text-[#023E8A]" /> },
    { title: t("science.main.projectShowcase.items.ophthalmology"), comingSoon: t("science.main.projectShowcase.items.ophthalmologyComingSoon"), icon: <FaEye className="text-[#023E8A]" /> },
    { title: t("science.main.projectShowcase.items.oncology"), comingSoon: t("science.main.projectShowcase.items.oncologyComingSoon"), icon: <FaRibbon className="text-[#023E8A]" /> }
  ];

  // Упрощенные анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const quickLinkVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2
      }
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Упрощенный анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => ( // Уменьшено количество элементов
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 30, // Уменьшены размеры
              height: Math.random() * 80 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -20, 0], // Уменьшена амплитуда
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3, // Укорочена длительность
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12"> {/* Уменьшен padding */}
        {/* Hero секция */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-3 rounded-full mb-6"
          >
            <FaFlask className="text-xl" />
            <span className="font-semibold">{t('science.main.badge')}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('science.main.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('science.main.subtitle')}
          </p>
        </motion.div>

        {/* Основной контент с групповой анимацией */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Приветствие */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('science.main.greeting.title')}
            </h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>{t('science.main.greeting.p1')}</p>
              <p>{t('science.main.greeting.p2')}</p>
              <p>{t('science.main.greeting.p3')}</p>
            </div>
          </motion.div>

          {/* Приоритетные направления */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t('science.main.priorities.title')}
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#023E8A] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  {t('science.main.priorities.item1')}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#023E8A] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  {t('science.main.priorities.item2')}
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Быстрые ссылки */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t('science.main.sections')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={quickLinkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={index}
                >
                  {link.category === "library" ? (
                    <div className="block bg-white rounded-xl p-4 shadow-lg border border-gray-100 transition-all duration-200 text-center h-full cursor-default">
                      <div className="text-3xl mb-3 transition-transform duration-200">
                        {link.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {link.desc}
                      </p>
                    </div>
                  ) : (
                    <Link
                      to={link.to}
                      className="block bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 group text-center h-full"
                    >
                      <div className="text-3xl mb-3 group-hover:scale-105 transition-transform duration-200">
                        {link.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {link.desc}
                      </p>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Научные проекты */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t("science.main.projectShowcase.title")}
              </h2>
              <p className="text-lg text-gray-600">
                {t("science.main.projectShowcase.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {scientificProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 text-center transition-all duration-200"
                >
                  <div className="text-4xl mb-3 transition-transform duration-200">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {project.comingSoon}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScienceMain;