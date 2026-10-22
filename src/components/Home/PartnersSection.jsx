import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getPartners } from '../../api';

const resolveLocalPartnerLogo = (name = '') => {
  const value = String(name).toLowerCase();

  if (value.includes('lincoln')) return '/partners/lincoln.webp';
  if (value.includes('inti')) return '/partners/inti.png';
  if (value.includes('peter the great') || value.includes('петра велик') || value.includes('spbpu')) return '/partners/spbpu.jpg';
  if (value.includes('pai chai') || value.includes('paichai')) return '/partners/paichai.png';
  if (value.includes('chung-ang') || value.includes('chungang')) return '/partners/chungang.png';
  if (value.includes('vision college') || value.includes('jeonju')) return '/partners/vision-jeonju.png';
  if (value.includes('kyungdong')) return '/partners/kyungdong.png';
  if (value.includes('kicb')) return '/partners/kicb.png';
  if (value.includes('бай-тушум') || value.includes('bai-tushum') || value.includes('bai tushum')) return '/partners/bai-tushum.jpeg';
  if (value.includes('российско-кыргыз') || value.includes('rkdf')) return '/partners/rkdf.png';

  return '';
};

const PartnersSection = ({ badge, title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { i18n } = useTranslation();
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failedLogos, setFailedLogos] = useState({});

  useEffect(() => {
    let cancelled = false;

    const fetchPartners = async () => {
      setLoading(true);
      try {
        const response = await getPartners(i18n.language);
        const list = Array.isArray(response?.results)
          ? response.results
          : Array.isArray(response)
            ? response
            : [];

        if (!cancelled) {
          setPartners(list.filter((partner) => partner?.id));
          setFailedLogos({});
        }
      } catch (error) {
        console.error('Error fetching partners:', error);
        if (!cancelled) setPartners([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchPartners();
    return () => {
      cancelled = true;
    };
  }, [i18n.language]);

  if (loading || partners.length === 0) {
    return null;
  }

  const loopPartners = partners.length > 1 ? [...partners, ...partners] : partners;

  return (
    <section ref={ref} className="relative overflow-hidden py-20">
      <div>
        {(badge || title || subtitle) ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            {badge ? (
              <div className="mb-6 inline-flex items-center rounded-full border border-green-200 bg-green-50 px-4 py-2">
                <span className="text-sm font-semibold text-green-600">{badge}</span>
              </div>
            ) : null}
            {title ? (
              <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">{title}</h2>
            ) : null}
            {title ? <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-green-500 to-blue-400" /> : null}
            {subtitle ? (
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">{subtitle}</p>
            ) : null}
          </motion.div>
        ) : null}

        <div className="relative w-full overflow-hidden px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-8"
            style={partners.length > 1 ? {
              animation: 'scrollHorizontal 30s linear infinite',
              width: `calc(280px * ${loopPartners.length})`,
            } : undefined}
          >
            {loopPartners.map((company, index) => {
              const localLogo = resolveLocalPartnerLogo(company.name);
              const failed = Boolean(failedLogos[company.id]);
              const logoSrc = failed ? localLogo : (company.logo || localLogo);

              return (
                <div
                  key={`${company.id}-${index}`}
                  className="group flex h-44 min-w-[250px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  {logoSrc ? (
                    <img
                      src={logoSrc}
                      alt={company.name || ''}
                      loading="lazy"
                      onError={() => {
                        if (!failed) {
                          setFailedLogos((prev) => ({ ...prev, [company.id]: true }));
                        }
                      }}
                      className="max-h-[125px] max-w-[195px] object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="max-w-[190px] text-base font-semibold leading-snug text-slate-700">
                      {company.name || `Partner #${company.id}`}
                    </span>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
