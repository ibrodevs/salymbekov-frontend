import React from 'react';

const ScientificJournal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Научный журнал «Вестник медицины и образования»</h1>
          <p className="text-xl text-blue-100">
            Периодическое научное издание Салымбеков Университета
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Menu */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
              <div className="bg-blue-600 text-white px-4 py-3 font-semibold">
                РАЗРЕШИТЕЛЬНЫЕ ДОКУМЕНТЫ
              </div>
              <nav>
                <a href="#issue1" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ВЫПУСК №1
                </a>
                <a href="#issue2" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ВЫПУСК №2
                </a>
                <a href="#issue3" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ВЫПУСК №3
                </a>
                <a href="#issue4" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ВЫПУСК №4
                </a>
                <a href="#issue5" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ВЫПУСК №5
                </a>
                <a href="#issue6" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ВЫПУСК №6
                </a>
                <a href="#issue7" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ВЫПУСК №7
                </a>
                <a href="#issue8" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ВЫПУСК №8
                </a>
                <a href="#issue9" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
                  ВЫПУСК №9
                </a>
              </nav>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="flex-1">
        {/* Journal Description */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Научно-теоретический журнал "Вестник медицины и образования"</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Научный журнал «Вестник медицины и образования» — периодическое научное издание, учредителем которого выступает Салымбеков Университет
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Наш журнал публикует оригинальные материалы и статьи, а также освещает научную жизнь (конференции, семинары, публикации) по следующим направлениям:
          </p>
          
          <div className="mt-6 space-y-3">
            <p className="text-gray-700"><strong>1. Медицинские науки – 14.00.00</strong></p>
            <p className="text-gray-700"><strong>2. Биологические науки – 03.00.00</strong></p>
            <p className="text-gray-700"><strong>3. Медицина – 13.00.00</strong></p>
          </div>
        </div>

        {/* Latest Issue - Issue #1 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Выпуск №1</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Научно-теоретический журнал "Вестник медицины и образования"</h3>
          
          <div className="mb-6">
            <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
              Выпуск 1. PDF
            </a>
          </div>

          <h4 className="text-lg font-bold text-gray-900 mb-4">СПИСОК НАУЧНЫХ СТАТЕЙ</h4>

          {/* Section I */}
          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-3">I. ВОПРОСЫ ФУНДАМЕНТАЛЬНОЙ И КЛИНИЧЕСКОЙ МЕДИЦИНЫ. МЕДИЦИНСКОЕ ОБРАЗОВАНИЕ</h5>
            <div className="space-y-3">
              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Сравнительный анализ представлений о профессии бакалавра сестринского дела у студентов и преподавателей.</p>
                <p className="text-sm text-gray-600 mb-1">Лапик С.В., Матвиенко В.В., Захарчук О.В.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Кыргыз Республикадагы мите курт ооруларынын жана бир нече мите курттарынын айкалышынын эпидемиологиялык абалы</p>
                <p className="text-sm text-gray-600 mb-1">Раимкулов К.М., Мамбет к. Гулина, АкылбековаА.А.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Современная эпидемиологическая ситуация по эхинококкозам в Кыргызской Республике на примере Ошской области</p>
                <p className="text-sm text-gray-600 mb-1">Раимкулов К.М., Тойгомбаева В.С., Куттубаев О.Т., Акылбекова А.А</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Конституциональные особенности обхватных размеров тела у женщин разных соматотипов.</p>
                <p className="text-sm text-gray-600 mb-1">Сакибаев К.Ш.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Особенности мышечного компонента тела у этнических киргизок</p>
                <p className="text-sm text-gray-600 mb-1">Сакибаев К.Ш., Никитюк Д.Б.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Соматотипологические характеристики детей города Ош</p>
                <p className="text-sm text-gray-600 mb-1">Саттаров А.Э., Тулекеев Т.М., Джолдошева Г.Т</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Сосудисто-тканевые отношения в легких при экспериментальном суперинвазионном описторхозе</p>
                <p className="text-sm text-gray-600 mb-1">Соловьев Г.С., Матвиенко В.В., Соловьева О.Г., Шидин В.А., Шведский М.С., Захарчук О.В.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Размерные показатели плаценты с учетом формообразующих факторов</p>
                <p className="text-sm text-gray-600 mb-1">Н.М., Алексеева Н.Т., Тулекеев Т.М., Сакибаев К.Ш.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>
            </div>
          </div>

          {/* Section II */}
          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-3">II. БИОЛОГИЧЕСКИЕ НАУКИ</h5>
            <div className="space-y-3">
              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Паразиты и их влияние на здоровье человека</p>
                <p className="text-sm text-gray-600 mb-1">Сариева Н.А., Солпиева К.Т., Жалилова А.А.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Иксодовые клещи (ixodidae) – эктопаразиты человека в Кыргызстане</p>
                <p className="text-sm text-gray-600 mb-1">Федорова С.Ж., Жалилова А.А., Сариева Н.А., Солпиева К.Т.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>
            </div>
          </div>

          {/* Section III */}
          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-3">III. ПЕДАГОГИЧЕСКИЕ, ОБЩЕСТВЕННЫЕ И ГУМАНИТАРНЫЕ НАУКИ</h5>
            <div className="space-y-3">
              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Адамдардын физикалык абалы жана темпераментине жараша кыргыз улуттук оюндарынын ойнолушу</p>
                <p className="text-sm text-gray-600 mb-1">Абдырасулова Э.К., Акылбекова А.А.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Психолого – педагогические проблемы построения модельных характеристик юных волейболистов</p>
                <p className="text-sm text-gray-600 mb-1">Айбалаев А.Ж., Бейшекеев Э.М.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Динамика психических качеств показателей борцов курешистов в юридическом колледже КНУ им. Ж. Баласагына.</p>
                <p className="text-sm text-gray-600 mb-1">Айбалаев А.Ж., Байжигитов Б.Б.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Өспүрүм балдардын өсүшүнө улуттук оюндардын таасири (топ таш, алтын шакек учуп чык)</p>
                <p className="text-sm text-gray-600 mb-1">Акылбекова А.А., Каримова С.Х.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Теоретическое обоснование проблемы развития коммуникативных cпособно-стей студентов с использованием средств драматизации.</p>
                <p className="text-sm text-gray-600 mb-1">Бийназарова Н.С.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Акындар поэзиясын медик-студенттерге окутуу ыкмалары.</p>
                <p className="text-sm text-gray-600 mb-1">Болотова А.Б.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Формирование профессиональной компетенции студентов-медиков в процессе обучения русскому языку</p>
                <p className="text-sm text-gray-600 mb-1">Молдокматова Н.Т.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Критическое мышление – основа философского знания</p>
                <p className="text-sm text-gray-600 mb-1">Осмонбаева М.Т.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Студент-медиктерге улуттук баалуулуктарды кыргыз тили жана адабияты сабагында интеграциялап окутуунун маселелери</p>
                <p className="text-sm text-gray-600 mb-1">Токушева Т.С.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Морфологияны тил илиминде кимдер изилдешкен?</p>
                <p className="text-sm text-gray-600 mb-1">Төлөбеков Н.Т.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Медицинадагы этнопедагогика</p>
                <p className="text-sm text-gray-600 mb-1">Шабданбаева Ж.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Дистанционное обучение в вузах Кыргызской Республики</p>
                <p className="text-sm text-gray-600 mb-1">Шайылдаева А.К.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>
            </div>
          </div>

          {/* Section IV */}
          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-3">IV. ОБЗОРЫ</h5>
            <div className="space-y-3">
              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Pathophysiology and morphology of non-alcoholic fatty liver disease</p>
                <p className="text-sm text-gray-600 mb-1">Kniazev I.A.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>

              <div className="border-b border-gray-200 pb-2">
                <p className="text-gray-700 mb-1">Патоморфологическая характеристика легких при смерти лиц от covid-19 в случаях стационарного лечения и скоропостижной смерти</p>
                <p className="text-sm text-gray-600 mb-1">Мукашев М.Ш., Турганбаев А.Э., Турганбаев Ж.Т., Токтосун у. Б., Ибраимов А.Б.</p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">PDF</a>
              </div>
            </div>
          </div>
        </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default ScientificJournal;
