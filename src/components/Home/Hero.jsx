import React, { useEffect, useState } from 'react';
import { getBanners } from '../../api';

const SimplePhotoSlider = ({ isSplashVisible = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  const photos = banners.map((banner) => banner.image).filter(Boolean);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await getBanners();
        setBanners(Array.isArray(data?.results) ? data.results : Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch banners:', error);
        setBanners([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    if (currentSlide >= photos.length && photos.length > 0) {
      setCurrentSlide(0);
    }
  }, [currentSlide, photos.length]);

  const nextSlide = () => {
    if (isTransitioning || photos.length < 2) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isTransitioning || photos.length < 2) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (photos.length === 0) return undefined;

    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    const autoSlide = photos.length > 1
      ? setInterval(() => {
          if (!isPaused) {
            setIsTransitioning(true);
            setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
          }
        }, 4500)
      : null;

    return () => {
      clearTimeout(transitionTimer);
      if (autoSlide) clearInterval(autoSlide);
    };
  }, [currentSlide, isPaused, photos.length]);

  if (loading || photos.length === 0) {
    return null;
  }

  return (
    <section className="w-full overflow-hidden">
      <div
        className={`relative h-[clamp(360px,56vw,760px)] w-full overflow-hidden bg-slate-950 transition-all duration-1000 ease-out ${
          isSplashVisible ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative h-full w-full">
          <div
            className="absolute inset-0 h-full w-full transition-opacity duration-500"
            style={{ opacity: isTransitioning ? 0.72 : 1 }}
          >
            <img
              src={photos[currentSlide]}
              alt={`Banner ${currentSlide + 1}`}
              className="h-full w-full object-cover object-center transition-transform duration-1000"
              style={{ transform: isTransitioning ? 'scale(1.025)' : 'scale(1)' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
          </div>
        </div>

        {photos.length > 1 ? (
          <>
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/50 sm:left-6 sm:h-12 sm:w-12"
              aria-label="Previous banner"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/50 sm:right-6 sm:h-12 sm:w-12"
              aria-label="Next banner"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-5 left-1/2 z-20 flex max-w-[70%] -translate-x-1/2 flex-wrap justify-center gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-md sm:bottom-6">
              {photos.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-9 bg-white' : 'w-2 bg-white/55 hover:bg-white/80'
                  }`}
                  aria-label={`Go to banner ${index + 1}`}
                  aria-current={index === currentSlide ? 'true' : undefined}
                />
              ))}
            </div>
          </>
        ) : null}

        <div className="absolute bottom-5 right-4 z-20 rounded-full bg-black/40 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md sm:bottom-6 sm:right-6">
          {currentSlide + 1} / {photos.length}
        </div>
      </div>
    </section>
  );
};

export default SimplePhotoSlider;
