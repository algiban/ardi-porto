import { notFound } from "next/navigation";
import ProductSlider from "@/components/ProductSlider";

type Product = {
  id: number;
  slug: string;
  nama: string;
  nama_botani: string;
  grade: string;
  bentuk_tersedia: string;
  min_pesanan: string;
  kemasan: string;
  keterangan: string;
  short: string;
  deskripsi: string;
  status: string;
  images: string[];
  sertif: string | null;
  created_at: string;
};

type ApiResponse = {
  status: boolean;
  data: {
    id: number;
    slug: string;
    nama: string;
    nama_botani: string;
    grade: string;
    bentuk_tersedia: string;
    min_pesanan: string;
    kemasan: string;
    keterangan: string;
    short: string;
    deskripsi: string;
    status: string;
    images: Record<string, string>;
    sertif: string | null;
    created_at: string;
  };
};


// ✅ Ambil data produk dari API Laravel
async function getProduct(slug: string, lang: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://unit-testing.newtcugapps.com/api/products/${slug}?lang=${lang}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Gagal mengambil data produk");

    const json: ApiResponse = await res.json();
    if (!json.status || !json.data) return null;

    const data = json.data;
    return {
      ...data,
      images: Object.values(data.images), // ubah object jadi array
    };
  } catch (error) {
    console.error("Error saat fetch produk:", error);
    return null;
  }
}

// ✅ Metadata per produk (SEO)
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}) {
  const lang = searchParams?.lang || "id";
  const product = await getProduct(params.slug, lang);

  if (!product) {
    return { title: lang === "en" ? "Product not found" : "Produk tidak ditemukan" };
  }

  return {
    title: `${product.nama}, ${product.nama_botani} | Ardi Nuansa Mandiri`,
    description: product.short,
    openGraph: {
      title: product.nama,
      description: product.short,
      images: product.images?.[0] ? [product.images[0]] : [],
    },
  };
}

// ✅ Halaman produk
export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { lang?: string };
}) {
  const lang = searchParams?.lang || "id";
  const product = await getProduct(params.slug, lang);

  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nama,
    description: product.short,
    image: product.images,
    brand: {
      "@type": "Organization",
      name: "Ardi Nuansa Mandiri",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="flex flex-col md:flex-row md:items-start md:gap-10">
        {/* Kiri: Slider gambar */}
        <div className="md:w-1/2 rounded">
          <ProductSlider images={product.images} nama={product.nama} />

          {/* ✅ Sertifikat PDF */}
          {product.sertif && (
            <div className="mt-8 md:ml-10">
              <h2 className="text-2xl font-bold text-amber-500 mb-3">
                {lang === "en" ? "Product Certificate" : "Sertifikat Produk"}
              </h2>
              <a
                href={product.sertif}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                <i className="bi bi-file-earmark-pdf text-2xl"></i>
                {lang === "en" ? "View PDF Certificate" : "Lihat Sertifikat PDF"}
              </a>
            </div>
          )}
        </div>

        {/* Kanan: Keterangan produk */}
        <div className="mt-6 md:mt-0 md:w-1/2">
          <h1 className="text-5xl font-bold text-amber-500">{product.nama}</h1>
          <p className="mt-2 text-white">{product.keterangan}</p>
          <hr className="border-3 border-yellow-400" />

          <table className="table-auto text-left mt-4">
            <tbody>
              <tr>
                <th className="font-bold text-amber-500">
                  {lang === "en" ? "Botanical Name" : "Nama Botani"}
                </th>
                <td className="px-2 text-white">:</td>
                <td className="text-white">{product.nama_botani}</td>
              </tr>
              <tr>
                <th className="font-bold text-amber-500">Grade</th>
                <td className="px-2 text-white">:</td>
                <td className="text-white">{product.grade}</td>
              </tr>
              <tr>
                <th className="font-bold text-amber-500">
                  {lang === "en" ? "Available Forms" : "Bentuk Tersedia"}
                </th>
                <td className="px-2 text-white">:</td>
                <td className="text-white">{product.bentuk_tersedia}</td>
              </tr>
              <tr>
                <th className="font-bold text-amber-500">
                  {lang === "en" ? "Minimum Order" : "Minimal Pemesanan"}
                </th>
                <td className="px-2 text-white">:</td>
                <td className="text-white">{product.min_pesanan}</td>
              </tr>
              <tr>
                <th className="font-bold text-amber-500">
                  {lang === "en" ? "Packaging" : "Kemasan"}
                </th>
                <td className="px-2 text-white">:</td>
                <td className="text-white">{product.kemasan}</td>
              </tr>
            </tbody>
          </table>

          <p className="pt-3 text-justify text-white">{product.deskripsi}</p>
        </div>
      </div>

      {/* JSON-LD untuk SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
