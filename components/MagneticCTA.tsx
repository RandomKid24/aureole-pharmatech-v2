import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const MagneticCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // ========================================================
  // MOUSE MAGNETIC EFFECT LOGIC
  // ========================================================
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !buttonRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      const maxDist = width / 2; // Activation radius

      if (dist < maxDist) {
        // Pull button towards cursor
        const pullStrength = 0.4;
        setPosition({
          x: (x - centerX) * pullStrength,
          y: (y - centerY) * pullStrength
        });
      } else {
        // Reset position
        setPosition({ x: 0, y: 0 });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', () => setPosition({ x: 0, y: 0 }));
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <footer className="bg-white min-h-[80vh] flex flex-col justify-between border-t border-gray-200" id="contact">
      {/* ========================================================
          LARGE CTA SECTION
         ======================================================== */}
      <div className="flex-grow flex flex-col items-center justify-center relative overflow-hidden py-24">
        
        {/* Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
           <span className="text-[20vw] font-black text-gray-900 select-none">TALK</span>
        </div>

        <div className="text-center z-10 mb-12 relative">
           <p className="text-aureole mb-4 tracking-[0.2em] uppercase text-xs font-bold bg-aureole/5 inline-block px-4 py-2 rounded-full">Excellence in Pharmaceutical Technology</p>
           <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9]">
             Partner with<br/>Aureole
           </h2>
        </div>

        {/* Magnetic Button */}
        <div 
          ref={containerRef} 
          className="relative w-[400px] h-[400px] flex items-center justify-center cursor-pointer"
        >
          <button 
            ref={buttonRef}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            className="w-48 h-48 md:w-64 md:h-64 bg-aureole rounded-full flex flex-col items-center justify-center text-white transition-transform duration-200 ease-out hover:scale-110 shadow-[0_20px_60px_rgba(15,133,197,0.4)] z-20 border-[6px] border-white/10 backdrop-blur-sm group"
          >
             <span className="text-2xl font-black tracking-tight group-hover:tracking-wide transition-all duration-300">Let's Talk</span>
             <ArrowRight className="mt-2 w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={3} />
          </button>
        </div>

      </div>

      {/* ========================================================
          LOCATION MAP
         ======================================================== */}
      <section className="h-[250px] w-full bg-gray-200 relative group border-t border-gray-200">
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
          FOOTER INFO
          Data pulled from constants.ts -> CONTACT_INFO
         ======================================================== */}
      <div className="w-full py-16 border-t border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col xl:flex-row justify-between items-start gap-12 mb-12">
             
             {/* Headquarters */}
             <div className="text-gray-500 text-sm leading-relaxed max-w-sm">
               <h4 className="text-gray-900 font-bold uppercase tracking-widest mb-4">Headquarters</h4>
               <p className="mb-1">{CONTACT_INFO.address}</p>
               <p className="mb-1">{CONTACT_INFO.phone}</p>
               <p className="text-aureole font-medium">{CONTACT_INFO.email}</p>
             </div>

             {/* Links & Newsletter Wrapper */}
             <div className="flex flex-col md:flex-row gap-12 md:gap-24 w-full xl:w-auto">
                 
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

                 {/* Newsletter */}
                 <div className="flex flex-col items-start gap-4 w-full md:w-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Stay Updated</span>
                    <div className="relative w-full md:w-80 group">
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full bg-white border border-gray-200 px-6 py-4 rounded-full text-sm outline-none focus:border-aureole focus:ring-4 focus:ring-aureole/5 transition-all shadow-sm group-hover:border-gray-300 pr-14"
                      />
                      <button className="absolute top-1/2 -translate-y-1/2 right-2 w-10 h-10 bg-aureole rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg transform active:scale-95">
                        <Send size={16} className="-ml-0.5" />
                      </button>
                    </div>
                 </div>
             </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest pt-8 border-t border-gray-200">
             <div>&copy; 2024 Aureole Pharmatech. All rights reserved.</div>
             <div className="flex gap-8 mt-4 md:mt-0">
               <a href="#" className="hover:text-aureole transition-colors">Privacy</a>
               <a href="#" className="hover:text-aureole transition-colors">Terms</a>
               <a href="#" className="hover:text-aureole transition-colors">Sitemap</a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MagneticCTA;