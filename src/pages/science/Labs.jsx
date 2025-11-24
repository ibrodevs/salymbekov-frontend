import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from '../../assets/science/management/bc0b1100-300x200.jpg';
import photo2 from '../../assets/science/management/bc0b1136-300x200.jpg';
import photo3 from '../../assets/science/management/bc0b1248-300x200.jpg';
import photo4 from '../../assets/science/management/bc0b3947-300x200.jpg';
import photo5 from '../../assets/science/management/bc0b3948-300x200.jpg';
import photo6 from '../../assets/science/management/bc0b2371-300x200.jpg';

const Labs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Симуляционный центр</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Menu */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
              <nav>
                <Link to="/science/labs" className="block px-4 py-3 border-b border-gray-200 bg-blue-50 text-blue-600 font-semibold">
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
                Классы для практических занятий оснащены наглядными пособиями, макетами частей и органов тела, плакатами для проведения наглядных практических занятий. С помощью симуляционных материалов и препаратов осваиваются коммуникативные навыки, диагностические приемы, алгоритмы действий в непредвиденных ситуациях, базовые и углубленные навыки и умения в хирургии, акушерстве, гинекологии, урологии и многих других медицинских специальностях, имеющих практическую составляющую, проводится тренинги командного взаимодействия.
              </p>

              {/* Photo Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src={photo1} alt="Симуляционный центр" className="rounded-lg w-full h-auto" />
                <img src={photo2} alt="Симуляционный центр" className="rounded-lg w-full h-auto" />
                <img src={photo3} alt="Симуляционный центр" className="rounded-lg w-full h-auto" />
                <img src={photo4} alt="Симуляционный центр" className="rounded-lg w-full h-auto" />
                <img src={photo5} alt="Симуляционный центр" className="rounded-lg w-full h-auto" />
                <img src={photo6} alt="Симуляционный центр" className="rounded-lg w-full h-auto" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Labs;
