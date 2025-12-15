import React, { useEffect, useState } from 'react';

// ========================================================
// HERO ANIMATED WORDS
// Edit these words to change the rotating headline.
// ========================================================
const WORDS = ["EXCELLENCE", "INTEGRITY", "INNOVATION"];

const Hero: React.FC = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  // Cycle through words every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row pt-20 md:pt-0">
      
      {/* ========================================================
          LEFT SIDE: TEXT CONTENT
         ======================================================== */}
      <div className="w-full md:w-1/2 bg-surface flex flex-col justify-center px-8 md:px-24 py-20 order-2 md:order-1">
        <h2 className="text-aureole font-bold tracking-widest text-sm mb-6 uppercase">Since 1996</h2>
        
        {/* Animated Headline */}
        <div className="h-32 md:h-48 relative overflow-hidden">
          {WORDS.map((word, index) => (
            <h1
              key={word}
              className={`absolute top-0 left-0 text-6xl md:text-8xl font-black tracking-tighter text-gray-900 transition-all duration-[1500ms] ease-in-out transform ${
                index === activeWordIndex 
                  ? 'opacity-100 translate-y-0' 
                  : index < activeWordIndex 
                    ? 'opacity-0 -translate-y-full' 
                    : 'opacity-0 translate-y-full'
              }`}
            >
              {word}
            </h1>
          ))}
        </div>

        {/* Subtitle / Description */}
        <p className="mt-8 text-xl text-gray-500 max-w-md leading-relaxed">
          Engineering Precision in Pharmaceutical Technology. Where excellence is not just a goal, it’s our guiding light.
        </p>

        {/* Quick Stats */}
        <div className="mt-12 flex gap-8">
           <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold text-gray-900">28 Years</span>
              <span className="text-xs uppercase tracking-wider text-gray-400">Experience</span>
           </div>
           <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold text-gray-900">ICH/21 CFR</span>
              <span className="text-xs uppercase tracking-wider text-gray-400">Compliant</span>
           </div>
        </div>
      </div>

      {/* ========================================================
          RIGHT SIDE: HERO IMAGE
          Edit the src attribute below to change the main hero image.
         ======================================================== */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2 overflow-hidden bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop" 
          alt="Pharmaceutical Laboratory" 
          className="w-full h-full object-cover"
        />
        {/* Overlay to blend image with brand color */}
        <div className="absolute inset-0 bg-aureole/10 mix-blend-multiply"></div>
      </div>
    </section>
  );
};

export default Hero;