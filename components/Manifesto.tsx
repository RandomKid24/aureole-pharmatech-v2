import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { MANIFESTO_ITEMS } from '../constants';

const Manifesto: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F8F9FA] py-32 px-6 md:px-24 border-t border-gray-200" id="manifesto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        
        <div className="w-full md:w-1/3">
           <h2 className="text-aureole text-sm font-bold tracking-widest uppercase mb-4">Our Values</h2>
           <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 leading-tight">
             The Aureole<br/>Standard
           </h3>
           <p className="mt-8 text-gray-500 leading-relaxed font-light">
             When you choose Aureole Pharma Tech, you're choosing a partner dedicated to the pursuit of excellence. Our name reflects our promise to deliver pharmaceutical technology and services that are nothing short of exceptional. With us, you'll find the brilliance of innovation and the radiance of excellence in every aspect of our work.
           </p>
        </div>

        <div className="w-full md:w-2/3">
          <ul className="flex flex-col border-t border-gray-200">
            {MANIFESTO_ITEMS.map((item, index) => (
              <li 
                key={index}
                className="border-b border-gray-200 group relative cursor-default"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`py-8 md:py-12 flex items-start md:items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${hoveredIndex === index ? 'bg-white px-8 -mx-8 shadow-xl shadow-aureole/5 rounded-xl border-transparent z-10' : 'bg-transparent px-0 mx-0'}`}>
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className={`text-4xl md:text-6xl font-black transition-all duration-500 w-16 select-none ${hoveredIndex === index ? 'text-aureole' : 'text-gray-100 group-hover:text-gray-200'}`}>
                      {item.letter}
                    </span>
                    <div>
                      <h4 className={`text-xl md:text-3xl font-bold tracking-tight transition-colors duration-500 ${hoveredIndex === index ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'}`}>
                        {item.title}
                      </h4>
                      <div 
                        className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                          hoveredIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                        }`}
                      >
                         <p className="text-gray-500 max-w-lg leading-relaxed text-sm md:text-base font-light">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`transform transition-all duration-500 p-2 rounded-full ${hoveredIndex === index ? 'rotate-45 text-aureole bg-aureole/5 scale-125' : 'text-gray-300 bg-transparent'}`}>
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