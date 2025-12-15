import React, { useState } from 'react';
import { ABOUT_CONTENT, VENTURES, CONTACT_INFO } from '../constants';
import { ArrowRight, Quote, Target, Eye, Flag, Plus } from 'lucide-react';

const About: React.FC = () => {
  const [activeMobileVenture, setActiveMobileVenture] = useState<number | null>(0);

  return (
    <div className="bg-surface w-full overflow-x-hidden">
      
      {/* ========================================================
          HERO SECTION (Redesigned to match Home Page)
          Split Screen: Left Text / Right Image with Blue Overlay
         ======================================================== */}
      <section className="relative min-h-screen w-full flex flex-col md:flex-row pt-20 md:pt-0">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 bg-surface flex flex-col justify-center px-8 md:px-24 py-20 order-2 md:order-1 relative overflow-hidden">
          
          {/* Decorative Background Number - Added to be visible */}
          <div className="absolute top-1/2 right-0 md:right-12 transform -translate-y-1/2 text-[15rem] md:text-[20rem] font-black text-gray-300 pointer-events-none select-none z-0 opacity-40">
            28
          </div>

          <div className="relative z-10">
            <div className="inline-block px-3 py-1 border border-aureole/20 rounded-full text-xs tracking-widest uppercase text-aureole w-fit mb-6">
              Our Story
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 leading-[0.9] mb-8 uppercase">
              About<br/>Aureole<br/>Group
            </h1>

            <p className="text-xl text-gray-500 max-w-md leading-relaxed border-l-4 border-aureole pl-6">
              {ABOUT_CONTENT.heroDescription}
            </p>

            <div className="mt-12 flex items-center gap-6">
               <div className="flex flex-col">
                  <span className="text-6xl font-bold text-gray-900 tracking-tighter">28+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Years of Excellence</span>
               </div>
               <div className="h-12 w-px bg-gray-300"></div>
               <div className="flex flex-col">
                  <span className="text-6xl font-bold text-gray-900 tracking-tighter">5+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">Global Ventures</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image with Brand Overlay */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2 overflow-hidden bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Headquarters" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out scale-105 hover:scale-100"
          />
          {/* The Signature Aureole Blue Overlay */}
          <div className="absolute inset-0 bg-aureole/20 mix-blend-multiply pointer-events-none"></div>
        </div>
      </section>

      {/* ========================================================
          DIRECTOR’S DESK
          Clean, Industrial Layout
         ======================================================== */}
      <section className="bg-white py-24 px-6 md:px-24 border-b border-gray-100">
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
             {/* Image Column */}
             <div className="w-full lg:w-5/12">
               <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                    alt={ABOUT_CONTENT.director.name} 
                    className="w-full h-full object-cover"
                  />
                  {/* Geometric Accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-aureole z-10"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-white transform translate-x-2 translate-y-2 z-0 border border-gray-200"></div>
               </div>
             </div>

             {/* Text Column */}
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
          High Contrast Section (Dark Mode) like "Products"
         ======================================================== */}
      <section className="bg-black text-white py-24 px-6 md:px-24 relative overflow-hidden">
        {/* Background Grid Pattern */}
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
          OUR VENTURES (Unique Kinetic Horizontal Accordion)
         ======================================================== */}
      <section className="bg-surface py-24 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-gray-900">
              Our <span className="text-aureole">Ventures</span>
            </h2>
            <p className="text-gray-500 max-w-xl text-lg border-l-4 border-aureole pl-4">
              {ABOUT_CONTENT.venturesSubtitle}
            </p>
        </div>

        {/* DESKTOP: HORIZONTAL ACCORDION */}
        {/* The entire row is 600px height. Items expand on hover. */}
        <div className="hidden md:flex w-full h-[600px] border-y border-gray-200 bg-white">
          {VENTURES.map((venture, index) => (
            <div 
              key={index}
              className="group relative flex-1 hover:flex-[3] border-r border-gray-200 last:border-r-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col overflow-hidden bg-white hover:bg-gray-50 cursor-default"
            >
              {/* Hover Top Border Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-aureole transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20"></div>

              {/* Background Year (Decorative) */}
              <div className="absolute -right-4 top-4 text-[12rem] font-black text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-150 group-hover:scale-100 select-none z-0 pointer-events-none">
                 {venture.year}
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                 
                 {/* COLLAPSED STATE: Vertical Text */}
                 <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full text-center transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-8 pointer-events-none">
                    <div className="flex flex-col items-center gap-6">
                       <span className="text-sm font-bold text-aureole tracking-widest">{venture.year}</span>
                       {/* Vertical Text via CSS writing-mode */}
                       <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                          {venture.title.length > 25 ? venture.title.substring(0, 22) + '..' : venture.title}
                       </h3>
                    </div>
                 </div>

                 {/* EXPANDED STATE: Full Content */}
                 <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-8 group-hover:translate-y-0 flex flex-col gap-6 relative">
                    <span className="inline-block px-3 py-1 border border-aureole/30 rounded-full text-xs font-bold text-aureole w-fit bg-white/80 backdrop-blur-sm">
                      EST. {venture.year}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1] uppercase tracking-tight">
                      {venture.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-lg text-sm lg:text-base border-l-2 border-aureole pl-4">
                      {venture.description}
                    </p>
                    <a href={venture.linkHref} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-aureole transition-colors mt-2 group/link w-fit">
                      Explore Venture <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                 </div>

              </div>
            </div>
          ))}
        </div>

        {/* MOBILE: KINETIC VERTICAL ACCORDION */}
        <div className="md:hidden flex flex-col">
            {VENTURES.map((venture, index) => {
              const isActive = activeMobileVenture === index;
              return (
                <div 
                  key={index} 
                  className={`border-b border-gray-200 bg-white transition-colors duration-300 ${isActive ? 'bg-gray-50' : ''}`}
                >
                  <button 
                    onClick={() => setActiveMobileVenture(isActive ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left relative overflow-hidden"
                  >
                    {/* Active Bar Indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-aureole"></div>
                    )}
                    
                    <div className="flex flex-col gap-1 z-10 pl-2">
                       <span className={`text-xs font-bold tracking-widest transition-colors duration-300 ${isActive ? 'text-aureole' : 'text-gray-400'}`}>
                         EST. {venture.year}
                       </span>
                       <h3 className={`text-xl font-black uppercase tracking-tight transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                         {venture.title}
                       </h3>
                    </div>

                    <div className={`transform transition-transform duration-300 ${isActive ? 'rotate-45 text-aureole' : 'text-gray-300'}`}>
                       <Plus size={24} strokeWidth={1.5} />
                    </div>
                  </button>
                  
                  {/* Expandable Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out px-8 pl-10 ${isActive ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                  >
                     <p className="text-gray-500 leading-relaxed mb-6 border-l-2 border-aureole pl-4 text-sm">
                       {venture.description}
                     </p>
                     <a href={venture.linkHref} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-aureole hover:text-gray-900 transition-colors">
                        Visit Website <ArrowRight size={14} />
                     </a>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* ========================================================
          LOCATION MAP
         ======================================================== */}
      <section className="h-[250px] w-full bg-gray-200 relative group border-t border-b border-gray-200">
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
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
             <div className="text-gray-500 text-sm leading-relaxed">
               <h4 className="text-gray-900 font-bold uppercase tracking-widest mb-2">Headquarters</h4>
               <p>{CONTACT_INFO.address}</p>
               <p>{CONTACT_INFO.phone}</p>
               <p className="text-aureole">{CONTACT_INFO.email}</p>
             </div>
             
             <div className="flex flex-col items-end gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email for updates" 
                  className="bg-white border border-gray-200 px-4 py-2 rounded-md text-sm outline-none focus:border-aureole w-64"
                />
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