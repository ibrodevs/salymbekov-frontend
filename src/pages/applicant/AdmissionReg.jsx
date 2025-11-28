import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiFileText, FiCheckCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Transfer = () => {
   const { t } = useTranslation();
   const [expandedSections, setExpandedSections] = useState({});

   const toggleSection = (index) => {
      setExpandedSections(prev => ({
         ...prev,
         [index]: !prev[index]
      }));
   };

   // Пузырьки как в других компонентах
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

   const sections = [
      {
         title: t('transfer.sections.section1.title', '1. Общие положения'),
         items: [
            {
               subtitle: t('transfer.sections.section1.subtitles.subtitle1', '1.1. Основание разработки'),
               points: [
                  t('transfer.sections.section1.subtitles.subtitle1.point1', 'Настоящее Положение разработано в соответствии с Законом Кыргызской Республики «Об образовании»; Положением о порядке перевода, отчисления и восстановления студентов высших учебных заведений, утвержденного Постановлением Правительства Кыргызской Республики от 29 мая 2012 года №346, Уставом Учреждения и другими нормативными правовыми актами, регулирующими деятельность образовательных организаций высшего профессионального образования.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section1.subtitles.subtitle2', '1.2. Область применения'),
               points: [
                  t('transfer.sections.section1.subtitles.subtitle2.point1', 'Настоящее Положение устанавливает общие требования к процедуре перевода и восстановления студентов в Учреждение «Салымбеков Университет» (далее-Университет), а также перехода с одной основной образовательной программы (направления, специальности) на другую, не зависимо от курса, формы (очная, вечерняя, заочная, дистанционная, экстернат), в том числе внутри университета.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section1.subtitles.subtitle3', '1.3. Условия перевода и восстановления'),
               points: [
                  t('transfer.sections.section1.subtitles.subtitle3.point1', 'Определяющим условием перевода и восстановления студентов в КГУ является их подготовленность к освоению конкретной (выбранной) основной образовательной программы профессионального образования, предшествующая академическая успеваемость, а также наличие вакантных мест.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section1.subtitles.subtitle4', '1.4. Продолжительность обучения'),
               points: [
                  t('transfer.sections.section1.subtitles.subtitle4.point1', 'Общая продолжительность обучения студента не должна превышать срока, установленного учебным планом Университета для освоения основной образовательной программы.'),
               ]
            }
         ]
      },
      {
         title: t('transfer.sections.section2.title', '2. Порядок перевода студентов'),
         items: [
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle1', '2.1. Общие условия перевода'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle1.point1', 'Перевод студентов высших учебных заведений, имеющих государственную аккредитацию (аттестацию), осуществляется в период летних или зимних каникул, только с согласия руководителей обоих вузов, при наличии вакантных мест на соответствующем курсе по интересующей студента специальности/направлении, на договорной основе с полной компенсацией затрат за обучение.'),
                  t('transfer.sections.section2.subtitles.subtitle1.point2', 'Студенты, которые переводятся из других образовательных организаций (учреждений) или с одной специальности на другую, а также восстанавливаются в число студентов после отчисления, плату за ликвидацию разницы в учебных планах вносят дополнительно. Размер данной оплаты определяется расчетным путем в зависимости от разницы в учебной нагрузке и размера ставок часовой оплаты труда преподавателей.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle2', '2.2. Ограничения по переводу'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle2.point1', 'Ограничении, связанных с курсом и формой обучения, видом основной образовательной программы, на которые происходит перевод студента, Университет не устанавливает.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle3', '2.3. Права студентов на перевод'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle3.point1', 'Студенты, успешно завершившие первый год обучения, имеют право на перевод в другую образовательную программу внутри Университета, на аналогичную или другую образовательную программу из другого вуза в Университет, при условии соответствия требованиям приема на эту образовательную программу, наличия вакантных мест и согласия руководителей обеих программ (вузов). При переводе из другого вуза в Университет перезачету подлежат только те дисциплины, соответствующие профессиональному циклу основной образовательной программы Учреждения «Салымбеков Университет» на которую осуществляется перевод и по которым заявитель имеет удовлетворительную оценку и выше.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle4', '2.4. Перевод из неаккредитованных вузов'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle4.point1', 'Перевод студентов, получающих образование в неаккредитованных (неаттестованных) высших учебных заведениях, в Университет на любую форму обучения может осуществляться после реализации Университетом права на аттестацию в форме экстерната, за исключением специальностей/направлений высшего профессионального образования, обучение на которых в форме экстерната не допускается.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle5', '2.5. Перевод при реорганизации'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle5.point1', 'В случае реорганизации, ликвидации Университета перевод студентов обеспечивается ректором, в ведении которого находится Университет, совместно с Министерством образования и науки Кыргызской Республики.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle6', '2.6. Ограничения по курсам'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle6.point1', 'Перевод студентов на первом и последнем курсе обучения не осуществляется.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle7', '2.7. Перевод с грантов'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle7.point1', 'Перевод студентов, обучающихся на платной основе по грантам не осуществляется.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle8', '2.8. Порядок подачи заявления'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle8.point1', 'Перевод студента в Учреждение «Салымбеков Университет» для продолжения образования, в том числе сопровождающийся переходом с одной основной образовательной программы специальности/направления на другую, по всем формам обучения, а также с их сменой осуществляется по личному заявлению студента. Заявление направляется ректору для принятия решения о допуске студента к аттестации. К заявлению прилагается ксерокопия зачетной книжки (впоследствии сверяется с академической справкой), прилагается транскрипт (оценочный лист).'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle9', '2.9. Аттестационная комиссия'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle9.point1', 'Перевод студента осуществляется на основе аттестации. Аттестация студента проводится аттестационной комиссией путем рассмотрения ксерокопии зачетной книжки (транскрипта) оценочного листа. Аттестационная комиссия создается в составе проректора по учебной работе (председатель комиссии), декана факультета/заведующего выпускающей кафедры/руководителя образовательной программы и сотрудников учебного отдела, студенческого отдела кадров/офиса регистратора (секретаря комиссии). Аттестационная комиссия рассматривает заявление студента в течение 10 дней с момента подачи заявления, но не позднее начала учебных занятий.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle10', '2.10. Протокол заседания'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle10.point1', 'По результатам аттестации аттестационная комиссия готовит протокол заседания.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle11', '2.11. Индивидуальный учебный план'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle11.point1', 'В случае, когда невозможно перезачесть отдельные дисциплины или имеется наличие неизученных дисциплин (разделов дисциплин), Университет разрабатывает и утверждает индивидуальный учебный план студента, который предусматривает перечень дисциплин (или их разделов), подлежащих изучению, их объемы и установленные сроки сдачи экзаменов/зачетов. Перечень дисциплин, подлежащих сдаче (ликвидации академической разницы) не должен превышать 7 (семи) дисциплин. Академическая разница должна быть ликвидирована в пределах данного академического года.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle12', '2.12. Кредитная технология'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle12.point1', 'Для студентов, обучающихся по кредитной технологии, год обучения определяется количеством кредитов в транскрипте.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle13', '2.13. Академическая разница'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle13.point1', 'Академическая разница устанавливается согласно полученным кредитам (зачетным единицам) на основе транскрипта/оценочных листов с предоставлением аннотации изученных дисциплин. Академическая разница определяется в кредитах (зачетных единицах) и дополнительно включается в индивидуальный учебный план студента.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle14', '2.14. Перезачет дисциплин'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle14.point1', 'При переводе общие гуманитарные дисциплины, в том числе обязательные базовые, перезачитываются в объеме, изученном студентом. При переводе студента в другой вуз на ту же основную образовательную программу, по которой он обучался ранее, или родственную основную образовательную программу, перезачитываются также математические и общие естественнонаучные дисциплины (государственный компонент), и все дисциплины по выбору студента.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle15', '2.15. Академическая разница при переводе'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle15.point1', 'При переводе студента на ту же основную образовательную программу, по которой он обучался ранее или родственную основную образовательную программу, сдаче академической разницы подлежат:'),
                  t('transfer.sections.section2.subtitles.subtitle15.point2', '- разница в учебных планах специальностей/направлений в части, касающейся государственного компонента, соответствующего государственного образовательного стандарта по математическим и общим естественнонаучным, общепрофессиональным и специальным дисциплинам, если она превышает предел, в рамках которого университет (10%-20%) имеет право изменять объем дисциплин;'),
                  t('transfer.sections.section2.subtitles.subtitle15.point3', '- разница в учебных планах специальностей/направлений в части, касающейся государственного компонента, соответствующего государственного образовательного стандарта по общепрофессиональным и специальным дисциплинам.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle16', '2.16. Определение дисциплин для пересдачи'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle16.point1', 'Перечень дисциплин, подлежащих пересдаче (ликвидации академической разницы), определяется на основе зачтенных кредитов (зачетных единиц), при Учреждение может валидировать/зачитывать кредиты исходя из содержания образовательной программы (информационный пакет направления/специальности).'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle17', '2.17. Справка установленного образца'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle17.point1', 'При положительном решении вопроса о переводе в Университет (наличии утвержденного индивидуального учебного плана студента), Университет выдает студенту справку установленного образца.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle18', '2.18. Перевод из Университета'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle18.point1', 'При переводе студента из Университета в другой вуз студент представляет справку установленного образца в учреждение с письменным заявлением об отчислении в связи с переводом, и о выдаче ему в связи с переводом академической справки и документа об образовании, на основании которого он был зачислен, из личного дела. На основании представленной справки и заявления студента ректор Университета в течение 10 дней со дня подачи заявления издает приказ об его отчислении с формулировкой: "Отчислен в связи с переводом в ... вуз". Из личного дела студента извлекается и выдается ему на руки документ об образовании, на основании которого он был зачислен в Учреждение «Салымбеков Университет» (далее - документ об образовании), а также оформляется и выдается академическая справка установленного образца. В личном деле остается заверенная копия документа об образовании и выписка из приказа об отчислении в связи с переводом, а также сданные студентом студенческий билет и зачетная книжка.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle19', '2.19. Зачисление в порядке перевода'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle19.point1', 'Приказ о зачислении студента в университет в связи с переводом издается ректором после получения документа об образовании и академической справки (руководитель соответствующего учебного подразделения проверяет соответствие копии зачетной книжки/транскрипта/оценочного листа академической справки), которые прилагаются к его личному заявлению. До получения документов ректор Университета имеет право допустить студента к занятиям своим приказом. В прикае о зачислении делается запись: "Зачислен в порядке перевода из ... вуза, на специальность (направление)на ... курс, на ... форму обучения".'),
                  t('transfer.sections.section2.subtitles.subtitle19.point2', 'В случае, если по итогам аттестации выявлена необходимость ликвидации академической разницы, в приказе о переводе будет содержаться запись об утверждении индивидуального учебного плана студента.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section2.subtitles.subtitle20', '2.20. Формирование личного дела'),
               points: [
                  t('transfer.sections.section2.subtitles.subtitle20.point1', 'В Университете формируется и ставится на учет новое личное дело студента, в которое заносится заявление о переводе, академическая справка, документ об образовании и выписка из приказа о зачислении в порядке перевода, а также договор о полной компенсации затрат за обучение. Переведенному студенту выдается студенческий билет и зачетная книжка.'),
                  t('transfer.sections.section2.subtitles.subtitle20.point2', 'Записи о перезачтенных из академической справки дисциплинах (разделах дисциплин), практиках, курсовых проектах (работах), а также о ликвидации академической разницы вносятся в установленном порядке в зачетные книжки/транскрипты студентов и другие учетные документы с проставлением оценок (зачетов).'),
               ]
            }
         ]
      },
      {
         title: t('transfer.sections.section3.title', '3. Отчисление студентов'),
         items: [
            {
               subtitle: t('transfer.sections.section3.subtitles.subtitle1', '3.1. Отчисление по инициативе студента'),
               points: [
                  t('transfer.sections.section3.subtitles.subtitle1.point1', 'Студент может быть отчислен из Университета по собственной инициативе приказом ректора, по личному заявлению студента:'),
                  t('transfer.sections.section3.subtitles.subtitle1.point2', '- по собственному желанию (без указания конкретных причин);'),
                  t('transfer.sections.section3.subtitles.subtitle1.point3', '- в связи с переходом в другой вуз;'),
                  t('transfer.sections.section3.subtitles.subtitle1.point4', '- в связи с болезнью (на основании справки медицинского учреждения);'),
                  t('transfer.sections.section3.subtitles.subtitle1.point5', '- в связи с семейными обстоятельствами.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section3.subtitles.subtitle2', '3.2. Отчисление по инициативе администрации'),
               points: [
                  t('transfer.sections.section3.subtitles.subtitle2.point1', 'Отчисление по инициативе администрации осуществляется приказом ректора, по представлению рапорта руководителя соответствующего учебного подразделения:'),
                  t('transfer.sections.section3.subtitles.subtitle2.point2', '- за академическую задолженность;'),
                  t('transfer.sections.section3.subtitles.subtitle2.point3', '- за нарушение учебной дисциплины (невыполнение графика учебного процесса, утерю связи с вузом, невыход из академического отпуска по окончании его срока);'),
                  t('transfer.sections.section3.subtitles.subtitle2.point4', '- за нарушение правил внутреннего распорядка, правил проживания в общежитии;'),
                  t('transfer.sections.section3.subtitles.subtitle2.point5', '- в связи с непрохождением государственной итоговой аттестации;'),
                  t('transfer.sections.section3.subtitles.subtitle2.point6', '- за совершение противоправных действий после вступления в законную силу приговора суда, которым студент осужден к лишению свободы, либо к иному наказанию, исключающему возможность продолжения учебы;'),
                  t('transfer.sections.section3.subtitles.subtitle2.point7', '- в связи с невозмещением затрат на обучение.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section3.subtitles.subtitle3', '3.3. Уведомление об отчислении'),
               points: [
                  t('transfer.sections.section3.subtitles.subtitle3.point1', 'При отчислении по инициативе администрации, студент в обязательном порядке письменно уведомляется о причинах и сроках отчисления.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section3.subtitles.subtitle4', '3.4. Выдача документов'),
               points: [
                  t('transfer.sections.section3.subtitles.subtitle4.point1', 'При отчислении студента ему выдается подлинник документа об образовании и по его запросу - академическая справка установленного образца.'),
               ]
            }
         ]
      },
      {
         title: t('transfer.sections.section4.title', '4. Восстановление в число студентов'),
         items: [
            {
               subtitle: t('transfer.sections.section4.subtitles.subtitle1', '4.1. Условия восстановления'),
               points: [
                  t('transfer.sections.section4.subtitles.subtitle1.point1', 'Восстановление осуществляется после окончания семестра при наличии мест на соответствующем курсе по интересующей студента специальности/направлении, по личному заявлению студента и предъявлению академической справки. Возможность восстановления студентов, ранее отчисленных из этого же Университета, рассматривается на основании учебной карточки/транскрипта студента. Заявление направляется ректору для принятия решения о допуске студента к аттестации.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section4.subtitles.subtitle2', '4.2. Процедура восстановления'),
               points: [
                  t('transfer.sections.section4.subtitles.subtitle2.point1', 'Восстановление студента осуществляется на основе аттестации. Аттестация проводится аттестационной комиссией путем рассмотрения академической справки. При определении курса, разница в учебных планах не должна превышать 7 дисциплин. Для этого Университет разрабатывает и утверждает индивидуальный учебный план студента, который предусматривает перечень дисциплин (или их разделов), подлежащих изучению, их объемы и установленные сроки сдачи экзаменов/зачетов. Академическая разница должна быть ликвидирована в пределах данного академического года.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section4.subtitles.subtitle3', '4.3. Академическая разница'),
               points: [
                  t('transfer.sections.section4.subtitles.subtitle3.point1', 'Для Университета академическая разница устанавливается согласно полученным кредитам на основе транскрипта/оценочных листов, с предоставлением аннотацииизученных дисциплин. Академическая разница определяется в кредитах (зачетных единицах) и дополнительно включается в индивидуальный учебный план студента.По результатам аттестации аттестационная комиссия готовит протокол заседания. При положительном решении вопроса о восстановлении издается приказ о зачислении в связи с восстановлением.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section4.subtitles.subtitle4', '4.4. Ограничения при восстановлении'),
               points: [
                  t('transfer.sections.section4.subtitles.subtitle4.point1', 'Если до отчисления студент обучался в Университете менее двух семестров, то он не имеет право на восстановление для продолжения обучения. Восстановление на первый курс/год обучения не осуществляется.'),
               ]
            },
            {
               subtitle: t('transfer.sections.section4.subtitles.subtitle5', '4.5. Формирование личного дела'),
               points: [
                  t('transfer.sections.section4.subtitles.subtitle5.point1', 'Соответствующим учебным подразделением формируется новое личное дело студента, в которое заносятся заявление о восстановлении, академическая справка, документ об образовании, выписка из приказа о зачислении в порядке восстановления, индивидуальный учебный план. Студенту выдается студенческий билет и, при необходимости, зачетная книжка.'),
               ]
            }
         ]
      }
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
                  <FiFileText className="w-10 h-10" />
               </motion.div>
               <motion.h1
                  className="text-6xl md:text-7xl font-bold mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
               >
                  {t('transfer.hero.title', 'Положение о переводе')}
               </motion.h1>
               <motion.p
                  className="text-2xl md:text-3xl font-semibold text-white/90"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
               >
                  {t('transfer.hero.subtitle', 'Порядок перевода, отчисления и восстановления студентов')}
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
                     className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-gray-100"
                  >
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                           <FiFileText className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                           <h2 className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-4">
                              {t('transfer.introduction.title', 'О положении')}
                           </h2>
                           <p className="text-gray-700 leading-relaxed">
                              {t('transfer.introduction.description', 'Настоящее Положение регулирует порядок перевода, отчисления и восстановления студентов в Учреждении «Салымбеков Университет». Нажмите на раздел для просмотра подробной информации.')}
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
                        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl mb-6 border border-gray-100 overflow-hidden"
                     >
                        {/* Section Header - Clickable */}
                        <button
                           onClick={() => toggleSection(sectionIndex)}
                           className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                           <div className="flex items-center gap-3">
                              <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                                 <FiFileText className="w-5 h-5 text-white" />
                              </div>
                              <h2 className="text-xl font-bold text-gray-800 text-left">
                                 {section.title}
                              </h2>
                           </div>
                           <div className="text-[#0077B6]">
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
                                 transition={{ duration: 0.3 }}
                                 className="overflow-hidden"
                              >
                                 <div className="px-6 pb-6 space-y-6 border-t border-gray-100 pt-6">
                                    {section.items.map((item, itemIndex) => (
                                       <div key={itemIndex} className="group">
                                          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                             <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                                                <FiCheckCircle className="w-4 h-4 text-white" />
                                             </div>
                                             {item.subtitle}
                                          </h3>
                                          <ul className="space-y-2 ml-10">
                                             {item.points.map((point, pointIndex) => (
                                                <li key={pointIndex} className="text-gray-700 flex items-start gap-3">
                                                   <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                                                   <span className="flex-1">{point}</span>
                                                </li>
                                             ))}
                                          </ul>
                                       </div>
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

export default Transfer;