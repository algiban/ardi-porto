import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Suspense } from "react";

export const metadata = {
  title: "Ardi Nuansa Mandiri",
  description: "Produsen dan supplier rempah-rempah premium Indonesia."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
         <Suspense fallback={<div className="text-center text-gray-400 py-20">Loading...</div>}>
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <LanguageSwitcher />
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
