import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiFileText, FiCheckCircle, FiChevronDown, FiChevronUp, FiUsers, FiBook, FiRepeat } from 'react-icons/fi';

const Rules = () => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTab, setActiveTab] = useState('admission'); // 'admission' или 'transfer'

  const toggleSection = (index) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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

  // Данные для вкладки "Правила приема"
  const admissionSections = [
    {
      title: t('admission.section2.title', '2. Порядок приема документов для поступления на платную форму обучения'),
      items: [
        {
          subtitle: t('admission.section2.subtitle1', '2.1. В правилах приема документов используются следующие термины:'),
          points: [
            t('admission.section2.subtitle1.point1', 'Автоматизированная информационная система участия в конкурсе на зачисление в вузы КР (далее - АИС «Онлайн зачисление в вузы КР»). АИС «Онлайн зачисление в вузы КР» - это портал для регистрации и зачисления в вузы Кыргызской Республики по результатам ОРТ текущего года в онлайн режиме.'),
            t('admission.section2.subtitle1.point2', 'Электронный талон – это заявка, поданная в электронном виде через АИС «Онлайн зачисление в вузы КР».'),
          ]
        },
        {
          subtitle: t('admission.section2.subtitle2', '2.2. Прием и оформление документов по результатам ОРТ'),
          points: [
            t('admission.section2.subtitle2.point1', 'Прием и оформление документов по результатам ОРТ на дневную и заочную с применением ДОТ формы обучения ведется через АИС «Онлайн зачисление в вузы КР».'),
          ]
        },
        {
          subtitle: t('admission.section2.subtitle3', '2.3. Прием и оформление документов на специальности и направления, не требующих результатов ОРТ'),
          points: [
            t('admission.section2.subtitle3.point1', 'Прием и оформление документов на специальности и направления, не требующих результатов ОРТ, на дневную и заочную с применением ДОТ формы обучения ведется посредством онлайн регистрации по специальной электронной форме вуза, разработанной вузом самостоятельно. Перечень документов: документ государственного образца о среднем общем, среднем профессиональном, или высшем образовании; 1 фотография размером 3х4. Сканированные версии необходимых документов, абитуриент отправляет на информационно-коммуникативный мессенджер, определяемый вузом самостоятельно (на электронную почту приемной комиссии enroll.smu@gmail.com , или на номер WhatsApp членов приемной комиссии 0(312) 65-85-18, 0(505) 65-85-18, 0(558) 65-85-18, 0(776) 65-85-18 или на специальную электронную форму вуза для подачи документов, которые указываются на сайте вуза).'),
          ]
        },
        {
          subtitle: t('admission.section2.subtitle4', '2.4. Льготы для абитуриентов'),
          points: [
            t('admission.section2.subtitle4.point1', 'Если абитуриент претендует на льготы, установленные законодательством Кыргызской Республики, к основному пакету документов необходимо прикрепить сканированные версии дополнительных документов (свидетельства о смерти родителей; заключение медико-социальной экспертизы; документы, подтверждающие наличие спортивного звания; военный билет с отметкой о прохождении срочной военной службы и др.).'),
          ]
        },
        {
          subtitle: t('admission.section2.subtitle5', '2.5. Сроки приема документов'),
          points: [
            t('admission.section2.subtitle5.point1', 'Прием документов для поступления в вузы КР на места по договору с оплатой стоимости обучения производится до 30 августа каждого учебного года.'),
          ]
        }
      ]
    },
    {
      title: t('admission.section3.title', '3. Порядок приема документов от абитуриентов, рекомендованных Грантовой комиссией вуза к зачислению'),
      items: [
        {
          subtitle: t('admission.section3.subtitle1', '3.1. Отбор и зачисление абитуриентов по результатам ОРТ'),
          points: [
            t('admission.section3.subtitle1.point1', 'Отбор и зачисление абитуриентов по результатам ОРТ текущего года проводится грантовой комиссией "Салымбеков Университет" в сроки, устанавливаемые Министерством образования и науки Кыргызской Республики, через АИС «Онлайн зачисление в вузы КР». К конкурсу на получение гранта, допускаются абитуриенты, получившие по основному тесту баллы, равные или выше определяемого МОН КР порогового балла. Результаты ОРТ, сданного абитуриентом до прохождения им срочной военной службы, действительны в течение 3 лет.'),
          ]
        },
        {
          subtitle: t('admission.section3.subtitle2', '3.2. Документы для зачисления'),
          points: [
            t('admission.section3.subtitle2.point1', 'Абитуриент, рекомендованный к зачислению в Университет, должен в течение 3 дней подтвердить свое желание обучаться в "Салымбеков Университет", предоставив в приемную комиссию следующие документы: паспорт или свидетельство о рождении; оригинал сертификата ОРТ; оригинал аттестата о среднем общем образовании, диплома о среднем профессиональном образовании либо его дубликат; военный билет или приписное свидетельство; 6 фотографий 3х4.'),
          ]
        },
        {
          subtitle: t('admission.section3.subtitle3', '3.3. Зачисление по результатам ОРТ'),
          points: [
            t('admission.section3.subtitle3.point1', 'Допускается зачисление абитуриентов в число студентов "Салымбеков Университет" по результатам ОРТ после подачи документов в электронном виде через АИС «Онлайн зачисление в вузы КР».'),
          ]
        },
        {
          subtitle: t('admission.section3.subtitle4', '3.4. Сроки предоставления оригиналов документов'),
          points: [
            t('admission.section3.subtitle4.point1', 'Оригиналы документов и соответствующее количество фотографий абитуриент обязан предоставить в приемную комиссию вуза до 30 августа 2020 года. После сдачи оригиналов документов и предъявления в техническую комиссию квитанции об оплате за обработку документов, абитуриент получает расписку о приеме документов.'),
          ]
        }
      ]
    },
    {
      title: t('admission.section4.title', '4. Порядок приема и зачисления абитуриентов на платную форму обучения в "Салымбеков Университет" и апелляция по результатам'),
      items: [
        {
          subtitle: t('admission.section4.subtitle1', '4.1. Конкурс на зачисление по результатам ОРТ'),
          points: [
            t('admission.section4.subtitle1.point1', 'Конкурс на зачисление абитуриентов на все формы обучения по договору с оплатой стоимости обучения проводится только по итогам ОРТ. При наличии у абитуриента баллов ОРТ выше порогового балла, приемная комиссия не имеет право отказать в приеме сертификата для участия в конкурсе. Результаты ОРТ, сданного абитуриентом до прохождения им срочной военной службы, действительны в течение 3 лет.'),
          ]
        },
        {
          subtitle: t('admission.section4.subtitle2', '4.2. Поступление без ОРТ'),
          points: [
            t('admission.section4.subtitle2.point1', 'При поступлении абитуриентов на контрактную форму обучения, где результаты ОРТ не обязательны, главными критериями для поступления в вуз являются уровень знаний и способности поступающего, для установления которых берется за основу средний балл аттестата о среднем образовании (11-класс), или онлайн собеседование посредством информационно-коммуникативных технологий и мессенджеров.'),
          ]
        },
        {
          subtitle: t('admission.section4.subtitle3', '4.3. Сроки и порядок проведения конкурса'),
          points: [
            t('admission.section4.subtitle3.point1', 'Сроки и порядок проведения конкурса на все формы обучения по договору с оплатой стоимости обучения по результатам ОРТ аналогичны проведению туров отбора и зачисления абитуриентов на грантовое обучение. В каждом туре абитуриент вправе выбрать один вуз, путем подачи бумажного талона в приемной комиссии вуза или электронного талона сертификата через АИС «Онлайн зачисление в вузы КР». Конкурс проводится без учета категорий абитуриентов, установленных для абитуриентов, претендующих на получение государственного образовательного гранта, к зачислению рекомендуются абитуриенты с наиболее высокими баллами.'),
          ]
        }
      ]
    }
  ];

  // Данные для вкладки "Положение о переводе"
  const transferSections = [
    {
      title: t('transfer.section1.title', '1. Общие положения'),
      items: [
        {
          subtitle: t('transfer.section1.subtitle1', 'Основание для разработки'),
          points: [
            t('transfer.section1.subtitle1.point1', 'Настоящее Положение разработано в соответствии с Законом Кыргызской Республики «Об образовании»; Положением о порядке перевода, отчисления и восстановления студентов высших учебных заведений, утвержденного Постановлением Правительства Кыргызской Республики от 29 мая 2012 года №346, Уставом Учреждения и другими нормативными правовыми актами, регулирующими деятельность образовательных организаций высшего профессионального образования.'),
            t('transfer.section1.subtitle1.point2', 'Настоящее Положение устанавливает общие требования к процедуре перевода и восстановления студентов в Учреждение «Салымбеков Университет» (далее-Университет), а также перехода с одной основной образовательной программы (направления, специальности) на другую, не зависимо от курса, формы (очная, вечерняя, заочная, дистанционная, экстернат), в том числе внутри университета.'),
            t('transfer.section1.subtitle1.point3', 'Определяющим условием перевода и восстановления студентов в КГУ является их подготовленность к освоению конкретной (выбранной) основной образовательной программы профессионального образования, предшествующая академическая успеваемость, а также наличие вакантных мест.'),
            t('transfer.section1.subtitle1.point4', 'Общая продолжительность обучения студента не должна превышать срока, установленного учебным планом Университета для освоения основной образовательной программы.'),
          ]
        }
      ]
    },
    {
      title: t('transfer.section2.title', '2. Порядок перевода студентов'),
      items: [
        {
          subtitle: t('transfer.section2.subtitle1', '2.1. Условия перевода'),
          points: [
            t('transfer.section2.subtitle1.point1', 'Перевод студентов высших учебных заведений, имеющих государственную аккредитацию (аттестацию), осуществляется в период летних или зимних каникул, только с согласия руководителей обоих вузов, при наличии вакантных мест на соответствующем курсе по интересующей студента специальности/направлении, на договорной основе с полной компенсацией затрат за обучение.'),
            t('transfer.section2.subtitle1.point2', 'Студенты, которые переводятся из других образовательных организаций (учреждений) или с одной специальности на другую, а также восстанавливаются в число студентов после отчисления, плату за ликвидацию разницы в учебных планах вносят дополнительно. Размер данной оплаты определяется расчетным путем в зависимости от разницы в учебной нагрузке и размера ставок часовой оплаты труда преподавателей.'),
          ]
        },
        {
          subtitle: t('transfer.section2.subtitle2', '2.2. Ограничения при переводе'),
          points: [
            t('transfer.section2.subtitle2.point1', 'Ограничении, связанных с курсом и формой обучения, видом основной образовательной программы, на которые происходит перевод студента, Университет не устанавливает.'),
            t('transfer.section2.subtitle2.point2', 'Студенты, успешно завершившие первый год обучения, имеют право на перевод в другую образовательную программу внутри Университета, на аналогичную или другую образовательную программу из другого вуза в Университет, при условии соответствия требованиям приема на эту образовательную программу, наличия вакантных мест и согласия руководителей обеих программ (вузов).'),
          ]
        }
      ]
    },
    {
      title: t('transfer.section3.title', '3. Отчисление студентов'),
      items: [
        {
          subtitle: t('transfer.section3.subtitle1', '3.1. Отчисление по инициативе студента'),
          points: [
            t('transfer.section3.subtitle1.point1', 'Студент может быть отчислен из Университета по собственной инициативе приказом ректора, по личному заявлению студента: по собственному желанию (без указания конкретных причин); в связи с переходом в другой вуз; в связи с болезнью (на основании справки медицинского учреждения); в связи с семейными обстоятельствами.'),
          ]
        },
        {
          subtitle: t('transfer.section3.subtitle2', '3.2. Отчисление по инициативе администрации'),
          points: [
            t('transfer.section3.subtitle2.point1', 'Отчисление по инициативе администрации осуществляется приказом ректора, по представлению рапорта руководителя соответствующего учебного подразделения: за академическую задолженность; за нарушение учебной дисциплины (невыполнение графика учебного процесса, утерю связи с вузом, невыход из академического отпуска по окончании его срока); за нарушение правил внутреннего распорядка, правил проживания в общежитии; в связи с непрохождением государственной итоговой аттестации; за совершение противоправных действий после вступления в законную силу приговора суда, которым студент осужден к лишению свободы, либо к иному наказанию, исключающему возможность продолжения учебы; в связи с невозмещением затрат на обучение.'),
          ]
        }
      ]
    },
    {
      title: t('transfer.section4.title', '4. Восстановление в число студентов'),
      items: [
        {
          subtitle: t('transfer.section4.subtitle1', '4.1. Условия восстановления'),
          points: [
            t('transfer.section4.subtitle1.point1', 'Восстановление осуществляется после окончания семестра при наличии мест на соответствующем курсе по интересующей студента специальности/направлении, по личному заявлению студента и предъявлению академической справки. Возможность восстановления студентов, ранее отчисленных из этого же Университета, рассматривается на основании учебной карточки/транскрипта студента.'),
            t('transfer.section4.subtitle1.point2', 'Восстановление студента осуществляется на основе аттестации. Аттестация проводится аттестационной комиссией путем рассмотрения академической справки. При определении курса, разница в учебных планах не должна превышать 7 дисциплин.'),
          ]
        },
        {
          subtitle: t('transfer.section4.subtitle2', '4.2. Ограничения при восстановлении'),
          points: [
            t('transfer.section4.subtitle2.point1', 'Если до отчисления студент обучался в Университете менее двух семестров, то он не имеет право на восстановление для продолжения обучения. Восстановление на первый курс/год обучения не осуществляется.'),
          ]
        }
      ]
    }
  ];

  // Выбираем данные в зависимости от активной вкладки
  const sections = activeTab === 'admission' ? admissionSections : transferSections;
  const heroTitle = activeTab === 'admission'
    ? t('admission.hero.title', 'Правила и план приема')
    : t('transfer.hero.title', 'Положение о переводе');
  const heroSubtitle = activeTab === 'admission'
    ? t('admission.hero.subtitle', 'ПРАВИЛА ПРИЕМА АБИТУРИЕНТОВ В «САЛЫМБЕКОВ УНИВЕРСИТЕТ»')
    : t('transfer.hero.subtitle', 'ПОЛОЖЕНИЕ О ПОРЯДКЕ ПЕРЕВОДА, ОТЧИСЛЕНИЯ И ВОССТАНОВЛЕНИЯ СТУДЕНТОВ');
  const introductionTitle = activeTab === 'admission'
    ? t('admission.introduction.title', 'Правила приема абитуриентов')
    : t('transfer.introduction.title', 'Положение о переводе студентов');
  const introductionDescription = activeTab === 'admission'
    ? t('admission.introduction.description', 'Настоящие правила регулируют порядок приема абитуриентов в "Салымбеков Университет" на все формы обучения. Правила разработаны в соответствии с законодательством Кыргызской Республики и устанавливают единые требования к процедуре приема, зачисления и апелляции.')
    : t('transfer.introduction.description', 'Настоящее Положение устанавливает порядок перевода, отчисления и восстановления студентов в Салымбеков Университет. Положение разработано в соответствии с законодательством Кыргызской Республики и регулирует все аспекты академической мобильности студентов.');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
            <FiFileText className="w-10 h-10" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {heroTitle}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-semibold text-white/90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {heroSubtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation */}
          <div className="lg:w-80 shrink-0">
            <ExtraNavigation />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Switch Tabs */}
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab('admission')}
                className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl transition-all duration-300 ${activeTab === 'admission'
                    ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <FiBook className="w-5 h-5" />
                <span className="font-semibold">{t('tabs.admission', 'Правила приема')}</span>
              </button>
              <button
                onClick={() => setActiveTab('transfer')}
                className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-2xl transition-all duration-300 ${activeTab === 'transfer'
                    ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <FiRepeat className="w-5 h-5" />
                <span className="font-semibold">{t('tabs.transfer', 'Положение о переводе')}</span>
              </button>
            </div>

            {/* Introduction */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                  {activeTab === 'admission' ? (
                    <FiBook className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  ) : (
                    <FiRepeat className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-4">
                    {introductionTitle}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {introductionDescription}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sections - Collapsible */}
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl mb-6 overflow-hidden relative group"
              >
                {/* Section Header - Clickable */}
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 relative z-10 group/header"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg group-hover/header:scale-110 transition-transform">
                      <FiFileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 text-left group-hover/header:text-[#0077B6] transition-colors">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-[#0077B6]">
                    {expandedSections[sectionIndex] ? (
                      <FiChevronUp className="w-5 h-5 md:w-6 md:h-6" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                    )}
                  </div>
                </button>

                {/* Section Content - Expandable */}
                {expandedSections[sectionIndex] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden relative z-10"
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6 border-t border-gray-100/50 pt-6">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: itemIndex * 0.05 }}
                          className="group relative"
                        >
                          <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                              <FiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <span className="group-hover:text-[#0077B6] transition-colors">{item.subtitle}</span>
                          </h3>
                          <ul className="space-y-3 ml-10 md:ml-12">
                            {item.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="text-gray-700 flex items-start gap-3 group-hover:text-gray-900 transition-colors">
                                <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                                <span className="flex-1 text-sm md:text-base leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;