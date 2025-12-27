import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  History, 
  PartyPopper,
  Maximize2,
  LayoutGrid
} from 'lucide-react';
import { EVENTS } from '../CompanyData';
import { EventItem } from '../types';

interface EventsProps {
  onNavigate: (page: any) => void;
}

const Events: React.FC<EventsProps> = ({ onNavigate }) => {
  const [mounted, setMounted] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openGallery = (event: EventItem) => {
    setSelectedEvent(event);
    setActiveImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedEvent) {
      setActiveImageIndex((prev) => (prev + 1) % selectedEvent.gallery.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedEvent) {
      setActiveImageIndex((prev) => (prev - 1 + selectedEvent.gallery.length) % selectedEvent.gallery.length);
    }
  };

  const upcomingEvents = EVENTS.filter(e => e.type === 'upcoming');
  const pastExhibitions = EVENTS.filter(e => e.type === 'exhibition');
  const corporateEvents = EVENTS.filter(e => e.type === 'corporate');

  return (
    <div className="bg-surface w-full overflow-x-hidden min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex flex-col bg-[#F8F9FA] overflow-hidden pt-32 md:pt-48 pb-20">
        <div className="absolute top-0 left-6 md:left-24 w-px h-full bg-gray-200 z-0 opacity-50"></div>
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
             style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 pointer-events-none select-none z-0">
           <span className="text-[40vw] font-black text-gray-900/5 leading-none">E</span>
        </div>

        <div className="container mx-auto px-6 md:px-24 relative z-10 flex-grow flex flex-col justify-start">
          <div className="flex flex-col items-start w-full">
            
            <div className={`flex items-center gap-3 mb-6 transition-all duration-700 transform ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <button onClick={() => onNavigate('home')} className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-aureole transition-colors">HOME</button>
              <span className="text-aureole font-black">/</span>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-900">EVENTS</span>
            </div>

            <div className={`mb-12 transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <div className="flex items-center gap-4">
                  <span className="w-12 h-px bg-aureole"></span>
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-aureole">
                     Innovation Worldwide
                  </span>
               </div>
            </div>

            <div className="relative w-full">
              <h1 className="text-[16vw] md:text-[14vw] font-black leading-[0.75] tracking-tighter text-gray-900 select-none uppercase flex flex-col">
                 <span className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                   UPCOMING
                 </span>
                 <span className={`block text-aureole transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] self-end md:mr-20 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                   EXHIBITIONS
                 </span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Spotlight Grid */}
      <section className="py-24 px-6 md:px-24 bg-white relative z-10 -mt-20 rounded-t-[4rem]">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-20">
               {upcomingEvents.map((event, idx) => (
                  <div key={event.id} className={`group relative bg-surface rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-700 flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                     <div className="lg:w-1/2 relative aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                     </div>
                     <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-8">
                           <span className="px-4 py-1.5 bg-aureole/10 text-aureole text-[10px] font-black uppercase tracking-widest rounded-full border border-aureole/20">Upcoming Series</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-6 group-hover:text-aureole transition-colors">
                           {event.title}
                        </h3>
                        <div className="space-y-4 mb-10">
                           <div className="flex items-center gap-4 text-gray-500">
                              <Calendar className="text-aureole shrink-0" size={20} />
                              <span className="text-lg font-medium">{event.date}</span>
                           </div>
                           <div className="flex items-center gap-4 text-gray-500">
                              <MapPin className="text-aureole shrink-0" size={20} />
                              <span className="text-lg font-medium">{event.location}</span>
                           </div>
                           {event.stallInfo && (
                              <div className="flex items-center gap-4 text-gray-900">
                                 <LayoutGrid className="text-aureole shrink-0" size={20} />
                                 <span className="text-lg font-bold tracking-tight uppercase">{event.stallInfo}</span>
                              </div>
                           )}
                        </div>
                        <p className="text-gray-500 text-lg font-light leading-relaxed mb-10 max-w-xl">
                           {event.description}
                        </p>
                        <button 
                          onClick={() => openGallery(event)}
                          className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-gray-900 group-hover:text-aureole transition-all"
                        >
                           Preview Gallery <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Past Exhibitions Grid */}
      <section className="py-32 px-6 md:px-24 bg-surface" id="exhibitions">
         <div className="max-w-7xl mx-auto">
            <header className="mb-20">
               <div className="flex items-center gap-4 mb-6">
                  <History className="text-aureole" size={32} />
                  <h2 className="text-5xl font-black uppercase tracking-tighter text-gray-900">Past <span className="text-aureole">Exhibitions</span></h2>
               </div>
               <p className="text-gray-400 font-medium">Reliving our presence at global pharmaceutical summits and lab technology forums.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {pastExhibitions.map((event) => (
                  <div key={event.id} className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                     <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
                        <img 
                          src={event.imageUrl} 
                          alt={event.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <button 
                          onClick={() => openGallery(event)}
                          className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                        >
                           <Maximize2 size={20} />
                        </button>
                     </div>
                     <div className="p-8 flex-grow flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                           <span className="text-[10px] font-black text-aureole uppercase tracking-widest">{event.date}</span>
                           <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[8px] font-black uppercase rounded-full tracking-tighter">Completed</span>
                        </div>
                        <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4 group-hover:text-aureole transition-colors leading-tight">{event.title}</h4>
                        <div className="flex items-center gap-2 text-gray-400 mb-6">
                           <MapPin size={14} />
                           <span className="text-xs font-medium">{event.location}</span>
                        </div>
                        <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-2 mb-6">{event.description}</p>
                        <button 
                          onClick={() => openGallery(event)}
                          className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 group-hover:text-aureole transition-colors"
                        >
                          View Gallery <ArrowRight size={14} />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Corporate Events Section */}
      <section className="py-32 px-6 md:px-24 bg-white rounded-b-[4rem] mb-32">
         <div className="max-w-7xl mx-auto">
            <header className="mb-20">
               <div className="flex items-center gap-4 mb-6">
                  <PartyPopper className="text-aureole" size={32} />
                  <h2 className="text-5xl font-black uppercase tracking-tighter text-gray-900">Past <span className="text-aureole">Events</span></h2>
               </div>
               <p className="text-gray-400 font-medium max-w-2xl">Milestones, celebrations, and corporate achievements beyond the laboratory floor.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {corporateEvents.map((event) => (
                  <div key={event.id} className="group relative aspect-video rounded-[3rem] overflow-hidden cursor-pointer" onClick={() => openGallery(event)}>
                     <img 
                       src={event.imageUrl} 
                       alt={event.title} 
                       className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                     <div className="absolute inset-0 p-12 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                        <span className="text-aureole text-xs font-black uppercase tracking-[0.4em] mb-4">{event.date}</span>
                        <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-4">{event.title}</h3>
                        <p className="text-white/70 font-light text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">{event.description}</p>
                     </div>
                     <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-gray-900 transition-all">
                        <Maximize2 size={20} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Lightbox Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col animate-in fade-in duration-500">
          <div className="flex items-center justify-between p-6 md:p-10">
             <div className="flex flex-col">
                <span className="text-aureole text-[10px] font-black uppercase tracking-widest mb-1">{selectedEvent.date}</span>
                <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">{selectedEvent.title}</h3>
             </div>
             <button onClick={closeGallery} className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                <X size={32} />
             </button>
          </div>

          <div className="flex-grow flex items-center justify-center relative px-4 md:px-20 overflow-hidden">
             <button onClick={prevImage} className="absolute left-6 md:left-12 z-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group">
                <ChevronLeft size={48} className="group-hover:-translate-x-1 transition-transform" />
             </button>
             
             <div className="relative w-full h-full flex items-center justify-center py-10">
                <img 
                  key={activeImageIndex}
                  src={selectedEvent.gallery[activeImageIndex]} 
                  alt="Gallery" 
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-500"
                />
             </div>

             <button onClick={nextImage} className="absolute right-6 md:right-12 z-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group">
                <ChevronRight size={48} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>

          <div className="p-10 flex flex-col items-center gap-6">
             <div className="flex gap-2">
                {selectedEvent.gallery.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-500 ${activeImageIndex === idx ? 'w-12 bg-aureole' : 'w-4 bg-white/20'}`}
                  />
                ))}
             </div>
             <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                Image {activeImageIndex + 1} of {selectedEvent.gallery.length}
             </span>
          </div>
        </div>
      )}

    </div>
  );
};

export default Events;