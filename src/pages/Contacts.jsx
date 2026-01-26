import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Декоративные линии */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="contacts-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#023E8A" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contacts-grid)" />
          </svg>
        </div>

        {/* Геометрические формы */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#023E8A] opacity-[0.05] rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#0077B6] opacity-[0.05] rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#00A8E8] opacity-[0.03] rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-[#023E8A] opacity-[0.04] rotate-45 animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Градиентные оверлеи */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-50/50 to-transparent"></div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl mb-6 border border-blue-100/50">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                {t('contactsPage.subtitle')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('contactsPage.title')}
              <span className="text-blue-600 ml-3">.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t('contactsPage.welcome')} {t('contactsPage.desc')}
            </p>
          </div>

          {/* Основная информация */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mb-16 border border-blue-100/50">
            <div className="flex items-center mb-10">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t('contactsPage.collegeDetailsTitle')}</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400 mt-2 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-5">
                <div className="group p-5 bg-gradient-to-r from-blue-50/50 to-white rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-700 text-sm mb-1">Учреждение</h3>
                      <p className="text-slate-900 font-medium">{t('contactsPage.collegeName')}</p>
                    </div>
                  </div>
                </div>

                <div className="group p-5 bg-gradient-to-r from-blue-50/50 to-white rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-700 text-sm mb-1">Адреса</h3>
                      <p className="text-slate-900 font-medium mb-1">{t('contactsPage.legalAddress').replace('Юр адрес: ', '')}</p>
                      <p className="text-slate-600 text-sm">{t('contactsPage.factAddress').replace('Факт адрес: ', '')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="group p-5 bg-gradient-to-r from-blue-50/50 to-white rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start">
                    <div className="p-2 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-700 text-sm mb-1">Банковские реквизиты</h3>
                      <p className="text-slate-900 font-medium mb-1">{t('contactsPage.inn').replace('ИНН: ', '')}</p>
                      <p className="text-slate-600 text-sm mb-1">{t('contactsPage.bank').replace('Банк: ', '')}</p>
                      <p className="text-slate-600 text-sm">{t('contactsPage.bik').replace('БИК: ', '')} • {t('contactsPage.account').replace('р/счет: ', '')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Контактные карточки */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Телефон */}
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('contactsPage.workPhoneTitle')}</h3>
              <a
                href={`tel:${t('contactsPage.workPhone').replace(/\s+/g, '')}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200"
              >
                <span className="bg-blue-100 px-4 py-3 rounded-xl hover:bg-blue-200 transition-all duration-300 group-hover:shadow-lg">
                  {t('contactsPage.workPhone')}
                </span>
              </a>
            </div>

            {/* Email */}
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('contactsPage.emailTitle')}</h3>
              <a
                href={`mailto:${t('contactsPage.email')}`}
                className="inline-flex items-center text-slate-700 hover:text-slate-900 font-semibold text-lg transition-colors duration-200 break-all"
              >
                <span className="bg-emerald-100 px-4 py-3 rounded-xl hover:bg-emerald-200 transition-all duration-300 group-hover:shadow-lg">
                  {t('contactsPage.email')}
                </span>
              </a>
            </div>

            {/* Адрес */}
            <div className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5m6 0v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m6 0a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{t('contactsPage.addressTitle')}</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="font-medium text-slate-900">{t('contactsPage.addressZip')}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="font-medium text-slate-900">{t('contactsPage.addressStreet')}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="font-medium text-slate-900">{t('contactsPage.addressCity')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижний градиент для плавного перехода */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Contacts;