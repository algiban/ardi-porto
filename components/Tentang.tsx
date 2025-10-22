"use client";

import useLangText from "@/hooks/useLangText";

export default function TentangsPage() {
  const { texts, loading } = useLangText();

  if (loading) return <div className="py-20 text-center text-gray-300">Loading...</div>;
  return (
<section
      id="tentang"
      className="container-fluid py-10 px-5 md:px-30 bg-[#FBC02D] grid grid-cols-1 lg:grid-cols-2 gap-10 text-center"
    >
      {/* 🧩 Kolom Kiri */}
      <div>
        <h2 className="text-3xl text-green-700 font-bold mb-6 leading-snug text-center">
          {texts.text_beranda3 ||
            'Mendistribusikan Rempah Terbaik Indonesia ke Seluruh Dunia'}
        </h2>
        <p className="text-white text-lg mb-8 leading-relaxed text-justify">
          {texts.text_beranda4 ||
            'Ardi Nuansa Mandiri merupakan supplier dan eksportir rempah-rempah premium Indonesia untuk pasar global. Kami memproduksi sendiri beberapa jenis rempah serta bermitra dengan pemasok terverifikasi untuk memenuhi permintaan rempah premium lainnya. Berasal langsung dari daerah penghasil terbaik, kami berkomitmen menyediakan rempah berkualitas tinggi dengan pasokan yang stabil dan berkelanjutan bagi pelanggan di perdagangan internasional.'}
        </p>
      </div>

      {/* 🧭 Kolom Kanan */}
      <div className="bg-white rounded-2xl shadow-lg p-0 h-[400px] flex flex-col">
        {/* Judul Tetap */}
        <div className="sticky top-0 bg-white rounded-2xl border-b border-gray-200 p-6 z-10">
          <h2 className="text-3xl font-bold text-green-700 text-center">
            {texts.text_beranda5 || 'Kenapa Harus Memilih Kami?'}
          </h2>
        </div>

        {/* Isi Scrollable */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-gray-700 text-justify">
          <div className="border-b border-green-500 pb-3">
            <span className="font-semibold text-green-700">
              {texts.text_beranda6 || '1. Kualitas Premium:'}
            </span>
            <br />
            {texts.text_beranda7 ||
              'Semua produk rempah kami berasal dari petani terbaik dan melalui proses seleksi ketat.'}
          </div>

          <div className="border-b border-green-500 pb-3">
            <span className="font-semibold text-green-700">
              {texts.text_beranda8 || '2. Pasokan Stabil:'}
            </span>
            <br />
            {texts.text_beranda9 ||
              'Kami menjamin ketersediaan stok secara berkelanjutan untuk kebutuhan ekspor besar.'}
          </div>

          <div className="border-b border-green-500 pb-3">
            <span className="font-semibold text-green-700">
              {texts.text_beranda10 || '3. Proses Produksi Terstandar:'}
            </span>
            <br />
            {texts.text_beranda11 ||
              'Pengolahan dilakukan sesuai standar internasional dengan pengawasan ketat.'}
          </div>

          <div className="border-b border-green-500 pb-3">
            <span className="font-semibold text-green-700">
              {texts.text_beranda12 || '4. Jaringan Global:'}
            </span>
            <br />
            {texts.text_beranda13 ||
              'Didukung oleh mitra distribusi di berbagai negara dengan reputasi terpercaya.'}
          </div>

          <div>
            <span className="font-semibold text-green-700">
              {texts.text_beranda14 || '5. Pelayanan Profesional:'}
            </span>
            <br />
            {texts.text_beranda15 ||
              'Tim kami siap melayani dengan cepat, ramah, dan tanggap terhadap setiap kebutuhan klien.'}
          </div>
        </div>
      </div>
    </section>
  );
}