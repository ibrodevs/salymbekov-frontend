import React, { useMemo, useState } from 'react';
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

  const sections = [
    {
      title: t('rules.sections.section2.title', '2. Порядок приема документов для поступления на платную форму обучения'),
      items: [
        {
          subtitle: t('rules.sections.section2.subtitles.subtitle1', '2.1. В правилах приема документов используются следующие термины:'),
          points: [
            t('rules.sections.section2.subtitles.subtitle1.point1', 'Автоматизированная информационная система участия в конкурсе на зачисление в вузы КР (далее - АИС «Онлайн зачисление в вузы КР»). АИС «Онлайн зачисление в вузы КР» - это портал для регистрации и зачисления в вузы Кыргызской Республики по результатам ОРТ текущего года в онлайн режиме.'),
            t('rules.sections.section2.subtitles.subtitle1.point2', 'Электронный талон – это заявка, поданная в электронном виде через АИС «Онлайн зачисление в вузы КР».'),
          ]
        },
        {
          subtitle: t('rules.sections.section2.subtitles.subtitle2', '2.2. Прием и оформление документов по результатам ОРТ'),
          points: [
            t('rules.sections.section2.subtitles.subtitle2.point1', 'Прием и оформление документов по результатам ОРТ на дневную и заочную с применением ДОТ формы обучения ведется через АИС «Онлайн зачисление в вузы КР».'),
          ]
        },
        {
          subtitle: t('rules.sections.section2.subtitles.subtitle3', '2.3. Прием и оформление документов на специальности и направления, не требующих результатов ОРТ'),
          points: [
            t('rules.sections.section2.subtitles.subtitle3.point1', 'Прием и оформление документов на специальности и направления, не требующих результатов ОРТ, на дневную и заочную с применением ДОТ формы обучения ведется посредством онлайн регистрации по специальной электронной форме вуза, разработанной вузом самостоятельно. Перечень документов: документ государственного образца о среднем общем, среднем профессиональном, или высшем образовании; 1 фотография размером 3х4. Сканированные версии необходимых документов, абитуриент отправляет на информационно-коммуникативный мессенджер, определяемый вузом самостоятельно (на электронную почту приемной комиссии enroll.smu@gmail.com , или на номер WhatsApp членов приемной комиссии 0(312) 65-85-18, 0(505) 65-85-18, 0(558) 65-85-18, 0(776) 65-85-18 или на специальную электронную форму вуза для подачи документов, которые указываются на сайте вуза).'),
          ]
        },
        {
          subtitle: t('rules.sections.section2.subtitles.subtitle4', '2.4. Льготы для абитуриентов'),
          points: [
            t('rules.sections.section2.subtitles.subtitle4.point1', 'Если абитуриент претендует на льготы, установленные законодательством Кыргызской Республики, к основному пакету документов необходимо прикрепить сканированные версии дополнительных документов (свидетельства о смерти родителей; заключение медико-социальной экспертизы; документы, подтверждающие наличие спортивного звания; военный билет с отметкой о прохождении срочной военной службы и др.).'),
          ]
        },
        {
          subtitle: t('rules.sections.section2.subtitles.subtitle5', '2.5. Сроки приема документов'),
          points: [
            t('rules.sections.section2.subtitles.subtitle5.point1', 'Прием документов для поступления в вузы КР на места по договору с оплатой стоимости обучения производится до 30 августа каждого учебного года.'),
          ]
        }
      ]
    },
    {
      title: t('rules.sections.section3.title', '3. Порядок приема документов от абитуриентов, рекомендованных Грантовой комиссией вуза к зачислению'),
      items: [
        {
          subtitle: t('rules.sections.section3.subtitles.subtitle1', '3.1. Отбор и зачисление абитуриентов по результатам ОРТ'),
          points: [
            t('rules.sections.section3.subtitles.subtitle1.point1', 'Отбор и зачисление абитуриентов по результатам ОРТ текущего года проводится грантовой комиссией "Салымбеков Университет" в сроки, устанавливаемые Министерством образования и науки Кыргызской Республики, через АИС «Онлайн зачисление в вузы КР». К конкурсу на получение гранта, допускаются абитуриенты, получившие по основному тесту баллы, равные или выше определяемого МОН КР порогового балла. Результаты ОРТ, сданного абитуриентом до прохождения им срочной военной службы, действительны в течение 3 лет.'),
          ]
        },
        {
          subtitle: t('rules.sections.section3.subtitles.subtitle2', '3.2. Документы для зачисления'),
          points: [
            t('rules.sections.section3.subtitles.subtitle2.point1', 'Абитуриент, рекомендованный к зачислению в Университет, должен в течение 3 дней подтвердить свое желание обучаться в "Салымбеков Университет", предоставив в приемную комиссию следующие документы: паспорт или свидетельство о рождении; оригинал сертификата ОРТ; оригинал аттестата о среднем общем образовании, диплома о среднем профессиональном образовании либо его дубликат; военный билет или приписное свидетельство; 6 фотографий 3х4.'),
          ]
        },
        {
          subtitle: t('rules.sections.section3.subtitles.subtitle3', '3.3. Зачисление по результатам ОРТ'),
          points: [
            t('rules.sections.section3.subtitles.subtitle3.point1', 'Допускается зачисление абитуриентов в число студентов "Салымбеков Университет" по результатам ОРТ после подачи документов в электронном виде через АИС «Онлайн зачисление в вузы КР».'),
          ]
        },
        {
          subtitle: t('rules.sections.section3.subtitles.subtitle4', '3.4. Сроки предоставления оригиналов документов'),
          points: [
            t('rules.sections.section3.subtitles.subtitle4.point1', 'Оригиналы документов и соответствующее количество фотографий абитуриент обязан предоставить в приемную комиссию вуза до 30 августа 2020 года. После сдачи оригиналов документов и предъявления в техническую комиссию квитанции об оплате за обработку документов, абитуриент получает расписку о приеме документов.'),
          ]
        }
      ]
    },
    {
      title: t('rules.sections.section4.title', '4. Порядок приема и зачисления абитуриентов на платную форму обучения в "Салымбеков Университет" и апелляция по результатам'),
      items: [
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle1', '4.1. Конкурс на зачисление по результатам ОРТ'),
          points: [
            t('rules.sections.section4.subtitles.subtitle1.point1', 'Конкурс на зачисление абитуриентов на все формы обучения по договору с оплатой стоимости обучения проводится только по итогам ОРТ. При наличии у абитуриента баллов ОРТ выше порогового балла, приемная комиссия не имеет право отказать в приеме сертификата для участия в конкурсе. Результаты ОРТ, сданного абитуриентом до прохождения им срочной военной службы, действительны в течение 3 лет.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle2', '4.2. Поступление без ОРТ'),
          points: [
            t('rules.sections.section4.subtitles.subtitle2.point1', 'При поступлении абитуриентов на контрактную форму обучения, где результаты ОРТ не обязательны, главными критериями для поступления в вуз являются уровень знаний и способности поступающего, для установления которых берется за основу средний балл аттестата о среднем образовании (11-класс), или онлайн собеседование посредством информационно-коммуникативных технологий и мессенджеров.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle3', '4.3. Сроки и порядок проведения конкурса'),
          points: [
            t('rules.sections.section4.subtitles.subtitle3.point1', 'Сроки и порядок проведения конкурса на все формы обучения по договору с оплатой стоимости обучения по результатам ОРТ аналогичны проведению туров отбора и зачисления абитуриентов на грантовое обучение. В каждом туре абитуриент вправе выбрать один вуз, путем подачи бумажного талона в приемной комиссии вуза или электронного талона сертификата через АИС «Онлайн зачисление в вузы КР». Конкурс проводится без учета категорий абитуриентов, установленных для абитуриентов, претендующих на получение государственного образовательного гранта, к зачислению рекомендуются абитуриенты с наиболее высокими баллами.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle4', '4.4. Вступительные испытания'),
          points: [
            t('rules.sections.section4.subtitles.subtitle4.point1', '"Салымбеков Университет" проводит вступительные испытания исключительно: для абитуриентов - иностранных граждан; для абитуриентов, поступающих на специальности и направления подготовки для которых результаты общереспубликанского тестирования не обязательны.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle5', '4.5. Вступительные испытания для иностранных граждан'),
          points: [
            t('rules.sections.section4.subtitles.subtitle5.point1', 'Вступительные испытания для абитуриентов - иностранных граждан проводятся в формате онлайн собеседования посредством информационно-коммуникативных технологий и мессенджеров.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle6', '4.6. Сроки проведения вступительных испытаний'),
          points: [
            t('rules.sections.section4.subtitles.subtitle6.point1', 'Вступительные испытания могут проводиться одновременно с проведением туров отбора абитуриентов по результатам ОРТ.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle7', '4.7. Конкурс на второй и последующие курсы'),
          points: [
            t('rules.sections.section4.subtitles.subtitle7.point1', 'Конкурс при приеме на второй и последующие курсы, в том числе в порядке перевода, проводится на основании аттестационных испытаний в виде онлайн собеседования с участием заведующего профилирующего кафедры, проводимых "Салымбеков Университет" самостоятельно.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle8', '4.8. Оплата контракта'),
          points: [
            t('rules.sections.section4.subtitles.subtitle8.point1', 'При наличии конкурса на специальности и направления подготовки платной формы обучения, абитуриенты, рекомендованные к зачислению, должны в срок до заседания комиссии по зачислению следующего тура оплатить половину стоимости контракта за обучение. В случае неуплаты в оговоренные сроки, данные места считаются вакантными и выносятся на конкурс следующего тура.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle9', '4.9. Апелляция по результатам'),
          points: [
            t('rules.sections.section4.subtitles.subtitle9.point1', 'Заявления абитуриентов об апелляции по результатам вступительных испытаний принимаются техническими комиссиями в течение дня вывешивания результатов вступительных испытаний и рассматриваются апелляционной комиссией "Салымбеков Университет" в течение следующего дня.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle10', '4.10. Участие в последующих турах'),
          points: [
            t('rules.sections.section4.subtitles.subtitle10.point1', 'Абитуриент, не рекомендованный к зачислению по результатам вступительных испытаний первого тура, имеет право участвовать во вступительных испытаниях последующих туров.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle11', '4.11. График проведения вступительных испытаний'),
          points: [
            t('rules.sections.section4.subtitles.subtitle11.point1', 'График проведения вступительных испытаний, утвержденный председателем приемной комиссии, вывешивается на информационном стенде приемной комиссии и периодически обновляется.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle12', '4.12. Второе высшее образование'),
          points: [
            t('rules.sections.section4.subtitles.subtitle12.point1', 'Аттестационные испытания для граждан, желающих получить второе высшее образование, по всем формам обучения проводятся в форме онлайн собеседования по профилирующим предметам выбранного направления.'),
          ]
        },
        {
          subtitle: t('rules.sections.section4.subtitles.subtitle13', '4.13. Ускоренные программы подготовки'),
          points: [
            t('rules.sections.section4.subtitles.subtitle13.point1', 'Зачисление абитуриентов, претендующих обучаться по ускоренным программам подготовки всех форм обучения, имеющих среднее профессиональное образование соответствующего профиля (соответствие профиля среднего профессионального образования профилю высшего профессионального образования определяется вузом самостоятельно), проводится по результатам ОРТ с баллами выше порогового уровня или по результатам аттестационных испытаний в форме собеседования по профилирующим предметам выбранного направления.'),
          ]
        }
      ]
    },
    {
      title: t('rules.sections.section5.title', '5. Порядок зачисления на платную форму обучения'),
      items: [
        {
          subtitle: t('rules.sections.section5.subtitles.subtitle1', '5.1. Сроки зачисления'),
          points: [
            t('rules.sections.section5.subtitles.subtitle1.point1', 'Зачисление на платную форму обучения граждан Кыргызстана завершается 25 августа 2020 г. - для очной формы обучения и 30 августа 2020 г. - по другим формам обучения по результатам общереспубликанского тестирования. Сроки зачисления абитуриентов из числа иностранных граждан могут быть продлены до 15 октября 2020 года.'),
          ]
        },
        {
          subtitle: t('rules.sections.section5.subtitles.subtitle2', '5.2. Условия зачисления'),
          points: [
            t('rules.sections.section5.subtitles.subtitle2.point1', 'Зачисление на платную форму обучения производится приемной комиссией после успешного прохождения вступительных испытаний и при оплате не менее 50 % годовой стоимости обучения и при заключении контракта между абитуриентом и вузом.'),
          ]
        },
        {
          subtitle: t('rules.sections.section5.subtitles.subtitle3', '5.3. Зачисление по результатам ОРТ'),
          points: [
            t('rules.sections.section5.subtitles.subtitle3.point1', 'Зачисление абитуриентов в число студентов по результатам ОРТ производится при наличии подлинника сертификата о результатах тестирования и подтверждения баллов ОРТ в ЦООМО. Результаты ОРТ абитуриентов, подтвердивших свое желание обучаться в вузе путем предоставления в приемную комиссию необходимых документов, должны быть подтверждены ЦООМО до зачисления для издания приказа.'),
          ]
        },
        {
          subtitle: t('rules.sections.section5.subtitles.subtitle4', '5.4. График работы приемной комиссии'),
          points: [
            t('rules.sections.section5.subtitles.subtitle4.point1', 'График работы приемной комиссии по проведению зачисления вывешивается на доске объявлений приемной комиссии и периодически уточняется.'),
          ]
        },
        {
          subtitle: t('rules.sections.section5.subtitles.subtitle5', '5.5. Внеконкурсное зачисление'),
          points: [
            t('rules.sections.section5.subtitles.subtitle5.point1', 'Вне конкурса при наличии балла, соответствующего положительной оценке, зачисляются на места по договору с оплатой стоимости обучения: дети - круглые сироты и дети, оставшиеся без попечения родителей (до 18 лет включительно, на 1 октября текущего года); лица с ограниченными возможностями здоровья, которым по заключению медико-социальной экспертизы не противопоказано обучение в вузе по избранному направлению подготовки и специальности; призеры международных и республиканских олимпиад (занявшие 1-3 места в текущем году) на направления и специальности в выбранном вузе, по которым предмет олимпиады является профилирующим.'),
          ]
        },
        {
          subtitle: t('rules.sections.section5.subtitles.subtitle6', '5.6. Преимущественное право при поступлении'),
          points: [
            t('rules.sections.section5.subtitles.subtitle6.point1', 'Спортсмены, имеющие спортивные звания "Мастер спорта Кыргызской Республики", "Мастер спорта Кыргызской Республики международного класса", лица, прошедшие срочную военную службу, лица, имеющие государственный сертификат уполномоченного государственного органа по государственному языку с учетом системы "Кыргызтест" об уровне владения государственным языком, пользуются преимущественным правом при поступлении в вузы.'),
          ]
        },
        {
          subtitle: t('rules.sections.section5.subtitles.subtitle7', '5.7. Слушатели довузовской подготовки'),
          points: [
            t('rules.sections.section5.subtitles.subtitle7.point1', 'Слушатели подразделений довузовской подготовки принимаются в вуз на общих основаниях.'),
          ]
        }
      ]
    },
    {
      title: t('rules.sections.section6.title', '6. Приемная комиссия'),
      items: [
        {
          subtitle: t('rules.sections.section6.subtitles.subtitle1', '6.1. Функции приемной комиссии'),
          points: [
            t('rules.sections.section6.subtitles.subtitle1.point1', 'Приемная комиссия проводит прием документов, вступительные испытания и зачисление на первый курс обучения во все структурные учебные подразделения "Салымбеков Университет" для получения основного и второго высшего профессионального образования по различным программам обучения.'),
          ]
        },
        {
          subtitle: t('rules.sections.section6.subtitles.subtitle2', '6.2. Технические комиссии'),
          points: [
            t('rules.sections.section6.subtitles.subtitle2.point1', 'Прием документов и подготовка документов для зачисления во все структурные учебные подразделения "Салымбеков Университет" проводится техническими комиссиями структурных учебных подразделений вуза.'),
          ]
        },
        {
          subtitle: t('rules.sections.section6.subtitles.subtitle3', '6.3. Вступительные испытания на платную форму'),
          points: [
            t('rules.sections.section6.subtitles.subtitle3.point1', 'Вступительные испытания на платную форму обучения во все структурные учебные подразделения вуза проводятся секретариатом приемной комиссии "Салымбеков Университет" при участии технических комиссий.'),
          ]
        },
        {
          subtitle: t('rules.sections.section6.subtitles.subtitle4', '6.4. Отчетность перед МОН КР'),
          points: [
            t('rules.sections.section6.subtitles.subtitle4.point1', 'Приемная комиссия представляет в МОН КР итоговые данные о приеме в сроки: на обучение за счет средств бюджета - до 15 сентября; на обучение на платной основе - до 15 октября.'),
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 text-center py-20 px-4">
        <div className="inline-block mb-6">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7] rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25">
            <FiFileText className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#023E8A] via-[#0077B6] to-[#0096C7] bg-clip-text text-transparent mb-4">
          {t('rules.hero.title', 'Правила и план приема')}
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('rules.hero.subtitle', 'ПРАВИЛА ПРИЕМА АБИТУРИЕНТОВ В «САЛЫМБЕКОВ УНИВЕРСИТЕТ»')}
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation */}
          <div className="lg:w-80 shrink-0">
            <ExtraNavigation />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Introduction */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-8 border border-white/20 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                  <FiFileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-4">
                    {t('rules.introduction.title', 'Правила приема абитуриентов')}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {t('rules.introduction.description', 'Настоящие правила регулируют порядок приема абитуриентов в "Салымбеков Университет" на все формы обучения. Правила разработаны в соответствии с законодательством Кыргызской Республики и устанавливают единые требования к процедуре приема, зачисления и апелляции.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Sections - Collapsible */}
            {sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl mb-6 border border-white/20 overflow-hidden relative"
              >
                {/* Section Header - Clickable */}
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/50 transition-all duration-300 relative z-10 group"
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
                {expandedSections[sectionIndex] && (
                  <div className="overflow-hidden relative z-10">
                    <div className="px-6 pb-6 space-y-6 border-t border-gray-100/50 pt-6">
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
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;