import React from 'react';
import Hero from '../components/Home/Hero';
import { useTranslation } from 'react-i18next';
import News from './university/News'
import NewsDetail from './university/NewsDetail';

const Home = () => {
  return (
    <div>
      <Hero />
      <News />
      <NewsDetail />
    </div>
  );
};

export default Home;