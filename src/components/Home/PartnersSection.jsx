import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { getPartners } from '../../api';

const PartnersSection = ({ badge, title, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await getPartners();
        const list = Array.isArray(response?.results)
          ? response.results
          : Array.isArray(response)
            ? response
            : [];
        setPartners(list.filter((partner) => partner?.logo));
      } catch (error) {
        console.error('Error fetching partners:', error);
        setPartners([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading || partners.length === 0) {
    return null;
  }

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

        <div className="relative w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-8"
            style={{
              animation: 'scrollHorizontal 30s linear infinite',
              width: `calc(280px * ${partners.length * 2})`,
            }}
          >
            {[...partners, ...partners].map((company, index) => (
              <div
                key={`${company.id || company.name}-${index}`}
                className="group flex h-40 min-w-[240px] items-center justify-center rounded-2xl border border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:border-slate-200 hover:bg-slate-50 hover:shadow-xl"
              >
                <img
                  src={company.logo}
                  alt={company.name || ''}
                  className="max-h-[120px] max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
