import React, { useState, useEffect } from 'react';
import { SOFTWARE_CONTENT } from '../constants';
import { CheckCircle2, Server, Smartphone, Cloud, Users, MonitorCheck, Database, Lock, ShieldCheck, Laptop, LayoutGrid, Cpu, Globe, Key, ArrowRight } from 'lucide-react';

const Software: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-surface w-full overflow-x-hidden pt-20">
      
      {/* ========================================================
          HERO SECTION
         ======================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-[#F8F9FA] overflow-hidden pt-20">
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-start max-w-full md:max-w-[95vw]">
               
               <div className={`mb-4 md:mb-8 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <span className="inline-block text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-aureole border-b border-aureole pb-2 bg-white/50 backdrop-blur-sm pr-2">
                     {SOFTWARE_CONTENT.hero.badge}
                  </span>
               </div>
               
               <h1 className="text-[14vw] md:text-[12vw] font-black leading-[0.8] tracking-tighter text-gray-900 select-none flex flex-col items-start w-full uppercase mix-blend-multiply">
                  <span className={`block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                     SIS-
                  </span>
                  <span className={`block text-aureole transition-transform duration-1000 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                     APP
                  </span>
               </h1>
               
               <div className="mt-12 md:mt-16 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-t border-gray-200/60 pt-8 md:pt-12 bg-[#F8F9FA]/80 backdrop-blur-sm pl-0">
                  <div className={`max-w-2xl transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed">
                       {SOFTWARE_CONTENT.hero.subtitle}
                     </p>
                  </div>

                  <div className={`flex items-center gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                     <div className="flex flex-col items-end">
                       <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">v4.0</div>
                       <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Latest Release</div>
                     </div>
                  </div>
               </div>

            </div>
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
      <section className="py-24 px-6 md:px-24 bg-[#0B1221] text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{
             backgroundImage: 'radial-gradient(#0F85C5 1px, transparent 1px)',
             backgroundSize: '32px 32px'
         }}></div>

         <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16">
               <div className="w-full lg:w-1/2">
                  <div className="inline-block px-3 py-1 border border-aureole/30 rounded-full bg-aureole/10 text-aureole text-xs font-bold tracking-widest uppercase mb-6">
                     Technical Infrastructure
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                     System <span className="text-aureole">Architecture</span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-12">
                     The SIS-APP is engineered with a multi-tier architecture designed for high availability, data integrity, and regulatory compliance. It seamlessly connects laboratory equipment to a centralized secure server.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-aureole">
                           <Database size={20} />
                           <h4 className="font-bold text-white uppercase tracking-wider text-sm">Data Layer</h4>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           Centralized MySQL Database with automated backup protocols and encrypted storage for Audit Trails and MKT data.
                        </p>
                     </div>
                     <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-aureole">
                           <Globe size={20} />
                           <h4 className="font-bold text-white uppercase tracking-wider text-sm">Application Layer</h4>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           Web-based interface compatible with Chrome, Edge, and Firefox. Supports multi-client access via TCP/IP.
                        </p>
                     </div>
                     <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-aureole">
                           <Cpu size={20} />
                           <h4 className="font-bold text-white uppercase tracking-wider text-sm">Device Layer</h4>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           Direct connectivity with Stability Chambers, Incubators, and Data Loggers via RS-485/Modbus.
                        </p>
                     </div>
                     <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-aureole">
                           <Key size={20} />
                           <h4 className="font-bold text-white uppercase tracking-wider text-sm">Security Layer</h4>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           21 CFR Part 11 compliant. User authentication, role-based access control, and digital signatures.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="aspect-[4/3] w-full bg-gray-900/50 rounded-xl border border-dashed border-gray-700 flex flex-col items-center justify-center relative overflow-hidden group hover:border-aureole/40 transition-all duration-500 p-8 text-center">
                     <div className="bg-gray-800 rounded-full p-6 mb-6 group-hover:scale-110 transition-transform duration-500">
                        <LayoutGrid size={48} className="text-gray-600 group-hover:text-aureole transition-colors duration-500" />
                     </div>
                     <h3 className="text-white font-bold text-lg mb-2">Architecture Diagram</h3>
                     <p className="text-gray-500 text-sm max-w-sm">
                        Place your system architecture diagram here. Recommended size: 800x600px, PNG or SVG format.
                     </p>
                     <div className="mt-6 px-4 py-2 rounded border border-gray-700 text-xs text-gray-400 font-mono bg-black/20">
                        Image Placeholder
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ========================================================
          FEATURES GRID
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
          BENEFITS
         ======================================================== */}
      <section className="py-24 px-6 md:px-24 bg-surface border-t border-gray-200 pb-32">
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

      {/* Page-Specific Software CTA (Pre-footer) */}
      <section className="container mx-auto px-6 md:px-24 pb-24">
         <div className="bg-aureole text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-aureole/20">
            <div>
               <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{SOFTWARE_CONTENT.contact.title}</h3>
               <p className="text-aureole-100 text-sm md:text-base opacity-90">{SOFTWARE_CONTENT.contact.tagline}</p>
            </div>
            <div className="flex flex-col gap-2 md:items-end min-w-max">
               <a href={`mailto:${SOFTWARE_CONTENT.contact.email}`} className="text-white font-bold hover:underline text-lg">{SOFTWARE_CONTENT.contact.email}</a>
               <a href={`tel:${SOFTWARE_CONTENT.contact.phone}`} className="text-white/80 font-medium">{SOFTWARE_CONTENT.contact.phone}</a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Software;