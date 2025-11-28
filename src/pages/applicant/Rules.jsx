import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiFileText, FiCheckCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Rules = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Улучшенные анимированные пузырьки
  const animatedBalls = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      size: Math.random() * 150 + 80,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.1 + 0.05
    }));
  }, []);

  const floatingBubbles = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 6,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.08 + 0.04
    }));
  }, []);

  const smallBubbles = useMemo(() => {
    return [...Array(40)].map((_, i) => ({
      id: i,
      size: Math.random() * 30 + 10,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.15 + 0.08
    }));
  }, []);

  const fastBubbles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 1,
      opacity: Math.random() * 0.12 + 0.06
    }));
  }, []);

  const sections = [
    // ... (ваши секции остаются без изменений)
    {
      title: t('rules.sections.section2.title', '2. Порядок приема документов для поступления на платную форму обучения'),
      items: [
        {
          subtitle: t('rules.sections.section2.subtitles.subtitle1', '2.1. Термины и определения'),
          points: [
            t('rules.sections.section2.subtitles.subtitle1.point1', 'Автоматизированная информационная система участия в конкурсе на зачисление в вузы КР (далее - АИС «Онлайн зачисление в вузы КР»). АИС «Онлайн зачисление в вузы КР» - это портал для регистрации и зачисления в вузы Кыргызской Республики по результатам ОРТ текущего года в онлайн режиме.'),
            t('rules.sections.section2.subtitles.subtitle1.point2', 'Электронный талон – это заявка, поданная в электронном виде через АИС «Онлайн зачисление в вузы КР».'),
          ]
        },
        // ... остальные подсекции
      ]
    },
    // ... остальные секции
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
              background: 'linear-gradient(135deg, #023E8A, #0077B6, #0096C7)',
              opacity: ball.opacity,
              filter: 'blur(20px)'
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
              background: 'linear-gradient(135deg, #0077B6, #00B4D8, #48CAE4)',
              opacity: bubble.opacity,
              filter: 'blur(15px)'
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

      {/* Быстрые маленькие пузыри */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {fastBubbles.map((bubble) => (
          <motion.div
            key={`fast-${bubble.id}`}
            className="absolute rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              background: 'linear-gradient(135deg, #00B4D8, #90E0EF, #CAF0F8)',
              opacity: bubble.opacity,
              filter: 'blur(12px)'
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, 40, 0],
              scale: [1, 1.3, 1],
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
              background: 'linear-gradient(135deg, #48CAE4, #90E0EF, #ADE8F4)',
              opacity: bubble.opacity,
              filter: 'blur(8px)'
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

      {/* Пульсирующие акцентные пузыри */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute rounded-full"
            style={{
              width: 200 + i * 50,
              height: 200 + i * 50,
              left: `${20 + i * 10}%`,
              top: `${10 + i * 12}%`,
              background: 'radial-gradient(circle, #023E8A20, #0077B610, transparent 70%)',
              filter: 'blur(25px)'
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
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
        {/* Белые пузыри для контраста в герое */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`hero-bubble-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 120 + 40,
              height: Math.random() * 120 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(135deg, #ffffff, #e0f2fe, #b8e2f8)',
              filter: 'blur(15px)'
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, 20, 0],
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.1, 0.2]
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
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7] rounded-2xl flex items-center justify-center transform rotate-3 shadow-2xl shadow-blue-500/25">
            <FiFileText className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#023E8A] via-[#0077B6] to-[#0096C7] bg-clip-text text-transparent mb-4"
        >
          {t('rules.hero.title', 'Правила и план приема')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          {t('rules.hero.subtitle', 'Правила приема абитуриентов в «Салымбеков Университет»')}
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
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-8 border border-white/20 relative overflow-hidden"
            >
              {/* Фоновые элементы для карточки */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-100/30 rounded-full blur-2xl"></div>

              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                  <FiFileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-4">
                    {t('rules.introduction.title', 'О правилах приема')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t('rules.introduction.description', 'Правила приема абитуриентов в «Салымбеков Университет» на 2020-2021 учебный год. Нажмите на раздел для просмотра подробной информации.')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sections - Collapsible */}
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl mb-6 border border-white/20 overflow-hidden relative"
              >
                {/* Фоновый градиент для секции */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/30"></div>

                {/* Section Header - Clickable */}
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/50 transition-all duration-300 relative z-10 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <FiFileText className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 text-left group-hover:text-[#023E8A] transition-colors duration-300">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-[#0077B6] group-hover:scale-125 transition-transform duration-300">
                    {expandedSections[sectionIndex] ? (
                      <FiChevronUp className="w-6 h-6" />
                    ) : (
                      <FiChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {/* Section Content - Expandable */}
                <AnimatePresence>
                  {expandedSections[sectionIndex] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden relative z-10"
                    >
                      <div className="px-6 pb-6 space-y-6 border-t border-gray-100/50 pt-6">
                        {section.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                          >
                            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                              <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md group-hover:rotate-12 transition-transform duration-300">
                                <FiCheckCircle className="w-4 h-4 text-white" />
                              </div>
                              {item.subtitle}
                            </h3>
                            <ul className="space-y-2 ml-10">
                              {item.points.map((point, pointIndex) => (
                                <motion.li
                                  key={pointIndex}
                                  className="text-gray-700 flex items-start gap-3 group/item hover:bg-white/50 rounded-lg p-2 transition-all duration-200"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: pointIndex * 0.05 }}
                                >
                                  <span className="text-[#0077B6] mt-1.5 text-lg group-hover/item:scale-125 transition-transform duration-200">•</span>
                                  <span className="flex-1">{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Rules;