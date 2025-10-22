"use client";

import { useState, useEffect } from "react";
import { Globe2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function LanguageSwitcher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<"id" | "en">("id");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "id" | "en" | null;
    const param = searchParams.get("lang") as "id" | "en" | null;
    const final = param || saved || "id";
    setLang(final);
  }, [searchParams]);

  const toggle = () => {
    const next = lang === "id" ? "en" : "id";
    setLang(next);
    localStorage.setItem("lang", next);
    const params = new URLSearchParams(window.location.search);
    params.set("lang", next);
    router.push(`?${params.toString()}`);
  };

  return (
    <button
      onClick={toggle}
      className={clsx("fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg", lang === "id" ? "bg-amber-500 text-white" : "bg-blue-600 text-white")}
      title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
    >
      <Globe2 />
      <span className="sr-only">Toggle language</span>
    </button>
  );
}
