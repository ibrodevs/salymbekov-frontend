import React from 'react';
import abdyldaevPhoto from '../../../assets/science/management/rysbek-aldagandaevich-250x300.jpg';

const Department = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Департамент науки и перспективных исследований</h1>
          <p className="text-xl text-blue-100">
            Координация международного научного сотрудничества
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            Департамент науки и перспективных исследований создан в соответствии с организационной структурой Университета, утвержденной приказом президента Университета и является самостоятельной структурной единицей Университета, возглавляемая заведующим отдела, который принимается на должность на основании трудового договора и подчиняется непосредственно президенту Университета.
          </p>
        </div>

        {/* Руководитель */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Руководитель Департамента науки и перспективных исследований</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <img 
                src={abdyldaevPhoto} 
                alt="Абдылдаев Рыспек Алдагандаевич" 
                className="w-48 h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Абдылдаев Рыспек Алдагандаевич</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Врач-онколог, доктор медицинских наук (1986), профессор (1990). Окончил КГМА (1973). Аспирант (1978 г.) Онкологического научного центра МВД СССР, младший и старший научный сотрудник этого центра. Бывший директора Кыргызского НИИ онкологии и радиологии. Автор более 130 научных работ.
              </p>
            </div>
          </div>
        </div>

        {/* Цели */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Цели и основные задачи Департамента науки и перспективных исследований</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">Цели:</h3>
          <div className="mb-6 space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Организация и координация участия Университета в программах научного сотрудничества, способствующих повышению качества подготовки специалистов, реализации совместных научных исследований и, в целом, повышению престижа Университета на международном уровне.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Обеспечение интеграции Университета в международное университетское сообщество, получение дополнительных возможностей по ускоренному развитию в рамках:
            </p>
            <ul className="ml-6 space-y-2">
              <li className="text-gray-700 text-lg">– программ академического обмена студентами;</li>
              <li className="text-gray-700 text-lg">– программ обмена научно-педагогическими работниками;</li>
              <li className="text-gray-700 text-lg">– программ повышения квалификации, стажировки;</li>
              <li className="text-gray-700 text-lg">– создания совместных образовательных программ;</li>
              <li className="text-gray-700 text-lg">– участия в совместных научно-исследовательских грантах;</li>
              <li className="text-gray-700 text-lg">– приема и обучения иностранных граждан.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Задачи:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                организация на высоком профессиональном уровне международной деятельности факультетов и иных структурных подразделений Университета, координация их работы, интегрирование усилий в единого целого, в соответствии с целями Университета;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                участие в формировании и реализации политики Университета в области международных и внешнеэкономических связей;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                определение целесообразности заключения соглашений в области международных и внешнеэкономических связей Университета;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                определение целесообразности открытия представительств и филиалов Университета в регионах и осуществление контроля за их деятельностью;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                содействие в привлечении иностранных инвестиций;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                формирование и реализация международных проектов и программ за рубежом и в Кыргызской Республике;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                организация участия Университета в международных межвузовских ассоциациях и иных организациях;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                осуществление информационно-представительской деятельности Университета;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                развитие международных связей с учебными заведениями, фондами, и другими организациями зарубежных стран;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                проведение аналитической работы по оценке состояния международной деятельности Университета;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                ведение учета, анализа, информационное и организационное обеспечение деятельности Университета в сфере международных связей и отношений;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                вовлечение профессорско-преподавательского состава в международное сотрудничество;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                координация международного сотрудничества факультетов, кафедр и других структурных подразделений Университета с зарубежными партнерами;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                осуществление текущей консультационной и иной помощи подразделениям и сотрудникам Университета; содействие в получении грантов и стипендий на образовательную и научную деятельность;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                организация работы иностранных преподавателей в Университете;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                организация обучения студентов, аспирантов, стажировок преподавателей и сотрудников за рубежом;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                организация обучения иностранных студентов, аспирантов, докторантов и стажеров, пребывающих в Университет по межправительственным и межвузовским соглашениям, а также в индивидуальном порядке;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">–</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                проведение маркетинговых исследований рынка международных образовательных услуг и стратегий (стратегии набора иностранных студентов).
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Department;
