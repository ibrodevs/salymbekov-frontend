import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaDownload, FaFileAlt, FaCalendarCheck, FaClock, FaChartLine } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const StudySchedule = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const scheduleSections = [
    { 
      path: "/student/schedule/study", 
      name: t('studySchedule.sections.study'), 
      icon: FaChartLine,
      active: true 
    },
    { 
      path: "/student/schedule/modules", 
      name: t('studySchedule.sections.modules'), 
      icon: FaCalendarCheck,
    },
    { 
      path: "/student/schedule/practice", 
      name: t('studySchedule.sections.practice'), 
      icon: FaUserGraduate,
    },
    { 
      path: "/student/schedule/mfm", 
      name: t('studySchedule.sections.mfm'), 
      icon: FaBook,
    },
    { 
      path: "/student/schedule/college", 
      name: t('studySchedule.sections.college'), 
      icon: FaRegCalendarAlt,
    }
  ];

  const iconMap = {
    FaChartLine,
    FaCalendarCheck,
    FaUserGraduate,
    FaBook,
    FaRegCalendarAlt,
    FaClock
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/student')}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t('studySchedule.backToStudent')}
          </button>

          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('studySchedule.category')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('studySchedule.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('studySchedule.subtitle')}
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
                  <h3 className="font-bold text-lg">{t('studySchedule.sidebarTitle')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {scheduleSections.map((section) => {
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
              {/* Годы учебных процессов */}
              {t('studySchedule.scheduleData', { returnObjects: true }).map((yearData, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  {/* Заголовок года */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      <FaChartLine className="mr-3 text-[#023E8A]" />
                      {yearData.year} {t('studySchedule.academicYear')}
                    </h2>
                  </div>

                  {/* Файлы учебного процесса */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {yearData.files.map((file, fileIndex) => (
                      <a
                        key={fileIndex}
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all group ${
                          file.url === '#'
                            ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200 cursor-not-allowed'
                            : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:shadow-lg'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform ${
                            file.url === '#'
                              ? 'bg-gradient-to-br from-gray-400 to-gray-600'
                              : 'bg-gradient-to-br from-[#023E8A] to-[#0077B6]'
                          }`}>
                            <FaFileAlt className="text-white text-sm" />
                          </div>
                          <div>
                            <h3 className={`font-semibold text-sm leading-tight ${
                              file.url === '#'
                                ? 'text-gray-500'
                                : 'text-gray-900 group-hover:text-[#023E8A] transition-colors'
                            }`}>
                              {file.name}
                            </h3>
                          </div>
                        </div>
                        {file.url !== '#' && (
                          <FaDownload className="text-gray-400 group-hover:text-[#023E8A] transition-colors" />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Информация о учебном процессе */}
              <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaClock className="mr-3 text-[#023E8A]" />
                  {t('studySchedule.processInfo.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t('studySchedule.processInfo.items', { returnObjects: true }).map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/70 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Уведомление о доступности */}
              <div className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
                <div className="flex items-start">
                  <FaChartLine className="text-yellow-600 text-2xl mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {t('studySchedule.availability.title')}
                    </h4>
                    <p className="text-gray-700 mb-3">
                      {t('studySchedule.availability.description')}
                    </p>
                    <a
                      href="https://salymbekov.com/ru/grafik-uchebnogo-processa-3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white/80 rounded-lg text-[#023E8A] font-medium border border-yellow-300 hover:bg-white transition-all"
                    >
                      <FaDownload className="mr-2" />
                      https://salymbekov.com/ru/grafik-uchebnogo-processa-3/
                    </a>
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

export default StudySchedule;