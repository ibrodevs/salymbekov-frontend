import React from 'react';
import { Play, Youtube } from 'lucide-react';

const VideoSection = ({ videoUrl, platformLabel }) => {
  if (!videoUrl) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-600 shadow-lg">
            <Youtube className="h-10 w-10 text-white" />
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-500 hover:scale-105">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 opacity-20" />
            <div className="relative z-10 p-2">
              <div className="aspect-video overflow-hidden rounded-2xl bg-gray-900">
                <iframe
                  src={videoUrl}
                  title={platformLabel || 'University video'}
                  className="h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 shadow-lg">
              <Play className="ml-1 h-6 w-6 text-white" />
            </div>

            {platformLabel ? (
              <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Youtube className="h-4 w-4 text-red-500" />
                  {platformLabel}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
