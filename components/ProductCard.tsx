"use client";
import Image from "next/image";
import Link from "next/link";
import useLangText from "@/hooks/useLangText";

export interface Product {
  id: number | string;
  slug?: string;
  nama: string;
  short?: string;
  images?: Record<string, string | null>;
}

export default function ProductCard({ product }: { product: Product }) {
  const image = product.images?.images_1 || product.images?.images_2 || product.images?.images_3 || "/no-image.png";
  const src = image.startsWith("http") ? image : `/uploads/${image.replace(/^\/+/, "")}`;
    const { texts, loading, lang} = useLangText();

  if (loading) return <div className="py-20 text-center text-gray-300">Loading...</div>;
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        <Image src={src} alt={product.nama} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800">{product.nama}</h3>
        {product.short && <p className="text-sm text-gray-600 line-clamp-2 mt-2">{product.short}</p>}
        <Link href={`/products/${product.slug || product.id}?lang=${lang}`} className="mt-auto inline-block bg-amber-500 px-4 py-2 rounded-lg text-white text-center font-medium">{texts.text_btn3 || "Lihat Detail"}</Link>
      </div>
    </div>
  );
}
