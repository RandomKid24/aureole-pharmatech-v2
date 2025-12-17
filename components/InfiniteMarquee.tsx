import React from 'react';

const InfiniteMarquee: React.FC = () => {
  return (
    <div className="w-full bg-aureole py-8 overflow-hidden relative border-y border-white/10 z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-3xl md:text-5xl font-black tracking-tight uppercase flex items-center gap-12 md:gap-16 px-6 md:px-8 text-white/90">
               <span>AUROBINDO</span>
               <span className="w-3 h-3 rounded-full bg-white/30"></span>
               <span>DABUR</span>
               <span className="w-3 h-3 rounded-full bg-white/30"></span>
               <span>INTAS</span>
               <span className="w-3 h-3 rounded-full bg-white/30"></span>
               <span>ERIS</span>
               <span className="w-3 h-3 rounded-full bg-white/30"></span>
               <span>TCG LIFESCIENCES</span>
               <span className="w-3 h-3 rounded-full bg-white/30"></span>
               <span>RECIPHARM</span>
               <span className="w-3 h-3 rounded-full bg-white/30"></span>
               <span>HETERO</span>
               <span className="w-3 h-3 rounded-full bg-white/30"></span>
               <span>MERIL</span>
               <span className="w-3 h-3 rounded-full bg-white/30"></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;