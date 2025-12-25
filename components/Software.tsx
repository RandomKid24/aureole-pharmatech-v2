import React, { useState, useEffect } from 'react';
import { SOFTWARE_CONTENT } from '../constants';
import { 
  CheckCircle2, 
  Server, 
  Database, 
  Lock, 
  ShieldCheck, 
  Laptop, 
  LayoutGrid, 
  Cpu, 
  Globe, 
  Key, 
  FileText,
  Activity,
  UserCheck,
  Zap
} from 'lucide-react';

const Software: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featureGroups = [
    {
      title: "Regulatory Compliance",
      icon: <ShieldCheck className="text-aureole" />,
      features: ["Secured Audit Trail", "E-Records & E-Signature", "21 CFR Part 11 Compliance", "Time Synchronization", "Guaranteed Data Integrity"]
    },
    {
      title: "System Control",
      icon: <Cpu className="text-aureole" />,
      features: ["Real Time Equipment Display", "Real Time Parameter Setting", "Unlimited Equipment Connectivity", "Communication Fail Alerts", "Two Way Door Control"]
    },
    {
      title: "Data Analytics",
      icon: <Activity className="text-aureole" />,
      features: ["MKT Calculation", "Graphical Analysis", "Master & Scanner Reports", "Advanced Search Facility", "Offline Analysis", "PDF Data Export"]
    },
    {
      title: "User Security",
      icon: <UserCheck className="text-aureole" />,
      features: ["Multilevel Authorization", "Alpha Numeric Password", "Department Wise Access", "Auto Logout", "Numeric/Biometric Door Access"]
    }
  ];

  return (
    <div className="bg-surface w-full overflow-x-hidden pb-32">
      
      <section className="relative w-full min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-32 md:pt-48 pb-20">
         <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0 opacity-50"></div>
         <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
              style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
         </div>
         <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none select-none z-0">
            <span className="text-[40vw] font-black text-gray-900/5 leading-none">I</span>
         </div>

         <div className="container mx-auto px-6 md:px-24 relative z-10 flex-grow flex flex-col justify-start">
            <div className="flex flex-col items-start w-full">
               <div className={`mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-4">
                     <span className="w-12 h-px bg-aureole"></span>
                     <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-aureole">
                        Enterprise Quality Management
                     </span>
                  </div>
               </div>
               
               <div className="relative w-full">
                  <h1 className="text-[16vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter text-gray-900 select-none uppercase mix-blend-darken flex flex-col">
                     <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                        SIS-
                     </span>
                     <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                        INTEGRA
                     </span>
                  </h1>
               </div>
               
               <div className="mt-20 md:mt-32 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-t border-gray-200/60 pt-12">
                  <div className={`lg:col-span-7 transition-all duration-1000 delay-500 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                     <p className="text-xl md:text-3xl text-gray-500 font-light leading-snug max-w-3xl">
                       {SOFTWARE_CONTENT.hero.subtitle} Ensuring <span className="text-gray-900 font-medium">regulatory harmony</span> and total data integrity.
                     </p>
                  </div>
                  <div className="hidden lg:block lg:col-span-1"></div>
                  <div className={`lg:col-span-4 flex flex-col items-center lg:items-end gap-6 transition-all duration-1000 delay-700 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                     <div className="flex flex-col items-end">
                       <div className="text-4xl md:text-6xl font-black mb-1 text-gray-900">21 CFR</div>
                       <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Part 11 Compliant</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Reorganized Features Section */}
      <section className="py-32 px-6 md:px-24 bg-white relative z-20 -mt-10 rounded-t-[4rem]">
         <div className="max-w-7xl mx-auto">
            <header className="mb-24 text-center">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-gray-900 mb-6">
                 Software <span className="text-aureole">Ecosystem</span>
               </h2>
               <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
                 SIS-APP provides an integrated suite of features designed for the most rigorous pharmaceutical environments.
               </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {featureGroups.map((group, idx) => (
                  <div key={idx} className="bg-surface p-10 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-aureole group-hover:text-white transition-all duration-500">
                           {group.icon}
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">{group.title}</h3>
                     </div>
                     <ul className="space-y-4">
                        {group.features.map((f, fidx) => (
                           <li key={fidx} className="flex items-center gap-4">
                              <Zap size={14} className="text-aureole/30 group-hover:text-aureole transition-colors" />
                              <span className="text-gray-600 font-medium">{f}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Modern System Architecture UI */}
      <section className="py-32 px-6 md:px-24 bg-[#0B1221] text-white relative overflow-hidden rounded-[4rem] mx-6 md:mx-24 my-24">
         <div className="absolute inset-0 opacity-5" style={{
             backgroundImage: 'radial-gradient(#0F85C5 1px, transparent 1px)',
             backgroundSize: '40px 40px'
         }}></div>
         <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
               <div className="inline-block px-4 py-2 bg-aureole/10 text-aureole rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-aureole/20">
                  Infrastructure
               </div>
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                  Scalable <span className="text-aureole">Backbone</span>
               </h2>
               <div className="space-y-8">
                  <div className="flex gap-6">
                     <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-aureole">
                        <Database size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold mb-2">Centralized MySQL</h4>
                        <p className="text-gray-400 text-sm">Industrial-grade data persistence with redundant backup protocols and cold storage options.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-aureole">
                        <Globe size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold mb-2">Web-Native Access</h4>
                        <p className="text-gray-400 text-sm">Clientless architecture ensuring total compatibility across modern enterprise web standards.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="relative">
               <div className="aspect-square bg-white/5 rounded-full border border-white/10 flex items-center justify-center p-20 animate-pulse">
                  <div className="w-full h-full bg-aureole/10 rounded-full border border-aureole/20 flex items-center justify-center">
                     <Laptop size={120} className="text-aureole/50" strokeWidth={1} />
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Software;