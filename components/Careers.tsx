import React, { useState, useEffect } from 'react';
import { CAREERS_CONTENT, CONTACT_INFO } from '../constants';
import { Briefcase, TrendingUp, Lightbulb, Heart, ChevronDown, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

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
            <span className="text-[40vw] font-black text-gray-900/5 leading-none">C</span>
         </div>

         <div className="container mx-auto px-6 md:px-24 relative z-10 flex-grow flex flex-col justify-start">
            <div className="flex flex-col items-start w-full">
               
               <div className={`mb-6 md:mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-4">
                     <span className="w-12 h-px bg-aureole"></span>
                     <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-aureole">
                        Shape the Future • Careers
                     </span>
                  </div>
               </div>
               
               <div className="relative w-full">
                  <h1 className="text-[16vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter text-gray-900 select-none uppercase mix-blend-darken flex flex-col">
                     <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        JOIN
                     </span>
                     <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        US
                     </span>
                  </h1>
               </div>
               
               <div className="mt-20 md:mt-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-t border-gray-200/60 pt-12">
                  <div className={`lg:col-span-7 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <p className="text-xl md:text-3xl text-gray-500 font-light leading-snug max-w-3xl">
                       {CAREERS_CONTENT.hero.subtitle}. We are looking for <span className="text-gray-900 font-medium">innovators</span>, <span className="text-gray-900 font-medium">engineers</span>, and <span className="text-gray-900 font-medium">visionaries.</span>
                     </p>
                  </div>

                  <div className="hidden lg:block lg:col-span-1"></div>

                  <div className={`lg:col-span-4 flex flex-col items-center lg:items-end gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                     <div className="flex flex-col items-end">
                       <div className="text-4xl md:text-6xl font-black mb-1 text-gray-900">{CAREERS_CONTENT.jobs.length}</div>
                       <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Open Positions Available</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Brand Indicator */}
         <div className={`absolute bottom-10 left-6 md:left-24 flex items-center gap-6 transition-opacity duration-1000 delay-1000 z-30 origin-left -rotate-90 md:rotate-0 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-aureole whitespace-nowrap">Human Potential</span>
            <div className="w-24 h-px bg-aureole/20 relative overflow-hidden">
               <div className="absolute top-0 left-0 h-full w-1/2 bg-aureole animate-[marquee_2s_linear_infinite]"></div>
            </div>
         </div>
      </section>

      {/* ========================================================
          BENEFITS
         ======================================================== */}
      <section className="bg-surface py-16 md:py-24 px-5 md:px-24 border-b border-gray-200">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-aureole mb-8 md:mb-12">Why Work With Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               {CAREERS_CONTENT.benefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-700 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    style={{ transitionDelay: `${800 + (idx * 100)}ms` }}
                  >
                     <div className="h-10 w-10 md:h-12 md:w-12 bg-gray-50 rounded-lg flex items-center justify-center mb-5 md:mb-6 text-aureole group-hover:bg-aureole group-hover:text-white transition-colors duration-300">
                        {idx === 0 && <Lightbulb size={20} className="md:w-6 md:h-6" />}
                        {idx === 1 && <TrendingUp size={20} className="md:w-6 md:h-6" />}
                        {idx === 2 && <Heart size={20} className="md:w-6 md:h-6" />}
                     </div>
                     <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                     <p className="text-sm md:text-base text-gray-500 leading-relaxed">{benefit.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ========================================================
          OPEN POSITIONS
         ======================================================== */}
      <section className="py-20 md:py-24 px-5 md:px-24 bg-white pb-32">
         <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
               <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
                  Open <span className="text-aureole">Positions</span>
               </h2>
               <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest">
                  <Briefcase size={14} className="md:w-4 md:h-4" />
                  <span>{CAREERS_CONTENT.jobs.length} roles available</span>
               </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
               {CAREERS_CONTENT.jobs.map((job, idx) => (
                  <div 
                     key={idx} 
                     className={`border rounded-xl transition-all duration-500 overflow-hidden transform ${
                        mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                     } ${
                        expandedJob === idx 
                        ? 'border-aureole bg-white shadow-xl ring-1 ring-aureole/20' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                     }`}
                     style={{ transitionDelay: `${1100 + (idx * 100)}ms` }}
                  >
                     <button 
                        onClick={() => toggleJob(idx)}
                        className="w-full flex flex-row items-center justify-between p-5 md:p-8 text-left gap-4 active:bg-gray-50 md:active:bg-transparent group"
                     >
                        <div className="flex-1 min-w-0">
                           <div className="flex items-center flex-wrap gap-2 md:gap-3 mb-2">
                              <h3 className="text-lg md:text-2xl font-bold text-gray-900 tracking-tight truncate group-hover:text-aureole transition-colors duration-300">{job.title}</h3>
                              {job.status === 'Open' && (
                                 <span className="bg-green-100 text-green-700 text-[8px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                                    Open
                                 </span>
                              )}
                           </div>
                           <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                              <span className="flex items-center gap-1"><Clock size={12} className="md:w-[14px] md:h-[14px]" /> {job.experience.split(' (')[0]}</span>
                              <span className="hidden xs:inline w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span className="flex items-center gap-1"><Briefcase size={12} className="md:w-[14px] md:h-[14px]" /> {job.type.split(', ')[0]}</span>
                           </div>
                        </div>
                        
                        <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${expandedJob === idx ? 'rotate-180 bg-aureole text-white shadow-lg' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-aureole'}`}>
                           <ChevronDown size={20} className="md:w-6 md:h-6" />
                        </div>
                     </button>

                     <div 
                        className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                           expandedJob === idx ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                     >
                        <div className={`p-5 md:p-8 pt-0 border-t border-gray-100 bg-gray-50/50 transition-all duration-700 delay-100 transform ${expandedJob === idx ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-6">
                              <div>
                                 <h4 className="text-[10px] md:text-xs font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    Qualifications
                                 </h4>
                                 <ul className="space-y-3">
                                    {job.qualifications.map((qual, qIdx) => (
                                       <li key={qIdx} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                                          <CheckCircle2 size={16} className="text-aureole mt-0.5 flex-shrink-0" />
                                          <span>{qual}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                              <div>
                                 <h4 className="text-[10px] md:text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
                                    Responsibilities
                                 </h4>
                                 <ul className="space-y-3">
                                    {job.responsibilities.map((res, rIdx) => (
                                       <li key={rIdx} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                                          <ArrowRight size={16} className="text-aureole mt-0.5 flex-shrink-0" />
                                          <span>{res}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </div>

                           <div className="pt-8 border-t border-gray-200 mt-8 mb-4">
                              <a 
                                 href={`mailto:${CONTACT_INFO.email}?subject=Application for ${job.title}`}
                                 className="group relative flex md:inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-[#0F85C5] text-white font-black rounded-full overflow-hidden transition-all duration-500 shadow-[0_20px_50px_-15px_rgba(15,133,197,0.4)] hover:shadow-[0_25px_60px_-10px_rgba(15,133,197,0.5)] hover:-translate-y-1.5 active:scale-[0.98] gap-3 ring-0 hover:ring-4 hover:ring-aureole/20"
                              >
                                 <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></div>
                                 <span className="text-sm md:text-base tracking-widest uppercase">Apply for this Position</span>
                                 <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500 ease-out" />
                              </a>
                           </div>
                        </div>
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
        @keyframes shine {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}} />
    </div>
  );
};

export default Careers;