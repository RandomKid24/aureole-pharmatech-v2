import React, { useState, useEffect } from 'react';
import { ABOUT_CONTENT, VENTURES, CONTACT_INFO, NAV_LINKS } from '../constants';
import { ArrowRight, Quote, Target, Eye, Flag, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-surface w-full overflow-x-hidden">
      
      {/* ========================================================
          HERO SECTION (Reverted to Left Alignment)
         ======================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#F8F9FA] overflow-hidden pt-20">
        
        {/* Structural Vertical Line (Left aligned now) */}
        <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0"></div>

        <div className="container mx-auto px-6 md:px-24 relative z-10">
          
          <div className="flex flex-col items-start w-full">
            
            {/* Top Label */}
            <div className={`mb-8 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-aureole border-b border-aureole pb-2 bg-[#F8F9FA] pr-4 relative z-10">
                  Who We Are
               </span>
            </div>

            {/* Massive Text Block - Left Aligned */}
            <h1 className="text-[11vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter text-gray-900 select-none flex flex-col items-start w-full uppercase relative z-10 mix-blend-darken">
               <span className={`block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                 About
               </span>
               <span className={`block text-aureole transition-transform duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                 Aureole
               </span>
               <span className={`block text-aureole transition-transform duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                 Group
               </span>
            </h1>

            {/* Description & Stats */}
            <div className="mt-16 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-gray-200 pt-12 bg-[#F8F9FA]/80 backdrop-blur-sm pl-0">
               
               <div className={`max-w-xl transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                     {ABOUT_CONTENT.heroDescription}
                  </p>
               </div>

               <div className={`flex items-center gap-12 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <div className="flex flex-col items-start">
                     <span className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">28+</span>
                     <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Years</span>
                  </div>
                  <div className="h-12 w-px bg-gray-300"></div>
                  <div className="flex flex-col items-start">
                     <span className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter">5+</span>
                     <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Ventures</span>
                  </div>
               </div>

            </div>

          </div>
        </div>

      </section>

      {/* ========================================================
          DIRECTOR’S DESK
         ======================================================== */}
      <section className="bg-white py-24 px-6 md:px-24 border-b border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
              <div>
                <h2 className="text-aureole font-bold tracking-widest uppercase text-sm mb-2">{ABOUT_CONTENT.director.title}</h2>
                <h3 className="text-4xl font-black text-gray-900 tracking-tight">Leadership & Vision</h3>
              </div>
              <div className="hidden md:block text-right">
                 <p className="text-lg font-bold text-gray-900">{ABOUT_CONTENT.director.name}</p>
                 <p className="text-sm text-gray-500 uppercase tracking-wide">{ABOUT_CONTENT.director.role}</p>
              </div>
           </div>

           <div className="flex flex-col lg:flex-row gap-16">
             <div className="w-full lg:w-5/12">
               <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                    alt={ABOUT_CONTENT.director.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-aureole z-10"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white transform translate-x-2 translate-y-2 z-0 border border-gray-200"></div>
               </div>
             </div>

             <div className="w-full lg:w-7/12 flex flex-col justify-between">
                <div>
                  <Quote className="text-aureole w-12 h-12 mb-8 opacity-50" />
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                    {ABOUT_CONTENT.director.message.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                
                <div className="mt-12 flex flex-col items-end border-t border-gray-100 pt-8">
                  <div className="text-6xl font-signature text-gray-900 mb-2 transform -rotate-2">
                     Dr. Kiran Badgujar
                  </div>
                  <p className="text-xs text-aureole uppercase tracking-widest font-bold">Director – Aureole Group</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* ========================================================
          VISION / MISSION / GOAL
         ======================================================== */}
      <section className="bg-black text-white py-24 px-6 md:px-24 relative overflow-hidden z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {ABOUT_CONTENT.visionMissionGoal.map((item, index) => (
              <div key={index} className="px-0 md:px-12 py-8 md:py-0 group">
                <div className="mb-6 text-aureole group-hover:text-white transition-colors duration-300">
                  {index === 0 && <Eye size={48} strokeWidth={1} />}
                  {index === 1 && <Flag size={48} strokeWidth={1} />}
                  {index === 2 && <Target size={48} strokeWidth={1} />}
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-6">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          OUR VENTURES (Editorial List Layout)
          A clean, vertical list perfect for 5 items.
         ======================================================== */}
      <section className="bg-surface py-24 px-6 md:px-24 border-b border-gray-200" id="ventures">
         <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-gray-900">
                    Our <span className="text-aureole">Journey</span>
                    </h2>
                </div>
                <div className="md:max-w-md text-right">
                    <p className="text-gray-500 font-medium">
                        A diverse portfolio of companies dedicated to improving lives across multiple industries.
                    </p>
                </div>
            </div>

            {/* The List - CLEAN EDITORIAL STYLE (No Card Backgrounds) */}
            <div className="flex flex-col border-t border-gray-900">
               {VENTURES.map((venture, index) => (
                  <div key={index} className="group flex flex-col md:flex-row py-12 border-b border-gray-200 transition-all duration-500 relative">
                     
                     {/* Column 1: Year */}
                     <div className="md:w-1/4 mb-4 md:mb-0 relative">
                        <span className="text-5xl md:text-6xl font-black text-gray-300 group-hover:text-aureole transition-colors duration-500">
                           {venture.year}
                        </span>
                        <div className="hidden md:block absolute top-1/2 right-8 w-12 h-px bg-gray-200 group-hover:bg-aureole transition-colors duration-500"></div>
                     </div>

                     {/* Column 2: Content */}
                     <div className="md:w-2/4 pr-8">
                        <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-4 group-hover:translate-x-4 transition-transform duration-500">
                           {venture.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-lg font-light group-hover:text-gray-900 transition-colors duration-300">
                           {venture.description}
                        </p>
                     </div>

                     {/* Column 3: Action */}
                     <div className="md:w-1/4 flex items-center justify-start md:justify-end mt-6 md:mt-0">
                        <a href={venture.linkHref} className="inline-flex items-center gap-4 group/btn">
                           <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover/btn:text-aureole transition-colors">
                              Explore Venture
                           </span>
                           <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover/btn:bg-aureole group-hover/btn:border-aureole transition-all duration-300 bg-transparent">
                              <ArrowRight size={16} className="text-gray-400 group-hover/btn:text-white" />
                           </div>
                        </a>
                     </div>

                  </div>
               ))}
            </div>

         </div>
      </section>

      {/* ========================================================
          LOCATION MAP
         ======================================================== */}
      <section className="h-[250px] w-full bg-gray-200 relative group border-b border-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.333339174665!2d73.7733!3d19.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzUxLjAiTiA3M8KwNDYnMjMuOSJF!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin" 
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
          FOOTER INFO
         ======================================================== */}
      <div className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
             <div className="text-gray-500 text-sm leading-relaxed">
               <h4 className="text-gray-900 font-bold uppercase tracking-widest mb-2">Headquarters</h4>
               <p>{CONTACT_INFO.address}</p>
               <p>{CONTACT_INFO.phone}</p>
               <p className="text-aureole">{CONTACT_INFO.email}</p>
             </div>
             
             {/* Quick Links Replacement */}
             <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                 <div>
                    <h4 className="text-gray-900 font-bold uppercase tracking-widest mb-4 text-xs">Menu</h4>
                    <ul className="flex flex-col gap-2">
                        {NAV_LINKS.map(link => (
                           <li key={link.label}>
                             <a href={link.href} className="text-gray-500 hover:text-aureole transition-colors text-sm">{link.label}</a>
                           </li>
                        ))}
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
      </div>

    </div>
  );
};

export default About;