import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Map, Heart, PlusSquare, Search, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const linkClass = (path: string) => `
    flex items-center gap-4 text-white transition-colors p-2 rounded-lg
    ${isActive(path) ? 'bg-emerald-500/10 text-emerald-500' : 'hover:bg-zinc-800 hover:text-emerald-500'}
  `;

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zinc-900 rounded-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-black transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        h-full p-6 flex flex-col
      `}>
        <div className="flex items-center gap-2 mb-8">
          <Map className="w-8 h-8 text-emerald-500" />
          <span className="text-white text-xl font-semibold">LocationFy</span>
        </div>
        
        <nav className="space-y-2">
          <Link to="/" className={linkClass('/')} onClick={() => setIsOpen(false)}>
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link to="/search" className={linkClass('/search')} onClick={() => setIsOpen(false)}>
            <Search className="w-5 h-5" />
            <span>Search</span>
          </Link>
          <Link to="/saved" className={linkClass('/saved')} onClick={() => setIsOpen(false)}>
            <Heart className="w-5 h-5" />
            <span>Saved</span>
          </Link>
          <Link to="/create" className={linkClass('/create')} onClick={() => setIsOpen(false)}>
            <PlusSquare className="w-5 h-5" />
            <span>Create Collection</span>
          </Link>
        </nav>
        
        <div className="mt-auto">
          <div className="border-t border-gray-800 pt-4">
            <span className="text-sm text-gray-400">© 2024 LocationFy</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;