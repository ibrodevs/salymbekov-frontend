import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiAward, FiCheckCircle, FiFileText, FiAlertCircle } from 'react-icons/fi';

const Entrance = () => {
  const { t } = useTranslation();

  // Пузырьки как в компоненте Cost
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

  const requirements = [
    { label: t('entrance.requirements.mainTest', 'Основной тест'), score: t('entrance.requirements.mainScore', '110 баллов') },
    { label: t('entrance.requirements.subjectTest', 'Предметный тест (химия и биология)'), score: t('entrance.requirements.subjectScore', '60 баллов') }
  ];

  const documents = [
    t('entrance.documents.document1', 'Паспорт или свидетельство о рождении'),
    t('entrance.documents.document2', 'Оригинал сертификата по ОРТ'),
    t('entrance.documents.document3', 'Оригинал и копия аттестата (диплома)'),
    t('entrance.documents.document4', 'Военный билет или приписное свидетельство (для военнообязанных)'),
    t('entrance.documents.document5', '6 цветных фотографий размером 3х4'),
    t('entrance.documents.document6', 'Для сирот, копии документов о смерти матери и/или отца'),
    t('entrance.documents.document7', 'Для абитуриентов-инвалидов справку (документ) об инвалидности'),
    t('entrance.documents.document8', 'Абитуриенты, претендующие на льготы, установленные законодательством КР, предоставляют дополнительные документы')
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
            <FiAward className="w-10 h-10" />
          </motion.div>
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('entrance.hero.title', 'Уважаемый Абитуриент!')}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl font-semibold text-white/90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('entrance.hero.subtitle', 'Прием студентов по результатам ОРТ')}
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
          <div className="flex-1 space-y-8">
            {/* Introduction */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                  <FiAlertCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-4">
                    {t('entrance.info.title', 'Информация о приеме')}
                  </h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      {t('entrance.info.description1', 'На этой странице Вы можете получить информацию о приеме студентов в Салымбеков Университет по результатам общереспубликанского тестирования.')}
                    </p>
                    <p>
                      {t('entrance.info.description2', 'Прием студентов на грантовое (бюджетное) обучение ведется на основе постановлений Кабинета Министров КР и осуществляется дистанционно (онлайн), через Автоматизированную информационную систему (АИС) на портале')}
                      <span className="font-semibold text-[#0077B6]"> 2020.edu.gov.kg</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                  <FiCheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                    {t('entrance.threshold.title', 'Пороговые баллы')}
                  </h2>
                  <p className="text-gray-700">
                    {t('entrance.threshold.description', 'К конкурсу на получение гранта допускаются только те абитуриенты, которые получили баллы равные или выше порогового:')}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border-l-4 border-[#0077B6] shadow-md hover:shadow-xl transition-all"
                  >
                    <h3 className="font-bold text-gray-800 mb-2">{req.label}</h3>
                    <p className="text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                      {req.score}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Confirmation Deadline */}
            <motion.div
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
                  <FiAlertCircle className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {t('entrance.deadline.title', 'Важно! Срок подтверждения')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t('entrance.deadline.description', 'Абитуриент, рекомендованный к зачислению в Салымбеков Университет, должен до 16:00 часов 6-го календарного дня каждого тура подтвердить свое желание обучаться, предоставив в приемную комиссию необходимые документы.')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Documents List */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                  <FiFileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-2">
                    {t('entrance.documents.title', 'Перечень документов')}
                  </h2>
                  <p className="text-gray-700">
                    {t('entrance.documents.description', 'Документы, подаваемые абитуриентами при поступлении:')}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="p-1.5 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full mt-0.5">
                      <FiCheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="flex-1 text-gray-700">{doc}</span>
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

export default Entrance;