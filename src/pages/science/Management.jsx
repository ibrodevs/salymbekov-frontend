import React from 'react';
import { Link } from 'react-router-dom';

const ManagementScience = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Органы управления</h1>
          <p className="text-xl text-blue-100">
            Научное руководство и координация
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Научно-технический совет */}
          <Link
            to="/science/management/scientific-technical-council"
            className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-4xl mb-4">🏛️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Научно-технический совет</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Постоянно действующий совещательный орган, координирующий научно-исследовательскую деятельность университета и повышение эффективности подготовки научно-педагогических кадров.
            </p>
          </Link>

          {/* Биоэтический комитет */}
          <Link
            to="/science/management/bioethics"
            className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-4xl mb-4">⚖️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Биоэтический комитет</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Независимый орган, осуществляющий этическую экспертизу научных исследований с участием человека и контроль за соблюдением биоэтических принципов.
            </p>
          </Link>

          {/* Совет молодых ученых */}
          <Link
            to="/science/management/young-scientists"
            className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Совет молодых ученых</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Объединение молодых исследователей, способствующее развитию научного потенциала, организации конференций и содействию в реализации научных проектов.
            </p>
          </Link>

          {/* Департамент науки */}
          <Link
            to="/science/management/department"
            className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-blue-600 text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Департамент науки и перспективных исследований</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Координация международного научного сотрудничества, организация участия в исследовательских программах и повышение престижа университета на международном уровне.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManagementScience;
