"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import useLangText from "@/hooks/useLangText";
import { usePathname } from "next/navigation";

export default function Header() {
  const { lang, texts } = useLangText();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path ? "text-[#F4A100] font-bold text-xl"
      : "hover:text-xl transition-all duration-200";

  return (
    <header className="fixed top-0 w-full z-40 bg-transparant backdrop-blur-md">
      <div className="container mx-auto px-5 py-2 flex items-center justify-between">
        <Link href={`/?lang=${lang}`} className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={60} height={60} className="rounded-md" />
          <div>
            <div className="text-white font-bold text-xl sm:text-2xl md:text-3xl">Ardi Nuansa Mandiri</div>
            <div className="text-xs text-gray-200">{texts?.slogan || "Ingat Rempah, Ingat Indonesia"}</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-white">
          <Link href={`/?lang=${lang}`} className={linkClass("/")}>{texts.beranda || "Beranda"}</Link>
          <Link href={`/products?lang=${lang}`} className={linkClass("/products")}>{texts.produk || "Produk"}</Link>
          <Link href={`/layanan?lang=${lang}`} className={linkClass("/layanan")}>{texts.layanan || "Layanan"}</Link>
          <Link href={`/about?lang=${lang}`} className={linkClass("/about")}>{texts.tentang || "Tentang"}</Link>
          <a href="https://wa.me/6281234567890" className="px-3 py-2 bg-amber-500 rounded-full text-white font-semibold">{texts.text_btn1 || "Hubungi Kami"}</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 border-t">
          <nav className="flex flex-col p-4 gap-3 text-gray-800">
            <Link href={`/?lang=${lang}`} onClick={() => setOpen(false)}>{texts.beranda || "Beranda"}</Link>
            <Link href={`/products?lang=${lang}`} onClick={() => setOpen(false)}>{texts.produk || "Produk"}</Link>
            <Link href={`/layanan?lang=${lang}`} onClick={() => setOpen(false)}>{texts.layanan || "Layanan"}</Link>
            <Link href={`/about?lang=${lang}`} onClick={() => setOpen(false)}>{texts.tentang || "Tentang"}</Link>
            <a href="https://wa.me/6281234567890" className="px-3 py-2 bg-amber-500 rounded-full text-white text-center" onClick={() => setOpen(false)}>{texts.text_btn1 || "Hubungi Kami"}</a>
          </nav>
        </div>
      )}
    </header>
  );
}
