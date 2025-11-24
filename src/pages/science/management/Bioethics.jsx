import React from 'react';
import batyralievPhoto from '../../../assets/science/management/batyraliev-235x300.jpeg';

const Bioethics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Комитет по биоэтике</h1>
          <p className="text-xl text-blue-100">
            Этическая экспертиза клинических и биомедицинских исследований
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Описание */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            Комитет по биоэтике университета является общественным и независимым от исследователя и заказчика экспертным органом, призванный обеспечить независимую экспертизу, консультирование, мониторинг и принятие решений по вопросам этической оценки клинических и биомедицинских исследований, предусматривающих участие людей и/или животных с целью защиты достоинства, интересов, и прав здоровья участников исследовательского, образовательного и лечебного процесса. В своей деятельности Комитет по этике руководствуется действующими нормативными правовыми актами Кыргызской Республики (далее КР) и университета, а также основными международными нормами, регламентирующих проведение клинических и биомедицинских исследований с участием человека и животных.
          </p>
        </div>

        {/* Председатель комитета */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Председатель комитета</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <img 
                src={batyralievPhoto} 
                alt="Батыралиев Талантбек Абдуллаевич" 
                className="w-48 h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Батыралиев Талантбек Абдуллаевич</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Президент Ассоциации медицинских работников КР, профессор, доктор медицинских наук, действующий член Американского Колледжа кардиологов. Специалист по ангиопластике, одному из наиболее безопасных методов лечения ишемической болезни сердца и предотвращению инфарктов миокарда. С отличием окончил КГМИ им.Ахунбаева. Потом была аспирантура в Москве во Всесоюзном Кардиологическом научном Центре и защита кандидатской диссертации и докторской. Сегодня Талантбек Батыралиев входит в первую пятерку лучших кардиологов мира.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Зам.председателя</span> – Тулекеев Т.М., д.м.н., проф.
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Ответственный секретарь</span> – Князев И.А.
            </p>
            <p className="text-gray-700 text-lg font-semibold mt-4">Члены:</p>
            <p className="text-gray-700 text-lg">1. Кулданбаев Н.К. – д.м.н.</p>
            <p className="text-gray-700 text-lg">2. Монолов Н.К. – к.м.н.</p>
          </div>
        </div>

        {/* Основные задачи */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Основными задачами Комитета по этике являются:</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Защита прав, достоинства, интересов, безопасности и здоровья участников клинических исследований, а также контроль над соблюдением прав пациентов при получении медицинской помощи в клиниках университета;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Решение морально-этических проблем, связанных с публикациями результатов научных исследований, в т.ч. проблем плагиата, недостоверности результатов научных исследований, соблюдения авторских прав;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Регулирование этических вопросов научно-исследовательских работ, клинических испытаний лекарственных средств на основе принятых нормативно-правовых документов;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Соблюдение международных и национальных стандартов апробации и внедрения в практику клинических подразделений университета новых технологий диагностики, лечения и профилактики, новых лекарственных препаратов;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Достижение независимой и объективной оценке безопасности и неприкосновенности прав человека по отношению к испытуемым, как на стадии планирования, так и на стадии проведения исследования, а также соответствия исследования гуманистическим и этическим нормам.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Обеспечение быстрого и четкого информирования соответствующих организаций о возникновении любых нежелательных реакций при проведении исследования, в случае необходимости отсрочки или полного прекращения клинических исследований.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Выявление случаев нарушения принципов медицинской этики и деонтологии медицинскими, научными и иными работниками университета при оказании медицинских услуг в сфере здравоохранения;
              </p>
            </li>
          </ul>
        </div>

        {/* Основные функции и направления деятельности */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Основные функции и направления деятельности Комитета:</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                проведение этической экспертизы проектов научных исследований, планируемых к проведению на площадках университета внутренними или внешними научными командами;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                проведение качественной этической экспертизы материалов планируемых клинических исследований лекарственных средств или изделий медицинского назначения, новых методов диагностики и лечения с целью защиты испытуемых от возможных негативных последствий.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                экспертиза научно-исследовательских проектов и исследований. в которых привлекаются как больные, так и здоровые люди, животные в соответствии с нормами действующего законодательства КР, международными этическими нормами;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                анализ этической обоснованности клинических и биомедицинских исследований и предполагаемой эффективности и безопасности изучаемых лекарственных средств, изделий медицинского назначения, медицинских технологий.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                подготовка заключений о целесообразности проведения клинических и биомедицинских исследований, а также контроль над соблюдением достоинства, прав и безопасности субъектов исследований.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                осуществление контроля над соблюдением этико-правовых норм в ходе клинического исследования и постоянного динамического наблюдения за ходом клинического исследования;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                осуществление контроля за соблюдением принципов медицинской этики и деонтологии медицинскими, научными и иными работниками университета при оказании медицинских услуг в сфере здравоохранения.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                изучение и применение международного опыта правового и этического регулирования при проведении клинических и биомедицинских исследований;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                организация и проведение научно-теоретических и практических мероприятий по биоэтической проблематике;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                участие в этико-правовом просвещении медицинских работников и граждан в области защиты прав человека при проведении клинических и биомедицинских исследований;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                участие в экспертной оценке рекламы медицинской и фармацевтической деятельности, а также товаров и услуг, нарушающих права граждан на охрану здоровья;
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                разработка и внедрение различных методов этического воспитания сотрудников университета и контроль за соблюдением персоналом этических норм.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bioethics;
