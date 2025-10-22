"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Texts = Record<string, string>;

export default function useLangText() {
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<"id" | "en">("id");
  const [texts, setTexts] = useState<Texts>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const param = searchParams?.get?.("lang") as "id" | "en" | null;
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as "id" | "en" | null;
    const final = param || saved || "id";
    setLang(final);
    if (typeof window !== "undefined") localStorage.setItem("lang", final);
  }, [searchParams]);

  useEffect(() => {
    let mounted = true;
    async function fetchTexts() {
      try {
        setLoading(true);
        const res = await fetch(`https://unit-testing.newtcugapps.com/api/setting?lang=${lang}`, { cache: "no-store" });
        if (!res.ok) throw new Error("fetch error");
        const json = await res.json();
        if (!mounted) return;
        if (json.status && Array.isArray(json.data)) {
          const map: Texts = {};
          json.data.forEach((it: any) => (map[it.key] = it.value));
          setTexts(map);
        } else if (json.status && typeof json.data === "object") {
          // some endpoints returned object
          setTexts(json.data);
        } else {
          setTexts({});
        }
      } catch (err) {
        console.error("useLangText fetch failed:", err);
        setTexts({});
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchTexts();
    return () => { mounted = false; };
  }, [lang]);

  return { lang, texts, loading, setLang };
}
