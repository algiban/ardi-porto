"use client";

import Link from "next/link";
import useLangText from "@/hooks/useLangText";
import dynamic from "next/dynamic";
const SwiperClient = dynamic(() => import("./SwiperClient"), { ssr: false });

export default function Hero() {
  const { lang, texts } = useLangText();

  return (
    <section className="relative  mb-5 bg-opacity-70 py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="text-white">
          <p className="text-lg">Ardi Nuansa Mandiri</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FBC02D]">{texts.text_beranda1 || "Petualangan Rempah Nusantara"}</h1>
          <p className="mt-1 text-base sm:text-lg md:text-xl text-gray-100 font-light">{texts.text_beranda2 || "Membawa warisan kekayaan rempah Indonesia ke panggung global. Kami adalah perusahaan yang berdedikasi untuk mengekspor rempah-rempah berkualitas tinggi, langsung dari sumbernya di berbagai penjuru Nusantara."}</p>
          <div className="mt-6">
            <Link href={`/#tentang?lang=${lang}`} className="px-6 py-3 bg-amber-500 rounded-full text-white font-semibold">{texts.text_btn2 || "Selengkapnya"}</Link>
          </div>
        </div>

        <div className="rounded-4xl shadow-lg overflow-hidden">
          <SwiperClient />
        </div>
      </div>
    </section>
  );
}
