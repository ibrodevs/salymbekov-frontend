import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaUsers,
  FaBook,
  FaCalendarAlt,
  FaHeartbeat,
  FaHome,
  FaHandsHelping,
  FaGraduationCap,
  FaBriefcase,
  FaMoneyBillWave
} from "react-icons/fa";

const StudentMain = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: FaUsers,
      title: t('studentSub.communities') || 'Student Communities',
      description: t('studentSub.communitiesDesc') || 'Join student councils and clubs',
      path: '/student/communities',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaCalendarAlt,
      title: t('studentSub.schedules') || 'Schedules',
      description: t('studentSub.schedulesDesc') || 'View your academic schedule',
      path: '/student/schedules',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaBook,
      title: t('studentSub.resources') || 'Educational Resources',
      description: t('studentSub.resourcesDesc') || 'Access study materials',
      path: '/student/resources/instructions',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaHeartbeat,
      title: t('studentSub.opportunities') || 'Student Opportunities',
      description: t('studentSub.opportunitiesDesc') || 'Medical center, dormitory, support',
      path: '/student/opportunities/medical',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FaHandsHelping,
      title: t('studentSub.support') || 'Student Support',
      description: t('studentSub.supportDesc') || 'Social and psychological support',
      path: '/student/opportunities/social',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FaHome,
      title: t('studentSub.conditions') || 'Student Conditions',
      description: t('studentSub.conditionsDesc') || 'Living and studying conditions',
      path: '/student/conditions',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('studentMain.title') || 'Student Portal'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('studentMain.description') || 'Explore opportunities, resources, and support services for students'}
          </p>
        </motion.div>

        {/* Grid of sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={section.path}
                  className="h-full block group"
                >
                  <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
                      <Icon className="w-12 h-12 mb-4" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Featured section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4">
            {t('studentMain.featuredTitle') || 'Quick Links'}
          </h2>
          <p className="mb-6">
            {t('studentMain.featuredDescription') || 'Access important information and services'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/student/communities"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg transition-all duration-300"
            >
              <p className="font-semibold">{t('studentSub.communities') || 'Communities'}</p>
            </Link>
            <Link
              to="/student/schedules"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg transition-all duration-300"
            >
              <p className="font-semibold">{t('studentSub.schedules') || 'Schedules'}</p>
            </Link>
            <Link
              to="/student/opportunities/medical"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-lg transition-all duration-300"
            >
              <p className="font-semibold">{t('studentSub.opportunities') || 'Opportunities'}</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudentMain;
