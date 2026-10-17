import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar1';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import HomeCmsPage from './components/Home/HomeCmsPage';
import CmsCatchAllRoute from './components/cms/CmsCatchAllRoute';
import ManagedPageRoute from './components/cms/ManagedPageRoute';
import Footer from './pages/Footer';
import NotFound from './pages/NotFound';

const NewsHome = lazy(() => import('./pages/university/HomeNewsSection'));
const NewsPage = lazy(() => import('./pages/university/NewsPage'));
const NewsDetail = lazy(() => import('./pages/university/NewsDetail'));

const DynamicCmsPageRoute = ({ basePath }) => {
  const { id } = useParams();
  return <ManagedPageRoute path={`${basePath}/${id}`} />;
};

const App = () => {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('splashAnimationShown');
    }
    return true;
  });

  const [isContentHidden, setIsContentHidden] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('splashAnimationShown');
    }
    return true;
  });

  const handleSplashExitStart = () => {
    setIsContentHidden(false);
  };

  const handleSplashFinish = () => {
    setShowSplash(false);
    setIsContentHidden(false);
  };

  const cmsOnlyPage = (path) => <ManagedPageRoute path={path} />;

  return (
    <Router>
      {showSplash && (
        <SplashScreen
          onFinish={handleSplashFinish}
          onAnimationStartExit={handleSplashExitStart}
        />
      )}
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100">
        <Navbar isSplashVisible={isContentHidden} />
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Загрузка...</div>}>
          <Routes>
            <Route path="/" element={<HomeCmsPage isSplashVisible={isContentHidden} />} />
            <Route path="/404" element={<NotFound />} />

            <Route path="/press/news" element={<NewsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/NewsHome" element={<NewsHome />} />
            <Route path="/press/news/:id" element={<NewsDetail />} />

            <Route path="/about" element={cmsOnlyPage('/about')} />
            <Route path="/services" element={cmsOnlyPage('/services')} />
            <Route path="/contact" element={cmsOnlyPage('/contact')} />
            <Route path="/contacts" element={cmsOnlyPage('/contacts')} />
            <Route path="/vacancies" element={cmsOnlyPage('/vacancies')} />
            <Route path="/founderMessege" element={cmsOnlyPage('/founderMessege')} />
            <Route path="/MaterialBaseGallery" element={cmsOnlyPage('/MaterialBaseGallery')} />

            <Route path="/university/mission" element={cmsOnlyPage('/university/mission')} />
            <Route path="/university/structure" element={cmsOnlyPage('/university/structure')} />
            <Route path="/university/structure/university-main" element={cmsOnlyPage('/university/structure/university-main')} />
            <Route path="/university/structure/international-faculty" element={cmsOnlyPage('/university/structure/international-faculty')} />
            <Route path="/university/structure/it-college" element={cmsOnlyPage('/university/structure/it-college')} />
            <Route path="/university/management" element={cmsOnlyPage('/university/management')} />
            <Route path="/university/management/founder" element={cmsOnlyPage('/university/management/founder')} />
            <Route path="/university/management/rectorate" element={cmsOnlyPage('/university/management/rectorate')} />
            <Route path="/university/management/public-councils" element={cmsOnlyPage('/university/management/public-councils')} />
            <Route path="/university/normative-docs" element={cmsOnlyPage('/university/normative-docs')} />
            <Route path="/university/normative-docs/kr-acts" element={cmsOnlyPage('/university/normative-docs/kr-acts')} />
            <Route path="/university/normative-docs/internal-acts" element={cmsOnlyPage('/university/normative-docs/internal-acts')} />
            <Route path="/university/normative-docs/licenses" element={cmsOnlyPage('/university/normative-docs/licenses')} />
            <Route path="/university/normative-docs/logo" element={cmsOnlyPage('/university/normative-docs/logo')} />

            <Route path="/university/councils/academic-council" element={cmsOnlyPage('/university/councils/academic-council')} />
            <Route path="/university/councils/admissions-committee" element={cmsOnlyPage('/university/councils/admissions-committee')} />
            <Route path="/university/councils/bioethics-committee" element={cmsOnlyPage('/university/councils/bioethics-committee')} />
            <Route path="/university/councils/commission-support" element={cmsOnlyPage('/university/councils/commission-support')} />
            <Route path="/university/councils/council-scients" element={cmsOnlyPage('/university/councils/council-scients')} />
            <Route path="/university/councils/development-council" element={cmsOnlyPage('/university/councils/development-council')} />
            <Route path="/university/councils/editorial-board" element={cmsOnlyPage('/university/councils/editorial-board')} />
            <Route path="/university/councils/educational-council" element={cmsOnlyPage('/university/councils/educational-council')} />
            <Route path="/university/councils/employers-council" element={cmsOnlyPage('/university/councils/employers-council')} />
            <Route path="/university/councils/scientific-council" element={cmsOnlyPage('/university/councils/scientific-council')} />
            <Route path="/university/councils/student-councils" element={cmsOnlyPage('/university/councils/student-councils')} />
            <Route path="/university/councils/technical-council" element={cmsOnlyPage('/university/councils/technical-council')} />
            <Route path="/university/councils/parents-council" element={cmsOnlyPage('/university/councils/parents-council')} />
            <Route path="/university/quality-management-system/quality-monitoring" element={cmsOnlyPage('/university/quality-management-system/quality-monitoring')} />
            <Route path="/university/quality-management-system/quality-policy" element={cmsOnlyPage('/university/quality-management-system/quality-policy')} />

            <Route path="/education/ait" element={cmsOnlyPage('/education/ait')} />
            <Route path="/education/ait/about" element={cmsOnlyPage('/education/ait/about')} />
            <Route path="/education/ait/leadership" element={cmsOnlyPage('/education/ait/leadership')} />
            <Route path="/education/ait/disciplines" element={cmsOnlyPage('/education/ait/disciplines')} />
            <Route path="/education/ait/teachers" element={cmsOnlyPage('/education/ait/teachers')} />
            <Route path="/education/ait/contacts" element={cmsOnlyPage('/education/ait/contacts')} />
            <Route path="/education/mfm" element={cmsOnlyPage('/education/mfm')} />
            <Route path="/education/mfm/about" element={cmsOnlyPage('/education/mfm/about')} />
            <Route path="/education/mfm/dekanat/dean" element={cmsOnlyPage('/education/mfm/dekanat/dean')} />
            <Route path="/education/mfm/dekanat/curriculum" element={cmsOnlyPage('/education/mfm/dekanat/curriculum')} />
            <Route path="/education/mfm/dekanat/departments" element={cmsOnlyPage('/education/mfm/dekanat/departments')} />
            <Route path="/education/mfm/programs/five-years" element={cmsOnlyPage('/education/mfm/programs/five-years')} />
            <Route path="/education/mfm/programs/six-years" element={cmsOnlyPage('/education/mfm/programs/six-years')} />
            <Route path="/education/it-college" element={cmsOnlyPage('/education/it-college')} />
            <Route path="/education/it-college/departments/general" element={cmsOnlyPage('/education/it-college/departments/general')} />
            <Route path="/education/it-college/departments/information" element={cmsOnlyPage('/education/it-college/departments/information')} />
            <Route path="/education/it-college/specialties/diplom-computational-sciences" element={cmsOnlyPage('/education/it-college/specialties/diplom-computational-sciences')} />
            <Route path="/education/it-college/specialties/diplom-mobile-computing" element={cmsOnlyPage('/education/it-college/specialties/diplom-mobile-computing')} />
            <Route path="/education/it-college/specialties/diplom-multimedia-applications" element={cmsOnlyPage('/education/it-college/specialties/diplom-multimedia-applications')} />
            <Route path="/education/it-college/director" element={cmsOnlyPage('/education/it-college/director')} />
            <Route path="/education/it-college/double-diploma" element={cmsOnlyPage('/education/it-college/double-diploma')} />
            <Route path="/education/it-college/pedagogical-council" element={cmsOnlyPage('/education/it-college/pedagogical-council')} />
            <Route path="/education/postgrad" element={cmsOnlyPage('/education/postgrad')} />
            <Route path="/education/postgrad/internship" element={cmsOnlyPage('/education/postgrad/internship')} />
            <Route path="/education/postgrad/phd" element={cmsOnlyPage('/education/postgrad/phd')} />
            <Route path="/education/postgrad/postgraduate" element={cmsOnlyPage('/education/postgrad/postgraduate')} />
            <Route path="/education/postgrad/residency" element={cmsOnlyPage('/education/postgrad/residency')} />
            <Route path="/education/center" element={cmsOnlyPage('/education/center')} />
            <Route path="/education/center/about" element={cmsOnlyPage('/education/center/about')} />

            <Route path="/clinical/doc-clinic" element={cmsOnlyPage('/clinical/doc-clinic')} />
            <Route path="/clinical/doc-hospital" element={cmsOnlyPage('/clinical/doc-hospital')} />
            <Route path="/clinical/simulation-center" element={cmsOnlyPage('/clinical/simulation-center')} />
            <Route path="/clinical/startups" element={cmsOnlyPage('/clinical/startups')} />

            <Route path="/science/management" element={cmsOnlyPage('/science/management')} />
            <Route path="/science/management/scientific-council" element={cmsOnlyPage('/science/management/scientific-council')} />
            <Route path="/science/management/scientific-technical-council" element={cmsOnlyPage('/science/management/scientific-technical-council')} />
            <Route path="/science/management/bioethics" element={cmsOnlyPage('/science/management/bioethics')} />
            <Route path="/science/management/young-scientists" element={cmsOnlyPage('/science/management/young-scientists')} />
            <Route path="/science/management/department" element={cmsOnlyPage('/science/management/department')} />
            <Route path="/science/department" element={cmsOnlyPage('/science/department')} />
            <Route path="/science/events" element={cmsOnlyPage('/science/events')} />
            <Route path="/science/events/conferences" element={cmsOnlyPage('/science/events/conferences')} />
            <Route path="/science/events/conferences/:id" element={<DynamicCmsPageRoute basePath="/science/events/conferences" />} />
            <Route path="/science/publications" element={cmsOnlyPage('/science/publications')} />
            <Route path="/science/publications/journal" element={cmsOnlyPage('/science/publications/journal')} />
            <Route path="/science/scholarships" element={cmsOnlyPage('/science/scholarships')} />
            <Route path="/science/labs" element={cmsOnlyPage('/science/labs')} />
            <Route path="/science/labs/anatomy" element={cmsOnlyPage('/science/labs/anatomy')} />
            <Route path="/science/labs/biochemistry" element={cmsOnlyPage('/science/labs/biochemistry')} />
            <Route path="/science/labs/biology" element={cmsOnlyPage('/science/labs/biology')} />
            <Route path="/science/labs/interactive" element={cmsOnlyPage('/science/labs/interactive')} />
            <Route path="/science/labs/computer" element={cmsOnlyPage('/science/labs/computer')} />
            <Route path="/science/labs/study" element={cmsOnlyPage('/science/labs/study')} />
            <Route path="/science/projects" element={cmsOnlyPage('/science/projects')} />

            <Route path="/cooperation/international-partners" element={cmsOnlyPage('/cooperation/international-partners')} />
            <Route path="/cooperation/local-partners" element={cmsOnlyPage('/cooperation/local-partners')} />
            <Route path="/infrastructure/locations" element={cmsOnlyPage('/infrastructure/locations')} />
            <Route path="/infrastructure/partners" element={cmsOnlyPage('/infrastructure/partners')} />

            <Route path="*" element={<CmsCatchAllRoute />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
