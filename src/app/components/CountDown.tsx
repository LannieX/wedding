import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Countdown = () => {
  const targetDate = new Date("2026-05-30T00:00:00").getTime();
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
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 m-5">
      <h2 className={`text-3xl font-serif italic mb-2 text-[#825e28] transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
        Countdown
      </h2>
      <p className={`text-sm tracking-widest uppercase mb-8 text-[#825e28]/70 transition-opacity duration-1000 delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
        Until we say "I do"
      </p>

      <div className="flex gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
            className={`flex flex-col items-center bg-white/40 p-4 md:p-6 rounded-2xl min-w-[80px] md:min-w-[120px] shadow-sm 
              ${inView ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
          >
            <span
              key={unit.value} 
              className={`text-4xl md:text-6xl font-bold text-[#825e28] font-[family:var(--font-montserrat)] inline-block 
                ${inView ? "animate-pop" : ""}`}
            >
              {String(unit.value).padStart(2, "0")}
            </span>

            <span className="text-[10px] md:text-xs tracking-widest font-semibold text-[#825e28]/60 mt-2">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};