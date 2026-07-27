import { Heart, Utensils } from "lucide-react";
import { useInView } from "react-intersection-observer";

const EventItem = ({ event, index, isLast }: { event: any, index: number, isLast: boolean }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="flex mb-8 last:mb-0 relative font-thai">
      {!isLast && (
        <div className="absolute left-[23px] top-[46px] w-[1px] h-[calc(100%-20px)] bg-[#66261d]/30"></div>
      )}
      <div 
        className={`flex-shrink-0 w-12 h-12 rounded-full border border-[#66261d]/50 flex items-center justify-center bg-[#fdfaf5] z-10 shadow-sm transition-all duration-700 
        ${inView ? "animate__animated animate__zoomIn" : "opacity-0"}`}
      >
        <span className="text-lg text-[#66261d]">{event.icon}</span>
      </div>
      <div 
        style={{ animationDelay: "0.2s" }}
        className={`ml-6 flex-1 bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-1000 
        ${inView ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-[family:var(--font-montserrat)] text-[#66261d]">
            {event.title}
          </h3>
          <span className="bg-[#66261d]/10 px-3 py-1 rounded-full text-[14px] font-semibold tracking-tighter text-[#66261d]">
            {event.time}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-[#66261d]/80">
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
      title: "พิธีแต่งงาน",
      description: "เราขอเชิญทุกท่านมาร่วมเป็นสักขีพยานในโอกาสอันสำคัญยิ่งนี้ เพื่อร่วมบันทึกบทใหม่แห่งชีวิต ในขณะที่เราเริ่มต้นกล่าวคำมั่นสัญญาต่อกัน",
      icon: <Heart size={20} />,
    },
    {
      time: "11:00",
      title: "รับประทานอาหาร",
      description: "สามารถรับประทานอาหารได้จนถึงเวลา 18.00 น.",
      icon: <Utensils size={20} />,
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-5 text-[#66261d]">
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