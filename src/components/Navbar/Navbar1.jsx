import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import Logo1 from '../../assets/Logo.png';
import Logo2 from '../../assets/Logo_white.png';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const subDropdownTimeoutRef = useRef(null);

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, [location]);

  const handleDropdownEnter = (menu) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
    setActiveSubDropdown(null);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 300);
  };

  const handleSubDropdownEnter = (sub) => {
    if (subDropdownTimeoutRef.current) {
      clearTimeout(subDropdownTimeoutRef.current);
    }
    setActiveSubDropdown(sub);
  };

  const handleSubDropdownLeave = () => {
    subDropdownTimeoutRef.current = setTimeout(() => {
      setActiveSubDropdown(null);
    }, 200);
  };

  // Complete menu data structure with all paths from Navbar.jsx
  const menuData = {
    university: {
      items: [
        { key: 'founderAppeal', link: '/university/Appeal' },
        { key: 'history', link: '/university/history' },
        { key: 'mission', link: '/university/mission' },
        { key: 'videos', link: '/university/videos' },
        { key: 'vacancies', link: '/university/vacancies' },
        { key: 'contacts', link: '/university/contacts' },
        { key: 'brandbook', link: 'https://salymbekov.com/wp-content/uploads/2023/10/brjendbuk_organized_new.pdf' },
        {
          key: 'structure',
          link: '/university/structure',
          subItems: [
            { key: 'universityMain', link: '/university/structure/University-main' },
            { key: 'internationalFaculty', link: '/university/structure/International-Faculty' },
            { key: 'itCollege', link: '/university/structure/it-college' }
          ]
        },
        {
          key: 'foundingDocs',
          link: '/university/founding-docs',
          subItems: [
            { key: 'charter', link: '/university/founding-docs/charter' },
            { key: 'licenses', link: '/university/founding-docs/licenses' },
            { key: 'acts', link: '/university/founding-docs/acts' }
          ]
        },
        {
          key: 'management',
          link: '/university/management',
          subItems: [
            { key: 'founder', link: '/university/management/founder' },
            { key: 'president', link: '/university/management/president' },
            { key: 'rectorate', link: '/university/management/rectorate' }
          ]
        },
        {
          key: 'councils',
          link: '/university/Councils',
          subItems: [
            { key: 'devCouncil', link: '/university/Councils/dev-council' },
            { key: 'acadCouncil', link: '/university/Councils/acad-council' },
            { key: 'eduCouncil', link: '/university/Councils/edu-councils' },
            { key: 'techCouncil', link: '/university/Councils/technical-council' },
            { key: 'scienCouncil', link: '/university/Councils/scien-council' },
            { key: 'editBoard', link: '/university/Councils/edit-board' },
            { key: 'admisCommittee', link: '/university/Councils/admis-committee' },
            { key: 'supportCommission', link: '/university/Councils/commission-support' },
            { key: 'bioethicsCommittee', link: '/university/Councils/bioethics-committee' },
            { key: 'youngScientists', link: '/university/Councils/council-scients' },
            { key: 'employersCouncil', link: '/university/Councils/employers-council' },
            { key: 'parentsCouncil', link: '/university/Councils/parents-council' },
            { key: 'studentCouncil', link: '/university/Councils/student-council' }
          ]
        },
        {
          key: 'departments',
          link: '/university/departments',
          subItems: [
            { key: 'financialDept', link: '/university/departments/financial' },
            { key: 'scienceDept', link: '/university/departments/science' },
            { key: 'managementDept', link: '/university/departments/management' },
            { key: 'hrDept', link: '/university/departments/hr' },
            { key: 'qualityDept', link: '/university/departments/quality' },
            { key: 'researchDept', link: '/university/departments' },
            { key: 'internationalDept', link: '/university/departments/international' },
            { key: 'studentDept', link: '/university/departments/student' },
            { key: 'careerCenter', link: '/university/departments/career' }
          ]
        },
        {
          key: 'accreditation',
          link: '/university/accreditation',
          subItems: [
            { key: 'national', link: '/university/accreditation/national' },
            { key: 'institutional', link: '/university/accreditation/institutional' },
            { key: 'programAccreditation', link: '/university/accreditation/program' }
          ]
        },
        {
          key: 'strategicDocs',
          link: '/university/StrategicDocs',
          subItems: [
            { key: 'vision', link: '/university/StrategicDocs/StrategicVision' },
            { key: 'strategicPlan', link: '/university/StrategicDocs/StrategicDevelopPlans' },
            { key: 'comprehensivePlans', link: 'https://salymbekov.com/wp-content/uploads/2022/05/5.9.4.-kompleksnyj-plan-meroprijatij-za-2021-2022-gg.pdf' },
            { key: 'accountingPolicy', link: '/university/StrategicDocs/AccountingPolicy' },
            { key: 'hrPolicy', link: '/university/StrategicDocs/HR-Policy' }
          ]
        },
        {
          key: 'normativeDocs',
          link: '/university/normative-docs',
          subItems: [
            { key: 'krActs', link: '/university/normative-docs/kr-acts' },
            { key: 'internalActs', link: '/university/normative-docs/internal-acts' }
          ]
        },
        {
          key: 'qualityManagement',
          link: '/university/QualityManagSystem',
          subItems: [
            { key: 'qualityPolicy', link: '/university/QualityManagSystem/QualityPolity' },
            { key: 'qualityMonitoring', link: '/university/QualityManagSystem/QualityMonitoring' }
          ]
        },
        {
          key: 'cooperation',
          link: '/university/cooperation',
          subItems: [
            { key: 'universitiesCoop', link: '/university/cooperation/universities' },
            { key: 'clinicsCoop', link: '/university/cooperation/clinics' }
          ]
        }
      ]
    },
    education: {
      items: [
        {
          key: 'ait',
          link: '/education/ait',
          subItems: [
            { key: 'aboutait', link: '/education/ait/about' },
            { key: 'aitLeadership', link: '/education/ait/leadership' },
            { key: 'aitDisciplines', link: '/education/ait/disciplines' },
            { key: 'aitTeachers', link: '/education/ait/teachers' },
            { key: 'contacts', link: '/education/ait/contacts' }
          ]
        },
        {
          key: 'mfm',
          link: '/education/mfm',
          subItems: [
            { key: 'aboutmfm', link: '/education/mfm/about' },
            { key: 'deanOffice', link: '/education/mfm/dekanat/dean' },
            { key: 'mfmCurriculum', link: '/education/mfm/dekanat/curriculum' },
            { key: 'departments', link: '/education/mfm/dekanat/departments' },
            { key: 'medicine5Years', link: '/education/mfm/programs/five-years' },
            { key: 'medicine6Years', link: '/education/mfm/programs/six-years' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        },
        {
          key: 'itCollege',
          link: '/education/itCollege',
          subItems: [
            { key: 'aboutIt', link: '/university/structure/it-college' },
            { key: 'director', link: '/education/itCollege/director' },
            { key: 'computerScience', link: '/education/itCollege/specialties/diplom-computer-science' },
            { key: 'multimediaApps', link: '/education/itCollege/specialties/diplom-multi-applications' },
            { key: 'mobileComputing', link: '/education/itCollege/specialties/diplom-mobile-computing' },
            { key: 'lincolnUniversity', link: 'https://www.lincoln.edu.my/' },
            { key: 'generalDisciplines', link: '/education/itCollege/departments/general' },
            { key: 'itDepartment', link: '/education/itCollege/departments/information' },
            { key: 'pedagogicalCouncil', link: '/education/itCollege/pedagogical-council' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        },
        {
          key: 'businessSchool',
          link: '/education/business-school',
          subItems: [
            { key: 'aboutBusinessSchool', link: '/education/business-school/about' },
            { key: 'director', link: '/education/business-school/director' },
            { key: 'smartik', link: '/education/business-school/programs/smartik' },
            { key: 'futureLeaders', link: '/education/business-school/programs/future-leaders' },
            { key: 'youngLeaders', link: '/education/business-school/programs/young-leaders' },
            { key: 'olderLeaders', link: '/education/business-school/programs/older-leaders' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        },
        {
          key: 'postgraduatetitle',
          link: '/education/postgrad',
          subItems: [
            { key: 'internship', link: '/education/postgrad/internship' },
            { key: 'residency', link: '/education/postgrad/residency' },
            { key: 'postgraduate', link: '/education/postgrad/postgraduate' },
            { key: 'phd', link: '/education/postgrad/phd' }
          ]
        },
        {
          key: 'narynCenter',
          link: '/education/center',
          subItems: [
            { key: 'aboutCenter', link: '/education/center/about' },
            { key: 'contacts', link: '/university/contacts' }
          ]
        }
      ]
    },
    clinical: {
      items: [
        { key: 'lazmed', link: '/clinical/lazmed' },
        { key: 'dordoiOphthalmic', link: '/clinical/dordoi-ophthalmic' },
        { key: 'docClinic', link: '/clinical/doc-clinic' },
        { key: 'docHospital', link: '/clinical/doc-hospital' },
        { key: 'agreements', link: '/clinical/agreements' }
      ]
    },
    science: {
      items: [
        {
          key: 'management',
          link: '/science/management',
          subItems: [
            { key: 'scientificCouncil', link: '/science/management/scientific-technical-council' },
            { key: 'bioethics', link: '/science/management/bioethics' },
            { key: 'youngScientists', link: '/science/management/young-scientists' },
            { key: 'researchDepartment', link: '/science/management/department' }
          ]
        },
        { key: 'journal', link: '/science/publications/journal' },
        { key: 'periodicals', link: '/science/publications/periodicals' },
        { key: 'library', link: '/science/library' },
        { key: 'labs', link: '/science/labs' },
        { key: 'honoredProfessors', link: '/science/professors' },
        {
          key: 'events',
          link: '/science/events',
          subItems: [
            { key: 'conferences', link: '/science/events/conferences' },
            { key: 'masterClasses', link: '/science/events/master-classes' },
            { key: 'roundTables', link: '/science/events/round-tables' }
          ]
        },
        {
          key: 'studentScience',
          link: '/science/student-science',
          subItems: [
            { key: 'studentSociety', link: '/science/student-society' },
            { key: 'scienceClubs', link: '/science/student-science/clubs' },
            { key: 'studentConferences', link: '/science/student-science/conferences' }
          ]
        },
        {
          key: 'researchProjects',
          link: '/science/projects',
          subItems: [
            { key: 'urology', link: '/science/projects/urology' },
            { key: 'gynecology', link: '/science/projects/gynecology' },
            { key: 'ophthalmology', link: '/science/projects/ophthalmology' },
            { key: 'oncology', link: '/science/projects/oncology' }
          ]
        }
      ]
    },
    student: {
      items: [
        {
          key: 'communities',
          link: '/student/community',
          subItems: [
            { key: 'council', link: '/student/community/council' },
            { key: 'scienceSociety', link: '/student/community/science' },
            { key: 'debateClub', link: '/student/community/debate' },
            { key: 'tutorMovement', link: '/student/community/tutor' },
            { key: 'creativeClubs', link: '/student/community/clubs' }
          ]
        },
        {
          key: 'schedules',
          link: '/student/schedule',
          subItems: [
            { key: 'studySchedule', link: '/student/schedule/study' },
            { key: 'modulesSchedule', link: '/student/schedule/modules' },
            { key: 'practiceSchedule', link: '/student/schedule/practice' },
            { key: 'mfmSchedule', link: '/student/schedule/mfm' },
            { key: 'collegeSchedule', link: '/student/schedule/college' }
          ]
        },
        {
          key: 'resources',
          link: '/student/resources',
          subItems: [
            { key: 'instructions', link: '/student/resources/instructions' },
            { key: 'infoSystem', link: '/student/resources/infosystem' },
            { key: 'eLibrary', link: '/student/resources/elib' },
            { key: 'eduResources', link: '/student/resources/edu-resources' }
          ]
        },
        {
          key: 'opportunities',
          link: '/student/opportunities',
          subItems: [
            { key: 'medicalCenter', link: '/student/opportunities/medical' },
            { key: 'dormitory', link: '/student/opportunities/dorm' },
            { key: 'socialSupport', link: '/student/opportunities/social' },
            { key: 'electiveCourses', link: '/student/opportunities/courses' },
            { key: 'academicMobility', link: '/student/opportunities/mobility' },
            { key: 'psychologicalSupport', link: '/student/opportunities/psychology' },
            { key: 'serviceCenter', link: '/student/opportunities/service-center' },
            { key: 'adaptationPrograms', link: '/student/opportunities/adaptation' }
          ]
        }
      ]
    },
    applicant: {
      items: [
        { key: 'directions', link: '/applicants/directions' },
        { key: 'tuitionCost', link: '/applicants/cost' },
        {
          key: 'admissionProcedure',
          link: '/applicants/admission',
          subItems: [
            { key: 'requiredDocuments', link: '/applicants/admission/documents' },
            { key: 'admissionRules', link: '/applicants/admission/rules' },
            { key: 'admissionSchedule', link: '/applicants/admission/schedule' }
          ]
        },
        {
          key: 'rulesAndPlan',
          link: '/applicants',
          subItems: [
            { key: 'ortAdmission', link: '/applicants/ort' },
            { key: 'careerGuidance', link: '/applicants/career-guidance' }
          ]
        },
        {
          key: 'transferProcedure',
          link: '/applicants/transfer',
          subItems: [
            { key: 'transferDocuments', link: '/applicants/transfer/documents' },
            { key: 'transferRules', link: '/applicants/transfer/rules' },
            { key: 'transferSchedule', link: '/applicants/transfer/schedule' }
          ]
        },
        { key: 'scholarships', link: '/applicants/scholarships' },
        { key: 'officialDealers', link: '/applicants/dealers' },
        { key: 'adaptationProgram', link: '/applicants/adaptation' },
        { key: 'infrastructure', link: '/applicants/infrastructure' }
      ]
    }
  };

  const renderFullscreenDropdown = (menuKey, items) => (
    <div
      className={`fixed top-20 left-0 right-0 bg-white/98 backdrop-blur-2xl shadow-2xl border-t border-blue-100 transition-all duration-500 overflow-hidden ${
        activeDropdown === menuKey 
          ? 'h-[calc(100vh-80px)] opacity-100 visible' 
          : 'h-0 opacity-0 invisible'
      }`}
      onMouseEnter={() => handleDropdownEnter(menuKey)}
      onMouseLeave={handleDropdownLeave}
    >
      <div className="container mx-auto px-6 py-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 h-full overflow-y-auto">
          {items.map((item, index) => (
            <div 
              key={item.key} 
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`p-6 rounded-2xl transition-all duration-500 ${
                item.subItems 
                  ? 'bg-blue-50 border-2 border-blue-100 hover:border-blue-300' 
                  : 'bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg'
              } ${activeDropdown === menuKey ? 'animate-fadeInUp' : ''}`}>
                
                {/* Main Item */}
                <Link
                  to={item.link}
                  className={`block mb-3 transition-all duration-300 group-hover:translate-x-2 ${
                    item.subItems ? 'text-blue-900' : 'text-gray-900'
                  }`}
                  onClick={() => setActiveDropdown(null)}
                >
                  <h3 className={`text-xl font-bold mb-2 ${
                    item.subItems ? 'text-blue-800' : 'text-gray-800'
                  }`}>
                    {t(`${menuKey}SUB.${item.key}`)}
                  </h3>
                 
                </Link>

                {/* Sub Items */}
                {item.subItems && (
                  <div className="space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subItem.key}
                        to={subItem.link}
                        className="flex items-center py-2 px-3 text-gray-700 hover:text-blue-700 hover:bg-white rounded-xl transition-all duration-300 group/sub"
                        onClick={() => setActiveDropdown(null)}
                        style={{ animationDelay: `${(index * 50) + (subIndex * 20)}ms` }}
                      >
                        <div className={`w-2 h-2 bg-blue-400 rounded-full mr-3 transition-all duration-300 group-hover/sub:scale-150 ${
                          activeDropdown === menuKey ? 'animate-pulse' : ''
                        }`} />
                        <span className="text-sm font-medium">
                          {t(`${menuKey}SUB.${subItem.key}`)}
                        </span>
                        <svg 
                          className="w-4 h-4 ml-auto opacity-0 group-hover/sub:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover/sub:translate-x-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`mt-8 pt-8 border-t border-gray-200 transition-all duration-700 ${
          activeDropdown === menuKey ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={`/${menuKey}`}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              onClick={() => setActiveDropdown(null)}
            >
              {t('navbar.viewAll', 'View All')}
            </Link>
            <button
              onClick={() => setActiveDropdown(null)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              {t('navbar.close', 'Close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileMenu = () => (
    <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-blue-100 transition-all duration-500 ${
      isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
    }`}>
      <div className="container mx-auto px-6 py-6">
        {Object.entries(menuData).map(([menuKey, { items }]) => (
          <div key={menuKey} className="mb-4">
            <button
              onClick={() => setActiveDropdown(activeDropdown === menuKey ? null : menuKey)}
              className="flex items-center justify-between w-full py-4 text-lg font-semibold text-blue-900 hover:text-blue-700 transition-colors duration-200 bg-blue-50 rounded-xl px-4"
            >
              <span>{t(`navbar.${menuKey}`)}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeDropdown === menuKey ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ${
              activeDropdown === menuKey ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="pl-4 space-y-3 py-3">
                {items.map((item) => (
                  <div key={item.key} className="bg-white rounded-lg p-3 border border-gray-100">
                    <Link
                      to={item.link}
                      className="block py-2 text-gray-800 hover:text-blue-700 transition-colors duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(`${menuKey}SU.${item.key}`)}
                    </Link>
                    {item.subItems && activeDropdown === menuKey && (
                      <div className="pl-3 space-y-2 mt-2 border-l-2 border-blue-200">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.key}
                            to={subItem.link}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-700 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            • {t(`${menuKey}SUB.${subItem.key}`)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-6 border-t border-gray-200">
          <LanguageSwitcher variant="solid" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-100' 
          : 'bg-gradient-to-r from-blue-900 to-blue-800'
      }`}>
        <div className="">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                <div
                  className="h-14 px-3 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                >
                  <img
                    src={isScrolled ? Logo1 : Logo2}
                    alt="Logo"
                    className="h-10 w-auto object-contain transition-opacity duration-300"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {Object.entries(menuData).map(([menuKey, { items }]) => (
                <div
                  key={menuKey}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(menuKey)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                      isScrolled
                        ? 'text-blue-900 hover:text-blue-700'
                        : 'text-white hover:text-blue-100'
                    } ${activeDropdown === menuKey ? (isScrolled ? 'text-blue-700' : 'text-white') : ''}`}
                  >
                    <span className="relative z-10">{t(`navbarSUB.${menuKey}`)}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl transition-all duration-300 ${
                      activeDropdown === menuKey 
                        ? 'opacity-20 scale-100' 
                        : 'opacity-0 scale-95 group-hover:opacity-10 group-hover:scale-100'
                    }`} />
                  </button>
                  {renderFullscreenDropdown(menuKey, items)}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:block">
                <LanguageSwitcher variant={isScrolled ? "outline" : "default"} />
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                  isScrolled
                    ? 'text-blue-900 hover:bg-blue-50'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-blue-900' : 'bg-white'
                  } ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                  <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-blue-900' : 'bg-white'
                  } ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100 top-3'}`} />
                  <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${
                    isScrolled ? 'bg-blue-900' : 'bg-white'
                  } ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {renderMobileMenu()}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Overlay for fullscreen dropdown */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 top-20"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;