import React from 'react';
import logo from '/vite.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="px-2 py-4 bg-slate-900">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="flex-initial"
          />

          <h1 className="text-lg text-slate-100 font-medium">IMDb Watchlist</h1>
        </Link>

        <blockquote className="italic text-zinc-50">
          Elementary, my dear Watson.
        </blockquote>
      </div>
    </header>
  );
};

export default Header;
