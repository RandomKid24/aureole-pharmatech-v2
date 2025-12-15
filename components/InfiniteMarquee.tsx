import React from 'react';
import { MARQUEE_TEXT } from '../constants';
import { Boxes, Zap, Shield, Microscope, Globe } from 'lucide-react';

const InfiniteMarquee: React.FC = () => {
  return (
    <div className="w-full bg-aureole text-white py-6 overflow-hidden relative flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center mx-4">
            <span className="text-lg font-bold tracking-widest uppercase flex items-center gap-8">
               {MARQUEE_TEXT}
               <Boxes className="w-6 h-6 inline-block" />
               <span className="mx-4"></span>
               {MARQUEE_TEXT}
               <Zap className="w-6 h-6 inline-block" />
               <span className="mx-4"></span>
               {MARQUEE_TEXT}
               <Shield className="w-6 h-6 inline-block" />
               <span className="mx-4"></span>
               {MARQUEE_TEXT}
               <Microscope className="w-6 h-6 inline-block" />
               <span className="mx-4"></span>
               {MARQUEE_TEXT}
               <Globe className="w-6 h-6 inline-block" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMarquee;