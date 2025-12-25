import React, { useState, useEffect } from 'react';
import { ABOUT_CONTENT, VENTURES } from '../constants';
import { ArrowRight, Quote, Target, Eye, Flag } from 'lucide-react';

const About: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-surface w-full overflow-x-hidden">
      
      {/* ========================================================
          HERO SECTION (Synced with Home)
         ======================================================== */}
      <section className="relative w-full min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-32 md:pt-48 pb-20">
        
        {/* Background Elements */}
        <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0 opacity-50"></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none select-none z-0">
           <span className="text-[40vw] font-black text-gray-900/5 leading-none">A</span>
        </div>

        <div className="container mx-auto px-6 md:px-24 relative z-10 flex-grow flex flex-col justify-start">
          <div className="flex flex-col items-start w-full">
            
            <div className={`mb-6 md:mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <div className="flex items-center gap-4">
                  <span className="w-12 h-px bg-aureole"></span>
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-aureole">
                     Our Legacy • Our Future
                  </span>
               </div>
            </div>

            <div className="relative w-full">
              <h1 className="text-[16vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter text-gray-900 select-none uppercase mix-blend-darken flex flex-col">
                 <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                   ABOUT
                 </span>
                 <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                   AUREOLE
                 </span>
              </h1>
            </div>

            <div className="mt-20 md:mt-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-t border-gray-200/60 pt-12">
               <div className={`lg:col-span-7 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <p className="text-xl md:text-3xl text-gray-500 font-light leading-snug max-w-3xl">
                     {ABOUT_CONTENT.heroDescription}
                  </p>
               </div>

               <div className="hidden lg:block lg:col-span-1"></div>

               <div className={`lg:col-span-4 flex items-center justify-center lg:justify-end gap-12 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <div className="flex flex-col items-end">
                     <span className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">28+</span>
                     <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Years Industry Presence</span>
                  </div>
                  <div className="h-16 w-px bg-gray-200"></div>
                  <div className="flex flex-col items-end">
                     <span className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">5+</span>
                     <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Diverse Ventures</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Brand Indicator */}
        <div className={`absolute bottom-10 left-6 md:left-24 flex items-center gap-6 transition-opacity duration-1000 delay-1000 z-30 origin-left -rotate-90 md:rotate-0 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
           <span className="text-[9px] uppercase tracking-[0.5em] font-black text-aureole whitespace-nowrap">Core Values Discovery</span>
           <div className="w-24 h-px bg-aureole/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1/2 bg-aureole animate-[marquee_2s_linear_infinite]"></div>
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
          OUR VENTURES
         ======================================================== */}
      <section className="bg-surface py-24 px-6 md:px-24 border-b border-gray-200" id="ventures">
         <div className="max-w-7xl mx-auto pb-12">
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

            <div className="flex flex-col border-t border-gray-900">
               {VENTURES.map((venture, index) => (
                  <div key={index} className="group flex flex-col md:flex-row py-12 border-b border-gray-200 transition-all duration-500 relative">
                     <div className="md:w-1/4 mb-4 md:mb-0 relative">
                        <span className="text-5xl md:text-6xl font-black text-gray-300 group-hover:text-aureole transition-colors duration-500">
                           {venture.year}
                        </span>
                        <div className="hidden md:block absolute top-1/2 right-8 w-12 h-px bg-gray-200 group-hover:bg-aureole transition-colors duration-500"></div>
                     </div>

                     <div className="md:w-2/4 pr-8">
                        <h3 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-4 group-hover:translate-x-4 transition-transform duration-500">
                           {venture.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-lg font-light group-hover:text-gray-900 transition-colors duration-300">
                           {venture.description}
                        </p>
                     </div>

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

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}} />
    </div>
  );
};

export default About;