import React from 'react';
import heroImage from '../../../assets/science/management/science-hero.jpg';

const ScientificTechnicalCouncil = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-blue-600 text-white py-24"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Научно-технический совет</h1>
          <p className="text-xl text-blue-100">
            Координация научной деятельности Университета
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Общие положения */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Общие положения</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Научно-технический совет является постоянно действующим совещательным органом «Салымбеков Университет». В своей деятельности НТС руководствуется нормативными правовыми актами Кыргызской Республики; Уставом Университета, настоящим Положением и иными локальными нормативными актами. Положение о НТС утверждается решением Ученого совета. Состав НТС утверждается приказом ректора на учебный год не позднее 30 сентября по представлению проректора по научной работе на основании предложений заведующими кафедрами. Решения НТС по вопросам, находящимся в его компетенции, носят рекомендательный характер.
          </p>
        </div>

        {/* Цели и задачи */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Цели и задачи</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Целью деятельности НТС является организация и координация деятельности при рассмотрении вопросов, связанных с реализацией государственной политики в сфере науки и техники; разработка и повышения уровня выполняемых на кафедрах и других подразделениях научных исследований и инновационной деятельности, повышение эффективности подготовки научно-педагогических кадров высшей квалификации (докторов и кандидатов наук) и научно-исследовательской работы студентов.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Основными задачами НТС являются:</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Развитие учеными Университета приоритетных направлений науки и техники, повышение роли вузовской науки в ускорении научно-технического прогресса, обеспечение эффективного использования интеллектуального и научного потенциала Университета, создание необходимых условий его стабильного развития.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Обеспечение приоритетного развития фундаментальных и поисковых исследований в приоритетных направлениях развития научных исследований и работе с интеллектуальной собственностью.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Совершенствование планирования и организационных форм научно-исследовательской работы и т.д.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Разработка предложений и мер по сохранению научного потенциала Университета, развитию научно-педагогических коллективов, по подготовке научно-педагогических кадров высшей квалификации (докторов и кандидатов наук).
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Содействие интеграционным процессам между Университетом и научными организациями.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Содействие развитию научно-исследовательской работы обучающихся.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Разработка предложений и мер по информационному обеспечению научных исследований.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Подготовка предложений и рекомендаций по использованию результатов научных исследований в образовательном процессе.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Анализ и оценка основных результатов научных исследований и разработок, осуществляемых в Университете.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-xl mt-1">•</span>
              <p className="text-gray-700 text-lg leading-relaxed">
                Подготовка предложений по созданию и реорганизации научно-инновационных структур, обновлению научного оборудования.
              </p>
            </li>
          </ul>
        </div>

        {/* Состав НТС */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Состав Научно-технического совета</h2>
          <div className="space-y-3">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">1. Toktogazy Moldalievich Tulekeev, MD, prof.</span> – chairman;
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">2. Uzakbaev Kamchibek Askarbekovich, MD, prof.</span> – deputy chairman;
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">3. Imankulova Asel Sansyzbaevna, MD, prof.</span> – scientific secretary;
            </p>
            <p className="text-gray-700 text-lg font-semibold mt-4">members:</p>
            <p className="text-gray-700 text-lg">– Zhumadilov Esengeldi Zhumadilovich, PhD,</p>
            <p className="text-gray-700 text-lg">– Abdyldaev Rysbek Aldagandaevich, MD, prof.</p>
            <p className="text-gray-700 text-lg">– Atikanov Arystanbek Orozalyevich, MD, prof.</p>
            <p className="text-gray-700 text-lg">– Monolov Nurbek Chynbekovich MD, prof.</p>
            <p className="text-gray-700 text-lg">– Umetalieva Maana Nurdinovna, PhD., Assoc.</p>
            <p className="text-gray-700 text-lg">– Tolubaeva Munara Zholchuevna, PhD.,</p>
          </div>
        </div>

        {/* Download Link */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Полная версия положения</h3>
              <p className="text-gray-600">Скачайте полный документ о Научно-техническом совете</p>
            </div>
            <a
              href="https://salymbekov.com/wp-content/uploads/2021/04/polozhenie-o-nauchno-tehnicheskom-sovete.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold whitespace-nowrap"
            >
              Скачать PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificTechnicalCouncil;
