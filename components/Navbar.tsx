import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

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
    // For other sections on home page, strictly speaking we might want scroll spy, but this covers basic page active states
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={(e) => handleLinkClick(e, 'home', '#home')}
        >
           <div className="w-8 h-8 bg-aureole rounded-full"></div>
           <span className="font-bold text-xl tracking-tighter text-gray-900 uppercase">Aureole Pharmatech</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.action, link.href)}
              className={`text-sm font-medium transition-colors tracking-tight uppercase ${
                isLinkActive(link) ? 'text-aureole font-bold' : 'text-gray-600 hover:text-aureole'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 md:hidden p-6 flex flex-col gap-4 shadow-xl">
           {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className={`text-lg font-medium py-2 border-b border-gray-50 last:border-0 ${isLinkActive(link) ? 'text-aureole' : 'text-gray-900'}`}
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