import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { FiFileText, FiCheckCircle, FiRepeat } from 'react-icons/fi';

const Rules = () => {
  const { t, ready } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ready) {
      setIsLoading(false);
    }
  }, [ready]);

  // Показываем загрузку пока переводы не готовы
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Загрузка правил...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Простой фон */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#023E8A]/5 via-[#0077B6]/5 to-[#0096C7]/5 z-0"></div>

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7]">
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm mb-4 md:mb-6">
            <FiFileText className="w-8 h-8 md:w-10 md:h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            {t('stableRules.hero.title', 'Положение о переводе')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white/90 px-4">
            {t('stableRules.hero.subtitle', 'ПОЛОЖЕНИЕ О ПОРЯДКЕ ПЕРЕВОДА, ОТЧИСЛЕНИЯ И ВОССТАНОВЛЕНИЯ СТУДЕНТОВ')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 -mt-12 md:-mt-20">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Navigation */}
          <div className="lg:w-80 shrink-0">
            <div className="sticky top-6">
              <ExtraNavigation />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Introduction */}
            <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-6 md:mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                  <FiRepeat className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#023E8A] to-[#0077B6] bg-clip-text text-transparent mb-4">
                    {t('stableRules.introduction.title', 'Положение о переводе студентов')}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {t('stableRules.introduction.description', 'Настоящее Положение устанавливает порядок перевода, отчисления и восстановления студентов в Салымбеков Университет. Положение разработано в соответствии с законодательством Кыргызской Республики и регулирует все аспекты академической мобильности студентов.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Sections - Все автоматически открыты */}

            {/* Section 1 */}
            <div className="bg-white rounded-3xl shadow-xl mb-6 overflow-hidden">
              <div className="w-full p-6 md:p-8 border-b border-gray-100/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                    <FiFileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    {t('stableRules.section1.title', '1. Общие положения')}
                  </h2>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6 pt-6">
                <div className="group">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                      <FiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span>{t('stableRules.section1.subtitle1', 'Основание для разработки')}</span>
                  </h3>
                  <ul className="space-y-3 ml-10 md:ml-12">
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section1.point1', 'Настоящее Положение разработано в соответствии с Законом Кыргызской Республики «Об образовании»; Положением о порядке перевода, отчисления и восстановления студентов высших учебных заведений, утвержденного Постановлением Правительства Кыргызской Республики от 29 мая 2012 года №346, Уставом Учреждения и другими нормативными правовыми актами, регулирующими деятельность образовательных организаций высшего профессионального образования.')}
                      </span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section1.point2', 'Настоящее Положение устанавливает общие требования к процедуре перевода и восстановления студентов в Учреждение «Салымбеков Университет» (далее-Университет), а также перехода с одной основной образовательной программы (направления, специальности) на другую, не зависимо от курса, формы (очная, вечерняя, заочная, дистанционная, экстернат), в том числе внутри университета.')}
                      </span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section1.point3', 'Определяющим условием перевода и восстановления студентов в КГУ является их подготовленность к освоению конкретной (выбранной) основной образовательной программы профессионального образования, предшествующая академическая успеваемость, а также наличие вакантных мест.')}
                      </span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section1.point4', 'Общая продолжительность обучения студента не должна превышать срока, установленного учебным планом Университета для освоения основной образовательной программы.')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-3xl shadow-xl mb-6 overflow-hidden">
              <div className="w-full p-6 md:p-8 border-b border-gray-100/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                    <FiFileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    {t('stableRules.section2.title', '2. Порядок перевода студентов')}
                  </h2>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6 pt-6">
                <div className="group">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                      <FiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span>{t('stableRules.section2.subtitle1', '2.1. Условия перевода')}</span>
                  </h3>
                  <ul className="space-y-3 ml-10 md:ml-12">
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section2.point1', 'Перевод студентов высших учебных заведений, имеющих государственную аккредитацию (аттестацию), осуществляется в период летних или зимних каникул, только с согласия руководителей обоих вузов, при наличии вакантных мест на соответствующем курсе по интересующей студента специальности/направлении, на договорной основе с полной компенсацией затрат за обучение.')}
                      </span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section2.point2', 'Студенты, которые переводятся из других образовательных организаций (учреждений) или с одной специальности на другую, а также восстанавливаются в число студентов после отчисления, плату за ликвидацию разницы в учебных планах вносят дополнительно. Размер данной оплаты определяется расчетным путем в зависимости от разницы в учебной нагрузке и размера ставок часовой оплаты труда преподавателей.')}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="group">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                      <FiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span>{t('stableRules.section2.subtitle2', '2.2. Ограничения при переводе')}</span>
                  </h3>
                  <ul className="space-y-3 ml-10 md:ml-12">
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section2.point3', 'Ограничении, связанных с курсом и формой обучения, видом основной образовательной программы, на которые происходит перевод студента, Университет не устанавливает.')}
                      </span>
                    </li>
                    <li className="text-gray700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section2.point4', 'Студенты, успешно завершившие первый год обучения, имеют право на перевод в другую образовательную программу внутри Университета, на аналогичную или другую образовательную программу из другого вуза в Университет, при условии соответствия требованиям приема на эту образовательную программу, наличия вакантных мест и согласия руководителей обеих программ (вузов).')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-3xl shadow-xl mb-6 overflow-hidden">
              <div className="w-full p-6 md:p-8 border-b border-gray-100/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                    <FiFileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    {t('stableRules.section3.title', '3. Отчисление студентов')}
                  </h2>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6 pt-6">
                <div className="group">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                      <FiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span>{t('stableRules.section3.subtitle1', '3.1. Отчисление по инициативе студента')}</span>
                  </h3>
                  <ul className="space-y-3 ml-10 md:ml-12">
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section3.point1', 'Студент может быть отчислен из Университета по собственной инициативе приказом ректора, по личному заявлению студента: по собственному желанию (без указания конкретных причин); в связи с переходом в другой вуз; в связи с болезнью (на основании справки медицинского учреждения); в связи с семейными обстоятельствами.')}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="group">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                      <FiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span>{t('stableRules.section3.subtitle2', '3.2. Отчисление по инициативе администрации')}</span>
                  </h3>
                  <ul className="space-y-3 ml-10 md:ml-12">
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section3.point2', 'Отчисление по инициативе администрации осуществляется приказом ректора, по представлению рапорта руководителя соответствующего учебного подразделения: за академическую задолженность; за нарушение учебной дисциплины (невыполнение графика учебного процесса, утерю связи с вузом, невыход из академического отпуска по окончании его срока); за нарушение правил внутреннего распорядка, правил проживания в общежитии; в связи с непрохождением государственной итоговой аттестации; за совершение противоправных действий после вступления в законную силу приговора суда, которым студент осужден к лишению свободы, либо к иному наказанию, исключающему возможность продолжения учебы; в связи с невозмещением затрат на обучение.')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white rounded-3xl shadow-xl mb-6 overflow-hidden">
              <div className="w-full p-6 md:p-8 border-b border-gray-100/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl shadow-lg">
                    <FiFileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    {t('stableRules.section4.title', '4. Восстановление в число студентов')}
                  </h2>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6 pt-6">
                <div className="group">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                      <FiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span>{t('stableRules.section4.subtitle1', '4.1. Условия восстановления')}</span>
                  </h3>
                  <ul className="space-y-3 ml-10 md:ml-12">
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section4.point1', 'Восстановление осуществляется после окончания семестра при наличии мест на соответствующем курсе по интересующей студента специальности/направлении, по личному заявлению студента и предъявлению академической справки. Возможность восстановления студентов, ранее отчисленных из этого же Университета, рассматривается на основании учебной карточки/транскрипта студента.')}
                      </span>
                    </li>
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section4.point2', 'Восстановление студента осуществляется на основе аттестации. Аттестация проводится аттестационной комиссией путем рассмотрения академической справки. При определении курса, разница в учебных планах не должна превышать 7 дисциплин.')}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="group">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-lg shadow-md">
                      <FiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <span>{t('stableRules.section4.subtitle2', '4.2. Ограничения при восстановлении')}</span>
                  </h3>
                  <ul className="space-y-3 ml-10 md:ml-12">
                    <li className="text-gray-700 flex items-start gap-3">
                      <span className="text-[#0077B6] mt-1.5 text-lg">•</span>
                      <span className="flex-1 text-sm md:text-base leading-relaxed">
                        {t('stableRules.section4.point3', 'Если до отчисления студент обучался в Университете менее двух семестров, то он не имеет право на восстановление для продолжения обучения. Восстановление на первый курс/год обучения не осуществляется.')}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Заметка о языке */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-blue-700 font-medium">
                  Документ представлен на языке: <span className="font-bold">русский</span>
                </p>
              </div>
              <p className="text-xs text-blue-600/70">
                Вы можете изменить язык в настройках сайта
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-12"></div>
    </div>
  );
};

export default Rules;