import React from 'react';
import { Link } from 'react-router-dom';
// Ожидаемое изображение: добавьте файл kachibek.png в assets/science/professors/
// Fallback фото (форум в Сиане)
const remotePhoto = 'https://salymbekov.com/wp-content/uploads/2025/10/560461145_18089210416843726_5595910347630151498_n-300x300.jpg';
const galleryImages = [
  'https://salymbekov.com/wp-content/uploads/2025/10/560461145_18089210416843726_5595910347630151498_n-300x300.jpg',
  'https://salymbekov.com/wp-content/uploads/2025/10/561760744_18089210434843726_5887615645209446797_n-300x300.jpg',
  'https://salymbekov.com/wp-content/uploads/2025/10/560622935_18089210398843726_3987520263590391449_n-300x300.jpg',
  'https://salymbekov.com/wp-content/uploads/2025/10/561739635_18089210425843726_134303716018119628_n-300x300.jpg',
  'https://salymbekov.com/wp-content/uploads/2025/10/560919168_18089210407843726_91126948990447242_n-300x300.jpg'
];

const Kachibek = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Д.м.н., профессор Узакбаев Камчибек Аскарбекович</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Menu */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
              <nav>
                <Link to="/science/professors" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  DR. SEAN PARK
                </Link>
                <Link to="/science/professors/pendharkar" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  DR DINESH PENDHARKAR
                </Link>
                <Link to="/science/professors/potapova" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ОЛЬГА ПОТАПОВА
                </Link>
                <Link to="/science/professors/osmonov" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ДАНИЯР ОСМОНОВ
                </Link>
                <Link to="/science/professors/erkebaev" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ЭРКЕБАЕВ АБДЫГАНЫ ЭРКЕБАЕВИЧ
                </Link>
                <Link to="/science/professors/madaminov" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ГАПЫР МАДАМИНОВ
                </Link>
                <Link to="/science/professors/bilgaziev" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ЭМИЛЬ БИЛГАЗИЕВ
                </Link>
                <Link to="/science/professors/kubatov" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ЭДУАРД КУБАТОВ
                </Link>
                <Link to="/science/professors/shaltakova" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ШАЛТАКОВА ГУЛБУ ЧАЛОВНА
                </Link>
                <Link to="/science/professors/kachibek" className="block px-4 py-3 bg-blue-50 text-blue-600 font-semibold">
                  ПРОФЕССОР КАЧИБЕК
                </Link>
              </nav>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-64 flex-shrink-0">
                  <div className="bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={remotePhoto}
                      alt="Д.м.н., профессор Узакбаев Камчибек Аскарбекович"
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = remotePhoto; }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Участие в Международном Евразийском форуме (Сиань, КНР)</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Салымбеков Университет — на международной научной арене! Д.м.н., профессор Узакбаев Камчибек Аскарбекович принял участие в Международном Евразийском форуме,
                    состоявшемся в городе Сиань (КНР) в рамках инициативы «Один пояс — один путь».
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    В рамках форума прошла конференция по традиционной китайской медицине (ТКМ), посвящённая современным вызовам и достижениям данной области. На секции по медицине профессор
                    представил доклад о развитии ТКМ в Кыргызстане и её распространении в странах Центральной Азии.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    В ходе визита были подписаны соглашения с Комитетом по делам здравоохранения города Сиань об обмене научными исследованиями и подготовке кадров. Делегация также посетила фармацевтические
                    предприятия и больницы ТКМ, где продемонстрировали высокую эффективность методов традиционной китайской медицины при лечении заболеваний головного мозга.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Это сотрудничество открывает новые горизонты для развития медицины и укрепления научных связей между Кыргызстаном и Китаем.
                  </p>
                  <div className="border-t pt-6 mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Основные акценты визита</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Доклад о развитии традиционной китайской медицины в Кыргызстане и Центральной Азии</li>
                      <li>Подписание соглашений об обмене исследованиями и подготовке кадров</li>
                      <li>Посещение фармацевтических предприятий и клиник ТКМ</li>
                      <li>Демонстрация методов ТКМ при лечении заболеваний головного мозга</li>
                      <li>Расширение международного научно-образовательного сотрудничества</li>
                    </ul>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Дополнительно</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Для полноты страницы требуется базовая биография профессора (образование, научные интересы, основные публикации, должность в университете). Пожалуйста, предоставьте эти данные — я добавлю отдельный блок «Биография».
                    </p>
                  </div>
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Фото с форума</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {galleryImages.map((src, i) => (
                        <div key={i} className="bg-white rounded shadow group overflow-hidden">
                          <img
                            src={src}
                            alt={`Форум Сиань фото ${i + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Ключевые темы участия</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {[
                        {
                          title: 'Доклад о развитии ТКМ',
                          text: 'Представлено состояние и перспективы традиционной китайской медицины в Кыргызстане и Центральной Азии.'
                        },
                        {
                          title: 'Международное сотрудничество',
                          text: 'Подписаны соглашения по обмену исследованиями и подготовке медицинских кадров с городом Сиань.'
                        },
                        {
                          title: 'Клиники и предприятия ТКМ',
                          text: 'Посещение фармацевтических производств и больниц традиционной медицины с демонстрацией технологий.'
                        },
                        {
                          title: 'Эффективность методов',
                          text: 'Отмечена результативность ТКМ в лечении заболеваний головного мозга и неврологических состояний.'
                        },
                        {
                          title: 'Расширение горизонтов',
                          text: 'Укрепление научных связей Кыргызстана и Китая открывает новые образовательные и клинические возможности.'
                        },
                        {
                          title: 'Следующие шаги',
                          text: 'Планируется развитие совместных программ, углубление академической мобильности и обмен экспертизой.'
                        }
                      ].map((card, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Если требуется изменить заголовки карточек — пришлите корректный список тем.</p>
                  </div>
                  <div className="mt-10 border-t pt-6 text-sm text-gray-500">
                    <p>Источник: официальная страница Салымбеков Университета (материал об участии в Международном Евразийском форуме, Сиань, КНР).</p>
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

export default Kachibek;
