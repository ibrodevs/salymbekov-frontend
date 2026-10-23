import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageContent } from '../../hooks/usePageContent';
import Hero from './Hero';
import PartnersSection from './PartnersSection';
import VideoSection from './VideoSection';
import EmbeddedCmsBlock from './EmbeddedCmsBlock';
import HomeNews from '../../pages/university/HomeNewsSection';

const pickLocalized = (value, language) => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return value || '';
  }

  const baseLang = `${language || 'ru'}`.toLowerCase().split('-')[0];
  const normalized = baseLang === 'ky' ? 'kg' : baseLang;
  return value[normalized] || value.ru || value.en || value.kg || '';
};

const HomeCmsPage = ({ isSplashVisible = false }) => {
  const { i18n } = useTranslation();
  const { data, isLoading, isError } = usePageContent('/', i18n.language, {
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="rounded-2xl bg-white px-6 py-4 text-slate-600 shadow-lg ring-1 ring-slate-200/70">
          Loading content...
        </div>
      </div>
    );
  }

  if (isError || !data || data.data?.render_mode !== 'homepage') {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="rounded-3xl bg-white px-8 py-6 text-center text-slate-600 shadow-lg ring-1 ring-slate-200/70">
          Content is temporarily unavailable.
        </div>
      </div>
    );
  }

  const homeData = data.data || {};
  const partners = homeData.partners || {};
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
        {homeData.show_partners !== false ? (
          <PartnersSection
            badge={pickLocalized(partners.badge, i18n.language)}
            title={pickLocalized(partners.title, i18n.language)}
            subtitle={pickLocalized(partners.subtitle, i18n.language)}
          />
        ) : null}
        {homeData.show_video !== false ? (
          <VideoSection
            videoUrl={homeData.video_url}
            platformLabel={pickLocalized(video.platform_label, i18n.language)}
          />
        ) : null}
        {galleryPagePath ? <EmbeddedCmsBlock path={galleryPagePath} /> : null}
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default HomeCmsPage;
