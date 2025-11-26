import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../../../assets/science/management/bc0b1247-300x200.jpg';
import photo2 from '../../../assets/science/management/bc0b1252-300x200.jpg';

const Interactive = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Интерактивный класс</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Menu */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
              <nav>
                <Link to="/science/labs" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  СИМУЛЯЦИОННЫЙ ЦЕНТР
                </Link>
                <Link to="/science/labs/anatomy" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  АНАТОМИЧЕСКИЙ ЗАЛ
                </Link>
                <Link to="/science/labs/biochemistry" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ЛАБОРАТОРИЯ БИОХИМИИ
                </Link>
                <Link to="/science/labs/chemistry" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ЛАБОРАТОРИЯ ХИМИИ
                </Link>
                <Link to="/science/labs/biology" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ЛАБОРАТОРИЯ БИОЛОГИИ
                </Link>
                <Link to="/science/labs/interactive" className="block px-4 py-3 border-b border-gray-200 bg-blue-50 text-blue-600 font-semibold">
                  ИНТЕРАКТИВНЫЙ КЛАСС
                </Link>
                <Link to="/science/labs/computer" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  КОМПЬЮТЕРНЫЕ КЛАССЫ
                </Link>
                <Link to="/science/labs/study" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
                  УЧЕБНЫЕ КЛАССЫ
                </Link>
              </nav>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Интерактивные классы оборудованы современным оборудованием для детального изучения анатомии, физиологии, патологических состояний человека. Функционирует интерактивная панель Promethean ActivBoard Touch с установленным программным обеспечением для детального изучения анатомии, физиологии и патологических состояний человека.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Интерактивная доска Promethean ActivBoard Touch – универсальный инструмент для организации учебного процесса, поддерживающий многопользовательский режим. Это доска прямой проекции, позволяющая учителю и ученику одновременно работать с разнообразными учебными материалами и электронными уроками. Благодаря инфракрасной технологии, доска реагирует как на прикосновения маркерами, так и на управление пальцами, обрабатывая до 10 одновременных касаний, а специальное покрытие при необходимости позволяет использовать маркеры сухого стирания. Обладает ударопрочной и износостойкой конструкцией.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Универсальное программное обеспечение, поставляемое с доской, включает в себя богатую структурированную коллекцию шаблонов, графических объектов и медиа-файлов по различным учебным дисциплинам в области медицины. Всё это позволяет преподавателю работать с разными форматами электронных уроков, в том числе форматами других производителей. Особенностями программного обеспечения ActivInspire являются функция импорта файлов SMART NoteBook, а также специальный детский режим интерфейса. Promethean ActivBoard Touch 88 DryErase может стать стартовой точкой для создания мультимедийной образовательной среды в классе с возможностью интегрирования в неё системы опроса и тестирования, документ-камеры, функциями управления классом с помощью планшета.
              </p>

              {/* Photo Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src={photo1} alt="Интерактивный класс" className="rounded-lg w-full h-auto" />
                <img src={photo2} alt="Интерактивный класс" className="rounded-lg w-full h-auto" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Interactive;