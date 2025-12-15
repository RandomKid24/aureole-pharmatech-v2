import React from 'react';
import { SOFTWARE_CONTENT, CONTACT_INFO, NAV_LINKS } from '../constants';
import { CheckCircle2, Server, Smartphone, Cloud, Users, MonitorCheck, Database, Lock, ShieldCheck, Laptop, Building2, UserCircle, Bell, LayoutGrid } from 'lucide-react';

const Software: React.FC = () => {
  return (
    <div className="bg-surface w-full overflow-x-hidden pt-20">
      
      {/* ========================================================
          HERO SECTION (Text Only)
         ======================================================== */}
      <section className="relative w-full px-6 md:px-24 py-24 md:py-32 bg-white border-b border-gray-100 flex flex-col justify-center min-h-[60vh] overflow-hidden items-center text-center">
         {/* Decorative Background Text */}
         <div className="absolute top-0 right-0 text-[15rem] md:text-[25rem] font-black text-gray-50 leading-none select-none pointer-events-none z-0 translate-x-[20%] -translate-y-[20%]">
            SIS
         </div>
         
         <div className="relative z-10 max-w-4xl">
            <div className="inline-block px-3 py-1 border border-aureole/30 rounded-full bg-aureole/5 text-aureole text-xs font-bold tracking-widest uppercase mb-6">
               {SOFTWARE_CONTENT.hero.badge}
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mb-8 uppercase leading-[0.9]">
               SIS-<span className="text-aureole">APP</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-2xl mx-auto border-l-4 border-aureole pl-6 text-left md:text-center md:border-l-0 md:border-b-4 md:pb-6 md:border-aureole md:pl-0">
               {SOFTWARE_CONTENT.hero.subtitle}
            </p>
         </div>
      </section>

      {/* ========================================================
          INTRO SECTION
         ======================================================== */}
      <section className="py-20 px-6 md:px-24 bg-surface border-b border-gray-200">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
               Seamless Integration & Compliance
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-3xl mx-auto">
               In the fast-paced landscape of today's business world, SIS-APP delivers secure and integrated solutions for applications, products, and processes, ensuring robust compliance.
            </p>
         </div>
      </section>

      {/* ========================================================
          SYSTEM ARCHITECTURE SECTION
         ======================================================== */}
      <section className="py-24 px-4 md:px-24 bg-[#0B1221] relative overflow-hidden">
         {/* Grid Background */}
         <div className="absolute inset-0 opacity-20" style={{
             backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)',
             backgroundSize: '40px 40px'
         }}></div>
         
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1221]/80"></div>

         <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                  System <span className="text-aureole">Architecture</span>
               </h2>
               <p className="text-gray-400">Robust, Secure, and Integrated Network Flow</p>
            </div>

            {/* Architecture Container */}
            <div className="relative w-full max-w-md aspect-square bg-[#0B1221]/50 rounded-full border border-gray-800/50 shadow-2xl p-12 flex items-center justify-center">
               
               {/* Connecting Lines Layer */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <defs>
                     <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#0F85C5" />
                     </marker>
                  </defs>
                  
                  {/* Center to Top-Left */}
                  <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#0F85C5" strokeWidth="1" strokeDasharray="4,4" className="opacity-40" />
                  {/* Center to Top-Right */}
                  <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#0F85C5" strokeWidth="1" strokeDasharray="4,4" className="opacity-40" />
                  {/* Center to Bottom-Left */}
                  <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#0F85C5" strokeWidth="1" strokeDasharray="4,4" className="opacity-40" />
                  {/* Center to Bottom-Right */}
                  <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#0F85C5" strokeWidth="1" strokeDasharray="4,4" className="opacity-40" />
                  
                  {/* Pulsing circles on lines */}
                  <circle cx="35%" cy="35%" r="3" fill="#0F85C5" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle cx="65%" cy="65%" r="3" fill="#0F85C5" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
               </svg>

               {/* Center Node */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="w-24 h-24 bg-aureole rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(15,133,197,0.4)] mb-3 relative z-10 ring-4 ring-aureole/20 ring-offset-2 ring-offset-[#0B1221]">
                     <Server size={36} className="text-white" />
                  </div>
                  <div className="text-center bg-[#0B1221]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-800">
                     <h3 className="text-white font-bold text-lg leading-none">SIS APP</h3>
                  </div>
               </div>

               {/* Top Left: Departments */}
               <div className="absolute top-[10%] left-[5%] z-10 flex flex-col items-center group w-28 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-[#1e293b] border border-gray-700 rounded-xl flex items-center justify-center mb-2 group-hover:border-aureole group-hover:bg-[#1e293b]/80 transition-all shadow-lg">
                     <LayoutGrid size={20} className="text-gray-400 group-hover:text-aureole transition-colors" />
                  </div>
                  <span className="text-gray-200 font-bold text-xs text-center uppercase tracking-wide">Departments</span>
               </div>

               {/* Top Right: Clients */}
               <div className="absolute top-[10%] right-[5%] z-10 flex flex-col items-center group w-28 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-[#1e293b] border border-gray-700 rounded-xl flex items-center justify-center mb-2 group-hover:border-aureole group-hover:bg-[#1e293b]/80 transition-all shadow-lg">
                     <Building2 size={20} className="text-gray-400 group-hover:text-aureole transition-colors" />
                  </div>
                  <span className="text-gray-200 font-bold text-xs text-center uppercase tracking-wide">Clients</span>
               </div>

               {/* Bottom Left: Mobile */}
               <div className="absolute bottom-[10%] left-[5%] z-10 flex flex-col items-center group w-28 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-[#1e293b] border border-gray-700 rounded-xl flex items-center justify-center mb-2 group-hover:border-aureole group-hover:bg-[#1e293b]/80 transition-all shadow-lg">
                     <Smartphone size={20} className="text-gray-400 group-hover:text-aureole transition-colors" />
                  </div>
                  <span className="text-gray-200 font-bold text-xs text-center uppercase tracking-wide">Mobile Alert</span>
               </div>

               {/* Bottom Right: Users */}
               <div className="absolute bottom-[10%] right-[5%] z-10 flex flex-col items-center group w-28 hover:scale-105 transition-transform duration-300">
                  <div className="w-14 h-14 bg-[#1e293b] border border-gray-700 rounded-xl flex items-center justify-center mb-2 group-hover:border-aureole group-hover:bg-[#1e293b]/80 transition-all shadow-lg">
                     <Users size={20} className="text-gray-400 group-hover:text-aureole transition-colors" />
                  </div>
                  <span className="text-gray-200 font-bold text-xs text-center uppercase tracking-wide">End Users</span>
               </div>

            </div>
         </div>
      </section>

      {/* ========================================================
          FEATURES GRID (Dark Theme)
         ======================================================== */}
      <section className="py-24 px-6 md:px-24 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="mb-16">
               <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-gray-900">
                  Software <span className="text-aureole">Features</span>
               </h2>
               <p className="text-gray-500 max-w-xl text-lg">
                  {SOFTWARE_CONTENT.featuresIntro}
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
               {SOFTWARE_CONTENT.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-aureole/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                     <div className="text-aureole flex-shrink-0">
                        <CheckCircle2 size={18} />
                     </div>
                     <span className="text-sm font-medium text-gray-600">{feature}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ========================================================
          BENEFITS (Why Choose SIS-APP?)
         ======================================================== */}
      <section className="py-24 px-6 md:px-24 bg-surface border-t border-gray-200">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-16 text-center">
               Why Choose <span className="text-aureole">SIS-APP?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {SOFTWARE_CONTENT.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                     <div className="h-12 w-12 bg-gray-50 rounded-lg flex items-center justify-center shadow-sm mb-6 text-aureole">
                        {idx === 0 && <ShieldCheck size={28} />}
                        {idx === 1 && <Lock size={28} />}
                        {idx === 2 && <MonitorCheck size={28} />}
                        {idx === 3 && <Database size={28} />}
                        {idx === 4 && <Server size={28} />}
                        {idx === 5 && <Laptop size={28} />}
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">{benefit.title}</h3>
                     <p className="text-gray-600 leading-relaxed text-sm">
                        {benefit.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ========================================================
          FOOTER (Light Theme)
         ======================================================== */}
      <footer className="w-full py-12 bg-gray-50 border-t border-gray-200 text-gray-900">
         
         {/* Specific Contact CTA for Software Page */}
         <div className="container mx-auto px-6 md:px-24 mb-16 border-b border-gray-200 pb-16">
            <div className="bg-aureole text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-aureole/20">
               <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{SOFTWARE_CONTENT.contact.title}</h3>
                  <p className="text-aureole-100 text-sm md:text-base opacity-90">{SOFTWARE_CONTENT.contact.tagline}</p>
               </div>
               <div className="flex flex-col gap-2 items-end min-w-max">
                  <a href={`mailto:${SOFTWARE_CONTENT.contact.email}`} className="text-white font-bold hover:underline text-lg">{SOFTWARE_CONTENT.contact.email}</a>
                  <a href={`tel:${SOFTWARE_CONTENT.contact.phone}`} className="text-white/80 font-medium">{SOFTWARE_CONTENT.contact.phone}</a>
               </div>
            </div>
         </div>

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

export default Software;