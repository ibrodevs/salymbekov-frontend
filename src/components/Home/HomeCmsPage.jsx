import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContent } from '../../hooks/usePageContent';
import { localizeCmsValue, normalizeCmsLanguage } from '../../lib/localizeCmsValue';
import Hero from './Hero';
import PartnersSection from './PartnersSection';
import VideoSection from './VideoSection';
import EmbeddedCmsBlock from './EmbeddedCmsBlock';
import HomeNews from '../../pages/university/HomeNewsSection';

const UI_COPY = {
  ru: {
    loading: 'Загрузка контента...',
    unavailable: 'Контент временно недоступен.',
  },
  en: {
    loading: 'Loading content...',
    unavailable: 'Content is temporarily unavailable.',
  },
  kg: {
    loading: 'Маалымат жүктөлүүдө...',
    unavailable: 'Маалымат убактылуу жеткиликсиз.',
  },
};

const HomeCmsPage = ({ isSplashVisible = false }) => {
  const { i18n } = useTranslation();
  const language = normalizeCmsLanguage(i18n.language);
  const copy = UI_COPY[language] || UI_COPY.ru;
  const { data, isLoading, isError } = usePageContent('/', language, {
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="rounded-2xl bg-white px-6 py-4 text-slate-600 shadow-lg ring-1 ring-slate-200/70">
          {copy.loading}
        </div>
      </div>
    );
  }

  const homeData = localizeCmsValue(data?.data || {}, language);

  if (isError || !data || homeData.render_mode !== 'homepage') {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="rounded-3xl bg-white px-8 py-6 text-center text-slate-600 shadow-lg ring-1 ring-slate-200/70">
          {copy.unavailable}
        </div>
      </div>
    );
  }

  const video = homeData.video || {};
  const galleryPagePath = homeData.gallery_page_path || '/MaterialBaseGallery';

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full">
          <svg className="h-full w-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="home-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#023E8A" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#home-grid)" />
          </svg>
        </div>
        <div className="absolute left-10 top-20 h-32 w-32 rotate-45 animate-spin border-2 border-[#023E8A] opacity-[0.05]" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 right-10 h-24 w-24 rotate-12 animate-pulse border-2 border-[#0077B6] opacity-[0.05]" />
      </div>

      <div className="relative z-10">
        {homeData.show_hero !== false ? <Hero isSplashVisible={isSplashVisible} /> : null}
        {homeData.show_news !== false ? <HomeNews /> : null}
        {homeData.show_partners !== false ? <PartnersSection /> : null}
        {homeData.show_video !== false ? (
          <VideoSection
            videoUrl={homeData.video_url}
            platformLabel={video.platform_label || ''}
          />
        ) : null}
        {galleryPagePath ? <EmbeddedCmsBlock path={galleryPagePath} /> : null}
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default HomeCmsPage;
