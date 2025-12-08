import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ExtraNavigation from './extrapages/ExtraNavigation';
import { useTranslation } from 'react-i18next';

const Dealers = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const countries = [
    {
      id: 1,
      name: t('dealers.countries.india.name', 'Индия'),
      flag: '🇮🇳',
      description: t('dealers.countries.india.description', 'Страна с богатой культурой и историей'),
      color: 'from-orange-500 to-pink-500',
      route: '/applicants/dealers/india'
    },
    {
      id: 2,
      name: t('dealers.countries.pakistan.name', 'Пакистан'),
      flag: '🇵🇰',
      description: t('dealers.countries.pakistan.description', 'Исламская республика в Южной Азии'),
      color: 'from-green-500 to-white',
      route: '/applicants/dealers/pakistan'
    },
    {
      id: 3,
      name: t('dealers.countries.uzbekistan.name', 'Узбекистан'),
      flag: '🇺🇿',
      description: t('dealers.countries.uzbekistan.description', 'Страна в Центральной Азии с древними городами'),
      color: 'from-blue-500 to-white',
      route: '/applicants/dealers/uzbekistan'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#023E8A]/95 via-[#0077B6]/95 to-[#0096C7]/95 z-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            {t('dealers.hero.title', 'Партнеры — Официальные дилеры')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {t('dealers.hero.subtitle', 'Выберите страну для получения подробной информации')}
          </p>
        </div>
      </div>

      {/* Main Content with Navigation */}
      <div className="relative z-10 container mx-auto px-4 -mt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Navigation */}
          <div className="lg:w-80 flex-shrink-0">
            <ExtraNavigation />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            {/* Countries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {countries.map((country, index) => (
                <div
                  key={country.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
                  onClick={() => navigate(country.route)}
                >
                  {/* Card Header with Gradient */}
                  <div className={`h-32 bg-gradient-to-r ${country.color} relative`}>
                    <div className="absolute -bottom-6 left-6">
                      <div className="text-6xl bg-white p-3 rounded-2xl shadow-lg">
                        {country.flag}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-10 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {country.name}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {country.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {t('dealers.card.cta', 'Нажмите для подробностей')}
                      </span>
                      <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {t('dealers.card.button', 'Подробнее')} →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dealers;