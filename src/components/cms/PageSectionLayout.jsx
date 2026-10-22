import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const COPY = {
  ru: 'На этой странице',
  en: 'On this page',
  kg: 'Бул баракта',
};

const normalizeLanguage = (language = 'ru') => {
  const normalized = String(language).toLowerCase().split('-')[0];
  return COPY[normalized] ? normalized : 'ru';
};

const PageSectionLayout = ({ children }) => {
  const contentRef = useRef(null);
  const generatedIdsRef = useRef(new Set());
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState('');
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return undefined;

    let currentHeadings = [];
    let scanTimer = null;
    let animationFrame = null;

    const updateActiveHeading = () => {
      animationFrame = null;
      if (!currentHeadings.length) {
        setActiveId('');
        return;
      }

      const activationLine = Math.min(window.innerHeight * 0.32, 260);
      let activeHeading = currentHeadings[0];

      currentHeadings.forEach((heading) => {
        if (heading.getBoundingClientRect().top <= activationLine) {
          activeHeading = heading;
        }
      });

      setActiveId(activeHeading.id);
    };

    const requestActiveUpdate = () => {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(updateActiveHeading);
    };

    const scanHeadings = () => {
      currentHeadings = [...root.querySelectorAll('h2, h3, h4')].filter((heading) => {
        const label = heading.textContent?.replace(/\s+/g, ' ').trim();
        return Boolean(label) && !heading.closest('[data-skip-page-nav="true"]');
      });

      const usedIds = new Set();
      const navigationItems = currentHeadings.map((heading, index) => {
        let headingId = heading.id;

        if (!headingId || usedIds.has(headingId)) {
          headingId = `page-section-${index + 1}`;
          heading.id = headingId;
          generatedIdsRef.current.add(headingId);
        }

        usedIds.add(headingId);
        heading.style.scrollMarginTop = '7rem';

        return {
          id: headingId,
          label: heading.textContent.replace(/\s+/g, ' ').trim(),
          level: Number(heading.tagName.slice(1)) || 2,
        };
      });

      setItems(navigationItems.length >= 2 ? navigationItems : []);
      requestActiveUpdate();
    };

    scanHeadings();

    const mutationObserver = new MutationObserver(() => {
      window.clearTimeout(scanTimer);
      scanTimer = window.setTimeout(scanHeadings, 80);
    });

    mutationObserver.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    window.addEventListener('scroll', requestActiveUpdate, { passive: true });
    window.addEventListener('resize', requestActiveUpdate, { passive: true });

    return () => {
      mutationObserver.disconnect();
      window.clearTimeout(scanTimer);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', requestActiveUpdate);
      window.removeEventListener('resize', requestActiveUpdate);

      generatedIdsRef.current.forEach((id) => {
        const heading = document.getElementById(id);
        if (heading && root.contains(heading)) heading.removeAttribute('id');
      });
      generatedIdsRef.current.clear();
    };
  }, [pathname, i18n.language]);

  const handleNavigation = (event, id) => {
    event.preventDefault();
    const heading = document.getElementById(id);
    if (!heading || !contentRef.current?.contains(heading)) return;

    heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveId(id);

    const nextUrl = `${window.location.pathname}${window.location.search}#${encodeURIComponent(id)}`;
    window.history.replaceState(window.history.state, '', nextUrl);
  };

  const hasNavigation = items.length >= 2;
  const language = normalizeLanguage(i18n.language);

  return (
    <div
      className={
        hasNavigation
          ? 'lg:grid lg:grid-cols-[230px_minmax(0,1fr)] lg:items-start xl:grid-cols-[260px_minmax(0,1fr)]'
          : ''
      }
    >
      {hasNavigation ? (
        <aside
          className="sticky top-24 z-30 hidden max-h-[calc(100vh-7rem)] self-start overflow-y-auto border-r border-slate-200/80 bg-white/95 px-4 py-6 shadow-sm backdrop-blur lg:block xl:px-5 xl:py-7"
          aria-label={COPY[language]}
        >
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            {COPY[language]}
          </div>
          <nav>
            <ol className="space-y-1.5">
              {items.map((item) => {
                const isActive = item.id === activeId;
                const indentClass = item.level >= 4 ? 'pl-6' : item.level === 3 ? 'pl-3' : '';

                return (
                  <li key={item.id} className={indentClass}>
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => handleNavigation(event, item.id)}
                      aria-current={isActive ? 'location' : undefined}
                      title={item.label}
                      className={`block rounded-xl border-l-2 px-3 py-2 text-sm leading-5 transition-colors ${
                        isActive
                          ? 'border-[#0077B6] bg-blue-50 font-semibold text-[#023E8A]'
                          : 'border-transparent text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </aside>
      ) : null}

      <div ref={contentRef} className="min-w-0">
        {children}
      </div>
    </div>
  );
};

export default PageSectionLayout;
