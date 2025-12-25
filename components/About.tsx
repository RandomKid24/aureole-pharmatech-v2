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
      
      <section className="relative w-full min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-32 md:pt-48 pb-20">
        <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0 opacity-50"></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none select-none z-0">
           <span className="text-[40vw] font-black text-gray-900/5 leading-none">A</span>
        </div>

        <div className="container mx-auto px-6 md:px-24 relative z-10 flex-grow flex flex-col justify-start">
          <div className="flex flex-col items-start w-full">
            <div className={`mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <div className="flex items-center gap-4">
                  <span className="w-12 h-px bg-aureole"></span>
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-aureole">
                     A Legacy of Precision
                  </span>
               </div>
            </div>

            <div className="relative w-full">
              <h1 className="text-[16vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter text-gray-900 select-none uppercase mix-blend-darken flex flex-col">
                 <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                   ABOUT
                 </span>
                 <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                   US
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
                  <div className="text-right">
                     <span className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none">28</span>
                     <span className="text-[10px] uppercase tracking-widest text-gray-400 font-black block mt-1">Years Evolution</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section Polish */}
      <section className="bg-white py-32 px-6 md:px-24 border-b border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-100 pb-12">
              <div className="max-w-2xl">
                <h2 className="text-aureole font-black tracking-widest uppercase text-xs mb-4">{ABOUT_CONTENT.director.title}</h2>
                <h3 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none">Leadership & Vision</h3>
              </div>
              <div className="hidden md:block text-right pb-2">
                 <p className="text-xl font-bold text-gray-900">{ABOUT_CONTENT.director.name}</p>
                 <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{ABOUT_CONTENT.director.role}</p>
              </div>
           </div>

           <div className="flex flex-col lg:flex-row gap-24">
             <div className="w-full lg:w-5/12">
               <div className="relative aspect-[3/4] bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                    alt={ABOUT_CONTENT.director.name} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
               </div>
             </div>

             <div className="w-full lg:w-7/12 flex flex-col justify-center">
                <Quote className="text-aureole w-16 h-16 mb-12 opacity-30" />
                <div className="space-y-10 text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
                  {ABOUT_CONTENT.director.message.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="mt-20 flex flex-col items-end border-t border-gray-100 pt-12">
                  <div className="text-7xl font-signature text-gray-900 mb-4 transform -rotate-1">
                     Dr. Kiran Badgujar
                  </div>
                  <p className="text-[11px] text-aureole uppercase tracking-[0.4em] font-black">Managing Director</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Modern Ventures UI */}
      <section className="bg-surface py-32 px-6 md:px-24 border-b border-gray-200" id="ventures">
         <div className="max-w-7xl mx-auto">
            <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
               <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-gray-900 leading-[0.85]">
                 Our <span className="text-aureole">Journey</span>
               </h2>
               <p className="text-gray-400 font-medium max-w-sm text-right">
                  From a single vision to a multi-industrial ecosystem delivering excellence across healthcare and technology.
               </p>
            </header>

            <div className="space-y-4">
               {VENTURES.map((venture, index) => (
                  <div key={index} className="group relative bg-white p-12 rounded-[2rem] border border-gray-50 hover:border-aureole hover:shadow-2xl transition-all duration-500 overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-full bg-aureole translate-x-full group-hover:translate-x-0 transition-transform duration-700 opacity-5"></div>
                     <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="text-5xl md:text-7xl font-black text-gray-100 group-hover:text-aureole transition-colors duration-500 min-w-[160px]">
                           {venture.year}
                        </div>
                        <div className="flex-grow">
                           <h3 className="text-2xl font-black uppercase text-gray-900 mb-4 group-hover:text-aureole transition-colors">{venture.title}</h3>
                           <p className="text-gray-500 leading-relaxed text-lg font-light max-w-3xl">{venture.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                           <div className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-aureole group-hover:border-aureole transition-all duration-500">
                              <ArrowRight className="text-gray-300 group-hover:text-white" size={24} />
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;