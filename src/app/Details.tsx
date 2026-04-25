"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Countdown } from "./components/CountDown";
import { Program } from "./components/ProgramDay";
import { DetailsOfTheDay } from "./components/DetailsOfTheDay";
import { ArrowUp } from "lucide-react";
import Theme from "./components/Theme";

const Details = () => {
  const [open, setOpen] = useState<boolean>(false);

  const targetDate = new Date("2026-08-27T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const fireConfetti = () => {
    const scalar = 2;
    const unicorn = confetti.shapeFromText({ text: "❤️", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar,
    };

    const shoot = () => {
      confetti({ ...defaults, particleCount: 30 });
      confetti({ ...defaults, particleCount: 5, flat: true });
      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };

    shoot();
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  const handleOpen = () => {
    setOpen(true);
    fireConfetti();
  };

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

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#e4c5d9]">
      <div className="absolute top-0 left-0 w-full h-screen">
        <img
          src="/bgx.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          {open && (
            <div className="relative flex flex-col justify-between h-full w-full py-10">
              <div className="animate__animated animate__backInDown absolute top-0 right-10 bg-[#b7789c] text-white  px-6 py-5 rounded-b-3xl text-[22px] flex flex-col items-center font-[family:var(--font-montserrat)] tracking-[0.3em]">
                <span>27</span>
                <span>08</span>
                <span>26</span>
              </div>
              <div className="animate__animated animate__fadeInLeft flex flex-col items-start text-[16px] text-[#b7789c] font-[family:var(--font-montserrat)] tracking-[0.2em] self-start ml-5 mt-1">
                <p>PLEASE JOIN US FOR</p>
                <p>THE WEDDING OF</p>
              </div>
              <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
                <img
                  src="/namex2.png"
                  className="max-h-full object-contain animate__animated animate__zoomIn"
                  alt="Names"
                />
              </div>
              <p className="animate__animated animate__fadeInRight text-[16px] text-[#b7789c] font-[family:var(--font-montserrat)] tracking-[0.1em] self-end mr-5 mb-30">
                27 AUGUST 2026
              </p>
            </div>
          )}
        </div>
        {open && (
          <>
            <Countdown />
            <DetailsOfTheDay />
            <Program />
            <Theme />
            <div className="min-h-[200px] bg-[#b7789c] flex flex-col gap-2 items-center justify-center p-10 relative">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="absolute top-10 flex flex-col items-center gap-1 text-gray-300 hover:text-white transition-all group"
              >
                <ArrowUp
                  size={16}
                  className="group-hover:-translate-y-1 transition-transform"
                />
                <span className="text-[11px] tracking-[0.2em] font-medium font-[family:var(--font-montserrat)] uppercase">
                  Back to Top
                </span>
              </button>
              <img
                src="/x.png"
                className="w-auto h-[150px] object-contain mt-7"
                alt="Bride & Groom Names"
              />
              <p className="text-[14px] text-gray-300 font-[family:var(--font-montserrat)] tracking-[0.2em] mt-[-20] uppercase">
                AZMEE & SALMEE
              </p>
              <p className="text-[11px] text-gray-300 font-[family:var(--font-montserrat)] tracking-[0.2em] mt-5 uppercase">
                27 August 2026
              </p>
              <p className="text-[8px] text-gray-100/60 font-[family:var(--font-montserrat)] tracking-[0.2em] uppercase">
                MADE BY MARUSLAMDEVZ
              </p>
            </div>
          </>
        )}
      </div>
      <div
        className={`fixed inset-0 z-20 flex flex-col transition-all duration-1000 ${open ? "pointer-events-none opacity-0" : ""}`}
      >
        <div
          className={`flex-1 bg-[#e4c5d9] border-b border-[#b7789c] transition-transform duration-1000 ease-in-out ${open ? "-translate-y-full" : "translate-y-0"}`}
        />
        <div
          className={`flex-1 bg-[#e4c5d9] flex items-start justify-center border-t border-[#b7789c] transition-transform duration-1000 ease-in-out ${open ? "translate-y-full" : "translate-y-0"}`}
        >
          <p className="text-[#b7789c] font-[family:var(--font-montserrat)] tracking-[0.2em] text-[14px] opacity-60 mt-36 ml-5">
            CLICK TO OPEN...
          </p>
        </div>
      </div>
      {!open && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          <button
            onClick={handleOpen}
            className="hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <img
              src="/sealx.png"
              alt="Seal"
              className="w-[300px] h-[300px] object-contain"
            />
          </button>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
          <img
            src="/sealx.png"
            className="w-[300px] h-[300px] object-contain animate__animated animate__fadeOut animate__slow"
            alt="Seal Fading"
          />
        </div>
      )}
    </div>
  );
};

export default Details;
