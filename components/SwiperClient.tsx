"use client";

import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SwiperClient() {
  const images = [
    "/images/cengkeh1.jpg",
    "/images/jahe1.jpg",
    "/images/kayu-manis1.jpg"
  ];

  return (
    <Swiper modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }} loop className="rounded-4xl overflow-hidden">
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-[20rem] sm:h-[24rem] md:h-[30rem]">
            <Image src={src} alt={`slide-${i}`} fill className="object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
