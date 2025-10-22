// app/not-found.tsx
import { Suspense } from "react";
import NotFoundContent from "./NotFoundCountent";

export default function NotFound() {
  return (
    <Suspense fallback={<div>Memuat...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
