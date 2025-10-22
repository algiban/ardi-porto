"use client";
import useLangText from "@/hooks/useLangText";

export default function LayananPage() {
  const { texts, loading, lang } = useLangText();

  if (loading) return <div className="py-20 text-center text-gray-300">Loading...</div>;


  return (
    <div className="container mx-auto px-6 py-16 mt-10 ">
      <h1 className="text-4xl font-extrabold text-amber-400 mb-8 text-center">
        {texts.text_l_kami1 || (lang === "en" ? "Our Services" : "Layanan Kami")}
      </h1>

      <p className="text-center text-white max-w-3xl mx-auto mb-12 leading-relaxed">
        {texts.text_l_kami2 ||
          (lang === "en"
            ? "Ardi Nuansa Mandiri is committed to being a trusted partner in exporting Indonesian spices to the global market."
            : "Ardi Nuansa Mandiri berkomitmen untuk menjadi mitra terpercaya dalam ekspor rempah-rempah Indonesia ke pasar global.")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-amber-500 mb-3">
            {texts.text_l_kami3 || (lang === "en" ? "Spice Export Service" : "Layanan Ekspor Rempah")}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {texts.text_l_kami4 ||
              (lang === "en"
                ? "We provide various high-quality spices such as cloves, nutmeg, pepper, cinnamon, and ginger ready for export to multiple countries."
                : "Kami menyediakan berbagai jenis rempah berkualitas tinggi seperti cengkeh, pala, lada, kayu manis, dan jahe yang siap dikirim ke berbagai negara.")}
          </p>
        </div>

        <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-amber-500 mb-3">
            {texts.text_l_kami5 || (lang === "en" ? "Quality Control & Standardization" : "Quality Control & Standarisasi")}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {texts.text_l_kami6 ||
              (lang === "en"
                ? "Every product goes through sorting, drying, and quality testing stages to meet international export standards."
                : "Setiap produk melewati tahap penyortiran, pengeringan, dan uji kualitas yang ketat agar memenuhi standar ekspor internasional.")}
          </p>
        </div>

        <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-amber-500 mb-3">
            {texts.text_l_kami7 || (lang === "en" ? "Professional Packaging" : "Pengemasan Profesional")}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {texts.text_l_kami8 ||
              (lang === "en"
                ? "We use eco-friendly and hygienic packaging to maintain product freshness during shipping."
                : "Kami menggunakan kemasan ramah lingkungan dan higienis yang menjaga kualitas rempah tetap prima selama pengiriman.")}
          </p>
        </div>
        <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-amber-500 mb-3">
            
            {texts.text_l_kami9 ||  "Konsultasi Ekspor"}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {texts.text_l_kami10|| "Tim kami siap memberikan panduan dan informasi lengkap seputar proses ekspor rempah — mulai dari dokumen, perizinan, hingga logistik internasional."}
          </p>
        </div>

        {/* Layanan 5 */}
        <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-amber-500 mb-3">
            
            {texts.text_l_kami11 ||  "Suplai Bahan Baku"}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {texts.text_l_kami12|| "Kami juga melayani permintaan bahan mentah dalam jumlah besar langsung dari petani lokal untuk industri pengolahan makanan, farmasi, maupun kosmetik."}
          </p>
        </div>

        {/* Layanan 6 */}
        <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-amber-500 mb-3">
            {texts.text_l_kami13 ||  "Kemitraan dengan Petani"}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {texts.text_l_kami14|| "Kami bekerja sama dengan petani di berbagai daerah di Indonesia untuk memastikan pasokan rempah yang berkelanjutan dan mendukung kesejahteraan lokal."}
          </p>
        </div>
      </div>
    </div>
  );
}
