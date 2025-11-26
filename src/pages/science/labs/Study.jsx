import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../../../assets/science/management/19-300x200.jpg';
import photo2 from '../../../assets/science/management/18-300x200.jpg';
import photo3 from '../../../assets/science/management/bc0b2571-300x200.jpg';
import photo4 from '../../../assets/science/management/bc0b2565-300x200.jpg';
import photo5 from '../../../assets/science/management/bc0b6397-300x200.jpg';
import photo6 from '../../../assets/science/management/bc0b6393-300x200.jpg';
import photo7 from '../../../assets/science/management/bc0b4607-300x200.jpg';
import photo8 from '../../../assets/science/management/bc0b4622-300x200.jpg';
import photo9 from '../../../assets/science/management/bc0b2349-300x200.jpg';
import photo10 from '../../../assets/science/management/bc0b2354-300x200.jpg';

const Study = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Учебные классы</h1>
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
                <Link to="/science/labs/interactive" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  ИНТЕРАКТИВНЫЙ КЛАСС
                </Link>
                <Link to="/science/labs/computer" className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-50 text-gray-700">
                  КОМПЬЮТЕРНЫЕ КЛАССЫ
                </Link>
                <Link to="/science/labs/study" className="block px-4 py-3 bg-blue-50 text-blue-600 font-semibold">
                  УЧЕБНЫЕ КЛАССЫ
                </Link>
              </nav>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Учебные классы Салымбеков университет – помещения, предназначенные для проведения учебных занятий. В учебных классах проводятся лекции, семинары, практические занятия и другие формы обучения, направленные на усвоение знаний и навыков по определенным предметам.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Учебные классы оборудованы необходимой мебелью, такой как столы, стулья, доски, проекторы и другие устройства для проведения занятий. Каждый класс специально оборудован для определенного предмета или направления обучения. Например, классы для изучения кыргызского языка стилизован под национальные обычаи и традиции.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Учебные классы используются для проведения других мероприятий, таких как конференции, семинары и тренинги для учителей и других профессионалов в области образования. В целом, учебные классы являются важной частью Салымбеков университета, предоставляя учащимся необходимое оборудование и условия для получения знаний и развития навыков.
              </p>

              {/* Photo Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src={photo1} alt="Учебные классы" className="rounded-lg w-full h-auto" />
                <img src={photo2} alt="Учебные классы" className="rounded-lg w-full h-auto" />
                <img src={photo3} alt="Учебные классы" className="rounded-lg w-full h-auto" />
                <img src={photo4} alt="Учебные классы" className="rounded-lg w-full h-auto" />
                <img src={photo5} alt="Учебные классы" className="rounded-lg w-full h-auto" />
                <img src={photo6} alt="Учебные классы" className="rounded-lg w-full h-auto" />
                <img src={photo7} alt="Учебные классы" className="rounded-lg w-full h-auto" />
                <img src={photo8} alt="Учебные классы" className="rounded-lg w-full h-auto" />
                <img src={photo9} alt="Учебные классы" className="rounded-lg w-full h-auto" />
                <img src={photo10} alt="Учебные классы" className="rounded-lg w-full h-auto" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Study;