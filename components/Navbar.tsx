import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onNavigate: (page: any) => void;
  currentPage: string;
}

const Logo = () => (
  <div className="flex items-center gap-3 select-none">
    <img 
      src="/logo.png" 
      alt="Aureole Pharma-Tech" 
      className="h-10 md:h-12 w-auto object-contain"
    />
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
    
    if (action && action !== 'home') {
      onNavigate(action as any);
      window.scrollTo(0, 0);
    } else {
      onNavigate('home');
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
    if (currentPage === link.action) return true;
    if (currentPage === 'home' && link.action === 'home' && link.href === '#home') return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-2 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between relative">
        
        {/* Logo - Pushed to the Left */}
        <div 
          className="cursor-pointer flex-shrink-0 z-20 transition-transform duration-500 hover:scale-105 active:scale-95"
          onClick={(e) => handleLinkClick(e, 'home', '#home')}
        >
           <Logo />
        </div>

        {/* Navigation Links - Grouped on the Right */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.action, link.href)}
              className={`relative py-1 text-[11px] font-bold tracking-[0.15em] transition-all duration-300 uppercase group ${
                isLinkActive(link) ? 'text-aureole' : 'text-gray-500 hover:text-aureole'
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-aureole transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isLinkActive(link) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-900 hover:text-aureole transition-all duration-300 p-2 active:scale-90" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 md:hidden flex flex-col shadow-2xl animate-in slide-in-from-top-5 duration-300 h-[calc(100vh-80px)] overflow-y-auto">
           {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={`text-xl font-black py-8 px-8 border-b border-gray-50 uppercase tracking-tighter transition-all duration-300 ${isLinkActive(link) ? 'text-aureole bg-blue-50/50 pl-12' : 'text-gray-900 active:bg-gray-100'}`}
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