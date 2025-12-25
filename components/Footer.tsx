import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  onNavigate: (page: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, page: string, hash?: string) => {
    e.preventDefault();
    onNavigate(page as any);
    if (hash && hash.startsWith('#')) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <section className="h-[250px] md:h-[300px] w-full bg-gray-100 relative group overflow-hidden">
        <iframe 
          src="https://maps.google.com/maps?q=Plot%20No.%20B%20%E2%80%93%2061%2C%20Malegaon%20MIDC%2C%20Tal%20%E2%80%93%20Sinnar%2C%20Dist%20%E2%80%93%20Nashik%20422%20113%20Maharashtra%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%)' }} 
          allowFullScreen 
          loading="lazy"
          title="Aureole Location"
          className="group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
        ></iframe>
      </section>

      <div className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            
            <div className="lg:col-span-2">
               <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 select-none">
                    <div className="flex flex-col justify-center -space-y-1">
                      <span className="text-2xl font-light text-aureole lowercase tracking-tight leading-none">aureole</span>
                      <span className="text-[8px] font-semibold text-gray-400 tracking-[0.2em] uppercase pl-0.5">Pharma-Tech</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 max-w-xs">
                    <h4 className="text-gray-900 font-bold uppercase tracking-[0.25em] text-[10px] mb-4">Headquarters</h4>
                    <div className="flex gap-3 text-gray-500 text-xs leading-relaxed group cursor-default">
                      <MapPin size={16} className="text-aureole flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                      <p className="group-hover:text-gray-900 transition-colors">{CONTACT_INFO.address}</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-xs group cursor-default">
                      <Phone size={14} className="text-aureole transition-transform group-hover:rotate-12" />
                      <p className="group-hover:text-gray-900 transition-colors">{CONTACT_INFO.phone}</p>
                    </div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-aureole text-xs font-semibold hover:translate-x-1 transition-transform">
                      <Mail size={14} />
                      <p>{CONTACT_INFO.email}</p>
                    </a>
                  </div>
               </div>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold uppercase tracking-[0.25em] mb-6 text-[10px]">Company</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#home" onClick={(e) => handleLinkClick(e, 'home', '#home')} className="relative py-1 text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-aureole transition-all duration-300 uppercase group inline-block">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-aureole transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="relative py-1 text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-aureole transition-all duration-300 uppercase group inline-block">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-aureole transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#careers" onClick={(e) => handleLinkClick(e, 'careers')} className="relative py-1 text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-aureole transition-all duration-300 uppercase group inline-block">
                    Careers
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-aureole transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#events" onClick={(e) => handleLinkClick(e, 'home', '#events')} className="relative py-1 text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-aureole transition-all duration-300 uppercase group inline-block">
                    Events
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-aureole transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold uppercase tracking-[0.25em] mb-6 text-[10px]">Products</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="relative py-1 text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-aureole transition-all duration-300 uppercase group inline-block">
                    Stability Chambers
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-aureole transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="relative py-1 text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-aureole transition-all duration-300 uppercase group inline-block">
                    Table Top Instruments
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-aureole transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="relative py-1 text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-aureole transition-all duration-300 uppercase group inline-block">
                    Lab Furniture
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-aureole transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 font-bold uppercase tracking-[0.25em] mb-6 text-[10px]">Resources</h4>
              <ul className="flex flex-col gap-4 mb-8">
                <li>
                  <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="relative py-1 text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-aureole transition-all duration-300 uppercase group inline-block">
                    Support Services
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-aureole transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a href="#software" onClick={(e) => handleLinkClick(e, 'software')} className="relative py-1 text-[10px] font-bold tracking-[0.2em] text-gray-500 hover:text-aureole transition-all duration-300 uppercase group inline-block">
                    SIS-APP Software
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-aureole transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
              
              <div className="flex flex-col gap-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">Newsletter</span>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-[10px] outline-none focus:border-aureole transition-all pr-12"
                  />
                  <button className="absolute top-1/2 -translate-y-1/2 right-1 w-9 h-9 bg-aureole rounded-sm flex items-center justify-center text-white hover:bg-sky-600 transition-all duration-300 shadow-sm active:scale-90">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-400 uppercase tracking-[0.3em] pt-8 border-t border-gray-200 gap-4 text-center">
            <div>&copy; 2024 Aureole Pharmatech. All rights reserved.</div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <a href="#" className="hover:text-aureole transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-aureole transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-aureole transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;