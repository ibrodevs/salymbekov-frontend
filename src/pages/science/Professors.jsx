import React from 'react';
import { Link } from 'react-router-dom';
import seanParkPhoto from '../../assets/science/professors/qip-shot-screen-150-240x300 (1).png';

const Professors = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Dr. Sean Park</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar - Menu */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
              <nav>
                <Link to="/science/professors" className="block px-4 py-3 border-b border-gray-200 bg-blue-50 text-blue-600 font-semibold">
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
                <Link to="/science/professors/shaltakova" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
                  ШАЛТАКОВА ГУЛБУ ЧАЛОВНА
                </Link>
                <Link to="/science/professors/kachibek" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
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
                      src={seanParkPhoto} 
                      alt="Dr. Sean Park" 
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Dr. Sean, Sung Hun, Park</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Доктор Шон Сунг Хун Пак — корейский сеолкогущированный уролог, специализирующийся на хирургии имплантации полового члена.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    В 2012 году доктор Пак поехал в США, чтобы пройти обучение в области ортопедической урологии, особенно в области хирургии имплантации полового члена. Изучая там он, к счастью, встретил доктора Стивена К. Уилсона, доктора медицинских наук. FACS, FRCS, врача, которого считают крестным отцом протезной урологии.
                  </p>
                  <div className="mt-6">
                    <p className="text-gray-900 font-semibold mb-2">Дополнительная информация:</p>
                    <ol className="list-decimal list-inside space-y-1 text-blue-600">
                      <li>
                        <a href="#" className="hover:underline">SUPS Invites Dr. Park as Body Lan Trainer for Penile Implants</a>
                      </li>
                      <li>
                        <a href="#" className="hover:underline">Dr. Park as a Course Director, ED Surgery</a>
                      </li>
                    </ol>
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

export default Professors;
