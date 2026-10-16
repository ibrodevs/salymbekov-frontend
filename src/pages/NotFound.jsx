import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="flex min-h-[75vh] items-center justify-center bg-slate-50 px-4 py-20">
    <div className="max-w-2xl text-center">
      <div className="text-7xl font-black tracking-tight text-[#023E8A] sm:text-8xl">404</div>
      <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">Страница не найдена</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-600">
        Запрошенная страница не существует или была перемещена.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-2xl bg-[#023E8A] px-6 py-3 font-semibold text-white transition hover:bg-[#0077B6]"
      >
        На главную
      </Link>
    </div>
  </main>
);

export default NotFound;
