import Hero from '../components/Home/Hero';
import FounderMessage from './FounderMessage';
import MaterialBaseGallery from './MaterialBaseGallery';
import HomeNews from './university/HomeNewsSection';
import PartnersSection from '../components/Home/PartnersSection';
import VideoSection from '../components/Home/VideoSection';

const Home = () => {
  return (
    <div className='bg-white'> 
      <Hero />
      <FounderMessage/>
      <HomeNews />
      <PartnersSection />
      <VideoSection />
      <MaterialBaseGallery />
    </div>
  );
};

export default Home;
