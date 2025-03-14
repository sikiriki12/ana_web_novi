import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../../hooks/use-translations';

export default function NotFoundPage() {
  const { t } = useTranslations();
  
  return (
    <div className="container-custom py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">
        {t('common.pageNotFound')}
      </p>
      <Link 
        to="/" 
        className="btn btn-primary"
      >
        {t('common.goBackToHomepage')}
      </Link>
    </div>
  );
}
