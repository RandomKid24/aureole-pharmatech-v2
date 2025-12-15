import React, { useState, useEffect } from 'react';
import { CAREERS_CONTENT, CONTACT_INFO, NAV_LINKS } from '../constants';
import { Briefcase, TrendingUp, Lightbulb, Heart, ChevronDown, CheckCircle2, MapPin, Clock } from 'lucide-react';

const Careers: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleJob = (index: number) => {
    if (expandedJob === index) {
      setExpandedJob(null);
    } else {
      setExpandedJob(index);
    }
  };

  return (
    <div className="bg-surface w-full overflow-x-hidden pt-20">
      
      {/* ========================================================
          HERO SECTION
         ======================================================== */}
      <section className="relative px-6 md:px-24 py-24 bg-[#F8F9FA] border-b border-gray-200 overflow-hidden">
         
         <div className="relative z-10 max-w-4xl">
            <h1 className="text-[10vw] md:text-[8vw] font-black tracking-tighter text-gray-900 mb-8 uppercase leading-[0.8] select-none">
               <span className={`block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                 Join
               </span>
               <span className={`block transition-transform duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                 Our
               </span>
               <span className={`block text-aureole transition-transform duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                 Team
               </span>
            </h1>
            
            <div className={`transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
               <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-8 max-w-2xl border-l-4 border-aureole pl-6">
                 {CAREERS_CONTENT.hero.subtitle}
               </p>
               <p className="text-lg text-gray-400">
                  {CAREERS_CONTENT.hero.text}
               </p>
            </div>
         </div>
      </section>

      {/* ========================================================
          BENEFITS / WHY WORK WITH US
         ======================================================== */}
      <section className="bg-surface py-20 px-6 md:px-24 border-b border-gray-200">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-bold tracking-widest uppercase text-aureole mb-12">Why Work With Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {CAREERS_CONTENT.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                     <div className="h-12 w-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 text-aureole group-hover:bg-aureole group-hover:text-white transition-colors duration-300">
                        {idx === 0 && <Lightbulb size={24} />}
                        {idx === 1 && <TrendingUp size={24} />}
                        {idx === 2 && <Heart size={24} />}
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                     <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ========================================================
          OPEN POSITIONS
         ======================================================== */}
      <section className="py-24 px-6 md:px-24 bg-white">
         <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-16">
               <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
                  Open <span className="text-aureole">Positions</span>
               </h2>
               <div className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest">
                  <Briefcase size={16} />
                  <span>{CAREERS_CONTENT.jobs.length} roles available</span>
               </div>
            </div>

            <div className="flex flex-col gap-6">
               {CAREERS_CONTENT.jobs.map((job, idx) => (
                  <div 
                     key={idx} 
                     className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                        expandedJob === idx 
                        ? 'border-aureole bg-white shadow-xl ring-1 ring-aureole/20' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                     }`}
                  >
                     {/* Header (Always Visible) */}
                     <button 
                        onClick={() => toggleJob(idx)}
                        className="w-full flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 text-left gap-4"
                     >
                        <div>
                           <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{job.title}</h3>
                              {job.status === 'Open' && (
                                 <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                    Open
                                 </span>
                              )}
                           </div>
                           <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1"><Clock size={14} /> {job.experience}</span>
                              <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full"></span>
                              <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                           </div>
                        </div>
                        
                        <div className={`transform transition-transform duration-300 text-gray-400 ${expandedJob === idx ? 'rotate-180 text-aureole' : ''}`}>
                           <ChevronDown size={24} />
                        </div>
                     </button>

                     {/* Expanded Content */}
                     <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                           expandedJob === idx ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                     >
                        <div className="p-6 md:p-8 pt-0 border-t border-gray-100 bg-gray-50/50">
                           
                           {/* Qualifications */}
                           <div className="mb-8 mt-6">
                              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                 Qualifications
                              </h4>
                              <ul className="grid grid-cols-1 gap-2">
                                 {job.qualifications.map((qual, qIdx) => (
                                    <li key={qIdx} className="flex items-start gap-3 text-gray-600 text-sm">
                                       <CheckCircle2 size={16} className="text-aureole mt-0.5 flex-shrink-0" />
                                       <span>{qual}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>

                           {/* Responsibilities */}
                           <div className="mb-8">
                              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                                 Responsibilities
                              </h4>
                              <ul className="space-y-3">
                                 {job.responsibilities.map((res, rIdx) => (
                                    <li key={rIdx} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                                       <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                       <span>{res}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>

                           {/* Apply CTA */}
                           <div className="pt-6 border-t border-gray-200">
                              <a 
                                 href={`mailto:${CONTACT_INFO.email}?subject=Application for ${job.title}`}
                                 className="inline-flex items-center justify-center px-8 py-3 bg-aureole text-white font-bold rounded-lg hover:bg-sky-600 transition-colors shadow-lg shadow-aureole/20"
                              >
                                 Apply for this Position
                              </a>
                           </div>

                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ========================================================
          FOOTER (Light Theme)
         ======================================================== */}
      <footer className="w-full py-12 bg-gray-50 border-t border-gray-200 text-gray-900">
        <div className="container mx-auto px-6 md:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
             <div className="text-gray-500 text-sm leading-relaxed">
               <h4 className="text-gray-900 font-bold uppercase tracking-widest mb-2">Headquarters</h4>
               <p>{CONTACT_INFO.address}</p>
               <p>{CONTACT_INFO.phone}</p>
               <p className="text-aureole">{CONTACT_INFO.email}</p>
             </div>
             
             {/* Quick Links */}
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
      </footer>
    </div>
  );
};

export default Careers;