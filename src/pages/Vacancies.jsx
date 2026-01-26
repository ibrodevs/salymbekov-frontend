import React from 'react';
import { useTranslation } from 'react-i18next';

const Vacancies = () => {
  const { t } = useTranslation();

  // Функция для создания карточки вакансии
  const VacancyCard = ({ title, description, requirements, offers, details, color = 'blue' }) => {
    const colorClasses = {
      blue: 'border-blue-100 hover:border-blue-300',
      emerald: 'border-emerald-100 hover:border-emerald-300',
      purple: 'border-purple-100 hover:border-purple-300',
      amber: 'border-amber-100 hover:border-amber-300'
    };

    const iconColors = {
      blue: 'from-blue-500 to-blue-600',
      emerald: 'from-emerald-500 to-emerald-600',
      purple: 'from-purple-500 to-purple-600',
      amber: 'from-amber-500 to-amber-600'
    };

    return (
      <div className={`group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border ${colorClasses[color]} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
        <div className="flex items-start mb-6">
          <div className={`p-3 bg-gradient-to-br ${iconColors[color]} rounded-xl mr-4 flex-shrink-0`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-4">
          {description && (
            <p className="text-slate-700">{description}</p>
          )}

          {requirements && requirements.length > 0 && (
            <div>
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Требования:
              </h4>
              <ul className="space-y-1 ml-7">
                {requirements.map((item, idx) => (
                  <li key={idx} className="text-slate-600 flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {offers && offers.length > 0 && (
            <div>
              <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Мы предлагаем:
              </h4>
              <ul className="space-y-1 ml-7">
                {offers.map((item, idx) => (
                  <li key={idx} className="text-slate-600 flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {details && (
            <div className="pt-4 border-t border-slate-100">
              <p className="text-slate-700">{details}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Анимированный фон - ТОЧНО КАК В ПРИМЕРЕ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Декоративные линии */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#023E8A" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Геометрические формы */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#023E8A] opacity-[0.05] rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#0077B6] opacity-[0.05] rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#00A8E8] opacity-[0.03] rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-[#023E8A] opacity-[0.04] rotate-45 animate-pulse" style={{ animationDuration: '4s' }}></div>

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
                Карьера в Салымбеков Университете
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {t('vacancies.title')}
              <span className="text-blue-600 ml-3">.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Присоединяйтесь к нашей команде профессионалов и станьте частью инновационного образовательного процесса.
            </p>
          </div>

          {/* Сетка вакансий */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IT College */}
            <VacancyCard
              title={t('vacancies.college.header')}
              description={t('vacancies.college.desc2')}
              requirements={t('vacancies.college.requirements', { returnObjects: true })}
              offers={t('vacancies.college.offers', { returnObjects: true })}
              details={`${t('vacancies.college.resume')} ${t('vacancies.college.deadline')}`}
              color="blue"
            />

            {/* Медфак: заведующий */}
            <VacancyCard
              title={t('vacancies.medfac_head.header')}
              description={t('vacancies.medfac_head.desc2')}
              requirements={t('vacancies.medfac_head.requirements', { returnObjects: true })}
              offers={t('vacancies.medfac_head.offers', { returnObjects: true })}
              details={`${t('vacancies.medfac_head.contacts')} ${t('vacancies.medfac_head.resume')} ${t('vacancies.medfac_head.phones')}`}
              color="emerald"
            />

            {/* Медфак: дисциплины */}
            <VacancyCard
              title={t('vacancies.medfac_disciplines.header')}
              description={t('vacancies.medfac_disciplines.desc1')}
              requirements={t('vacancies.medfac_disciplines.requirements', { returnObjects: true })}
              offers={t('vacancies.medfac_disciplines.offers', { returnObjects: true })}
              details={`${t('vacancies.medfac_disciplines.contacts')} ${t('vacancies.medfac_disciplines.resume')} ${t('vacancies.medfac_disciplines.phones')}`}
              color="purple"
            />

            {/* Нарын */}
            <VacancyCard
              title={t('vacancies.naryn.header')}
              description={t('vacancies.naryn.desc1')}
              requirements={t('vacancies.naryn.requirements', { returnObjects: true })}
              offers={t('vacancies.naryn.offers', { returnObjects: true })}
              details={`${t('vacancies.naryn.contacts')} ${t('vacancies.naryn.resume')} ${t('vacancies.naryn.phones')}`}
              color="amber"
            />

            {/* Медфак: длинный список */}
            <div className="md:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('vacancies.medfac_long.header')}</h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-slate-700 mb-6">{t('vacancies.medfac_long.desc1')}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-800 mb-2">Дисциплины:</h4>
                      <ol className="list-decimal ml-5 space-y-1">
                        {t('vacancies.medfac_long.disciplines', { returnObjects: true }).map((item, idx) => (
                          <li key={idx} className="text-slate-600 pl-2">{item}</li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Требования:</h4>
                      <ul className="space-y-1 ml-5">
                        {t('vacancies.medfac_long.requirements', { returnObjects: true }).map((item, idx) => (
                          <li key={idx} className="text-slate-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Мы предлагаем:</h4>
                      <ul className="space-y-1 ml-5">
                        {t('vacancies.medfac_long.offers', { returnObjects: true }).map((item, idx) => (
                          <li key={idx} className="text-slate-600 flex items-start">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-slate-700">
                    {t('vacancies.medfac_long.contacts')}<br />
                    {t('vacancies.medfac_long.resume')}<br />
                    {t('vacancies.medfac_long.phones')}<br />
                    <span className="text-emerald-700 font-medium">{t('vacancies.medfac_long.thanks')}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Медфак: отдел кадров */}
            <div className="md:col-span-2">
              <VacancyCard
                title={t('vacancies.medfac_hr.header')}
                description={`${t('vacancies.medfac_hr.desc1')} ${t('vacancies.medfac_hr.desc2')}`}
                requirements={t('vacancies.medfac_hr.requirements', { returnObjects: true })}
                offers={t('vacancies.medfac_hr.offers', { returnObjects: true })}
                details={`${t('vacancies.medfac_hr.contacts')} ${t('vacancies.medfac_hr.resume')} ${t('vacancies.medfac_hr.phones')} ${t('vacancies.medfac_hr.thanks')}`}
                color="emerald"
              />
            </div>
          </div>

          {/* Контактная информация */}
          <div className="mt-16 p-8 md:p-10 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg border border-blue-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Как отправить резюме?</h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Отправляйте свое резюме и сопроводительное письмо на указанные в вакансиях контакты.
                В теме письма укажите название вакансии, на которую претендуете.
              </p>
              <div className="inline-flex items-center space-x-4">
                <span className="px-6 py-3 bg-blue-100 text-blue-700 font-medium rounded-xl">
                  HR-отдел: hr@salymbekov.edu.kg
                </span>
                <span className="px-6 py-3 bg-emerald-100 text-emerald-700 font-medium rounded-xl">
                  Телефон: +996 555 123 456
                </span>
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

export default Vacancies;