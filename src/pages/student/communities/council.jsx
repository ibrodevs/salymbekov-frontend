import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUsers, FaBook, FaDownload, FaGraduationCap, FaComments, FaChalkboardTeacher, FaPaintBrush } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const StudentCouncil = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const councilSections = [
    { 
      path: "/student/community/council", 
      name: t('studentCouncil.sections.council'), 
      icon: FaUsers,
      active: true 
    },
    { 
      path: "/student/community/science", 
      name: t('studentCouncil.sections.science'), 
      icon: FaGraduationCap,
    },
    { 
      path: "/student/community/debate", 
      name: t('studentCouncil.sections.debate'), 
      icon: FaComments 
    },
    { 
      path: "/student/community/tutor", 
      name: t('studentCouncil.sections.tutor'), 
      icon: FaChalkboardTeacher 
    },
    { 
      path: "/student/community/clubs", 
      name: t('studentCouncil.sections.clubs'), 
      icon: FaPaintBrush 
    }
  ];

  const generalProvisions = t('studentCouncil.content.generalProvisions', { returnObjects: true });
  const mainTasks = t('studentCouncil.content.mainTasks', { returnObjects: true });
  const functions = t('studentCouncil.content.functions', { returnObjects: true });
  const rights = t('studentCouncil.content.rights', { returnObjects: true });
  const organization = t('studentCouncil.content.organization', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('studentCouncil.category')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('studentCouncil.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('studentCouncil.subtitle')}
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
                  <h3 className="font-bold text-lg">{t('studentCouncil.sidebarTitle')}</h3>
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
                {t('studentCouncil.content.title')}
              </h2>

              {/* Общие положения */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaBook className="mr-3" />
                  {t('studentCouncil.content.sections.general')}
                </h3>
                
                <div className="space-y-6">
                  {Array.isArray(generalProvisions) && generalProvisions.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Основные задачи */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6">
                  {t('studentCouncil.content.sections.tasks')}
                </h3>
                
                <div className="space-y-4">
                  {Array.isArray(mainTasks) && mainTasks.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Функции */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6">
                  {t('studentCouncil.content.sections.functions')}
                </h3>
                
                <div className="space-y-4">
                  {Array.isArray(functions) && functions.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Права */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6">
                  {t('studentCouncil.content.sections.rights')}
                </h3>
                
                <div className="space-y-4">
                  {Array.isArray(rights) && rights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Организация деятельности */}
              <section className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6">
                  {t('studentCouncil.content.sections.organization')}
                </h3>
                
                <div className="space-y-6">
                  {Array.isArray(organization) && organization.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors"
                    >
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Download Section */}
              <section className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        {t('studentCouncil.download.title')}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t('studentCouncil.download.description')}
                      </p>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    >
                      <FaDownload className="mr-3" />
                      {t('studentCouncil.download.button')}
                    </a>
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

export default StudentCouncil;