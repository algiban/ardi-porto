"use client";
import { useEffect, useState } from "react";
import useLangText from "@/hooks/useLangText";
import ProductCard, { Product } from "./ProductCard";

export default function FeaturedProducts() {
  const { lang } = useLangText();
  const [featured, setFeatured] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchFeatured() {
      try {
        setLoading(true);
        const res = await fetch(`https://unit-testing.newtcugapps.com/api/products-unggulan?lang=${lang}`, { cache: "no-store" });
        const json = await res.json();
        if (!mounted) return;
        if (json.status && Array.isArray(json.data)) setFeatured(json.data);
        else setFeatured([]);
      } catch (err) {
        console.error(err);
        setFeatured([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchFeatured();
    return () => { mounted = false; };
  }, [lang]);

  if (loading) return <p className="text-center text-gray-300 py-6">Memuat produk unggulan...</p>;
  if (featured.length === 0) return <p className="text-center text-gray-300 py-6">Tidak ada produk unggulan.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featured.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
