import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaUserFriends, FaRegCalendarAlt, FaUserGraduate, FaDownload, FaExternalLinkAlt, FaExclamationTriangle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const MFMSchedule = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const scheduleSections = [
    { 
      path: "/student/schedule/study", 
      name: t('mfmSchedule.sections.study'), 
      icon: FaRegCalendarAlt,
    },
    { 
      path: "/student/schedule/modules", 
      name: t('mfmSchedule.sections.modules'), 
      icon: FaGraduationCap,
    },
    { 
      path: "/student/schedule/practice", 
      name: t('mfmSchedule.sections.practice'), 
      icon: FaUserGraduate,
    },
    { 
      path: "/student/schedule/mfm", 
      name: t('mfmSchedule.sections.mfm'), 
      icon: FaBook,
      active: true 
    },
    { 
      path: "/student/schedule/college", 
      name: t('mfmSchedule.sections.college'), 
      icon: FaUsers,
    }
  ];

  const scheduleData = [
    {
      group: t('mfmSchedule.groups.GM122F'),
      files: [
        { name: t('mfmSchedule.files.scheduleGM122F'), url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: t('mfmSchedule.groups.GM1322s'),
      files: [
        { name: t('mfmSchedule.files.scheduleGM1322s'), url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: t('mfmSchedule.groups.GM1421'),
      files: [
        { name: t('mfmSchedule.files.scheduleGM1421'), url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: t('mfmSchedule.groups.LD125'),
      files: [
        { name: t('mfmSchedule.files.scheduleLD125'), url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: t('mfmSchedule.groups.GM123F'),
      files: [
        { name: t('mfmSchedule.files.scheduleGM123F'), url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: t('mfmSchedule.groups.LD124'),
      files: [
        { name: t('mfmSchedule.files.scheduleLD124'), url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: t('mfmSchedule.groups.GM1223S'),
      files: [
        { name: t('mfmSchedule.files.scheduleGM1223S'), url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: t('mfmSchedule.groups.LD121'),
      files: [
        { name: t('mfmSchedule.files.scheduleLD121'), url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    },
    {
      group: t('mfmSchedule.groups.LD123'),
      files: [
        { name: t('mfmSchedule.files.scheduleLD123'), url: 'https://salymbekov.com/ru/gm-1-22f/' }
      ]
    }
  ];

  const additionalInfoItems = t('mfmSchedule.additionalInfo.items', { returnObjects: true });

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
            {t('mfmSchedule.backToStudent')}
          </button>

          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('mfmSchedule.category')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('mfmSchedule.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('mfmSchedule.subtitle')}
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
                  <h3 className="font-bold text-lg">{t('mfmSchedule.sidebarTitle')}</h3>
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
              {/* Группы расписаний */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <FaBook className="mr-3 text-[#023E8A]" />
                  {t('mfmSchedule.groupsTitle')}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {scheduleData.map((groupData, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all"
                    >
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-2xl flex items-center justify-center mx-auto mb-3">
                          <FaGraduationCap className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {groupData.group}
                        </h3>
                      </div>
                      
                      <div className="space-y-3">
                        {groupData.files.map((file, fileIndex) => (
                          <a
                            key={fileIndex}
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-4 py-3 bg-white/80 rounded-xl hover:bg-white transition-all duration-200 border border-blue-100 group"
                          >
                            <div className="flex items-center">
                              <FaDownload className="text-[#023E8A] mr-3" />
                              <span className="text-gray-700 font-medium group-hover:text-[#023E8A] transition-colors">
                                {file.name}
                              </span>
                            </div>
                            <FaExternalLinkAlt className="text-gray-400 group-hover:text-[#023E8A] transition-colors" />
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Важное уведомление */}
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaExclamationTriangle className="text-yellow-600 text-2xl mt-1 mr-4" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      {t('mfmSchedule.attention.title')}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {t('mfmSchedule.attention.description')}
                    </p>
                    <a
                      href="https://salymbekov.com/ru/gm-1-22f/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-white/80 rounded-lg text-[#023E8A] font-medium border border-yellow-300 hover:bg-white transition-all"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      https://salymbekov.com/ru/gm-1-22f/
                    </a>
                  </div>
                </div>
              </div>

              {/* Дополнительная информация */}
              <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaRegCalendarAlt className="mr-3 text-[#023E8A]" />
                  {t('mfmSchedule.additionalInfo.title')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.isArray(additionalInfoItems) && additionalInfoItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-white/70 rounded-lg"
                    >
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

export default MFMSchedule;