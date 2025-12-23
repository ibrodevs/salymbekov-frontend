import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaDownload, FaHospital, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PracticeSchedule = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const scheduleSections = [
    { 
      path: "/student/schedule/study", 
      name: t('practiceSchedule.sections.study'), 
      icon: FaCalendarAlt,
    },
    { 
      path: "/student/schedule/modules", 
      name: t('practiceSchedule.sections.modules'), 
      icon: FaGraduationCap,
    },
    { 
      path: "/student/schedule/practice", 
      name: t('practiceSchedule.sections.practice'), 
      icon: FaBriefcase,
      active: true 
    },
    { 
      path: "/student/schedule/mfm", 
      name: t('practiceSchedule.sections.mfm'), 
      icon: FaBook,
    },
    { 
      path: "/student/schedule/college", 
      name: t('practiceSchedule.sections.college'), 
      icon: FaRegCalendarAlt,
    }
  ];

  const iconMap = {
    FaCalendarAlt,
    FaGraduationCap,
    FaBriefcase,
    FaBook,
    FaRegCalendarAlt,
    FaHospital,
    FaDownload
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
            {t('practiceSchedule.backToStudent')}
          </button>

          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('practiceSchedule.category')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('practiceSchedule.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('practiceSchedule.subtitle')}
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
                  <h3 className="font-bold text-lg">{t('practiceSchedule.sidebarTitle')}</h3>
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
              {t('practiceSchedule.practiceData', { returnObjects: true }).map((yearData, index) => (
                <div key={index} className="mb-12">
                  {/* Заголовок года */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                      <FaCalendarAlt className="mr-3 text-[#023E8A]" />
                      {yearData.year} {t('practiceSchedule.academicYear')}
                    </h2>
                    <p className="text-lg text-gray-700 text-center">
                      {yearData.title}
                    </p>
                  </div>

                  {/* Таблица */}
                  <div className="mb-8">
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr className="bg-gradient-to-r from-[#023E8A] to-[#0077B6]">
                            {t('practiceSchedule.table.headers', { returnObjects: true }).map((header, headerIndex) => (
                              <th 
                                key={headerIndex}
                                className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {t('practiceSchedule.table.rows', { returnObjects: true }).map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {row.number}
                              </td>
                              <td className="px-6 py-4 text-sm font-semibold text-[#023E8A]">
                                {row.name}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 whitespace-pre-line">
                                {row.bases}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                {row.semester}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                {row.hours}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                {row.students}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                {row.groups}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 whitespace-pre-line text-center">
                                {row.dates}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                {row.report}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Клинические базы */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                      <FaHospital className="mr-3" />
                      {t('practiceSchedule.clinicalBases.title')}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {t('practiceSchedule.clinicalBases.hospitals', { returnObjects: true }).map((hospital, hospitalIndex) => (
                        <div
                          key={hospitalIndex}
                          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 text-center hover:shadow-lg transition-shadow"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaHospital className="text-white text-lg" />
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{hospital.name}</h4>
                          <p className="text-sm text-gray-600">{hospital.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Кнопка скачивания */}
                  <div className="flex justify-center">
                    <a
                      href="#"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    >
                      <FaDownload className="mr-3 text-lg" />
                      {t('practiceSchedule.downloadButton')}
                    </a>
                  </div>
                </div>
              ))}

              {/* Дополнительная информация */}
              <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBriefcase className="mr-3 text-[#023E8A]" />
                  {t('practiceSchedule.additionalInfo.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t('practiceSchedule.additionalInfo.items', { returnObjects: true }).map((item, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/70 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PracticeSchedule;