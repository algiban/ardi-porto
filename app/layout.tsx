import "./globals.css"
import { ReactNode, Suspense } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import { Inter } from "next/font/google"

// ✅ Gunakan next/font agar tidak ada layout shift (CLS)
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata = {
  title: "Ardi Nuansa Mandiri",
  description: "Produsen dan supplier rempah-rempah premium Indonesia.",
  keywords: ["rempah", "rempah Indonesia", "supplier rempah", "export spice"],
  openGraph: {
    title: "Ardi Nuansa Mandiri",
    description: "Mendistribusikan rempah terbaik Indonesia ke seluruh dunia.",
    url: "https://www.newtcugapps.com",
    siteName: "Ardi Nuansa Mandiri",
    images: [
      {
        url: "/images/cengkeh1.jpg",
        width: 1200,
        height: 630,
        alt: "Rempah-rempah Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={inter.className}>
      <head>
        {/* ✅ Preconnect untuk domain eksternal (fonts, CDN, dsb) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://unit-testing.newtcugapps.com" />
      </head>

      <body className="bg-white text-gray-800 antialiased">
        <Suspense
          fallback={
            <div className="text-center text-gray-400 py-20 animate-pulse">
              Loading...
            </div>
          }
        >
          <Header />
          <main className="min-h-[70vh]">
            {children}
          </main>
          <LanguageSwitcher />
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
