'use client';

import { useState } from 'react';
import NavItems from './NavItems';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1"
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

      {/* Only render when open */}
      {isOpen && (
        <div className="absolute top-14 right-0 w-64 bg-white shadow-lg p-6 rounded">
          <NavItems direction="column" />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
