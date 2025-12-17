import React, { useState, useEffect } from 'react';
import { CAREERS_CONTENT, CONTACT_INFO, NAV_LINKS } from '../constants';
import { Briefcase, TrendingUp, Lightbulb, Heart, ChevronDown, CheckCircle2, MapPin, Clock, ArrowRight } from 'lucide-react';

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
          HERO SECTION (Standardized to min-h-screen)
         ======================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#F8F9FA] overflow-hidden pt-20">
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-start max-w-full md:max-w-[95vw]">
               
               {/* Top Label */}
               <div className={`mb-4 md:mb-8 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-aureole border-b border-aureole pb-2 bg-[#F8F9FA]/50 backdrop-blur-sm pr-2">
                     Join the Team
                  </span>
               </div>
               
               {/* Massive Text Block */}
               <h1 className="text-[14vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter text-gray-900 select-none flex flex-col items-start w-full uppercase">
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
               
               {/* Description & CTA Area */}
               <div className="mt-12 md:mt-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-t border-gray-200 pt-8 md:pt-12 bg-[#F8F9FA]/80 backdrop-blur-sm pl-0">
                  <div className={`max-w-2xl transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed">
                       {CAREERS_CONTENT.hero.subtitle}
                     </p>
                  </div>

                  <div className={`flex items-center gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                     <div className="flex flex-col items-end">
                       <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">{CAREERS_CONTENT.jobs.length}</div>
                       <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Openings</div>
                     </div>
                  </div>
               </div>

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
                                       <ArrowRight size={16} className="text-aureole mt-0.5 flex-shrink-0" />
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
          FOOTER (Light Theme)
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

export default Careers;