import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUsers, FaGraduationCap, FaFlask, FaMicroscope, FaBookOpen, FaUsers as FaUsersGroup, FaLightbulb, FaChartLine, FaTrophy } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ScienceClub = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const councilSections = [
    { 
      path: "/student/community/clubs", 
      name: t('studentCouncil.sections.clubs'), 
      icon: FaUsers 
    },
    { 
      path: "/student/community/council", 
      name: t('studentCouncil.sections.council'), 
      icon: FaUsers 
    },
    { 
      path: "/student/community/science", 
      name: t('studentCouncil.sections.science'), 
      icon: FaGraduationCap,
      active: true 
    },
    { 
      path: "/student/community/debate", 
      name: t('studentCouncil.sections.debate'), 
      icon: FaUsers 
    },
    { 
      path: "/student/community/tutor", 
      name: t('studentCouncil.sections.tutor'), 
      icon: FaUsers 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('scienceClub.category')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('scienceClub.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('scienceClub.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Menu */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-4 border border-gray-100">
              <div className="bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white px-6 py-4">
                <div className="flex items-center">
                  <FaUsers className="mr-3 text-xl" />
                  <h3 className="font-bold text-lg">{t('scienceClub.sidebarTitle')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {councilSections.map((section) => {
                  const SectionIcon = section.icon;
                  return (
                    <div key={section.path}>
                      <button
                        onClick={() => navigate(section.path)}
                        className={`flex items-center w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                          section.active
                            ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <SectionIcon className="mr-3 text-lg" />
                        <span className="font-medium text-sm">{section.name}</span>
                      </button>
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#023E8A] pb-4">
                {t('scienceClub.content.title')}
              </h2>

              {/* О нас */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaFlask className="mr-3" />
                  {t('scienceClub.content.about.title')}
                </h3>
                
                <div className="space-y-6">
                  {t('scienceClub.content.about.items', { returnObjects: true }).map((item, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Направления */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaMicroscope className="mr-3" />
                  {t('scienceClub.content.directions.title')}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {t('scienceClub.content.directions.items', { returnObjects: true }).map((direction, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-xl flex items-center justify-center mr-4">
                          {index === 0 && <FaBookOpen className="text-white text-lg" />}
                          {index === 1 && <FaFlask className="text-white text-lg" />}
                          {index === 2 && <FaChartLine className="text-white text-lg" />}
                        </div>
                        <h4 className="font-bold text-gray-900">{direction.title}</h4>
                      </div>
                      <p className="text-gray-700 text-sm">{direction.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Достижения */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaTrophy className="mr-3" />
                  {t('scienceClub.content.achievements.title')}
                </h3>
                
                <div className="space-y-4">
                  {t('scienceClub.content.achievements.items', { returnObjects: true }).map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-green-50 rounded-xl">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Как присоединиться */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaLightbulb className="mr-3" />
                  {t('scienceClub.content.join.title')}
                </h3>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                  <div className="space-y-4">
                    {t('scienceClub.content.join.steps', { returnObjects: true }).map((step, index) => (
                      <div key={index} className="flex items-center p-3 bg-white/70 rounded-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ScienceClub;