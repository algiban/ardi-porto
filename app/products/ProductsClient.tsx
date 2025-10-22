"use client";

import ProductList from "@/components/ProductList";
import useLangText from "@/hooks/useLangText";

export default function ProductsClient() {
  const { texts, loading } = useLangText();

  if (loading)
    return <div className="py-20 text-center text-gray-300">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold text-amber-400 mb-6">
        {texts.text_produk1 || "Produk Kami"}
      </h1>
      <ProductList />
    </div>
  );
}
