import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaUsers, FaBook, FaHandshake, FaGraduationCap, FaUserFriends, FaUserGraduate, FaHeart, FaComments, FaChalkboardTeacher, FaPaintBrush } from 'react-icons/fa';

const Tutoring = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const studentSections = [
    { 
      path: "/student/community/council", 
      nameKey: "tutoring.sections.council",
      icon: FaUsers,
    },
    { 
      path: "/student/community/science", 
      nameKey: "tutoring.sections.scienceUnion",
      icon: FaGraduationCap,
    },
    { 
      path: "/student/community/debate", 
      nameKey: "tutoring.sections.debateClub",
      icon: FaComments,
    },
    { 
      path: "/student/community/tutor", 
      nameKey: "tutoring.sections.tutorMovement",
      icon: FaChalkboardTeacher,
      active: true 
    },
    { 
      path: "/student/community/clubs", 
      nameKey: "tutoring.sections.creativeClubs",
      icon: FaPaintBrush 
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
            {t('tutoring.backToStudent')}
          </button>

          <div>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white/90 text-sm font-medium">
                {t('tutoring.studentCommunities')}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {t('tutoring.tutorMovement')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {t('tutoring.tutorDescription')}
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
                  <h3 className="font-bold text-lg">{t('tutoring.forStudents')}</h3>
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
                  <FaHandshake className="mr-3 text-[#023E8A]" />
                  {t('tutoring.aboutTitle')}
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {t('tutoring.descriptionPart1')}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('tutoring.descriptionPart2')}
                  </p>
                </div>
              </div>

              {/* Руководитель */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaUserGraduate className="mr-3" />
                  {t('tutoring.leadershipTitle')}
                </h3>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUserGraduate className="text-white text-3xl" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        {t('tutoring.leaderName')}
                      </h4>
                      <p className="text-lg text-[#0077B6] font-semibold mb-2">
                        {t('tutoring.leaderPosition')}
                      </p>
                      <p className="text-gray-600">
                        {t('tutoring.leaderRole')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Преимущества и цели */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#023E8A] mb-6 flex items-center">
                  <FaHeart className="mr-3" />
                  {t('tutoring.benefitsTitle')}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t('tutoring.benefits', { returnObjects: true }).map((benefit, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all group">
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#023E8A] to-[#0077B6] rounded-full flex items-center justify-center mr-4">
                          {benefit.icon === 'FaHeart' && <FaHeart className="text-white text-lg" />}
                          {benefit.icon === 'FaHandshake' && <FaHandshake className="text-white text-lg" />}
                          {benefit.icon === 'FaGraduationCap' && <FaGraduationCap className="text-white text-lg" />}
                          {benefit.icon === 'FaUsers' && <FaUsers className="text-white text-lg" />}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 group-hover:text-[#023E8A] transition-colors">
                          {benefit.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Как присоединиться */}
              <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {t('tutoring.joinTitle')}
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    {t('tutoring.joinDescription')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#023E8A] to-[#0077B6] text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                      <FaHandshake className="mr-3" />
                      {t('tutoring.joinButton1')}
                    </button>
                    <button className="inline-flex items-center px-6 py-3 bg-white border border-[#023E8A] text-[#023E8A] font-semibold rounded-xl hover:bg-[#023E8A] hover:text-white transition-all">
                      <FaHeart className="mr-3" />
                      {t('tutoring.joinButton2')}
                    </button>
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

export default Tutoring;