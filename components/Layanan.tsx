"use client";
import Link from "next/link";
import useLangText from "@/hooks/useLangText";
import { motion } from "framer-motion";
export default function LayanansPage() {
  const { texts, loading, lang } = useLangText();

  if (loading) return <div className="py-20 text-center text-gray-300">Loading...</div>;
const layananData = [
    {
      title: texts.text_beranda20 || "Distribusi Rempah Premium",
      desc: texts.text_beranda21 || "Kami menyalurkan rempah-rempah berkualitas tinggi...",
      icon: "🌿",
    },
    {
      title: texts.text_beranda22 || "Produksi & Pengolahan",
      desc: texts.text_beranda23 || "Rempah kami diolah secara higienis menggunakan teknologi modern...",
      icon: "🏭",
    },
    {
      title: texts.text_beranda24 || "Kemitraan Petani Lokal",
      desc: texts.text_beranda25 || "Kami bekerja sama dengan petani untuk menjaga keberlanjutan...",
      icon: "🤝",
    },
    {
      title: texts.text_beranda26 || "Ekspor Internasional",
      desc: texts.text_beranda27 || "Pengiriman ke berbagai negara dengan logistik cepat dan aman.",
      icon: "🚢",
    },
    {
      title: texts.text_beranda28 || "Konsultasi B2B",
      desc: texts.text_beranda29 || "Kami bantu UMKM menemukan solusi terbaik untuk bahan baku rempah premium.",
      icon: "💼",
    },
  ];

  return (
<section id="layanan" className="py-20 px-6 bg-[#FBC02D] text-gray-800">
      {/* Judul Section */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-green-700"
        >
          {texts.text_l_kami1 || "Layanan Kami"}
        </motion.h2>
        <p className="text-lg text-white max-w-2xl mx-auto mt-4">
          {texts.text_beranda19 ||
            "Kami berkomitmen memberikan layanan menyeluruh untuk menjaga kualitas dan kepercayaan rempah Indonesia."}
        </p>
      </div>

      {/* Daftar Layanan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {layananData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border-t-4 border-green-600"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold text-green-700 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link
          href={`/#produk?lang=${lang}`}
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md"
        >
          {texts.text_btn4 || "Lihat Produk Kami"}
        </Link>
      </div>
    </section>
  );
}
