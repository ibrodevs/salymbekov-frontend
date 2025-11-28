import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiUsers, FiCheckCircle } from 'react-icons/fi';

const Orientation = () => {
  const { t } = useTranslation();

  // Анимированные пузырьки как в других компонентах
  const animatedBalls = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      size: Math.random() * 120 + 60,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.15 + 0.1
    }));
  }, []);

  const floatingBubbles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      size: Math.random() * 80 + 40,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 6,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.12 + 0.08
    }));
  }, []);

  const smallBubbles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      size: Math.random() * 25 + 15,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.2 + 0.1
    }));
  }, []);

  const activities = [
    {
      event: t('orientation.activities.event1', 'Знакомство в университетом'),
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50/80 to-cyan-50/80 relative overflow-hidden">
      {/* Основной слой больших пузырей */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {animatedBalls.map((ball) => (
          <motion.div
            key={`ball-${ball.id}`}
            className="absolute rounded-full"
            style={{
              width: ball.size,
              height: ball.size,
              left: ball.left,
              top: ball.top,
              background: 'linear-gradient(135deg, #3b82f6, #60a5fa, #93c5fd)',
              opacity: ball.opacity,
              filter: 'blur(15px)'
            }}
            animate={{
              y: [0, -40, -20, 0],
              x: [0, 20, -10, 0],
              scale: [1, 1.15, 0.95, 1],
              rotate: [0, 5, -3, 0]
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

      {/* Плавающие средние пузыри */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingBubbles.map((bubble) => (
          <motion.div
            key={`floating-${bubble.id}`}
            className="absolute rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              background: 'linear-gradient(135deg, #60a5fa, #38bdf8, #7dd3fc)',
              opacity: bubble.opacity,
              filter: 'blur(12px)'
            }}
            animate={{
              y: [0, -60, -30, 0],
              x: [0, 30, -15, 0],
              scale: [1, 1.25, 0.9, 1],
              rotate: [0, 8, -5, 0]
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

      {/* Мелкие пузырьки для текстуры */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {smallBubbles.map((bubble) => (
          <motion.div
            key={`small-${bubble.id}`}
            className="absolute rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              background: 'linear-gradient(135deg, #7dd3fc, #bae6fd, #e0f2fe)',
              opacity: bubble.opacity,
              filter: 'blur(6px)'
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
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
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center py-20 px-4"
      >
        {/* Контрастные белые пузыри в герое */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hero-bubble-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #ffffff, #f0f9ff, #e0f2fe)',
              opacity: 0.3,
              filter: 'blur(12px)'
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, 20, 0],
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.15, 0.3]
            }}
            transition={{
              duration: 7 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform rotate-3 shadow-2xl shadow-blue-500/30">
            <FiUsers className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4"
        >
          {t('orientation.hero.title', 'Адаптационная программа')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          {t('orientation.hero.subtitle', 'Программа адаптации для студентов-первокурсников')}
        </motion.p>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation */}
          <ExtraNavigation />

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-8 border border-blue-100/50 relative overflow-hidden"
            >
              {/* Фоновые элементы для карточки */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/40 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-200/40 rounded-full blur-xl"></div>

              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl shadow-lg">
                  <FiUsers className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-4">
                    {t('orientation.about.title', 'О программе')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t('orientation.about.description', 'Салымбеков университет предоставляет все условия для студентов-первокурсников к скорейшей адаптации к условиям обучения, проживания, быта и комфортного пребывания на территории учебного заведения. Функционирует план мероприятий по успешной реализации адаптационной программы.')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Activities Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-blue-100/50 relative overflow-hidden"
            >
              {/* Фоновые элементы для карточки */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-200/30 rounded-full blur-xl"></div>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-8 relative z-10">
                {t('orientation.activities.title', 'План мероприятий')}
              </h2>

              <div className="space-y-6 relative z-10">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border-l-4 border-blue-500 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                        <FiCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="group-hover:text-blue-600 transition-colors duration-300">{activity.event}</span>
                    </h3>
                    {activity.actions.length > 0 && (
                      <ul className="space-y-2 ml-14">
                        {activity.actions.map((action, idx) => (
                          <motion.li
                            key={idx}
                            className="text-gray-700 flex items-start gap-3 group-hover:text-gray-900 transition-colors duration-200 hover:bg-white/60 rounded-lg p-2 -mx-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="text-blue-500 mt-1.5 text-lg group-hover:scale-125 transition-transform duration-200">•</span>
                            <span className="flex-1">{action}</span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Orientation;