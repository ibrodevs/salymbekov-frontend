import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUsers, FaBook, FaGraduationCap, FaRegCalendarAlt, FaUserGraduate, FaSearch, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CollegeSchedule = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedGroup, setSelectedGroup] = useState('CS-11');
  const [selectedDay, setSelectedDay] = useState(t('collegeSchedule.days.monday'));

  const scheduleSections = [
    { 
      path: "/student/schedule/study", 
      name: t('collegeSchedule.sections.study'), 
      icon: FaBook,
    },
    { 
      path: "/student/schedule/modules", 
      name: t('collegeSchedule.sections.modules'), 
      icon: FaGraduationCap,
    },
    { 
      path: "/student/schedule/practice", 
      name: t('collegeSchedule.sections.practice'), 
      icon: FaUserGraduate,
    },
    { 
      path: "/student/schedule/mfm", 
      name: t('collegeSchedule.sections.mfm'), 
      icon: FaUsers,
    },
    { 
      path: "/student/schedule/college", 
      name: t('collegeSchedule.sections.college'), 
      icon: FaRegCalendarAlt,
      active: true 
    }
  ];

  const groups = t('collegeSchedule.groups', { returnObjects: true });
  const days = t('collegeSchedule.daysList', { returnObjects: true });

  const getScheduleData = () => {
    const scheduleData = t('collegeSchedule.scheduleData', { returnObjects: true });
    const selectedGroupData = scheduleData[selectedGroup];
    return selectedGroupData ? selectedGroupData[selectedDay] || [] : [];
  };

  const currentSchedule = getScheduleData();

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
            {t('collegeSchedule.backToStudent')}
          </button>

          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('collegeSchedule.category')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('collegeSchedule.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('collegeSchedule.subtitle')}
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
                  <h3 className="font-bold text-lg">{t('collegeSchedule.sidebarTitle')}</h3>
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
              {/* Фильтры */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaSearch className="mr-3 text-[#023E8A]" />
                    {t('collegeSchedule.selectGroupDay')}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Выбор группы */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('collegeSchedule.group')}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {groups.map((group) => (
                          <button
                            key={group}
                            onClick={() => setSelectedGroup(group)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              selectedGroup === group
                                ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {group}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Выбор дня */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('collegeSchedule.dayOfWeek')}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {days.map((day) => (
                          <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              selectedDay === day
                                ? 'bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white shadow-md'
                                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Расписание */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaClock className="mr-3" />
                  {t('collegeSchedule.scheduleFor')} {selectedGroup} - {selectedDay}
                </h3>

                {currentSchedule.length > 0 ? (
                  <div className="space-y-4">
                    {currentSchedule.map((lesson, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-all"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          {/* Время */}
                          <div className="flex items-center">
                            <FaClock className="text-[#023E8A] mr-3 text-lg" />
                            <div>
                              <p className="font-semibold text-gray-900">{t('collegeSchedule.time')}</p>
                              <p className="text-gray-700">{lesson.time}</p>
                            </div>
                          </div>

                          {/* Предмет */}
                          <div>
                            <p className="font-semibold text-gray-900">{t('collegeSchedule.subject')}</p>
                            <p className="text-gray-700">{lesson.subject}</p>
                          </div>

                          {/* Преподаватель */}
                          <div>
                            <p className="font-semibold text-gray-900">{t('collegeSchedule.teacher')}</p>
                            <p className="text-gray-700 text-sm">{lesson.teacher}</p>
                          </div>

                          {/* Аудитория */}
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="text-[#023E8A] mr-3 text-lg" />
                            <div>
                              <p className="font-semibold text-gray-900">{t('collegeSchedule.room')}</p>
                              <p className="text-gray-700">{lesson.room || t('collegeSchedule.notSpecified')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-8 border border-yellow-200 text-center">
                    <FaClock className="text-4xl text-yellow-600 mx-auto mb-4" />
                    <p className="text-lg text-gray-700">{t('collegeSchedule.noLessons')}</p>
                  </div>
                )}
              </div>

              {/* Информация о группах */}
              <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaGraduationCap className="mr-3 text-[#023E8A]" />
                  {t('collegeSchedule.aboutGroups')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {groups.map((group) => (
                    <div
                      key={group}
                      className="bg-white/70 p-4 rounded-lg text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">{group}</span>
                      </div>
                      <p className="font-semibold text-gray-900">{t('collegeSchedule.group')} {group}</p>
                      <p className="text-sm text-gray-600">{t('collegeSchedule.collegeITBusiness')}</p>
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

export default CollegeSchedule;