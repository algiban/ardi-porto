"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ProductSlider({ images, nama }: { images: string[]; nama: string }) {
  return (
    <Swiper modules={[Pagination, Navigation]} pagination={{ clickable: true }} navigation loop className="w-full max-w-lg rounded-lg shadow-md">
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[400px] rounded">
            <Image src={img} alt={`${nama}-${idx}`} fill className="object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
