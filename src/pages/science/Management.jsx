import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft } from 'react-icons/fa';

const ManagementScience = () => {
  const { t, i18n } = useTranslation();

  // safe string translation getter with fallback to English
  const isUrlLike = (s) => typeof s === 'string' && /^(https?:\/\/|www\.)/.test(s);
  const getRaw = (key, lng = undefined) => {
    const lang = typeof lng === 'string' ? lng : i18n.language;
    return t(key, { returnObjects: true, lng: lang });
  };
  const rstr = (key, defaultValue = '') => {
    let raw = getRaw(key, i18n.language);
    const fallbackNeeded = raw === undefined || raw === null || raw === '' || raw === key || isUrlLike(raw);
    if (fallbackNeeded) {
      const fallback = getRaw(key, 'en');
      raw = fallback ?? defaultValue;
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[i18n] Fallback to EN for key "${key}" (${i18n.language})`, raw);
      }
    }
    if (typeof raw === 'string') return raw;
    if (Array.isArray(raw)) return raw.join(' ');
    if (raw && typeof raw === 'object') return raw.title || raw.name || raw.description || Object.values(raw)[0] || defaultValue;
    return defaultValue;
  };

  const managementItems = [
    {
      to: "/science/management/scientific-technical-council",
      emoji: "🏛️",
      title: rstr('science.management.scientificCouncil.title'),
      description: rstr('science.management.scientificCouncil.description')
    },
    {
      to: "/science/management/bioethics",
      emoji: "⚖️",
      title: rstr('science.management.bioethics.title'),
      description: rstr('science.management.bioethics.description')
    },
    {
      to: "/science/management/young-scientists",
      emoji: "👥",
      title: rstr('science.management.youngScientists.title'),
      description: rstr('science.management.youngScientists.description')
    },
    {
      to: "/science/management/department",
      emoji: "🌐",
      title: rstr('science.management.department.title'),
      description: rstr('science.management.department.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/science"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {rstr('science.backButton', 'Назад к науке')}
          </Link>
          <h1 className="text-4xl font-bold mb-4">
            {rstr('science.management.title')}
          </h1>
          <p className="text-xl text-blue-100">
            {rstr('science.management.subtitle')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {managementItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementScience;