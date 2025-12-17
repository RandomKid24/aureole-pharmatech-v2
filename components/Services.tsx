import React, { useState, useEffect } from 'react';
import { SERVICE_INTRO, SERVICE_FEATURES, SERVICE_LOCATIONS, CONTACT_INFO, NAV_LINKS } from '../constants';
import { Award, Headphones, Factory, Layers, Lightbulb, Globe, Users, Leaf, ArrowRight, MapPin } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Award, Headphones, Factory, Layers, Lightbulb, Globe, Users, Leaf
};

const Services: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-surface w-full overflow-x-hidden pt-20">
      
      {/* ========================================================
          HERO SECTION (Standardized to min-h-screen)
         ======================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#F8F9FA] overflow-hidden pt-20">
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-start max-w-full md:max-w-[95vw]">
               
               {/* Top Label */}
               <div className={`mb-4 md:mb-8 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-aureole border-b border-aureole pb-2 bg-[#F8F9FA]/50 backdrop-blur-sm pr-2">
                     Global Support
                  </span>
               </div>
               
               {/* Massive Text Block */}
               <h1 className="text-[14vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter text-gray-900 select-none flex flex-col items-start w-full uppercase">
                  <span className={`block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                     Global
                  </span>
                  <span className={`block text-aureole transition-transform duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                     Services
                  </span>
               </h1>
               
               {/* Description & CTA Area */}
               <div className="mt-12 md:mt-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-t border-gray-200 pt-8 md:pt-12 bg-[#F8F9FA]/80 backdrop-blur-sm pl-0">
                  <div className={`max-w-2xl transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed">
                       {SERVICE_INTRO.subtitle}
                     </p>
                  </div>

                  <div className={`flex items-center gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                     <div className="flex flex-col items-end">
                       <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">24/7</div>
                       <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Support</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>

      </section>

      {/* ========================================================
          CORE CAPABILITIES MATRIX
         ======================================================== */}
      <section className="py-16 md:py-24 px-4 md:px-12 bg-surface">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-12 md:mb-16 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 text-center md:text-left">
             <div>
               <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
                 Core <span className="text-aureole">Capabilities</span>
               </h2>
             </div>
             <div className="hidden md:block text-right">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Scroll to explore</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200 bg-white shadow-sm">
            {SERVICE_FEATURES.map((feature, idx) => {
               const Icon = iconMap[feature.icon] || Award;
               return (
                 <div key={idx} className="group relative p-6 md:p-10 border-r border-b border-gray-200 hover:bg-surface transition-colors duration-500 min-h-[280px] md:min-h-[340px] flex flex-col justify-between overflow-hidden">
                    
                    {/* Hover Top Border Accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-aureole transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>

                    {/* Header: Icon & Number */}
                    <div className="relative z-10 flex justify-between items-start">
                       <div className="p-3 bg-gray-50 text-aureole rounded-sm group-hover:bg-aureole group-hover:text-white transition-colors duration-500">
                          <Icon size={24} md:size={28} strokeWidth={1.5} />
                       </div>
                       <span className="text-3xl md:text-4xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-500 select-none">
                          0{idx + 1}
                       </span>
                    </div>

                    {/* Content: Title & Desc */}
                    <div className="relative z-10 mt-6 md:mt-8">
                       <h3 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-tight mb-3 md:mb-4 group-hover:text-aureole transition-colors duration-500">
                          {feature.title}
                       </h3>
                       {/* Removed line-clamp-4 and group-hover:line-clamp-none to prevent layout jumps */}
                       <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-500">
                          {feature.description}
                       </p>
                    </div>

                    {/* Interactive Arrow - Always visible on mobile, hover on desktop */}
                    <div className="absolute bottom-6 right-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-x-0 md:translate-x-4 md:group-hover:translate-x-0">
                       <ArrowRight className="text-aureole" />
                    </div>
                 </div>
               )
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICE LOCATIONS (Black Background)
         ======================================================== */}
      <section className="bg-black text-white py-16 md:py-24 px-6 md:px-24">
         <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
               <div className="w-full">
                  <div className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs tracking-widest uppercase text-aureole mb-4 font-bold">
                     Network
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                     Service <span className="text-aureole">Centers</span>
                  </h2>
               </div>
               <p className="text-gray-400 max-w-md border-l-2 border-aureole pl-6 leading-relaxed text-sm md:text-base">
                  Strategically located across key industrial hubs to ensure rapid response and localized support for all our clients.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-12">
               {SERVICE_LOCATIONS.map((loc, idx) => (
                  <div key={idx} className="group cursor-default flex items-center gap-4 p-4 rounded-lg bg-white/5 md:bg-transparent hover:bg-white/10 transition-colors duration-300">
                     <div className="p-2 rounded-full bg-white/10 group-hover:bg-aureole transition-colors duration-300">
                        <MapPin size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                     </div>
                     <div>
                        <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                            {loc.city}
                        </h3>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </section>

      {/* ========================================================
          LOCATION MAP
         ======================================================== */}
      <section className="h-[250px] w-full bg-gray-200 relative group border-t border-b border-gray-200">
        <iframe 
          src="https://maps.google.com/maps?q=Plot%20No.%20B%20%E2%80%93%2061%2C%20Malegaon%20MIDC%2C%20Tal%20%E2%80%93%20Sinnar%2C%20Dist%20%E2%80%93%20Nashik%20422%20113%20Maharashtra%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%)' }} 
          allowFullScreen 
          loading="lazy"
          title="Aureole Location"
          className="group-hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>

      {/* ========================================================
          FOOTER (Light Theme - Matched to Landing Page)
         ======================================================== */}
      <footer className="w-full py-12 bg-gray-50 border-t border-gray-200 text-gray-900">
        <div className="container mx-auto px-6 md:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 mb-8">
             <div className="text-gray-500 text-sm leading-relaxed">
               <h4 className="text-gray-900 font-bold uppercase tracking-widest mb-2">Headquarters</h4>
               <p>{CONTACT_INFO.address}</p>
               <p>{CONTACT_INFO.phone}</p>
               <p className="text-aureole">{CONTACT_INFO.email}</p>
             </div>
             
             {/* Categorized Links */}
             <div className="flex flex-row gap-12 md:gap-24">
                 <div>
                    <h4 className="text-gray-900 font-bold uppercase tracking-widest mb-4 text-xs">Company</h4>
                    <ul className="flex flex-col gap-2">
                       <li><a href="#home" className="text-gray-500 hover:text-aureole transition-colors text-sm">Home</a></li>
                       <li><a href="#about" className="text-gray-500 hover:text-aureole transition-colors text-sm">About</a></li>
                       <li><a href="#careers" className="text-gray-500 hover:text-aureole transition-colors text-sm">Careers</a></li>
                       <li><a href="#events" className="text-gray-500 hover:text-aureole transition-colors text-sm">Events</a></li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="text-gray-900 font-bold uppercase tracking-widest mb-4 text-xs">Resources</h4>
                    <ul className="flex flex-col gap-2">
                       <li><a href="#products" className="text-gray-500 hover:text-aureole transition-colors text-sm">Products</a></li>
                       <li><a href="#services" className="text-gray-500 hover:text-aureole transition-colors text-sm">Services</a></li>
                       <li><a href="#software" className="text-gray-500 hover:text-aureole transition-colors text-sm">Software</a></li>
                    </ul>
                 </div>
             </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest pt-8 border-t border-gray-200">
             <div>&copy; 2024 Aureole Pharmatech. All rights reserved.</div>
             <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-aureole">Privacy</a>
               <a href="#" className="hover:text-aureole">Terms</a>
               <a href="#" className="hover:text-aureole">Sitemap</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;