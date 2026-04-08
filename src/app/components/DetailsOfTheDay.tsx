import { MapPin, Calendar, Clock, Navigation, CalendarPlus } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const DetailsOfTheDay = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto px-6 py-16 text-[#825e28]">
      <div className={`text-center mb-10 transition-all duration-1000 ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}>
        <h2 className="text-4xl font-serif italic mb-2">Details of the Day</h2>
        <p className="text-sm tracking-widest text-[#825e28]/70">Everything you need to know about our special day</p>
      </div>

      <div className={`bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/40 transition-all duration-1000 delay-300 ${inView ? "animate__animated animate__fadeInUp" : "opacity-0"}`}>
        <div className="w-full h-[300px] md:h-[450px] p-4 md:p-6">
          <img 
            src="/ring.jpg"
            alt="Location Map"
            className="w-full h-full object-cover rounded-2xl shadow-inner"
          />
        </div>

        <div className="px-8 pb-10 flex flex-col items-start text-left">
          <h3 className="text-2xl font-bold font-[family:var(--font-montserrat)] mb-1">Location</h3>
          <p className="text-[#825e28]/80 mb-8">PuPo, Rueso, Narathiwat</p>
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#825e28]/10 flex items-center justify-center">
                <MapPin size={20} className="text-[#825e28]" />
              </div>
              <p className={`text-sm font-medium font-[family:var(--font-montserrat)] ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}>PuPo, Rueso, Narathiwat, Thailand</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#825e28]/10 flex items-center justify-center">
                <Calendar size={20} className="text-[#825e28]" />
              </div>
              <p className={`text-sm font-medium font-[family:var(--font-montserrat)] ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}>Saturday, May 30, 2026</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#825e28]/10 flex items-center justify-center">
                <Clock size={20} className="text-[#825e28]" />
              </div>
              <p className={`text-sm font-medium font-[family:var(--font-montserrat)] ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}>From 09:00 AM</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10">
            <a 
              href="https://www.google.com/maps?q=6.4201110,101.5519720"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-[#b18c5d] hover:bg-[#825e28] text-white py-4 px-6 rounded-full transition-all shadow-md group font-bold text-sm"
            >
              <Navigation size={18} className="group-hover:animate-bounce" />
              How to get there
            </a>
            
            <button 
              className="flex items-center justify-center gap-2 border-2 border-[#b18c5d] text-[#b18c5d] hover:bg-[#b18c5d]/10 py-4 px-6 rounded-full transition-all font-bold text-sm"
            >
              <CalendarPlus size={18} />
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};