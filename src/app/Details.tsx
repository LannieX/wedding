"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Countdown } from "./components/CountDown";
import { Program } from "./components/ProgramDay";
import { DetailsOfTheDay } from "./components/DetailsOfTheDay";
import { ArrowUp } from "lucide-react";
import Theme from "./components/Theme";
import ImageMarquee from "./components/ImageSlide";

const Details = () => {
  const image = [
    "/collection/col2.jpg",
    "/collection/col11.jpg",
    "/collection/col5.jpg",
    "/collection/col19.jpg",
    "/collection/col6.jpg",
    "/collection/col9.jpg",
    "/collection/col12.jpg",
    "/collection/col10.jpg",
    "/collection/col7.jpg",
    "/collection/col4.jpg",
  ];

  const [open, setOpen] = useState<boolean>(false);

  const targetDate = new Date("2026-05-30T00:00:00").getTime();
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
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#ede2d8]">
      <div className="absolute top-0 left-0 w-full h-screen">
        <img
          src="/bg2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          {open && (
            <div className="relative flex flex-col items-center justify-center h-[65%] w-full py-10 overflow-hidden">
              <div className="relative z-10 flex-1 flex items-center justify-center w-full overflow-hidden">
                <img
                  src="/name3.png"
                  className="max-h-full object-contain animate__animated animate__zoomIn"
                  alt="Names"
                />
              </div>

              <p className="relative z-10 animate__animated animate__fadeInRight text-xl text-[#66261d] font-thai tracking-[0.1em] pb-15">
                6 กันยายน พ.ศ. 2569
              </p>
            </div>
          )}
        </div>
        {open && (
          <>
            <Countdown />
            <DetailsOfTheDay />
            <Program />
            <section className="max-w-6xl mx-auto px-6 mt-5">
              <ImageMarquee images={image} />
            </section>
            <section className="max-w-6xl mx-auto px-6 m-5">
              <ImageMarquee images={image} direction="right" />
            </section>
            <Theme />
            <div className="min-h-[200px] bg-[#cac89c] flex flex-col gap-2 items-center justify-center p-10 relative">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="absolute top-10 flex flex-col items-center gap-1 text-[#66261d] transition-all group"
              >
                <ArrowUp
                  size={16}
                  className="group-hover:-translate-y-1 transition-transform"
                />
                <span className="text-[13px] tracking-[0.2em] font-thai uppercase">
                  กลับสู่ด้านบน
                </span>
              </button>
              <img
                src="/name3.png"
                className="w-auto h-[150px] object-contain mt-15"
                alt="Bride & Groom Names"
              />
              <p className="text-[12px] text-[#66261d] font-[family:var(--font-montserrat)] tracking-[0.2em] uppercase">
                6 กันยายน พ.ศ. 2569
              </p>
              <p className="text-[9px] text-[#66261d] font-semibold tracking-[0.2em] uppercase mt-3">
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
          className={`flex-1 bg-[#e7dbce] border-b border-[#66261d] transition-transform duration-1000 ease-in-out ${open ? "-translate-y-full" : "translate-y-0"}`}
        />
        <div
          className={`flex-1 bg-[#e7dbce] flex items-start justify-center border-t border-[#66261d] transition-transform duration-1000 ease-in-out ${open ? "translate-y-full" : "translate-y-0"}`}
        >
          <p className="text-[#66261d] font-[family:var(--font-montserrat)] tracking-[0.2em] text-[14px] opacity-60 mt-33 ml-5">
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
              src="/seal2.png"
              alt="Seal"
              className="w-[550px] h-[550px] object-contain"
            />
          </button>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none">
          <img
            src="/seal2.png"
            className="w-[550px] h-[550px] object-contain animate__animated animate__fadeOut animate__slow"
            alt="Seal Fading"
          />
        </div>
      )}
    </div>
  );
};

export default Details;
