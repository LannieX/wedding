"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

interface ImageMarqueeProps {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}

export default function ImageMarquee({
  images,
  direction = "left",
  speed = 100,
}: ImageMarqueeProps) {
  return (
    <Marquee
      direction={direction}
      speed={speed}
      gradient={false}
      autoFill
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="relative mx-3 h-[200px] w-[220px] overflow-hidden rounded-3xl"
        >
          <div className="relative mx-3 h-[200px] w-[220px] overflow-hidden rounded-3xl border border-white/40 ">
            <Image
              src={image}
              alt={`Wedding ${index + 1}`}
              fill
              className="
      object-cover
      transition-transform
      duration-700
      ease-out
      hover:scale-110
    "
            />
            <div
              className="
      absolute
      inset-0
      bg-gradient-to-t
      from-[#000]/20
      via-transparent
      to-white/10
    "
            />
          </div>
        </div>
      ))}
    </Marquee>
  );
}
