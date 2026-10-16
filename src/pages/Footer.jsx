import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import {
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa';
import { getFooter } from '../api';

const SOCIAL_ICONS = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
};

const isExternalUrl = (url = '') => /^https?:\/\//i.test(url);

const FooterLink = ({ item, dotClass = 'bg-blue-400' }) => {
  const external = isExternalUrl(item.url);

  return (
    <a
      href={item.url}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-center py-2 text-sm text-blue-100 transition-all duration-300 hover:text-white"
    >
      <span className={`mr-3 h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${dotClass}`} />
      <span className="transition-transform duration-300 group-hover:translate-x-1">{item.title}</span>
    </a>
  );
};

const Footer = () => {
  const { i18n } = useTranslation();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['site-footer', i18n.language],
    queryFn: () => getFooter(i18n.language),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  if (isLoading) {
    return (
      <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-4 py-10 text-white">
        <div className="mx-auto max-w-7xl animate-pulse space-y-4">
          <div className="h-6 w-56 rounded bg-white/20" />
          <div className="h-4 w-full max-w-xl rounded bg-white/10" />
          <div className="h-4 w-80 rounded bg-white/10" />
        </div>
      </footer>
    );
  }

  if (isError || !data) {
    return null;
  }

  const links = Array.isArray(data.links) ? data.links : [];
  const quickLinks = links.filter((item) => item.section === 'quick');
  const academicLinks = links.filter((item) => item.section === 'academic');
  const socialLinks = links.filter((item) => item.section === 'social');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <section className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-white">{data.brand}</h3>
            {data.description ? (
              <p className="mb-6 text-sm leading-relaxed text-blue-100">{data.description}</p>
            ) : null}

            <div className="space-y-3 text-sm text-blue-100">
              {data.address ? (
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 h-4 w-4 flex-shrink-0 text-blue-300" />
                  <span>{data.address}</span>
                </div>
              ) : null}

              {data.phone ? (
                <div className="flex items-center gap-3">
                  <FaPhone className="h-4 w-4 flex-shrink-0 text-blue-300" />
                  <a className="hover:text-white" href={`tel:${data.phone.replace(/[^+\d]/g, '')}`}>
                    {data.phone}
                  </a>
                </div>
              ) : null}

              {data.email ? (
                <div className="flex items-center gap-3">
                  <FaEnvelope className="h-4 w-4 flex-shrink-0 text-blue-300" />
                  <a className="break-all hover:text-white" href={`mailto:${data.email}`}>
                    {data.email}
                  </a>
                </div>
              ) : null}

              {data.website ? (
                <div className="flex items-center gap-3">
                  <FaGlobe className="h-4 w-4 flex-shrink-0 text-blue-300" />
                  <a
                    className="break-all hover:text-white"
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.website}
                  </a>
                </div>
              ) : null}
            </div>
          </section>

          <section className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <h4 className="mb-4 border-b border-blue-400/30 pb-3 text-lg font-semibold text-white">
              {data.quick_links_title}
            </h4>
            <div className="space-y-1">
              {quickLinks.map((item) => (
                <FooterLink key={item.id} item={item} />
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <h4 className="mb-4 border-b border-blue-400/30 pb-3 text-lg font-semibold text-white">
              {data.academic_title}
            </h4>
            <div className="space-y-1">
              {academicLinks.map((item) => (
                <FooterLink key={item.id} item={item} dotClass="bg-green-400" />
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <h4 className="mb-6 border-b border-blue-400/30 pb-3 text-lg font-semibold text-white">
              {data.social_title}
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = SOCIAL_ICONS[item.icon] || FaGlobe;
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.title}
                    title={item.title}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/20 text-white transition duration-300 hover:-translate-y-1 hover:bg-white/30"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      <div className="relative z-10 border-t border-blue-700/50 bg-blue-950/30 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-blue-200 sm:px-6 md:flex-row md:text-left sm:text-sm">
          <p>© {currentYear} {data.brand}</p>
          {data.copyright ? <p>{data.copyright}</p> : null}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
