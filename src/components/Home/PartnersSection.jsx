import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getPartners } from '../../api';

const DEFAULT_PARTNERS = [
  { id: 'local-lincoln', name: 'Lincoln University College', logo: '/partners/lincoln.webp' },
  { id: 'local-inti', name: 'INTI International University', logo: '/partners/inti.png' },
  { id: 'local-spbpu', name: 'Санкт-Петербургский политехнический университет Петра Великого', logo: '/partners/spbpu.jpg' },
  { id: 'local-paichai', name: 'Pai Chai University', logo: '/partners/paichai.png' },
  { id: 'local-chungang', name: 'Chung-Ang University', logo: '/partners/chungang.png' },
  { id: 'local-jeonju', name: 'Vision College of Jeonju', logo: '/partners/vision-jeonju.png' },
  { id: 'local-kyungdong', name: 'Kyungdong University', logo: '/partners/kyungdong.png' },
  { id: 'local-kicb', name: 'KICB', logo: '/partners/kicb.png' },
  { id: 'local-bai-tushum', name: 'Банк Бай-Тушум', logo: '/partners/bai-tushum.jpeg' },
  { id: 'local-rkdf', name: 'Российско-Кыргызский фонд развития', logo: '/partners/rkdf.png' },
];

const normalizePartnerName = (name = '') => String(name)
  .toLowerCase()
  .replace(/[–—-]/g, ' ')
  .replace(/[^a-zа-яё0-9]+/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const resolveLocalPartnerLogo = (name = '') => {
  const value = normalizePartnerName(name);

  if (value.includes('lincoln')) return '/partners/lincoln.webp';
  if (value.includes('inti')) return '/partners/inti.png';
  if (value.includes('peter the great') || value.includes('петра велик') || value.includes('spbpu')) return '/partners/spbpu.jpg';
  if (value.includes('pai chai') || value.includes('paichai')) return '/partners/paichai.png';
  if (value.includes('chung ang') || value.includes('chungang')) return '/partners/chungang.png';
  if (value.includes('vision college') || value.includes('jeonju')) return '/partners/vision-jeonju.png';
  if (value.includes('kyungdong')) return '/partners/kyungdong.png';
  if (value.includes('kicb')) return '/partners/kicb.png';
  if (value.includes('бай тушум') || value.includes('bai tushum')) return '/partners/bai-tushum.jpeg';
  if (value.includes('российско кыргыз') || value.includes('rkdf')) return '/partners/rkdf.png';

  return '';
};

const COPY = {
  ru: {
    badge: 'Партнеры',
    title: 'Наши партнеры',
    subtitle: 'Мы сотрудничаем с ведущими организациями в Кыргызстане и за рубежом.',
  },
  en: {
    badge: 'Partners',
    title: 'Our partners',
    subtitle: 'We cooperate with leading organizations in Kyrgyzstan and abroad.',
  },
  kg: {
    badge: 'Өнөктөштөр',
    title: 'Биздин өнөктөштөр',
    subtitle: 'Кыргызстандагы жана чет өлкөлөрдөгү алдыңкы уюмдар менен кызматташабыз.',
  },
};

const languageKey = (language = 'ru') => {
  const base = String(language).toLowerCase().split('-')[0];
  if (base === 'ky') return 'kg';
  return COPY[base] ? base : 'ru';
};

const PartnersSection = ({ badge, title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.15 });
  const { i18n } = useTranslation();
  const [apiPartners, setApiPartners] = useState([]);
  const [failedLogos, setFailedLogos] = useState({});

  useEffect(() => {
    let cancelled = false;

    const fetchPartners = async () => {
      try {
        const response = await getPartners(i18n.language);
        const list = Array.isArray(response?.results)
          ? response.results
          : Array.isArray(response)
            ? response
            : [];

        if (!cancelled) {
          setApiPartners(list.filter((partner) => partner?.id || partner?.name));
          setFailedLogos({});
        }
      } catch (error) {
        console.error('Error fetching partners:', error);
        if (!cancelled) setApiPartners([]);
      }
    };

    fetchPartners();
    return () => {
      cancelled = true;
    };
  }, [i18n.language]);

  const partners = useMemo(() => {
    const merged = new Map();

    DEFAULT_PARTNERS.forEach((partner) => {
      merged.set(normalizePartnerName(partner.name), partner);
    });

    apiPartners.forEach((partner) => {
      const key = normalizePartnerName(partner.name || `partner-${partner.id}`);
      const existing = merged.get(key);
      const fallbackLogo = resolveLocalPartnerLogo(partner.name);

      merged.set(key, {
        ...(existing || {}),
        ...partner,
        id: partner.id || existing?.id || key,
        name: partner.name || existing?.name || '',
        logo: partner.logo || fallbackLogo || existing?.logo || '',
      });
    });

    return Array.from(merged.values()).filter((partner) => (
      partner.logo || resolveLocalPartnerLogo(partner.name)
    ));
  }, [apiPartners]);

  const copy = COPY[languageKey(i18n.language)];
  const sectionBadge = badge || copy.badge;
  const sectionTitle = title || copy.title;
  const sectionSubtitle = subtitle || copy.subtitle;
  const loopPartners = partners.length > 1 ? [...partners, ...partners] : partners;

  return (
    <section ref={ref} className="relative overflow-hidden py-20">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 px-4 text-center"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
            <span className="text-sm font-semibold text-blue-700">{sectionBadge}</span>
          </div>
          <h2 className="mb-5 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">{sectionTitle}</h2>
          <div className="mx-auto mb-7 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">{sectionSubtitle}</p>
        </motion.div>

        <div className="relative w-full overflow-hidden px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex gap-6"
            style={partners.length > 1 ? {
              animation: 'scrollHorizontal 32s linear infinite',
              width: `calc(276px * ${loopPartners.length})`,
            } : undefined}
          >
            {loopPartners.map((company, index) => {
              const localLogo = resolveLocalPartnerLogo(company.name);
              const failed = Boolean(failedLogos[company.id]);
              const logoSrc = failed ? localLogo : (company.logo || localLogo);

              if (!logoSrc) return null;

              return (
                <div
                  key={`${company.id}-${index}`}
                  className="group flex h-40 min-w-[250px] items-center justify-center rounded-3xl border border-slate-200 bg-white px-7 py-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <img
                    src={logoSrc}
                    alt={company.name || 'Partner logo'}
                    loading="eager"
                    decoding="async"
                    onError={() => {
                      if (!failed && localLogo && logoSrc !== localLogo) {
                        setFailedLogos((prev) => ({ ...prev, [company.id]: true }));
                      }
                    }}
                    className="max-h-[118px] max-w-[205px] object-contain object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  />
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
