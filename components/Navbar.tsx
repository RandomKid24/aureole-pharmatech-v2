import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Logo = () => (
  <div className="flex items-center gap-3 select-none">
    {/* Logo Image */}
    <img 
      src="/logo.png" 
      alt="Aureole Pharma-Tech" 
      className="h-10 md:h-12 w-auto object-contain"
    />
    
    {/* Brand Text */}
    <div className="flex flex-col justify-center -space-y-1">
       <span className="text-2xl md:text-3xl font-light text-aureole lowercase tracking-tight leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>aureole</span>
       <span className="text-[8px] md:text-[10px] font-semibold text-gray-500 tracking-[0.2em] uppercase pl-0.5">Pharma-Tech</span>
    </div>
  </div>
);

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, action?: string, href?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (action === 'about') {
      onNavigate('about');
      window.scrollTo(0, 0);
    } else if (action === 'products') {
      onNavigate('products');
      window.scrollTo(0, 0);
    } else if (action === 'services') {
      onNavigate('services');
      window.scrollTo(0, 0);
    } else if (action === 'software') {
      onNavigate('software');
      window.scrollTo(0, 0);
    } else if (action === 'careers') {
      onNavigate('careers');
      window.scrollTo(0, 0);
    } else {
      // Navigate to home first
      onNavigate('home');
      
      // If there is a hash, scroll to it after a brief delay to allow rendering
      if (href && href.startsWith('#')) {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  const isLinkActive = (link: any) => {
    if (currentPage === 'about' && link.action === 'about') return true;
    if (currentPage === 'products' && link.action === 'products') return true;
    if (currentPage === 'services' && link.action === 'services') return true;
    if (currentPage === 'software' && link.action === 'software') return true;
    if (currentPage === 'careers' && link.action === 'careers') return true;
    if (currentPage === 'home' && link.action === 'home' && link.href === '#home') return true;
    return false;
  };

  // Split links for Desktop layout
  // Left: Home, About, Products, Services (4 items)
  // Right: Software, Events, Careers (3 items)
  const splitIndex = 4;
  const leftLinks = NAV_LINKS.slice(0, splitIndex);
  const rightLinks = NAV_LINKS.slice(splitIndex);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-2 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-center md:justify-between relative">
        
        {/* =======================
            DESKTOP LEFT NAV
           ======================= */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-8 pr-12">
          {leftLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.action, link.href)}
              className={`text-sm font-medium transition-all duration-300 tracking-tight uppercase hover:-translate-y-0.5 ${
                isLinkActive(link) ? 'text-aureole font-bold' : 'text-gray-600 hover:text-aureole'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* =======================
            CENTER LOGO
           ======================= */}
        <div 
          className="cursor-pointer flex-shrink-0 z-20"
          onClick={(e) => handleLinkClick(e, 'home', '#home')}
        >
           <Logo />
        </div>

        {/* =======================
            DESKTOP RIGHT NAV
           ======================= */}
        <div className="hidden md:flex flex-1 items-center justify-start gap-8 pl-12">
          {rightLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.action, link.href)}
              className={`text-sm font-medium transition-all duration-300 tracking-tight uppercase hover:-translate-y-0.5 ${
                isLinkActive(link) ? 'text-aureole font-bold' : 'text-gray-600 hover:text-aureole'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* =======================
            MOBILE MENU TOGGLE
            Absolute positioned to stay on the right while logo is centered
           ======================= */}
        <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 z-30">
          <button className="text-gray-900 hover:text-aureole transition-colors p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* =======================
          MOBILE MENU DROPDOWN
         ======================= */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 md:hidden flex flex-col shadow-2xl animate-in slide-in-from-top-5 duration-200 h-[calc(100vh-80px)] overflow-y-auto">
           {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={`text-xl font-medium py-6 px-8 border-b border-gray-50 last:border-0 hover:bg-gray-50 text-center ${isLinkActive(link) ? 'text-aureole bg-blue-50/50' : 'text-gray-900'}`}
              onClick={(e) => handleLinkClick(e, link.action, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;