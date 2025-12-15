import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
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
      <div className="flex-grow flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
           <span className="text-[20vw] font-black text-gray-900">TALK</span>
        </div>

        <div className="text-center z-10 mb-12">
           <p className="text-gray-500 mb-4 tracking-widest uppercase text-sm">Excellence in Pharmaceutical Technology</p>
           <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter">
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
            className="w-48 h-48 md:w-64 md:h-64 bg-aureole rounded-full flex flex-col items-center justify-center text-white transition-transform duration-100 ease-out hover:scale-105 shadow-2xl z-20"
          >
             <span className="text-xl font-bold tracking-tight">Let's Talk</span>
             <ArrowRight className="mt-2 w-6 h-6" />
          </button>
        </div>

      </div>

      {/* ========================================================
          FOOTER INFO
          Data pulled from constants.ts -> CONTACT_INFO
         ======================================================== */}
      <div className="w-full py-12 border-t border-gray-100 bg-gray-50">
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
    </footer>
  );
};

export default MagneticCTA;