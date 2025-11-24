import React from 'react';
import certificate1 from '../../assets/science/management/k-b-l-k-vestnik-salymbekov-universitet-726x1024.jpg';
import certificate2 from '../../assets/science/management/svidetelstvo-vestnik-salymbekov-universitet-714x1024.jpg';

const Periodicals = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Научный журнал</h1>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Научный журнал "Вестник медицины и образования"</h2>
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

              {/* Certificate Section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Свидетельство Научного журнала «Вестник медицины и образования»</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={certificate1} 
                      alt="Күбөлүк Вестник Салымбеков университет" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={certificate2} 
                      alt="Свидетельство Вестник Салымбеков университет" 
                      className="w-full h-auto"
                    />
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

export default Periodicals;
