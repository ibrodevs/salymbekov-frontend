import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaUsers,
  FaUserFriends,
  FaBrain,
  FaComments,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaClipboardList,
  FaBookOpen,
  FaBook,
  FaLaptop,
  FaInfoCircle,
  FaHospitalAlt,
  FaHome,
  FaHandsHelping,
  FaListAlt,
  FaGlobe,
  FaSmile,
  FaCog,
  FaMedkit,
  FaUniversity,
  FaGraduationCap,
  FaHandshake,
  FaPaintBrush
} from "react-icons/fa";

const StudentMain = () => {
  const { t } = useTranslation();

  // Быстрые ссылки
  const quickLinks = [
    {
      to: "/student/community/council",
      icon: <FaUserFriends className="text-[#023E8A]" />,
      title: t("student.main.links.council"),
      desc: t("student.main.links.councilDesc"),
      category: "community"
    },
    {
      to: "/student/community/science",
      icon: <FaBrain className="text-[#023E8A]" />,
      title: t("student.main.links.scienceUnion"),
      desc: t("student.main.links.scienceUnionDesc"),
      category: "community"
    },
    {
      to: "/student/community/debate",
      icon: <FaComments className="text-[#023E8A]" />,
      title: t("student.main.links.debateClub"),
      desc: t("student.main.links.debateClubDesc"),
      category: "community"
    },
    {
      to: "/student/community/tutor",
      icon: <FaChalkboardTeacher className="text-[#023E8A]" />,
      title: t("student.main.links.tutorMovement"),
      desc: t("student.main.links.tutorMovementDesc"),
      category: "community"
    },
    {
      to: "/student/community/clubs",
      icon: <FaPaintBrush className="text-[#023E8A]" />,
      title: t("student.main.links.creativeClubs"),
      desc: t("student.main.links.creativeClubsDesc"),
      category: "community"
    },
    {
      to: "/student/schedule/study",
      icon: <FaCalendarAlt className="text-[#023E8A]" />,
      title: t("student.main.links.studySchedule"),
      desc: t("student.main.links.studyScheduleDesc"),
      category: "schedules"
    },
    {
      to: "/student/schedule/modules",
      icon: <FaBookOpen className="text-[#023E8A]" />,
      title: t("student.main.links.modulesSchedule"),
      desc: t("student.main.links.modulesScheduleDesc"),
      category: "schedules"
    },
    {
      to: "/student/schedule/practice",
      icon: <FaBook className="text-[#023E8A]" />,
      title: t("student.main.links.practiceSchedule"),
      desc: t("student.main.links.practiceScheduleDesc"),
      category: "schedules"
    },
    {
      to: "/student/schedule/mfm",
      icon: <FaUniversity className="text-[#023E8A]" />,
      title: t("student.main.links.mfmSchedule"),
      desc: t("student.main.links.mfmScheduleDesc"),
      category: "schedules"
    },
    {
      to: "/student/schedule/college",
      icon: <FaGraduationCap className="text-[#023E8A]" />,
      title: t("student.main.links.collegeSchedule"),
      desc: t("student.main.links.collegeScheduleDesc"),
      category: "schedules"
    },
    {
      to: "/student/resources/instructions",
      icon: <FaInfoCircle className="text-[#023E8A]" />,
      title: t("student.main.links.instructions"),
      desc: t("student.main.links.instructionsDesc"),
      category: "resources"
    },
    {
      to: "/student/resources/infosystem",
      icon: <FaLaptop className="text-[#023E8A]" />,
      title: t("student.main.links.infosystem"),
      desc: t("student.main.links.infosystemDesc"),
      category: "resources"
    },
    {
      to: "/student/resources/elib",
      icon: <FaBook className="text-[#023E8A]" />,
      title: t("student.main.links.elibrary"),
      desc: t("student.main.links.elibraryDesc"),
      category: "resources"
    },
    {
      to: "/student/resources/edu-resources",
      icon: <FaBookOpen className="text-[#023E8A]" />,
      title: t("student.main.links.educationalResources"),
      desc: t("student.main.links.educationalResourcesDesc"),
      category: "resources"
    },
    {
      to: "/student/opportunities/medical",
      icon: <FaHospitalAlt className="text-[#023E8A]" />,
      title: t("student.main.links.medicalCenter"),
      desc: t("student.main.links.medicalCenterDesc"),
      category: "opportunities"
    },
    {
      to: "/student/opportunities/dorm",
      icon: <FaHome className="text-[#023E8A]" />,
      title: t("student.main.links.dormitory"),
      desc: t("student.main.links.dormitoryDesc"),
      category: "opportunities"
    },
    {
      to: "/student/opportunities/social",
      icon: <FaHandsHelping className="text-[#023E8A]" />,
      title: t("student.main.links.socialSupport"),
      desc: t("student.main.links.socialSupportDesc"),
      category: "opportunities"
    }
  ];

  // Дополнительные возможности (некликабельные)
  const additionalOpportunities = [
    { 
      title: t("student.main.additional.courses"), 
      icon: <FaListAlt className="text-[#023E8A]" />,
      desc: t("student.main.additional.coursesDesc"),
      path: "/student/opportunities/courses"
    },
    { 
      title: t("student.main.additional.mobility"), 
      icon: <FaGlobe className="text-[#023E8A]" />,
      desc: t("student.main.additional.mobilityDesc"),
      path: "/student/opportunities/mobility"
    },
    { 
      title: t("student.main.additional.psychology"), 
      icon: <FaSmile className="text-[#023E8A]" />,
      desc: t("student.main.additional.psychologyDesc"),
      path: "/student/opportunities/psychology"
    },
    { 
      title: t("student.main.additional.serviceCenter"), 
      icon: <FaCog className="text-[#023E8A]" />,
      desc: t("student.main.additional.serviceCenterDesc"),
      path: "/student/opportunities/service-center"
    }
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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              width: Math.random() * 80 + 30,
              height: Math.random() * 80 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #023E8A, #0077B6)`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
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
            <FaUsers className="text-xl" />
            <span className="font-semibold">{t('student.main.badge')}</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
            {t('student.main.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('student.main.subtitle')}
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
              {t('student.main.greeting.title')}
            </h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>{t('student.main.greeting.p1')}</p>
              <p>{t('student.main.greeting.p2')}</p>
              <p>{t('student.main.greeting.p3')}</p>
            </div>
          </motion.div>

          {/* Быстрые ссылки */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t('student.main.sections')}
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Дополнительные возможности */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {t("student.main.additional.title")}
              </h2>
              <p className="text-lg text-gray-600">
                {t("student.main.additional.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalOpportunities.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block"
                >
                  <motion.div
                    variants={quickLinkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="text-4xl mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Важная информация */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {t("student.main.info.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("student.main.info.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/student/conditions"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  <FaHandsHelping className="mr-3" />
                  {t("student.main.info.button1")}
                </Link>
                <Link
                  to="/student/opportunities/adaptation"
                  className="inline-flex items-center px-6 py-3 bg-white border border-[#023E8A] text-[#023E8A] font-semibold rounded-xl hover:bg-[#023E8A] hover:text-white transition-all"
                >
                  <FaMedkit className="mr-3" />
                  {t("student.main.info.button2")}
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentMain;