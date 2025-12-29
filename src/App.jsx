
import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar1'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import FounderMessage from './pages/FounderMessage'
import MaterialBaseGallery from './pages/MaterialBaseGallery'
import Footer from './pages/Footer'
import ApplicantBase from './pages/applicant/ApplicantBase'


// Lazy imports for university

const NewsHome = lazy(() => import('./pages/university/HomeNewsSection'))
const NewsPage = lazy(() => import('./pages/university/NewsPage'))
const NewsDetail = lazy(() => import('./pages/university/NewsDetail'))
const Appeal = lazy(() => import('./pages/university/Appeal'))
const History = lazy(() => import('./pages/university/History'))
const Mission = lazy(() => import('./pages/university/Mission'))
const Videos = lazy(() => import('./pages/university/Videos'))
const Vacancies = lazy(() => import('./pages/university/Vacancies'))
const UniversityContacts = lazy(() => import('./pages/university/Contacts'))
const Structure = lazy(() => import('./pages/university/Structure'))
const Management = lazy(() => import('./pages/university/Management'))
const Departments = lazy(() => import('./pages/university/Departments'))
const Accreditation = lazy(() => import('./pages/university/Accreditation'))
const FoundingDocs = lazy(() => import('./pages/university/FoundingDocs'))
const NormativeDocs = lazy(() => import('./pages/university/NormativeDocs'))
const Cooperation = lazy(() => import('./pages/university/Cooperation'))
const Brandbook = lazy(() => import('./pages/university/Brandbook'))



// University Councils lazy imports
const AcadCouncil = lazy(() => import('./pages/university/сouncils/AcadCouncil'))
const AdmisCommittee = lazy(() => import('./pages/university/сouncils/AdmisCommittee'))
const BioethicsCommittee = lazy(() => import('./pages/university/сouncils/BioethicsCommittee'))
const CommissionSupport = lazy(() => import('./pages/university/сouncils/CommissionSupport'))
const CouncilScients = lazy(() => import('./pages/university/сouncils/CouncilScients'))
const DevCouncil = lazy(() => import('./pages/university/сouncils/DevCouncil'))
const EditBoard = lazy(() => import('./pages/university/сouncils/EditBoard'))
const EduCouncil = lazy(() => import('./pages/university/сouncils/EduCouncil'))
const EmployersCouncil = lazy(() => import('./pages/university/сouncils/EmployersCouncil'))
const ParentsCouncil = lazy(() => import('./pages/university/сouncils/ParentsCouncil'))
const Sciencouncil = lazy(() => import('./pages/university/сouncils/ScienCouncil'))
const UniversityStudentCouncil = lazy(() => import('./pages/university/сouncils/UniversityStudentCouncil'))
const TechnicalCouncil = lazy(() => import('./pages/university/сouncils/TechnicalCouncil'))

// Structure sub
const UniversityMain = lazy(() => import('./pages/university/structure/UniversityMain'))
const InternationalFaculty = lazy(() => import('./pages/university/structure/InternationalFaculty'))
const ITCollege = lazy(() => import('./pages/university/structure/ITCollege'))
const BusinessSchool = lazy(() => import('./pages/university/structure/BusinessSchool'))

// Management sub
const Founder = lazy(() => import('./pages/university/management/Founder'))
const President = lazy(() => import('./pages/university/management/President'))
const Rectorate = lazy(() => import('./pages/university/management/Rectorate'))
const PublicCouncils = lazy(() => import('./pages/university/management/PublicCouncils'))

// Departments sub
const FinancialDept = lazy(() => import('./pages/university/departments/FinancialDept'))
const EducationalDept = lazy(() => import('./pages/university/departments/EducationalDept'))
const ManagementDept = lazy(() => import('./pages/university/departments/ManagementDept'))
const HRDept = lazy(() => import('./pages/university/departments/HRDept'))
const QualityDept = lazy(() => import('./pages/university/departments/QualityDept'))
const ScienceDept = lazy(() => import('./pages/university/departments/ScienceDept'))
const InternationalDept = lazy(() => import('./pages/university/departments/InternationalDept'))
const StudentDept = lazy(() => import('./pages/university/departments/StudentDept'))
const CareerCenter = lazy(() => import('./pages/university/departments/CareerCenter'))

// Accreditation sub
const NationalAcc = lazy(() => import('./pages/university/accreditation/National'))
const InstitutionalAcc = lazy(() => import('./pages/university/accreditation/Institutional'))
const ProgramAcc = lazy(() => import('./pages/university/accreditation/Program'))

// FoundingDocs sub
const Charter = lazy(() => import('./pages/university/foundingDocs/Charter'))
const Licenses = lazy(() => import('./pages/university/foundingDocs/Licenses'))
const Acts = lazy(() => import('./pages/university/foundingDocs/Acts'))
const StrategicDocs = lazy(() => import('./pages/university/foundingDocs/StrategicDocs'))

// StrategicDocs sub
const StrategicVision = lazy(() => import('./pages/university/StrategicDocs/StrategicVision'))
const HRPolicy = lazy(() => import('./pages/university/StrategicDocs/HR-Policy'))
const StrategicDevelopPlans = lazy(() => import('./pages/university/StrategicDocs/StrategicDevelopPlans'))
const AccountingPolicy = lazy(() => import('./pages/university/StrategicDocs/AccountingPolicy'))

// NormativeDocs sub
const KRActs = lazy(() => import('./pages/university/normativeDocs/KRActs'))
const InternalActs = lazy(() => import('./pages/university/normativeDocs/InternalActs'))

// Cooperation sub
const UniversitiesCoop = lazy(() => import('./pages/university/cooperation/Universities'))
const ClinicsCoop = lazy(() => import('./pages/university/cooperation/Clinics'))

// Education lazy imports
const AboutAIT = lazy(() => import('./pages/education/ait/About'))
const LeadershipAIT = lazy(() => import('./pages/education/ait/Leadership'))
const DisciplinesAIT = lazy(() => import('./pages/education/ait/Disciplines'))
const TeachersAIT = lazy(() => import('./pages/education/ait/Teachers'))
const ContactsAIT = lazy(() => import('./pages/education/ait/Contacts'))
const AIT = lazy(() => import('./pages/education/AIT'))
const MFM = lazy(() => import('./pages/education/MFM'))
const ITCollegeEdu = lazy(() => import('./pages/education/ITCollege'))
const BusinessSchoolEdu = lazy(() => import('./pages/education/BusinessSchool'))
const Postgrad = lazy(() => import('./pages/education/Postgrad'))
const Center = lazy(() => import('./pages/education/Center'))

// Clinical lazy imports
const Lazmed = lazy(() => import('./pages/clinical/Lazmed'))
const Ophthalmic = lazy(() => import('./pages/clinical/DordoiOphthalmic'))
const DocClinic = lazy(() => import('./pages/clinical/DocClinic'))
const DocHospital = lazy(() => import('./pages/clinical/DocHospital'))
const Agreements = lazy(() => import('./pages/clinical/Agreements'))

// Science lazy imports
const ScientificCouncil = lazy(() => import('./pages/science/management/ScientificCouncil'))
const ScientificTechnicalCouncil = lazy(() => import('./pages/science/management/ScientificTechnicalCouncil'))
const Bioethics = lazy(() => import('./pages/science/management/Bioethics'))
const YoungScientists = lazy(() => import('./pages/science/management/YoungScientists'))
const ScienceDepartmentMng = lazy(() => import('./pages/science/management/Department'))
const ScienceDepartment = lazy(() => import('./pages/science/Department'))
const Professors = lazy(() => import('./pages/science/Professors'))
const Publications = lazy(() => import('./pages/science/Publications'))
const ScientificJournal = lazy(() => import('./pages/science/ScientificJournal'))
const Periodicals = lazy(() => import('./pages/science/Periodicals'))
const ScienceEvents = lazy(() => import('./pages/science/Events'))
const Library = lazy(() => import('./pages/science/Library'))
const StudentScience = lazy(() => import('./pages/science/StudentScience'))
const StudentSociety = lazy(() => import('./pages/science/StudentSociety'))
const Labs = lazy(() => import('./pages/science/Labs'))
const Anatomy = lazy(() => import('./pages/science/labs/Anatomy'))
const Biochemistry = lazy(() => import('./pages/science/labs/Biochemistry'))
const Chemistry = lazy(() => import('./pages/science/labs/Chemistry'))
const Biology = lazy(() => import('./pages/science/labs/Biology'))
const Interactive = lazy(() => import('./pages/science/labs/Interactive'))
const Computer = lazy(() => import('./pages/science/labs/Computer'))
const Study = lazy(() => import('./pages/science/labs/Study'))
const Projects = lazy(() => import('./pages/science/Projects'))
const ManagementScience = lazy(() => import('./pages/science/Management'))
const Conferences = lazy(() => import('./pages/science/Conferences'))
const ConferenceDetail = lazy(() => import('./pages/science/ConferenceDetail'))
const MasterClasses = lazy(() => import('./pages/science/events/MasterClasses'))
const RoundTables = lazy(() => import('./pages/science/events/RoundTables'))
const Clubs = lazy(() => import('./pages/science/student/Clubs'))
const StudentConferences = lazy(() => import('./pages/science/student/StudentConferences'))
const CurrentProjects = lazy(() => import('./pages/science/projects/CurrentProjects'))
const Grants = lazy(() => import('./pages/science/projects/Grants'))
const International = lazy(() => import('./pages/science/projects/International'))
const Urology = lazy(() => import('./pages/science/projects/Urology'))
const Gynecology = lazy(() => import('./pages/science/projects/Gynecology'))
const Ophthalmology = lazy(() => import('./pages/science/projects/Ophthalmology'))
const Oncology = lazy(() => import('./pages/science/projects/Oncology'))
const SeanPark = lazy(() => import('./pages/science/professors/SeanPark'))
const Pendharkar = lazy(() => import('./pages/science/professors/Pendharkar'))
const Potapova = lazy(() => import('./pages/science/professors/Potapova'))
const Osmonov = lazy(() => import('./pages/science/professors/Osmonov'))
const Erkebaev = lazy(() => import('./pages/science/professors/Erkebaev'))
const Madaminov = lazy(() => import('./pages/science/professors/Madaminov'))
const Bilgaziev = lazy(() => import('./pages/science/professors/Bilgaziev'))
const Kubatov = lazy(() => import('./pages/science/professors/Kubatov'))
const Shaltakova = lazy(() => import('./pages/science/professors/Shaltakova'))
const Kachibek = lazy(() => import('./pages/science/professors/Kachibek'))

// Student lazy imports
const StudentMain = lazy(() => import('./pages/student/StudentMain'))
const StudentCouncil = lazy(() => import('./pages/student/community/council'))
const StudentScienceCommunity = lazy(() => import('./pages/student/community/science'))
const StudentCommunities = lazy(() => import('./pages/student/communities/StudentCommunities'))
const DebateClub = lazy(() => import('./pages/student/communities/DebateClub'))
const Tutoring = lazy(() => import('./pages/student/communities/Tutoring'))
const CreativeGroups = lazy(() => import('./pages/student/communities/CreativeGroups'))

const Instructions = lazy(() => import('./pages/student/resources/Instructions'))
const InfoSystem = lazy(() => import('./pages/student/resources/InfoSystem'))
const ELibrary = lazy(() => import('./pages/student/resources/ELibrary'))
const EducationalResources = lazy(() => import('./pages/student/resources/EducationalResources'))
const Schedules = lazy(() => import('./pages/student/schedules/Schedules'))
const StudySchedule = lazy(() => import('./pages/student/schedules/StudySchedule'))
const ModuleSchedule = lazy(() => import('./pages/student/schedules/ModuleSchedule'))
const PracticeSchedule = lazy(() => import('./pages/student/schedules/PracticeSchedule'))
const MFMSchedule = lazy(() => import('./pages/student/schedules/MFMSchedule'))
const CollegeSchedule = lazy(() => import('./pages/student/schedules/CollegeSchedule'))
const Conditions = lazy(() => import('./pages/student/conditions/Conditions'))
const MedicalCenter = lazy(() => import('./pages/student/opportunities/MedicalCenter'))
const Dormitory = lazy(() => import('./pages/student/opportunities/Dormitory'))
const SocialSupport = lazy(() => import('./pages/student/opportunities/SocialSupport'))
const ElectiveCourses = lazy(() => import('./pages/student/opportunities/ElectiveCourses'))
const Mobility = lazy(() => import('./pages/student/opportunities/Mobility'))
const PsychologicalSupport = lazy(() => import('./pages/student/opportunities/PsychologicalSupport'))
const StudentService = lazy(() => import('./pages/student/opportunities/StudentService'))
const AdaptationPrograms = lazy(() => import('./pages/student/opportunities/AdaptationPrograms'))

// Applicant lazy imports
const Commission = lazy(() => import('./pages/applicant/Commission'))
const Dealers = lazy(() => import('./pages/applicant/Dealers'))
const Rules = lazy(() => import('./pages/applicant/Rules'))
const Directions = lazy(() => import('./pages/applicant/Directions'))
const Entrance = lazy(() => import('./pages/applicant/Entrance'))
const Cost = lazy(() => import('./pages/applicant/Cost'))
const Orientation = lazy(() => import('./pages/applicant/Orientation'))
const Documents = lazy(() => import('./pages/applicant/Documents'))
const AdmissionReg = lazy(() => import('./pages/applicant/AdmissionReg'))
const ScheduleApp = lazy(() => import('./pages/applicant/Schedule'))
const TransferBase = lazy(() => import('./pages/applicant/TransferBase'))
const TransferSchedule = lazy(() => import('./pages/applicant/TransferSchedule'))
const Scholarships = lazy(() => import('./pages/applicant/Scholarships'))
const CareerGuidance = lazy(() => import('./pages/applicant/CareerGuidance'))
const AdmissionProcedure = lazy(() => import('./pages/applicant/AdmissionProcedure'))
const AdmissionCom = lazy(() => import('./pages/applicant/AdmissionCom'))
const KnowledgeKarakol = lazy(() => import('./pages/applicant/KnowledgeKarakol'))
const KnowledgeOsh = lazy(() => import('./pages/applicant/KnowledgeOsh'))
const Cooperation1 = lazy(() => import('./pages/applicant/Cooperation'))
const Meeting = lazy(() => import('./pages/applicant/Meeting'))
const TeachersDay = lazy(() => import('./pages/applicant/events/TeachersDay'))
const StateLanguageDay = lazy(() => import('./pages/applicant/events/StateLanguageDay'))
const KoreanCenter = lazy(() => import('./pages/applicant/events/KoreanCenter'))
const MedicalMission = lazy(() => import('./pages/applicant/events/MedicalMission'))
const Graduation = lazy(() => import('./pages/applicant/events/Graduation2025'))
const DiplomaAward = lazy(() => import('./pages/applicant/events/DiplomaAward'))
const EurasianCongress = lazy(() => import('./pages/applicant/news/EurasianCongress'))
const ITSecurityMeeting = lazy(() => import('./pages/applicant/news/ITSecurityMeeting'))
const PaiChaiVisit = lazy(() => import('./pages/applicant/news/PaiChaiVisit'))
const Transfer = lazy(() => import('./pages/applicant/Transfer'))
const India = lazy(() => import('./pages/applicant/countries/India'))
const Pakistan = lazy(() => import('./pages/applicant/countries/Pakistan'))
const Uzbekistan = lazy(() => import('./pages/applicant/countries/Uzbekistan'))
const Infrastructure = lazy(() => import('./pages/applicant/Infrastructure'))
const Software = lazy(() => import('./pages/applicant/extrapages/Software'))
const MobileDev = lazy(() => import('./pages/applicant/extrapages/MobileDev'))
const MultimediaDev = lazy(() => import('./pages/applicant/extrapages/MultimediaDev'))
const Dicipline = lazy(() => import('./pages/applicant/extrapages/Dicipline'))
const GenerealMedFive = lazy(() => import('./pages/applicant/extrapages/GeneralMedFive'))
const GeneralMedSix = lazy(() => import('./pages/applicant/extrapages/GeneralMedSix'))
const AdmissionSchedule = lazy(() => import('./pages/applicant/Schedule'))
const RequiredDoc = lazy(() => import('./pages/applicant/extrapages/RequiredDoc'))
const OnlineReg = lazy(() => import('./pages/applicant/extrapages/OnlineReg'))

// QualityMaganagementSystem lazy imports
const QualityMonitoring = lazy(() => import('./pages/university/qualitysystem/QualityMonitoring'))
const QualityPolity = lazy(() => import('./pages/university/qualitysystem/QualityPolity'))

// Infrastructure lazy imports
const Locations = lazy(() => import('./pages/infrastructure/Locations'))
const Partners = lazy(() => import('./pages/infrastructure/Partners'))

// Education MFM lazy imports
const Aboutmfm = lazy(() => import('./pages/education/mfm/About'))
const Dean = lazy(() => import('./pages/education/mfm/Dekanat/Dean'))
const Curriculum = lazy(() => import('./pages/education/mfm/Dekanat/Curriculum'))
const DepartmentsMFM = lazy(() => import('./pages/education/mfm/Dekanat/Departments'))
const FiveYears = lazy(() => import('./pages/education/mfm/Programs/FiveYears'))
const SixYears = lazy(() => import('./pages/education/mfm/Programs/SixYears'))

// Education Bisiness School lazy imports
const AboutBusinessSchool = lazy(() => import('./pages/education/businessSchool/About'))
const FutureLeaders = lazy(() => import('./pages/education/businessSchool/Programs/FutureLeaders'))
const OlderLeaders = lazy(() => import('./pages/education/businessSchool/Programs/OlderLeaders'))
const Smartik = lazy(() => import('./pages/education/businessSchool/Programs/smartik'))
const YoungLeaders = lazy(() => import('./pages/education/businessSchool/Programs/YoungLeaders'))
const Director = lazy(() => import('./pages/education/businessSchool/Director'))
const Managers = lazy(() => import('./pages/education/businessSchool/Managers'))
const Trainers = lazy(() => import('./pages/education/businessSchool/Trainers'))

