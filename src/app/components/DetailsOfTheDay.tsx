import { MapPin, Calendar, Clock, Navigation, CalendarPlus } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const DetailsOfTheDay = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto px-6 py-10 text-[#66261d]">
      <div className={`text-center mb-10 transition-all font-thai duration-1000 ${inView ? "animate__animated animate__fadeInRight" : "opacity-0"}`}>
        <h2 className="text-2xl mb-2">กำหนดการและรายละเอียดงาน</h2>
        <p className="text-sm tracking-widest text-[#66261d]/70">รายละเอียดต่างๆ สำหรับวันพิเศษที่เราอยากแบ่งปันกับทุกๆท่าน</p>
      </div>

      <div className={`bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/40 transition-all duration-1000 delay-300 ${inView ? "animate__animated animate__fadeInUp" : "opacity-0"}`}>
        <div className="w-full h-[300px] md:h-[450px] p-4 md:p-6">
          <img 
            src="/collection/col17.jpg"
            alt="Location Map"
            className="w-full h-full object-cover rounded-2xl shadow-inner"
          />
        </div>
        <div className="mt-5 px-8 pb-10 flex flex-col items-start text-left font-thai">
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#66261d]/10 flex items-center justify-center">
                <MapPin size={20} className="text-[#66261d]" />
              </div>
              <p className={`text-sm font-medium font-[family:var(--font-montserrat)] ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}>117 ถ.กะลาพอ ต.ตะลุบัน อ.สายบุรี จ.ปัตตานี</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#66261d]/10 flex items-center justify-center">
                <Calendar size={20} className="text-[#66261d]" />
              </div>
              <p className={`text-sm font-medium font-[family:var(--font-montserrat)] ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}>วันอาทิตย์ที่ 6 กันยายน พ.ศ. 2569</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#66261d]/10 flex items-center justify-center">
                <Clock size={20} className="text-[#66261d]" />
              </div>
              <p className={`text-sm font-medium font-[family:var(--font-montserrat)] ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}>เริ่มเวลา 09:00 เป็นต้นไป</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-10">
            <a 
              href="https://www.google.com/maps?q=6.702126,101.624404"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-[#8a3c20] text-white py-4 px-6 rounded-full transition-all shadow-md group font-semibold text-sm"
            >
              <Navigation size={18} className="group-hover:animate-bounce" />
              การเดินทาง
            </a>
            
            <button 
              className="flex items-center justify-center gap-2 border-2 border-[#8a3c20] text-[#8a3c20] py-4 px-6 rounded-full transition-all font-semibold text-sm"
            >
              <CalendarPlus size={18} />
              เพิ่มไปยังปฏิทิน 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};