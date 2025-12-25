import React from 'react';

const InfiniteMarquee: React.FC = () => {
  // Metadata for brands extracted from the provided images
  const brandLogos = [
    { name: "Aurobindo", domain: "aurobindo.com" },
    { name: "Dabur", domain: "dabur.com" },
    { name: "Intas", domain: "intaspharma.com" },
    { name: "Eris", domain: "eris.co.in" },
    { name: "TCG Lifesciences", domain: "tcgls.com" },
    { name: "Recipharm", domain: "recipharm.com" },
    { name: "Hetero", domain: "heteroworld.com" },
    { name: "Meril", domain: "merillife.com" },
    { name: "Macleods", domain: "macleodspharma.com" },
    { name: "Ajanta Pharma", domain: "ajantapharma.com" },
    { name: "Akums", domain: "akums.in" },
    { name: "Alchem", domain: "alcheminternational.com" },
    { name: "Hamdard", domain: "hamdard.com" },
    { name: "Otsuka", domain: "otsuka.co.jp" },
    { name: "Indoco Remedies", domain: "indoco.com" },
    { name: "Themis Medicare", domain: "themismedicare.com" },
    { name: "Torque", domain: "torquepharma.com" },
    { name: "Unimark", domain: "unimarkremedies.com" },
    { name: "Anthem", domain: "anthembio.com" },
    { name: "Cohance", domain: "cohance.com" },
    { name: "Laxachem", domain: "laxachem.com" },
    { name: "Lee Pharma", domain: "leepharma.com" },
    { name: "Shamrock", domain: "shamrockpharma.com" },
    { name: "Pregna", domain: "pregna.com" },
    { name: "DifGen", domain: "difgen.com" }
  ];

  return (
    <div className="w-full bg-white py-12 md:py-20 overflow-hidden relative border-y border-gray-100 z-20">
      {/* Main marquee track - Rightward movement as requested */}
      <div className="flex whitespace-nowrap animate-marquee-right">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {brandLogos.map((brand, idx) => (
              <div key={idx} className="flex items-center gap-12 md:gap-24 px-12 md:px-20 group cursor-default">
                <div className="relative h-10 md:h-14 w-auto flex items-center justify-center">
                  <img 
                    src={`https://logo.clearbit.com/${brand.domain}`} 
                    alt={brand.name}
                    className="h-full w-auto object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      // Professional Fallback: If image fails, render stylized typography
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const span = document.createElement('span');
                        span.className = 'fallback-text text-2xl md:text-3xl font-black tracking-tighter uppercase text-gray-200 group-hover:text-aureole transition-all duration-500 whitespace-nowrap';
                        span.innerText = brand.name;
                        parent.appendChild(span);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Global styles for smooth rightward animation and play states */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-right {
          0% { transform: translate3d(-33.333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-right {
          animation: marquee-right 100s linear infinite;
          will-change: transform;
        }
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};

export default InfiniteMarquee;