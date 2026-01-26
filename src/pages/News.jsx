import React from 'react'
import { useTranslation } from 'react-i18next'

const News = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('newsSUB.allNews', 'Все новости')}
        </h1>
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-gray-600 text-lg">
            Новости и последние обновления находятся в разработке.
          </p>
        </div>
      </div>
    </div>
  )
}

export default News
