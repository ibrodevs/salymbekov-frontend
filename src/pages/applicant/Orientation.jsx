import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiUsers, FiCheckCircle } from 'react-icons/fi';

const Orientation = () => {
  const { t } = useTranslation();

  // Точные пузырьки как в компоненте Cost
  const animatedBalls = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      size: Math.random() * 120 + 60,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 3,
      delay: Math.random() * 2
    }));
  }, []);

  const floatingBubbles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      size: Math.random() * 80 + 40,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 6 + Math.random() * 4,
      delay: Math.random() * 3
    }));
  }, []);

  const smallBubbles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 25 + 15,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 1
    }));
  }, []);

  const activities = [
    {
      event: t('orientation.activities.event1', 'Знакомство с университетом'),
      actions: [
        t('orientation.activities.event1.action1', 'Предоставление общей информации для новых студентов в виде видеопрезентаций и буклетов'),
        t('orientation.activities.event1.action2', 'Знакомство с администрацией (онлайн беседа администрации со студентами нового потока)'),
        t('orientation.activities.event1.action3', 'Знакомство с профессорско-преподавательским составом'),
      ],
    },
    {
      event: t('orientation.activities.event2', 'Знакомство с учебным процессом'),
      actions: [
        t('orientation.activities.event2.action1', 'Обзор учебных аудиторий и лабораторий'),
        t('orientation.activities.event2.action2', 'Обзор клинических баз'),
      ],
    },
    {
      event: t('orientation.activities.event3', 'Знакомство правилами проживания в КР'),
      actions: [
        t('orientation.activities.event3.action1', 'Лекция по нормам поведения, технике безопасности'),
      ],
    },
    {
      event: t('orientation.activities.event4', 'Культура, традиции Кыргызстана'),
      actions: [
        t('orientation.activities.event4.action1', 'Ознакомление со спецификой и особенностями местного населения'),
      ],
    },
    {
      event: t('orientation.activities.event5', 'Общее собрание студентов'),
      actions: [
        t('orientation.activities.event5.action1', 'Провести разъяснительные работы по нормам поведения: в общественных местах; в университете; в общежитии; в торговых центрах и культурно-развлекательных заведениях'),
        t('orientation.activities.event5.action2', 'Меры профилактики COVID-19'),
        t('orientation.activities.event5.action3', 'Рекомендовать приложение 2GIS и гугл переводчик синхронный'),
      ],
    },
    {
      event: t('orientation.activities.event6', 'Собрание студентов мальчиков'),
      actions: [
        t('orientation.activities.event6.action1', 'Взаимоотношения с сокурсниками и одногруппниками'),
        t('orientation.activities.event6.action2', 'Личная гигиена, мужское здоровье'),
        t('orientation.activities.event6.action3', 'Взаимоотношения с противоположным полом'),
      ],
    },
    {
      event: t('orientation.activities.event7', 'Собрание студентов - девочек'),
      actions: [
        t('orientation.activities.event7.action1', 'Взаимоотношения с сокурсниками и одногруппниками'),
        t('orientation.activities.event7.action2', 'Личная гигиена, женское здоровье'),
        t('orientation.activities.event7.action3', 'Взаимоотношения с противоположным полом'),
      ],
    },
    {
      event: t('orientation.activities.event8', 'Спортивные мероприятия'),
      actions: [
        t('orientation.activities.event8.action1', 'Футбол'),
      ],
    },
    {
      event: t('orientation.activities.event9', 'Создание Общества объединяющего молодёжь КР и иностранных студентов университета'),
      actions: [
        t('orientation.activities.event9.action1', 'С помощью участников Общественной Школы «МЛК», в частности англоговорящих'),
      ],
    },
    {
      event: t('orientation.activities.event10', 'Конкурс «Лучший иностранный студент» по итогам 2021-2022 у.г.'),
      actions: [],
    },
    {
      event: t('orientation.activities.event11', 'Проверка общежитий'),
      actions: [
        t('orientation.activities.event11.action1', 'Систематически проверять общежития'),
        t('orientation.activities.event11.action2', 'Условия'),
        t('orientation.activities.event11.action3', 'Гигиена'),
        t('orientation.activities.event11.action4', 'Питание'),
      ],
    },
    {
      event: t('orientation.activities.event12', 'Постоянное взаимодействие'),
      actions: [
        t('orientation.activities.event12.action1', 'Создать график приема студентов'),
      ],
    },
    {
      event: t('orientation.activities.event13', 'Вопросы, касательно визовой поддержки, паспорта и прочих документаций'),
      actions: [
        t('orientation.activities.event13.action1', 'Проблемы безопасности и обеспечения жизнедеятельности'),
      ],
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated gradient balls - основной слой */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {animatedBalls.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute rounded-full opacity-10"
            style={{
              width: ball.size,
              height: ball.size,
              left: ball.left,
              top: ball.top,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: ball.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: ball.delay
            }}
          />
        ))}
      </div>

      {/* Medium Floating Bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingBubbles.map((bubble) => (
          <motion.div
            key={`floating-${bubble.id}`}
            className="absolute rounded-full opacity-8"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Small Bubbles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {smallBubbles.map((bubble) => (
          <motion.div
            key={`small-${bubble.id}`}
            className="absolute rounded-full opacity-12"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              background: 'linear-gradient(135deg, #023E8A, #0077B6)'
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Additional white bubbles in hero section for contrast */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hero-bubble-${i}`}
            className="absolute rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #ffffff, #e0f2fe)'
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <FiUsers className="w-10 h-10" />
          </motion.div>
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('orientation.hero.title', 'Адаптационная программа')}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl font-semibold text-white/90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('orientation.hero.subtitle', 'Программа адаптации для студентов-первокурсников')}
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content with Navigation */}
      <div className="relative z-10 container mx-auto px-4 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation */}
          <div className="lg:w-80 shrink-0">
            <ExtraNavigation />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Introduction */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                  <FiUsers className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-4">
                    {t('orientation.about.title', 'О программе')}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('orientation.about.description', 'Салымбеков университет предоставляет все условия для студентов-первокурсников к скорейшей адаптации к условиям обучения, проживания, быта и комфортного пребывания на территории учебного заведения. Функционирует план мероприятий по успешной реализации адаптационной программы.')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Activities Section */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                {t('orientation.activities.title', 'План мероприятий')}
              </h2>

              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group relative bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border-l-4 border-[#0077B6] shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md group-hover:scale-110 transition-transform">
                        <FiCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="group-hover:text-[#0077B6] transition-colors">{activity.event}</span>
                    </h3>
                    {activity.actions.length > 0 && (
                      <ul className="space-y-2 ml-14">
                        {activity.actions.map((action, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start gap-3 group-hover:text-gray-900 transition-colors">
                            <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                            <span className="flex-1">{action}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orientation;