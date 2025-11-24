import React from 'react';

const YoungScientists = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Совет молодых ученых</h1>
          <p className="text-xl text-blue-100">
            Содействие реализации творческого потенциала молодых ученых
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Общие положения */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Общие положения</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Совет молодых ученых (далее СМУ) «Салымбеков Университет» является общественной организацией и формируется из числа преподавателей, научных сотрудников, аспирантов и магистрантов всех структурных подразделений университета в возрасте до 35 лет. Состав СМУ утверждается ректором «Салымбеков Университет». Деятельность СМУ финансируется из собственных средств «Салымбеков Университет» отдельной строкой в статье «Научная деятельность» сметы расходов и доходов «Салымбеков Университет», из спонсорских поступлений со стороны предприятий, организаций, другими юридическими и физическими лицами.
          </p>
        </div>

        {/* Цели и задачи */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Цели и задачи совета молодых ученых</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            СМУ создается с целью содействия реализации творческого потенциала молодых ученых и преподавателей университета. СМУ объединяет усилия молодых ученых по разработке приоритетных направлений и тем научных исследований, способствует тому, чтобы их результаты стали достоянием широкой научной общественности. СМУ обобщает положительный опыт научно-методической и педагогической работы молодых ученых и преподавателей, выступает с инициативами по его внедрению в производство и учебный процесс. СМУ содействует активизации междисциплинарных исследований, с этой целью он осуществляет контакты и взаимодействие с научной молодежью высших учебных заведений и научных учреждений республики.
          </p>
        </div>

        {/* Состав */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Состав Совета молодых ученых:</h2>
          <div className="space-y-2">
            <p className="text-gray-700 text-lg">Уметалиева М.Н. – аспирант</p>
            <p className="text-gray-700 text-lg">Князев И.А. – аспирант</p>
            <p className="text-gray-700 text-lg">Сырдыбаев А.Ж. – соискатель</p>
            <p className="text-gray-700 text-lg">Сыдыкова С.Б. – соискатель</p>
            <p className="text-gray-700 text-lg">Жолболдиева М. – соискатель</p>
            <p className="text-gray-700 text-lg">Бопушева А. – соискатель</p>
          </div>
        </div>

        {/* Документ */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Положение Совета молодых ученых</h3>
              <p className="text-gray-600">Скачайте полный документ о Совете молодых ученых</p>
            </div>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold whitespace-nowrap"
            >
              Скачать
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoungScientists;
