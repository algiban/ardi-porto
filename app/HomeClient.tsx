"use client";
import Link from "next/link"; 
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import useLangText from "@/hooks/useLangText";
import LayanansPage from "@/components/Layanan";
import TentangsPage from "@/components/Tentang";

export default function HomeClient() {
      const { texts, loading, lang } = useLangText();
    
      if (loading) return <div className="py-20 text-center text-gray-300">Loading...</div>;
  return (
    <>
      <Hero />
      <TentangsPage />
      <div className="container mx-auto px-4 pb-10">
        <section className="mt-10 text-center">
          <h2 className="text-4xl font-bold text-amber-500 ">
            {"Produk Unggulan" || texts.text_beranda16 }
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {texts.text_beranda17 ||
              "Kami mendedikasikan diri untuk menyediakan produk unggulan dengan kualitas terbaik dan layanan yang tak tertandingi."}
          </p>

          <div className="flex justify-center mt-8">
      <FeaturedProducts />
      </div>

          <div className="mt-6">
            <Link
              href={`/products?lang=${lang}`}
              className="bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-amber-700 transition duration-300"
            >
              {texts.text_btn4 || "Lihat semua produk"}
            </Link>
          </div>
        </section>
      </div>
      <LayanansPage/>
    </>
  );
}
