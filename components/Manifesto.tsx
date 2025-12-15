import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { MANIFESTO_ITEMS } from '../constants';

const Manifesto: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface py-32 px-6 md:px-24" id="manifesto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        
        {/* ========================================================
            LEFT COLUMN: SECTION TITLE & INTRO
            Edit the introductory text below directly.
           ======================================================== */}
        <div className="w-full md:w-1/3">
           <h2 className="text-aureole text-sm font-bold tracking-widest uppercase mb-4">Our Values</h2>
           <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 leading-tight">
             The Aureole<br/>Standard
           </h3>
           <p className="mt-8 text-gray-500 leading-relaxed">
             When you choose Aureole Pharma Tech, you're choosing a partner dedicated to the pursuit of excellence. Our name reflects our promise to deliver pharmaceutical technology and services that are nothing short of exceptional. With us, you'll find the brilliance of innovation and the radiance of excellence in every aspect of our work.
           </p>
        </div>

        {/* ========================================================
            RIGHT COLUMN: INTERACTIVE ACCORDION LIST
            Data is pulled from constants.ts -> MANIFESTO_ITEMS
           ======================================================== */}
        <div className="w-full md:w-2/3">
          <ul className="flex flex-col border-t border-gray-200">
            {MANIFESTO_ITEMS.map((item, index) => (
              <li 
                key={index}
                className="border-b border-gray-200 group relative cursor-default"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="py-8 md:py-10 flex items-start md:items-center justify-between transition-colors duration-300 group-hover:bg-white group-hover:px-8 -mx-8 px-8">
                  <div className="flex items-center gap-8 md:gap-16">
                    {/* The Letter (A, U, R, E, O, L, E) */}
                    <span className="text-4xl md:text-5xl font-black text-gray-200 group-hover:text-aureole transition-colors duration-300 w-12">
                      {item.letter}
                    </span>
                    <div>
                      {/* The Value Title */}
                      <h4 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight">
                        {item.title}
                      </h4>
                      {/* The Description (Revealed on Hover) */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          hoveredIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                        }`}
                      >
                         <p className="text-gray-500 max-w-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Plus Icon Indicator */}
                  <div className={`transform transition-transform duration-300 ${hoveredIndex === index ? 'rotate-45 text-aureole' : 'text-gray-300'}`}>
                    <Plus size={24} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Manifesto;