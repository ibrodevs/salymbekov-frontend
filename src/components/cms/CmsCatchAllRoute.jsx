import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePageContent } from '../../hooks/usePageContent';
import NotFound from '../../pages/NotFound';
import ManagedPageRoute from './ManagedPageRoute';

/**
 * Resolves any otherwise-unmatched public path through the CMS.
 *
 * This keeps Django admin as the source of truth for new content pages: once a
 * Page is published in cms_pages with a path, the frontend can render it
 * without requiring another Vercel deployment just to register that route.
 * A real CMS 404 still renders the normal site 404 page.
 */
const CmsCatchAllRoute = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const { isError, error } = usePageContent(location.pathname, i18n.language);

  if (isError && error?.status === 404) {
    return <NotFound />;
  }

  return <ManagedPageRoute path={location.pathname} />;
};

export default CmsCatchAllRoute;
