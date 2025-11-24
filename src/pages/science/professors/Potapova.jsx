import React from 'react';
import { Link } from 'react-router-dom';
import potapovaPhoto from '../../../assets/science/professors/qip-shot-screen-153-257x300.png';

const Potapova = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Ольга Потапова</h1>
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
                <Link to="/science/professors/potapova" className="block px-4 py-3 border-b border-gray-200 bg-blue-50 text-blue-600 font-semibold">
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
                      src={potapovaPhoto} 
                      alt="Ольга Потапова" 
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ольга Потапова</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Ольга Потапова имеет обширный научный управленческий опыт в области трансляционной онкологии и диагностики. Она заботала над разработкой таргетной терапии и пренатальных диагностических тестов для человека (CF); координировал крупные международные проекты сотрудничестве с упором на исследования трансдукции сигналов RTK, закупку биообразцов человека, доклинические и разные клинические разработки. С 2010 года доктор Потапова является главным исследователем программ «Атлас гечома рака» (TCGA).
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Potapova;
