import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PublicCouncils() {
  const members = [
    'Батыралиев Талантбек Абдуллаевич',
    'Эшмамбетов Асизбек',
    'Professor Jung Ho Kim',
    'Доктор Амия Бхаумик',
    'Профессор Карл Эрб',
    'Профессор Hideo Shinagawa'
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
          Совет развития
        </h1>

        {/* Description */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Совет развития создан для консультирования по стратегическим направлениям университета,
          привлечения экспертов и разработки долгосрочных инициатив.
        </p>

        {/* Chairman */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Председатель</h2>
          <p className="text-gray-700 leading-relaxed">Аскар Салымбеков — председатель Совета развития.</p>
        </div>

        {/* Members List */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Члены совета</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {members.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}