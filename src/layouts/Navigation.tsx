import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiBookmark, FiCheckCircle } from 'react-icons/fi';

const Navigation = () => {
  return (
    <nav className="basis-1/5 border-2 border-slate-200 rounded">
      <ul className="flex flex-col gap-y-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return (
                'flex items-center gap-x-2 w-full block px-2 py-4 ease-out duration-300 hover:bg-slate-200 ' +
                (isActive && 'bg-slate-900 text-slate-100 hover:bg-slate-900')
              );
            }}
          >
            <FiHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/watched"
            className={({ isActive }) => {
              return (
                'flex items-center gap-x-2 w-full block px-2 py-4 ease-out duration-300 hover:bg-slate-200 ' +
                (isActive && 'bg-slate-900 text-slate-100 hover:bg-slate-900')
              );
            }}
          >
            <FiCheckCircle />
            <span>Watched</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/want-to-watch"
            className={({ isActive }) => {
              return (
                'flex items-center gap-x-2 w-full block px-2 py-4 ease-out duration-300 hover:bg-slate-200 ' +
                (isActive && 'bg-slate-900 text-slate-100 hover:bg-slate-900')
              );
            }}
          >
            <FiBookmark />
            <span>Want to watch</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
