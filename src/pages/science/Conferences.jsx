import React from 'react';
import { Link } from 'react-router-dom';
import { conferences as source } from '../../data/conferences';

const Conferences = () => {
  const conferences = source
    .map(c => ({ ...c }))
    .sort((a,b) => {
      if(!a.date) return 1;
      if(!b.date) return -1;
      const [da,ma,ya] = a.date.split('.').map(Number);
      const [db,mb,yb] = b.date.split('.').map(Number);
      return new Date(yb, mb-1, db) - new Date(ya, ma-1, da);
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative text-white py-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Научные конференции</h1>
          <p className="text-lg text-gray-200">Международные и национальные конференции, симпозиумы и научные мероприятия университета</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conferences.map(conference => (
            <Link key={conference.id} to={`/science/conferences/${conference.id}`} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-56 bg-gray-50">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={conference.image}
                      alt={conference.title}
                      className="w-full h-full object-cover object-top scale-[1.02]"
                      loading="lazy"
                    />
                    {conference.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/50 rounded-full p-3 backdrop-blur-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[10px] tracking-wide text-gray-500 uppercase mb-2">{conference.category}</p>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-3 group-hover:text-indigo-600 transition-colors">{conference.title}</h3>
                  {conference.date && (
                    <p className="text-xs font-medium text-gray-600">{conference.date}</p>
                  )}
                  <p className="mt-3 text-xs text-gray-600 line-clamp-4 min-h-[4.5rem]">{conference.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-xs text-gray-400">
          <p>Примечание: названия и даты выровнены по материалам оригинального сайта. Пустые даты будут обновлены после публикации.</p>
        </div>
      </div>
    </div>
  );
};

export default Conferences;
