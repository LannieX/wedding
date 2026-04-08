import { Heart, Utensils } from "lucide-react";
import { useInView } from "react-intersection-observer";

const EventItem = ({ event, index, isLast }: { event: any, index: number, isLast: boolean }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="flex mb-8 last:mb-0 relative">
      {!isLast && (
        <div className="absolute left-[23px] top-[46px] w-[1px] h-[calc(100%-20px)] bg-[#825e28]/30"></div>
      )}
      <div 
        className={`flex-shrink-0 w-12 h-12 rounded-full border border-[#825e28]/50 flex items-center justify-center bg-[#fdfaf5] z-10 shadow-sm transition-all duration-700 
        ${inView ? "animate__animated animate__zoomIn" : "opacity-0"}`}
      >
        <span className="text-lg text-[#825e28]">{event.icon}</span>
      </div>
      <div 
        style={{ animationDelay: "0.2s" }}
        className={`ml-6 flex-1 bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-1000 
        ${inView ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-[family:var(--font-montserrat)] text-[#825e28]">
            {event.title}
          </h3>
          <span className="bg-[#825e28]/10 px-3 py-1 rounded-full text-xs font-bold tracking-tighter text-[#825e28]">
            {event.time}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[#825e28]/80 italic">
          {event.description}
        </p>
      </div>
    </div>
  );
};

export const Program = () => {
  const events = [
    {
      time: "09:00",
      title: "Wedding Ceremony",
      description: "We invite you to witness this momentous occasion, to record a new chapter in our lives as we begin our vows together.",
      icon: <Heart size={20} />,
    },
    {
      time: "11:00",
      title: "Eating",
      description: "Dining is available until 6 pm.",
      icon: <Utensils size={20} />,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-16 text-[#825e28]">
      <HeaderSection />

      <div className="relative">
        {events.map((event, index) => (
          <EventItem 
            key={index} 
            event={event} 
            index={index} 
            isLast={index === events.length - 1} 
          />
        ))}
      </div>
    </div>
  );
};

const HeaderSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}>
      <h2 className="text-4xl font-serif italic mb-2">Program of the Day</h2>
      <p className="text-sm tracking-widest text-[#825e28]/70">Join us through every moment of our celebration</p>
    </div>
  );
};