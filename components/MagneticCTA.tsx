import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const MagneticCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !buttonRef.current) return;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      const maxDist = width / 2; 

      if (dist < maxDist) {
        const pullStrength = 0.4;
        setPosition({
          x: (x - centerX) * pullStrength,
          y: (y - centerY) * pullStrength
        });
      } else {
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
    <section className="bg-white flex flex-col justify-center border-t border-gray-100 overflow-hidden py-32" id="contact">
      {/* Large CTA Section */}
      <div className="container mx-auto px-6 relative flex flex-col items-center">
        
        {/* Background Decorative Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
           <span className="text-[20vw] font-black text-gray-900 select-none">TALK</span>
        </div>

        <div className="text-center z-10 mb-12 relative">
           <p className="text-aureole mb-4 tracking-[0.25em] uppercase text-[10px] font-bold bg-aureole/5 inline-block px-5 py-2.5 rounded-full border border-aureole/10">Excellence in Pharmaceutical Technology</p>
           <h2 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9] uppercase">
             Partner with<br/>Aureole
           </h2>
        </div>

        {/* Magnetic Button */}
        <div 
          ref={containerRef} 
          className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center cursor-pointer"
        >
          <button 
            ref={buttonRef}
            onClick={() => window.location.href = `mailto:${CONTACT_INFO.email}`}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            className="w-40 h-40 md:w-64 md:h-64 bg-aureole rounded-full flex flex-col items-center justify-center text-white transition-transform duration-200 ease-out hover:scale-110 shadow-[0_30px_70px_rgba(15,133,197,0.4)] z-20 border-[6px] border-white/10 backdrop-blur-sm group"
          >
             <span className="text-xl md:text-2xl font-black tracking-widest uppercase group-hover:tracking-[0.15em] transition-all duration-300">Let's Talk</span>
             <ArrowRight className="mt-2 w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MagneticCTA;