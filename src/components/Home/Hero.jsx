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
        }, 4000)
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
    <div
      className={`relative h-[90vh] w-screen overflow-hidden bg-black transition-all duration-1000 ease-out ${
        isSplashVisible ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-full w-full">
        <div
          className="absolute inset-0 h-full w-full transition-opacity duration-500"
          style={{ opacity: isTransitioning ? 0.7 : 1 }}
        >
          <img
            src={photos[currentSlide]}
            alt={`Banner ${currentSlide + 1}`}
            className="h-full w-full object-cover transition-transform duration-1000"
            style={{ transform: isTransitioning ? 'scale(1.05)' : 'scale(1)' }}
          />
        </div>
      </div>

      {photos.length > 1 ? (
        <>
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/50"
            aria-label="Previous banner"
          >
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/50"
            aria-label="Next banner"
          >
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {photos.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-16 bg-white' : 'w-10 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}

      <div className="absolute bottom-6 right-6 z-20 rounded-full bg-black/50 px-3 py-1 backdrop-blur-sm">
        <span className="text-sm font-medium text-white">
          {currentSlide + 1} / {photos.length}
        </span>
      </div>
    </div>
  );
};

export default SimplePhotoSlider;
