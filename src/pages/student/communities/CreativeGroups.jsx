import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaUsers, FaBook, FaMusic, FaGraduationCap, FaUserFriends, FaGamepad, FaTrophy, FaLanguage, FaChess, FaDragon, FaComments, FaChalkboardTeacher, FaPaintBrush } from 'react-icons/fa';

const CreativeGroups = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const studentSections = [
    { 
      path: "/student/community/council", 
      nameKey: "creativeGroups.sections.council",
      icon: FaUsers,
    },
    { 
      path: "/student/community/science", 
      nameKey: "creativeGroups.sections.scienceUnion",
      icon: FaGraduationCap,
    },
    { 
      path: "/student/community/debate", 
      nameKey: "creativeGroups.sections.debateClub",
      icon: FaComments,
    },
    { 
      path: "/student/community/tutor", 
      nameKey: "creativeGroups.sections.tutorMovement",
      icon: FaChalkboardTeacher,
    },
    { 
      path: "/student/community/clubs", 
      nameKey: "creativeGroups.sections.creativeClubs",
      icon: FaPaintBrush,
      active: true 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#023E8A] text-white py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/student')}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <FaArrowLeft className="mr-2 transition-transform" />
            {t('creativeGroups.backToStudent')}
          </button>

          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('creativeGroups.studentCommunities')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('creativeGroups.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('creativeGroups.description')}
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
                  <h3 className="font-bold text-lg">{t('creativeGroups.forStudents')}</h3>
                </div>
              </div>
              <nav className="p-2">
                {studentSections.map((section) => {
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
                        <span className="font-medium text-sm">{t(section.nameKey)}</span>
                      </button>
                    </div>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100 transition-shadow">
              {/* Основное описание */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaMusic className="mr-3 text-[#023E8A]" />
                  {t('creativeGroups.aboutTitle')}
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('creativeGroups.aboutDescription')}
                  </p>
                </div>
              </div>

              {/* Творческие коллективы */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-8 flex items-center">
                  <FaUsers className="mr-3" />
                  {t('creativeGroups.groupsTitle')}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {t('creativeGroups.groups', { returnObjects: true }).map((group, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all group">
                      <div className={`w-16 h-16 bg-gradient-to-br ${group.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                        {group.icon === 'FaDragon' && <FaDragon className="text-white text-2xl" />}
                        {group.icon === 'FaLanguage' && <FaLanguage className="text-white text-2xl" />}
                        {group.icon === 'FaUserFriends' && <FaUserFriends className="text-white text-2xl" />}
                        {group.icon === 'FaGamepad' && <FaGamepad className="text-white text-2xl" />}
                        {group.icon === 'FaTrophy' && <FaTrophy className="text-white text-2xl" />}
                        {group.icon === 'FaChess' && <FaChess className="text-white text-2xl" />}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 text-center mb-3 group-hover:text-[#023E8A] transition-colors">
                        {group.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-center text-sm">
                        {group.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Преимущества участия */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaTrophy className="mr-3" />
                  {t('creativeGroups.advantagesTitle')}
                </h3>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {t('creativeGroups.advantages', { returnObjects: true }).map((advantage, index) => (
                      <div key={index} className="flex items-center p-3 bg-white/70 rounded-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Призыв к действию */}
              <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('creativeGroups.joinTitle')}
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  {t('creativeGroups.joinDescription')}
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  <FaMusic className="mr-3" />
                  {t('creativeGroups.joinButton')}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CreativeGroups;