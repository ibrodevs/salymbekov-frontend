import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import ExtraNavigation from './extrapages/ExtraNavigation';

const Commission = () => {
  const { t } = useTranslation();

  // Animated background balls - увеличенное количество
  const animatedBalls = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 60,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 4,
      delay: Math.random() * 3
    }));
  }, []);

  const contacts = [
    {
      icon: FiMapPin,
      title: t('commission.contacts.address', 'Адрес'),
      items: [
        t('commission.addresses.street1', 'ул. Малдыбаева, 24б'),
        t('commission.addresses.street2', 'ул. Ахунбаева, 125 (Международный колледж IT и бизнеса)'),
        t('commission.addresses.ait', 'Американский институт технологий "AIT"'),
        t('commission.addresses.medical', 'ул. Фучика, 3 (Высшая Школа Медицины)')
      ],
      color: 'from-[#023E8A] to-[#0077B6]'
    },
    {
      icon: FiPhone,
      title: t('commission.contacts.phones', 'Телефоны'),
      items: [
        t('commission.phones.it1', '+996 778 99 88 89 (Международный колледж IT и бизнеса)'),
        t('commission.phones.it2', '+996 706 99 88 89 (Международный колледж IT и бизнеса)'),
        t('commission.phones.ait', '+996 774 83 88 83 (Американский институт технологий AIT)'),
        t('commission.phones.medical', '+996 501 83 88 83 (Высшая Школа Медицины)')
      ],
      color: 'from-[#023E8A] to-[#48CAE4]'
    },
    {
      icon: FiMail,
      title: t('commission.contacts.email', 'Email'),
      items: [t('commission.email', 'info@salymbekov.com')],
      color: 'from-[#0077B6] to-[#00B4D8]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">

      {/* Animated gradient balls - УВЕЛИЧЕННОЕ КОЛИЧЕСТВО */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {animatedBalls.map((ball) => (
          <motion.div
            key={ball.id}
            className="absolute rounded-full opacity-5"
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
              delay: ball.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Additional floating bubbles */}
      {animatedBalls.slice(0, 10).map((ball) => (
        <motion.div
          key={`floating-${ball.id}`}
          className="fixed rounded-full opacity-3 pointer-events-none z-0"
          style={{
            width: ball.size * 0.7,
            height: ball.size * 0.7,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'linear-gradient(135deg, #0077B6, #48CAE4)'
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: ball.duration * 1.5,
            delay: ball.delay * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Hero Section with Background Image */}
      <motion.div
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Additional balls in hero section */}
        {animatedBalls.slice(0, 8).map((ball) => (
          <motion.div
            key={`hero-ball-${ball.id}`}
            className="absolute rounded-full opacity-10"
            style={{
              width: ball.size * 1.5,
              height: ball.size * 1.5,
              left: ball.left,
              top: ball.top,
              background: 'linear-gradient(135deg, #ffffff, #e0f2fe)'
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: ball.duration * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Placeholder for background image - will be replaced */}
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
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('commission.title', 'Приемная комиссия')}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t('commission.welcome', 'Добро пожаловать в Салымбеков Университет')}
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content with Navigation */}
      <div className="relative z-10 container mx-auto px-4 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation */}
          <div className="lg:w-80 flex-shrink-0">
            <ExtraNavigation />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${contact.color} mb-6`}>
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {contact.title}
                  </h3>
                  <div className="space-y-2">
                    {contact.items.map((item, idx) => (
                      <p key={idx} className="text-gray-600 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Welcome Message Section */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-12 mb-16"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-5xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {t('commission.dearApplicants', 'Дорогие Абитуриенты!')}
                </motion.h2>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="leading-relaxed"
                  >
                    {t('commission.paragraph1', 'Салымбеков Университет рад приветствовать Вас в новом учебном году и с радостью открывает для Вас свои двери. Университет является современным инновационным образовательным учреждением, аккредитованное в соответствии с международными стандартами образования, и предоставляющее качественное и передовое высшее образование в сфере IT, медицины, бизнеса, развития личностного роста и лидерских качеств.')}
                  </motion.p>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="leading-relaxed"
                  >
                    {t('commission.paragraph2', 'Основанный в 2019 году, как продолжение образовательной деятельности Фонда Аскара Салымбекова, Салымбеков университет имеет все материальные, технические и человеческие ресурсы для подготовки квалифицированных специалистов в сфере IT, бизнеса и медицины. На базе Салымбеков университет успешно функционируют Международный факультет медицины и Международный колледж IT и бизнеса, Бизнес школа Салымбекова с региональными филиалами по всей республике.')}
                  </motion.p>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center my-8">
                    <div className="h-1 w-32 bg-gradient-to-r from-[#023E8A] to-[#0077B6] rounded-full"></div>
                  </div>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="leading-relaxed"
                  >
                    {t('commission.paragraph3', 'Международный факультет медицины является структурным подразделением университета, ответственный за подготовку качественных медицинских специалистов и имеющий современную клиническую базу, инновационные оборудованные лаборатории, учебные классы, спортивные комплексы и высококвалифицированный профессорско-преподавательский состав, большинство из которых имеют ученые степени докторов и кандидатов наук по медицине и смежным областям.')}
                  </motion.p>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="leading-relaxed"
                  >
                    {t('commission.paragraph4', 'Международный колледж IT и бизнеса является структурным подразделением, предоставляющий качественное образование в сфере программирования и новых технологий. Совместно с ведущим университетом Малайзии (Lincoln University College) реализуется единая образовательная программа для предоставления возможности студентам продолжать обучения в Малайзии в сфере IT. Основные направления подготовки специалистов включают три основные пути: разработка программного обеспечения, разработка мобильных приложений, разработка мультимедийных программ. Кроме основных занятий, студенты обучаются дополнительным занятиям по визуальным эффектам, углубленному изучению английского языка, участие в реализации совместных IT проектов совместно с Жылдыз академией и IT сообществом Чойро.')}
                  </motion.p>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center my-8">
                    <div className="h-1 w-32 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] rounded-full"></div>
                  </div>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="leading-relaxed"
                  >
                    {t('commission.paragraph5', 'Салымбеков университет является международным признанным образовательным учреждением, включенный в список Всемирной организации здравоохранения (WDOMS), Ассоциации FAIMER, имеющий Sponsor Notes от международной организации ECFMG и являющийся членом Ассоциации высших учебных заведений Кыргызстана. Университет входит в ограниченный список вузов, имеющий доступ к базам данных Research for Life, SAGE и DeGruyter с доступам к электронным ресурсам с более 198 000 книг, журналов по медицинской и смежной тематикам.')}
                  </motion.p>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="leading-relaxed"
                  >
                    {t('commission.paragraph6', 'С момента основания активно развивается международное сотрудничество университета с ведущими университетами и клиниками мира, как Инха университет и Технической колледж Инха (Южная Корея), Istynie университет, Liv Hospital, Gaziosmanpasa Hospital (Турция), Lincoln University college (Малайзия), Казанский федеральный университет (Российская федерация) для развития сферы IT, создания и развития сферы информационных технологий, программирования, медицины, бизнеса. К примеры, успешно реализованы образовательные курсы по повышению квалификации сотрудников университета по углублению изучению русского языка, истории и правоведения совместно с Казанским федеральным университетом, успешно функционирует совместная образовательная программа с Lincoln University college (Малайзия) по подготовке студентов в сфере IT.')}
                  </motion.p>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center my-8">
                    <div className="h-1 w-32 bg-gradient-to-r from-[#023E8A] to-[#48CAE4] rounded-full"></div>
                  </div>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="leading-relaxed"
                  >
                    {t('commission.paragraph7', 'Университет уделяет огромное внимание внеучебной деятельности студентов. Так, студенты активно участвуют в ведении проекта ENACTUS, различных IT мероприятиях совместно с другими студентами, ежедневно ведутся тренинги Бизнес школы по развитию лидерских качеств, личностного роста и интеллектуального развития. Для укрепления здоровья студенты могут играть футбол, посещать тренажерные залы на базе спорткомплекса «Дордой спорт», регулярно проводятся неформальные встречи на природе для обеспечения культурного отдыха студентов.')}
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="text-center mt-12 pt-8 border-t border-gray-200"
                  >
                    <p className="text-3xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent">
                      {t('commission.finalWelcome', 'Добро пожаловать в Салымбеков университет')}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commission;