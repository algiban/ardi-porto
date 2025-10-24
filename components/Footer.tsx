"use client";
import Image from "next/image";
import Link from "next/link";
import useLangText from "@/hooks/useLangText";
export default function Footer() {
    const { texts, loading } = useLangText();
    
      if (loading) return <div className="py-20 text-center text-gray-300">Loading...</div>;
  return (
   <footer className="bg-[#006633] text-white">
      <div className="container mx-auto px-4 py-4 grid gap-6 md:grid-cols-3">
        {/* Kolom 1: Brand */}
        <div className='md:grid-cols-2'>
          <div className="">
                      <Image
                        src="/logo.png"
                        alt="Logo Ardi Nuansa Mandiri"
                        width={80}
                        height={80}
                        priority
                        className="rounded-md"
                      />
          </div>
          <div className="">
                      <h3 className="font-bold text-lg">Ardi Nuansa Mandiri</h3>
          <p className="text-sm text-white mt-2">
{texts?.slogan || "Ingat Rempah, Ingat Indonesia"}
          </p>
          </div>

        </div>

        {/* Kolom 2: Navigasi */}
        <div>
          <h4 className="font-semibold mb-2">Navigasi</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">{texts?.beranda || "Beranda"}</Link></li>
            <li><Link href="/products">{texts?.produk||"Produk"}</Link></li>
            <li><Link href="/about">{texts?.tentang||"Tentang"}</Link></li>
            <li><Link href="/contact">{texts?.kontak||"Kontak"}</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div>
          <h4 className="font-semibold mb-2">{texts?.kontak||"Kontak"}</h4>
          <ul className="text-sm space-y-1">
            <li>Email: <a href="mailto:info@ardinm.com" className="underline">info@ardinm.com</a></li>
            <li>Telp: +62 858-8036-0594</li>
            <li>
              WhatsApp: <a href="https://wa.me/6285880360594" className="underline">{texts?.text_btn1||"Hubungi Kami"}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#006633] text-center text-sm py-3">
        © {new Date().getFullYear()} Ardi Nuansa Mandiri. All rights reserved.
      </div>
    </footer>
  );
}
