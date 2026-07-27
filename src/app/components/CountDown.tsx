import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Countdown = () => {
  const targetDate = new Date("2026-09-06T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "วัน", value: timeLeft.days },
    { label: "ชั่วโมง", value: timeLeft.hours },
    { label: "นาที", value: timeLeft.minutes },
    { label: "วินาที", value: timeLeft.seconds },
  ];

  return (
    <div
      ref={ref}
      className="flex flex-col font-thai items-center justify-center p-8 m-5 bg-white/60 backdrop-blur-md rounded-2xl"
    >
      <h2
        className={`text-2xl mb-2 text-[#66261d] transition-opacity duration-1000 ${inView ? "animate__animated animate__fadeIn" : "opacity-0"}`}
      >
        นับเวลาถอยหลัง
      </h2>
      <div
        className={`w-full h-[300px] md:h-[450px] p-4 md:p-6 ${inView ? "animate__animated animate__fadeInDown" : "opacity-0"}`}
      >
        <img
          src="/collection/col18.jpg"
          alt="Location Map"
          className="w-full h-full object-cover rounded-2xl shadow-inner"
        />
      </div>
      <p
        className={`text-sm tracking-widest uppercase mb-8 text-[#66261d]/90 transition-opacity duration-1000 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}
      >
        นับถอยหลังจนถึงวันที่เรากล่าวคำว่า "ตกลง"
      </p>

      <div className="flex gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
            className={`flex flex-col items-center bg-white/40 p-4 md:p-6 rounded-2xl min-w-[65px] md:min-w-[100px] shadow-sm border border-[#66261d]/30 shadow-lg shadow-[#66261d]/70
              ${inView ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
          >
            <span
              key={unit.value}
              className={`text-2xl md:text-4xl font-semibold text-[#66261d] font-[family:var(--font-montserrat)] inline-block 
                ${inView ? "animate-pop" : ""}`}
            >
              {String(unit.value).padStart(2, "0")}
            </span>

            <span className="text-[13px] md:text-xs tracking-widest font-semibold text-[#66261d]/90 mt-2">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