// Education IT College lazy imports
const GeneralDepartaments = lazy(() => import('./pages/education/itCollege/Departments/General'))
const DepartamentsInformation = lazy(() => import('./pages/education/itCollege/Departments/Information'))
const DiplomComSients = lazy(() => import('./pages/education/itCollege/Specialties/DiplomComScience'))
const DiplomMobComputing = lazy(() => import('./pages/education/itCollege/Specialties/DiplomMobComputing'))
const DiplomMultiApplications = lazy(() => import('./pages/education/itCollege/Specialties/DiplomMultiApplications'))
const DirectoritCollage = lazy(() => import('./pages/education/itCollege/Director'))
const DoubleDiploma = lazy(() => import('./pages/education/itCollege/DoubleDiploma'))
const PedagogicalCouncil = lazy(() => import('./pages/education/itCollege/PedagogicalCouncil'))



// Education Postgrad lazy imports 
const Internship = lazy(() => import('./pages/education/postgrad/Internship'))
const Phd = lazy(() => import('./pages/education/postgrad/PhD'))
const Postgraduate = lazy(() => import('./pages/education/postgrad/Postgraduate'))
const Residency = lazy(() => import('./pages/education/postgrad/Residency'))

// Education Center lazy imports
const AboutCenterEducation = lazy(() => import('./pages/education/center/About'))




















