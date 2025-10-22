"use client";
import { useEffect, useState } from "react";
import useLangText from "@/hooks/useLangText";
import ProductCard, { Product } from "./ProductCard";

export default function ProductList() {
  const { lang } = useLangText();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch(`https://unit-testing.newtcugapps.com/api/products?lang=${lang}`, { cache: "no-store" });
        const json = await res.json();
        if (!mounted) return;
        if (json.status && Array.isArray(json.data)) setProducts(json.data);
        else setProducts([]);
      } catch (err) {
        console.error("fetch products error", err);
        setProducts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchProducts();
    return () => { mounted = false; };
  }, [lang]);

  if (loading) return <p className="text-center text-gray-300 py-10">Memuat produk...</p>;
  if (products.length === 0) return <p className="text-center text-gray-300 py-10">Tidak ada produk ditemukan.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
