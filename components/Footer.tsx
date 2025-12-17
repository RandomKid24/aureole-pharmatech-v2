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
      {/* ========================================================
          GLOBAL LOCATION MAP
         ======================================================== */}
      <section className="h-[250px] md:h-[300px] w-full bg-gray-100 relative group overflow-hidden">
        <iframe 
          src="https://maps.google.com/maps?q=Plot%20No.%20B%20%E2%80%93%2061%2C%20Malegaon%20MIDC%2C%20Tal%20%E2%80%93%20Sinnar%2C%20Dist%20%E2%80%93%20Nashik%20422%20113%20Maharashtra%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%)' }} 
          allowFullScreen 
          loading="lazy"
          title="Aureole Location"
          className="group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
        ></iframe>
      </section>

      {/* ========================================================
          MAIN FOOTER NAVIGATION
         ======================================================== */}
      <div className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            
            {/* Headquarters / Brand */}
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
                    <div className="flex gap-3 text-gray-500 text-xs leading-relaxed">
                      <MapPin size={16} className="text-aureole flex-shrink-0 mt-0.5" />
                      <p>{CONTACT_INFO.address}</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 text-xs">
                      <Phone size={14} className="text-aureole" />
                      <p>{CONTACT_INFO.phone}</p>
                    </div>
                    <div className="flex items-center gap-3 text-aureole text-xs font-semibold">
                      <Mail size={14} />
                      <p>{CONTACT_INFO.email}</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* Company Group */}
            <div>
              <h4 className="text-gray-900 font-bold uppercase tracking-[0.25em] mb-6 text-[10px]">Company</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home', '#home')} className="text-gray-500 hover:text-aureole transition-colors text-xs uppercase tracking-widest">Home</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-gray-500 hover:text-aureole transition-colors text-xs uppercase tracking-widest">About Us</a></li>
                <li><a href="#careers" onClick={(e) => handleLinkClick(e, 'careers')} className="text-gray-500 hover:text-aureole transition-colors text-xs uppercase tracking-widest">Careers</a></li>
                <li><a href="#events" onClick={(e) => handleLinkClick(e, 'home', '#events')} className="text-gray-500 hover:text-aureole transition-colors text-xs uppercase tracking-widest">Events</a></li>
              </ul>
            </div>

            {/* Products Group */}
            <div>
              <h4 className="text-gray-900 font-bold uppercase tracking-[0.25em] mb-6 text-[10px]">Products</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="text-gray-500 hover:text-aureole transition-colors text-xs uppercase tracking-widest">Stability Chambers</a></li>
                <li><a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="text-gray-500 hover:text-aureole transition-colors text-xs uppercase tracking-widest">Table Top Instruments</a></li>
                <li><a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="text-gray-500 hover:text-aureole transition-colors text-xs uppercase tracking-widest">Lab Furniture</a></li>
              </ul>
            </div>

            {/* Resources Group */}
            <div>
              <h4 className="text-gray-900 font-bold uppercase tracking-[0.25em] mb-6 text-[10px]">Resources</h4>
              <ul className="flex flex-col gap-3 mb-8">
                <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-gray-500 hover:text-aureole transition-colors text-xs uppercase tracking-widest">Support Services</a></li>
                <li><a href="#software" onClick={(e) => handleLinkClick(e, 'software')} className="text-gray-500 hover:text-aureole transition-colors text-xs uppercase tracking-widest">SIS-APP Software</a></li>
              </ul>
              
              <div className="flex flex-col gap-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">Newsletter</span>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-[10px] outline-none focus:border-aureole transition-all pr-12"
                  />
                  <button className="absolute top-1/2 -translate-y-1/2 right-1 w-9 h-9 bg-aureole rounded-sm flex items-center justify-center text-white hover:bg-sky-600 transition-colors shadow-sm">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* ========================================================
              BOTTOM BAR
             ======================================================== */}
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