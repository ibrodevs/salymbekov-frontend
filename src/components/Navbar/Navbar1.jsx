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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const dropdownTimeoutRef = useRef(null);

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
    setExpandedItems({});
  }, [location]);

  const handleDropdownEnter = (menu) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const toggleItemExpansion = (menuKey, itemKey) => {
    setExpandedItems(prev => {
      const key = `${menuKey}-${itemKey}`;
      const newState = { ...prev };
      
      if (newState[key]) {
        delete newState[key];
      } else {
        // Close all items in this menu first
        Object.keys(newState).forEach(k => {
          if (k.startsWith(menuKey + '-')) {
            delete newState[k];
          }
        });
        newState[key] = true;
      }
      
      return newState;
    });
  };

  const isItemExpanded = (menuKey, itemKey) => {
    return expandedItems[`${menuKey}-${itemKey}`];
  };

  // Menu data structure
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
          key: 'management',
          link: '/university/management',
          subItems: [
            { key: 'founder', link: '/university/management/founder' },
            { key: 'president', link: '/university/management/president' },
            { key: 'rectorate', link: '/university/management/rectorate' }
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
          key: 'foundingDocs',
          link: '/university/founding-docs',
          subItems: [
            { key: 'charter', link: '/university/founding-docs/charter' },
            { key: 'licenses', link: '/university/founding-docs/licenses' },
            { key: 'acts', link: '/university/founding-docs/acts' }
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
            { key: 'requiredDocuments', link: '/applicant/documents' },
            { key: 'admissionRules', link: '/applicant/rules' },
            { key: 'admissionSchedule', link: '/applicant/schedule' }
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
        { key: 'commission', link: '/applicants/commission' },
        { key: 'scholarships', link: '/applicants/scholarships' },
        { key: 'officialDealers', link: '/applicants/dealers' },
        { key: 'adaptationProgram', link: '/applicants/adaptation' },
        { key: 'infrastructure', link: '/applicants/infrastructure' }
      ]
    }
  };

  // Utility buttons in navbar
  const utilityButtons = [
    
  ];

  const renderFullscreenDropdown = (menuKey, items) => {
    const itemsWithSubItems = items.filter(item => item.subItems && item.subItems.length > 0);
    const itemsWithoutSubItems = items.filter(item => !item.subItems || item.subItems.length === 0);
    
    return (
      <div
        className={`fixed top-20 left-0 right-0 bg-white transition-all duration-300 border-b border-blue-200 ${
          activeDropdown === menuKey 
            ? 'opacity-100 visible max-h-[70vh] overflow-y-auto' 
            : 'opacity-0 invisible max-h-0 overflow-hidden'
        }`}
        onMouseEnter={() => handleDropdownEnter(menuKey)}
        onMouseLeave={handleDropdownLeave}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex gap-8">
            {/* Main content with accordion items */}
            {itemsWithSubItems.length > 0 && (
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {itemsWithSubItems.map((item) => (
                    <div key={item.key} className="group">
                      <div className="border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-200 overflow-hidden">
                        {/* Accordion Header */}
                        <button
                          onClick={() => toggleItemExpansion(menuKey, item.key)}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-blue-800">
                                {t(`${menuKey}SUB.${item.key}`)}
                              </h3>
                            </div>
                          </div>
                          <svg
                            className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                              isItemExpanded(menuKey, item.key) ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Accordion Content */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isItemExpanded(menuKey, item.key) 
                              ? 'max-h-96 opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-4 pb-4 pt-2 space-y-1.5 ml-11 border-t border-gray-100">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.key}
                                to={subItem.link}
                                className="flex items-center py-2 px-3 text-gray-600 hover:text-blue-700 hover:bg-blue-100 rounded transition-all duration-150 text-sm group/sub"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2.5 transition-transform duration-200 group-hover/sub:scale-125" />
                                <span className="text-sm">
                                  {t(`${menuKey}SUB.${subItem.key}`)}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick links sidebar */}
            {itemsWithoutSubItems.length > 0 && (
              <div className="w-64 flex-shrink-0">
                <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
                  <h3 className="text-base font-bold text-blue-900 mb-3">
                    {t('navbar.quickLinks', 'Quick Links')}
                  </h3>
                  <div className="space-y-1.5">
                    {itemsWithoutSubItems.map((item) => (
                      <Link
                        key={item.key}
                        to={item.link}
                        className="flex items-center py-2 px-3 text-gray-700 hover:text-blue-700 hover:bg-white rounded transition-all duration-150 group/link"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <svg className="w-4 h-4 text-blue-500 mr-2 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span className="text-sm font-medium">
                          {t(`${menuKey}SUB.${item.key}`)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderMobileMenu = () => (
    <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-blue-200 transition-all duration-300 overflow-hidden ${
      isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <div className="container mx-auto px-4 py-6">
        {Object.entries(menuData).map(([menuKey, { items }]) => (
          <div key={menuKey} className="mb-3">
            <button
              onClick={() => setActiveDropdown(activeDropdown === menuKey ? null : menuKey)}
              className="flex items-center justify-between w-full py-3 px-4 text-base font-semibold text-blue-900 hover:text-blue-700 transition-colors bg-blue-50 rounded-lg"
            >
              <span>{t(`navbar.${menuKey}`)}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 text-blue-600 ${
                  activeDropdown === menuKey ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              activeDropdown === menuKey ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}>
              <div className="space-y-2 py-2">
                {items.map((item) => (
                  <div key={item.key} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                    {item.subItems ? (
                      <>
                        {/* Mobile Accordion Header */}
                        <button
                          onClick={() => toggleItemExpansion(menuKey, item.key)}
                          className="w-full py-3 px-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                        >
                          <span className="font-medium text-gray-800">
                            {t(`${menuKey}SU.${item.key}`)}
                          </span>
                          <svg
                            className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                              isItemExpanded(menuKey, item.key) ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Mobile Accordion Content */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isItemExpanded(menuKey, item.key) 
                              ? 'max-h-96 opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-4 pb-3 space-y-2 border-t border-gray-100">
                            {/* Main item link */}
                            <Link
                              to={item.link}
                              className="flex items-center py-2 text-blue-700 hover:text-blue-800 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              <span className="text-sm font-medium">View main page</span>
                            </Link>
                            
                            {/* Sub items */}
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.key}
                                to={subItem.link}
                                className="flex items-center py-2 text-sm text-gray-600 hover:text-blue-700 transition-colors hover:bg-blue-50 rounded px-2 group/sub"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2.5 transition-transform duration-200 group-hover/sub:scale-125"></div>
                                {t(`${menuKey}SUB.${subItem.key}`)}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.link}
                        className="flex items-center justify-between py-3 px-4 text-gray-800 hover:text-blue-700 transition-colors font-medium hover:bg-blue-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{t(`${menuKey}SU.${item.key}`)}</span>
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {/* Mobile utility buttons */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-200">
          {utilityButtons.map((button) => (
            <Link
              key={button.key}
              to={button.link}
              className="flex flex-col items-center p-2 text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={button.icon} />
              </svg>
              <span className="text-xs">{button.label}</span>
            </Link>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <LanguageSwitcher variant="solid" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white border-b border-blue-200' 
          : 'bg-gradient-to-r from-blue-900 to-blue-800'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                <div className="h-14 px-3 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <img
                    src={isScrolled ? Logo1 : Logo2}
                    alt="Logo"
                    className="h-10 w-auto object-contain"
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
                    className={`px-5 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      isScrolled
                        ? 'text-blue-900 hover:text-blue-700 hover:bg-blue-50'
                        : 'text-white hover:text-blue-100 hover:bg-white/10'
                    } ${activeDropdown === menuKey ? (isScrolled ? 'text-blue-700 bg-blue-50' : 'text-white bg-white/20') : ''}`}
                  >
                    <span>{t(`navbarSUB.${menuKey}`)}</span>
                  </button>
                  {renderFullscreenDropdown(menuKey, items)}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2">
              {/* Desktop Utility Buttons */}
              <div className="hidden lg:flex items-center space-x-1">
                {utilityButtons.map((button) => (
                  <Link
                    key={button.key}
                    to={button.link}
                    className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 ${
                      isScrolled
                        ? 'text-blue-700 hover:text-blue-800 hover:bg-blue-100'
                        : 'text-white hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={button.icon} />
                    </svg>
                    <span className="text-sm font-medium">{button.label}</span>
                  </Link>
                ))}
              </div>
              
              {/* Language Switcher */}
              <div className="hidden lg:block ml-2">
                <LanguageSwitcher variant={isScrolled ? "outline" : "default"} />
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-3 rounded-lg transition-all duration-200 ${
                  isScrolled
                    ? 'text-blue-900 hover:bg-blue-100'
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

      {/* Backdrop overlay */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 bg-black/10 z-40 top-20"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      <style jsx>{`
        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 500px;
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            max-height: 500px;
            opacity: 1;
          }
          to {
            max-height: 0;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

// теперь весь белый фон в navbar1 сделай прозрачным, а также сделай так чтобы при скролле вниз navbar оставался синим, но с небольшим прозрачным фоном, а не белым


export default Navbar;