'use client';

import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return ( 
      <>
        <header className="sticky w-full h-16 flex justify-between items-center px-4 z-10 bg-white text-black text-xl top-0">
          <a className="font-bold text-2xl content-center" href="/">Matthew Adam</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <a className="px-4 h-16 cursor-pointer content-center items-center flex hover:bg-gray-100" href="/#home">Home</a>
            <a className="px-4 h-16 cursor-pointer content-center items-center flex hover:bg-gray-100" href="/#projects">Projects</a>
            <a className="px-4 h-16 cursor-pointer content-center items-center flex hover:bg-gray-100" href="/#skills">Skills</a>
          </nav>
          
          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </header>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden fixed top-16 left-0 w-full bg-white z-10 flex flex-col shadow-lg">
            <a 
              className="px-4 py-4 cursor-pointer hover:bg-gray-100 border-b border-gray-200" 
              href="/#home"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              className="px-4 py-4 cursor-pointer hover:bg-gray-100 border-b border-gray-200" 
              href="/#projects"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              className="px-4 py-4 cursor-pointer hover:bg-gray-100" 
              href="/#skills"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
          </nav>
        )}
      </>
    )}