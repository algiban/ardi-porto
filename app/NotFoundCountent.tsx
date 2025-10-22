"use client";

import { useSearchParams } from "next/navigation";

export default function NotFoundContent() {
  const params = useSearchParams();
  return <div>Halaman tidak ditemukan: {params.get("page")}</div>;
}