const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div>Загрузка...</div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/press/news' element={<NewsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/founderMessege' element={<FounderMessage />} />
            <Route path='/MaterialBaseGallery' element={<MaterialBaseGallery />} />
            <Route path='/news/NewsHome' element={<NewsHome />} />
            <Route path="/press/news/:id" element={<NewsDetail />} />
            <Route path="/university/appeal" element={<Appeal />} />
            <Route path="/university/history" element={<History />} />
            <Route path="/university/mission" element={<Mission />} />
            <Route path="/university/videos" element={<Videos />} />
            <Route path="/university/vacancies" element={<Vacancies />} />
            <Route path="/university/contacts" element={<UniversityContacts />} />
            <Route path="/university/structure" element={<Structure />} />
            <Route path="/university/structure/university-main" element={<UniversityMain />} />
            <Route path="/university/structure/international-faculty" element={<InternationalFaculty />} />
            <Route path="/university/structure/it-college" element={<ITCollege />} />
            <Route path="/university/structure/business-school" element={<BusinessSchool />} />
            <Route path="/university/management" element={<Management />} />
            <Route path="/university/management/founder" element={<Founder />} />
            <Route path="/university/management/president" element={<President />} />
            <Route path="/university/management/rectorate" element={<Rectorate />} />
            <Route path="/university/management/public-councils" element={<PublicCouncils />} />
            <Route path="/university/departments" element={<Departments />} />
            <Route path="/university/departments/financial" element={<FinancialDept />} />
            <Route path="/university/departments/educational" element={<EducationalDept />} />
            <Route path="/university/departments/management" element={<ManagementDept />} />
            <Route path="/university/departments/hr" element={<HRDept />} />
            <Route path="/university/departments/quality" element={<QualityDept />} />
            <Route path="/university/departments/science" element={<ScienceDept />} />
            <Route path="/university/departments/international" element={<InternationalDept />} />
            <Route path="/university/departments/student" element={<StudentDept />} />
            <Route path="/university/departments/career" element={<CareerCenter />} />
            <Route path="/university/accreditation" element={<Accreditation />} />
            <Route path="/university/accreditation/national" element={<NationalAcc />} />
            <Route path="/university/accreditation/institutional" element={<InstitutionalAcc />} />
            <Route path="/university/accreditation/program" element={<ProgramAcc />} />
            <Route path="/university/founding-docs" element={<FoundingDocs />} />
            <Route path="/university/founding-docs/charter" element={<Charter />} />
            <Route path="/university/founding-docs/licenses" element={<Licenses />} />
            <Route path="/university/founding-docs/acts" element={<Acts />} />
            <Route path="/university/founding-docs/strategic" element={<StrategicDocs />} />
            <Route path="/university/normative-docs" element={<NormativeDocs />} />
            <Route path="/university/normative-docs/kr-acts" element={<KRActs />} />
            <Route path="/university/normative-docs/internal-acts" element={<InternalActs />} />
            <Route path="/university/cooperation" element={<Cooperation />} />
            <Route path="/university/cooperation/universities" element={<UniversitiesCoop />} />
            <Route path="/university/cooperation/clinics" element={<ClinicsCoop />} />
            <Route path="/university/brandbook" element={<Brandbook />} />
            <Route path="/university/strategic-docs/strategic-vision" element={<StrategicVision />} />
            <Route path="/university/strategic-docs/hr-policy" element={<HRPolicy />} />
            <Route path="/university/strategic-docs/strategic-develop-plans" element={<StrategicDevelopPlans />} />
            <Route path="/university/strategic-docs/accounting-policy" element={<AccountingPolicy />} />
            <Route path="/university/councils/academic-council" element={<AcadCouncil />} />
            <Route path="/university/councils/admissions-committee" element={<AdmisCommittee />} />
            <Route path="/university/councils/bioethics-committee" element={<BioethicsCommittee />} />
            <Route path="/university/councils/commission-support" element={<CommissionSupport />} />
            <Route path="/university/councils/council-scients" element={<CouncilScients />} />
            <Route path="/university/councils/development-council" element={<DevCouncil />} />
            <Route path="/university/councils/editorial-board" element={<EditBoard />} />
            <Route path="/university/councils/educational-council" element={<EduCouncil />} />
            <Route path="/university/councils/employers-council" element={<EmployersCouncil />} />
            <Route path="/university/councils/scientific-council" element={<Sciencouncil />} />
            <Route path="/university/councils/student-councils" element={<UniversityStudentCouncil />} />
            <Route path="/university/councils/technical-council" element={<TechnicalCouncil />} />
            <Route path="/university/councils/parents-council" element={<ParentsCouncil />} />
            <Route path="/university/quality-management-system/quality-monitoring" element={<QualityMonitoring />} />
            <Route path="/university/quality-management-system/quality-policy" element={<QualityPolity />} />



            {/* Lazy Education */}
            <Route path="/education/ait" element={<AIT />} />
            <Route path="/education/ait/about" element={<AboutAIT />} />
            <Route path="/education/ait/leadership" element={<LeadershipAIT />} />
            <Route path="/education/ait/disciplines" element={<DisciplinesAIT />} />
            <Route path="/education/ait/teachers" element={<TeachersAIT />} />
            <Route path="/education/ait/contacts" element={<ContactsAIT />} />
            <Route path="/education/mfm" element={<MFM />} />
            <Route path="/education/it-college" element={<ITCollegeEdu />} />
            <Route path="/education/business-school" element={<BusinessSchoolEdu />} />
            <Route path="/education/postgrad" element={<Postgrad />} />
            <Route path="/education/center" element={<Center />} />
            <Route path="/education/mfm/about" element={<Aboutmfm />} />
            <Route path="/education/mfm/dekanat/dean" element={<Dean />} />
            <Route path="/education/mfm/dekanat/curriculum" element={<Curriculum />} />
            <Route path="/education/mfm/dekanat/departments" element={<DepartmentsMFM />} />
            <Route path="/education/mfm/programs/five-years" element={<FiveYears />} />
            <Route path="/education/mfm/programs/six-years" element={<SixYears />} />
            <Route path="/education/business-school/about" element={<AboutBusinessSchool />} />
            <Route path="/education/business-school/programs/future-leaders" element={<FutureLeaders />} />
            <Route path="/education/business-school/programs/older-leaders" element={<OlderLeaders />} />
            <Route path="/education/business-school/programs/smartik" element={<Smartik />} />
            <Route path="/education/business-school/programs/young-leaders" element={<YoungLeaders />} />
            <Route path="/education/business-school/director" element={<Director />} />
            <Route path="/education/business-school/managers" element={<Managers />} />
            <Route path="/education/business-school/trainers" element={<Trainers />} />
            <Route path="/education/it-college/departments/general" element={<GeneralDepartaments />} />
            <Route path="/education/it-college/departments/information" element={<DepartamentsInformation />} />
            <Route path="/education/it-college/specialties/diplom-computational-sciences" element={<DiplomComSients />} />
            <Route path="/education/it-college/specialties/diplom-mobile-computing" element={<DiplomMobComputing />} />
            <Route path="/education/it-college/specialties/diplom-multimedia-applications" element={<DiplomMultiApplications />} />
            <Route path="/education/it-college/director" element={<DirectoritCollage />} />
            <Route path="/education/it-college/double-diploma" element={<DoubleDiploma />} />
            <Route path="/education/it-college/pedagogical-council" element={<PedagogicalCouncil />} />

            <Route path="/education/postgrad/internship" element={<Internship />} />
            <Route path="/education/postgrad/phd" element={<Phd />} />
            <Route path="/education/postgrad/postgraduate" element={<Postgraduate />} />
            <Route path="/education/postgrad/residency" element={<Residency />} />
            <Route path="/education/center/about" element={<AboutCenterEducation />} />




            <Route path="/clinical/lazmed" element={<Lazmed />} />
            <Route path="/clinical/doc-clinic" element={<DocClinic />} />
            <Route path="/clinical/dordoi-ophthalmic" element={<Ophthalmic />} />
            <Route path="/clinical/doc-hospital" element={<DocHospital />} />
            <Route path="/clinical/agreements" element={<Agreements />} />


            {/* Lazy Science */}
            <Route path="/science/management" element={<ManagementScience />} />
            <Route path="/science/management/scientific-council" element={<ScientificCouncil />} />
            <Route path="/science/management/scientific-technical-council" element={<ScientificTechnicalCouncil />} />
            <Route path="/science/management/bioethics" element={<Bioethics />} />
            <Route path="/science/management/young-scientists" element={<YoungScientists />} />
            <Route path="/science/management/department" element={<ScienceDepartmentMng />} />
            <Route path="/science/department" element={<ScienceDepartment />} />
            <Route path="/science/events/conferences" element={<Conferences />} />
            <Route path="/science/events/conferences/:id" element={<ConferenceDetail />} />
            <Route path="/science/professors" element={<Professors />} />
            <Route path="/science/professors/sean-park" element={<SeanPark />} />
            <Route path="/science/professors/pendharkar" element={<Pendharkar />} />
            <Route path="/science/professors/potapova" element={<Potapova />} />
            <Route path="/science/professors/osmonov" element={<Osmonov />} />
            <Route path="/science/professors/erkebaev" element={<Erkebaev />} />
            <Route path="/science/professors/madaminov" element={<Madaminov />} />
            <Route path="/science/professors/bilgaziev" element={<Bilgaziev />} />
            <Route path="/science/professors/kubatov" element={<Kubatov />} />
            <Route path="/science/professors/shaltakova" element={<Shaltakova />} />
            <Route path="/science/professors/kachibek" element={<Kachibek />} />
            <Route path="/science/publications" element={<Publications />} />
            <Route path="/science/publications/journal" element={<ScientificJournal />} />
            <Route path="/science/publications/periodicals" element={<Periodicals />} />
            <Route path="/science/events" element={<ScienceEvents />} />
            <Route path="/science/library" element={<Library />} />
            <Route path="/science/student-science" element={<StudentScience />} />
            <Route path="/science/student-society" element={<StudentSociety />} />
            <Route path="/science/student-science/clubs" element={<Clubs />} />
            <Route path="/science/student-science/conferences" element={<StudentConferences />} />
            <Route path="/science/events/master-classes" element={<MasterClasses />} />
            <Route path="/science/events/round-tables" element={<RoundTables />} />
            <Route path="/science/projects/current" element={<CurrentProjects />} />
            <Route path="/science/projects/grants" element={<Grants />} />
            <Route path="/science/projects/international" element={<International />} />
            <Route path="/science/projects/urology" element={<Urology />} />
            <Route path="/science/projects/gynecology" element={<Gynecology />} />
            <Route path="/science/projects/ophthalmology" element={<Ophthalmology />} />
            <Route path="/science/projects/oncology" element={<Oncology />} />
            <Route path="/science/labs" element={<Labs />} />
            <Route path="/science/labs/anatomy" element={<Anatomy />} />
            <Route path="/science/labs/biochemistry" element={<Biochemistry />} />
            <Route path="/science/labs/chemistry" element={<Chemistry />} />
            <Route path="/science/labs/biology" element={<Biology />} />
            <Route path="/science/labs/interactive" element={<Interactive />} />
            <Route path="/science/labs/computer" element={<Computer />} />
            <Route path="/science/labs/study" element={<Study />} />
            <Route path="/science/projects" element={<Projects />} />
            <Route path="/student" element={<StudentMain />} />
            <Route path="/student/community/council" element={<StudentCouncil />} />
            <Route path="/student/community/science" element={<StudentScienceCommunity />} />
            <Route path="/student/community/debate" element={<DebateClub />} />
            <Route path="/student/community/tutor" element={<Tutoring />} />
            <Route path="/student/community/clubs" element={<CreativeGroups />} />
            <Route path="/student/communities" element={<StudentCommunities />} />
            <Route path="/student/resources/instructions" element={<Instructions />} />
            <Route path="/student/resources/infosystem" element={<InfoSystem />} />
            <Route path="/student/resources/elib" element={<ELibrary />} />
            <Route path="/student/resources/edu-resources" element={<EducationalResources />} />
            <Route path="/student/schedules" element={<Schedules />} />
            <Route path="/student/schedule/study" element={<StudySchedule />} />
            <Route path="/student/schedule/modules" element={<ModuleSchedule />} />
            <Route path="/student/schedule/practice" element={<PracticeSchedule />} />
            <Route path="/student/schedule/mfm" element={<MFMSchedule />} />
            <Route path="/student/schedule/college" element={<CollegeSchedule />} />
            <Route path="/student/conditions" element={<Conditions />} />
            <Route path="/student/opportunities/medical" element={<MedicalCenter />} />
            <Route path="/student/opportunities/dorm" element={<Dormitory />} />
            <Route path="/student/opportunities/social" element={<SocialSupport />} />
            <Route path="/student/opportunities/courses" element={<ElectiveCourses />} />
            <Route path="/student/opportunities/mobility" element={<Mobility />} />
            <Route path="/student/opportunities/psychology" element={<PsychologicalSupport />} />
            <Route path="/student/opportunities/service-center" element={<StudentService />} />
            <Route path="/student/opportunities/adaptation" element={<AdaptationPrograms />} />
            <Route path="/applicants" element={<ApplicantBase />} />
            <Route path="/applicants/commission" element={<Commission />} />
            <Route path="/applicant/rules" element={<AdmissionCom />} />
            <Route path="/applicant/directions" element={<Directions />} />


            <Route path="/applicant/entrance" element={<Entrance />} />
            <Route path="/applicants/cost" element={<Cost />} />
            <Route path="/applicant/orientation" element={<Orientation />} />
            <Route path="/applicant/documents" element={<RequiredDoc />} />
            <Route path="/applicant/admission-reg" element={<AdmissionReg />} />
            <Route path="/applicant/schedule" element={<ScheduleApp />} />

            <Route path="/applicant/scholarships" element={<Scholarships />} />
            <Route path="/applicants/scholarships" element={<Scholarships />} />
            <Route path="/applicants/adaptation" element={<Orientation />} />
            <Route path="/applicants/admission-rules" element={<Rules />} />
            <Route path="/applicants/ort" element={<Entrance />} />
            <Route path="/applicants/career-guidance" element={<CareerGuidance />} />
            <Route path="/applicants/career-guidance/knowledge-karakol" element={<KnowledgeKarakol />} />
            <Route path="/applicants/career-guidance/knowledge-osh" element={<KnowledgeOsh />} />
            <Route path="/applicants/career-guidance/cooperation" element={<Cooperation1 />} />
            <Route path="/applicants/career-guidance/meeting" element={<Meeting />} />
            <Route path="/applicants/orientation/teachers-day" element={<TeachersDay />} />
            <Route path="/applicants/orientation/state-language-day" element={<StateLanguageDay />} />
            <Route path="/applicants/orientation/korean-center" element={<KoreanCenter />} />
            <Route path="/applicants/orientation/medical-mission" element={<MedicalMission />} />
            <Route path="/applicants/orientation/graduation-2025" element={<Graduation />} />
            <Route path="/applicants/orientation/diploma-award" element={<DiplomaAward />} />
            <Route path="/applicants/career-guidance/news/eurasian-congress" element={<EurasianCongress />} />
            <Route path="/applicants/career-guidance/news/it-security-meeting" element={<ITSecurityMeeting />} />
            <Route path="/applicants/career-guidance/news/pai-chai-visit" element={<PaiChaiVisit />} />
            <Route path="/applicants/admission-procedure" element={<AdmissionProcedure />} />
            <Route path="/applicants/admission-regulations" element={<AdmissionCom />} />
            <Route path="/applicants/admission-schedule" element={<ScheduleApp />} />
            <Route path="/applicants/career-guidance/events" element={<CareerGuidance />} />
            <Route path="/applicants/career-guidance/news" element={<CareerGuidance />} />
            <Route path="/applicants/transfer/documents" element={<Documents />} />
            <Route path="/applicants/transfer/rules" element={<Rules />} />
            <Route path="/applicants/transfer/schedule" element={<TransferSchedule />} />
            <Route path="/applicants/directions" element={<Directions />} />
            <Route path="/applicants/dealers" element={<Dealers />} />
            <Route path="/applicants/dealers/india" element={<India />} />
            <Route path="/applicants/dealers/pakistan" element={<Pakistan />} />
            <Route path="/applicants/dealers/uzbekistan" element={<Uzbekistan />} />
            <Route path="/applicants/infrastructure" element={<Infrastructure />} />
            <Route path="/applicants/software-development" element={<Software />} />
            <Route path="/applicants/mobile-development" element={<MobileDev />} />
            <Route path="/applicants/multimedia-development" element={<MultimediaDev />} />
            <Route path="/applicants/discipline" element={<Dicipline />} />
            <Route path="/applicants/general-medicine-5" element={<GenerealMedFive />} />
            <Route path="/applicants/general-medicine-6" element={<GeneralMedSix />} />
            <Route path="/applicants/admission/schedule" element={<AdmissionSchedule />} />
            <Route path="/applicants/required-documents" element={<RequiredDoc />} />
            <Route path="/applicants/online-registration" element={<OnlineReg />} />
            <Route path="/applicants/multimedia-development" element={<MultimediaDev />} />


            <Route path="/infrastructure/locations" element={<Locations />} />
            <Route path="/infrastructure/partners" element={<Partners />} />
            <Route path="/infrastructure/*" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  )
}

export default App