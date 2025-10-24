"use client";
import useLangText from "@/hooks/useLangText";

export default function AboutPage() {
  const { texts, loading } = useLangText();

  if (loading) return <div className="py-20 text-center text-gray-300">Loading...</div>;

  return (
    <div className="container mx-auto px-6 py-16 mt-15">
      {/* Judul */}
      <h1 className="text-4xl font-extrabold text-amber-400 mb-8 text-center">
        {texts.text_t_kami1 || "Tentang Kami"}
      </h1>

      {/* Paragraf pembuka */}
      <div className="max-w-3xl mx-auto text-center text-white leading-relaxed mb-12">
        <p className="mb-4">
          <span className="font-semibold text-amber-500">Ardi Nuansa Mandiri </span>
          {texts.text_t_kami2 ||
            " adalah perusahaan yang bergerak di bidang ekspor rempah-rempah asli Indonesia. Kami hadir untuk memperkenalkan kekayaan alam Nusantara ke pasar global dengan kualitas terbaik dan proses yang berstandar internasional."}
        </p>
        <p>
          {texts.text_t_kami3 ||
            "Dengan semangat untuk membawa cita rasa khas Indonesia ke berbagai belahan dunia, kami menjalin kemitraan langsung dengan petani lokal, menjaga mutu produk, serta memastikan proses distribusi berjalan aman dan efisien."}
        </p>
      </div>

      {/* Bagian Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-10">
        {/* Visi */}
        <div className="bg-white shadow-md rounded-2xl p-8 border-l-4 border-amber-500 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-amber-500 mb-3">
            {texts.text_t_kami4 || "Visi"}
          </h2>
          <p
            className="text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html:
                texts.text_t_kami5 ||
                "- Menjadi jembatan terpercaya yang membawa kejayaan rempah nusantara ke setiap sudut dunia <br> - Menjadi eksportir rempah indonesia yang terkenal dengan kualitas premium dan berkelanjutan <br> - Menghadirkan kehangatan rempah indonesia di setiap rumah global",
            }}
          />
        </div>

        {/* Misi */}
        <div className="bg-white shadow-md rounded-2xl p-8 border-l-4 border-amber-500 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-bold text-amber-500 mb-3">
            {texts.text_t_kami6 || "Misi"}
          </h2>
          <div
            className="text-gray-600 space-y-2"
            dangerouslySetInnerHTML={{
              __html:
                texts.text_t_kami7 ||
                "- ⁠Menghadirkan rempah-rempah Indonesia berkualitas premium ke pasar global dengan standar internasional <br>- ⁠Menjaga integritas produk dari kebun hingga pelanggan melalui proses kontrol kualitas yang ketat <br> - ⁠Membangun kepercayaan melalui transparansi, profesionalisme, dan layanan konsisten <br>- ⁠Melestarikan warisan kuliner Indonesia sambil mendukung praktik pertanian ramah lingkungan",
            }}
          />
        </div>
      </div>

      {/* Nilai Perusahaan */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center">
          {texts.text_t_kami8 || "Nilai-Nilai Kami "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              {texts.text_t_kami9 || "Kualitas"}
            </h3>
            <p className="text-gray-600">
              {texts.text_t_kami10 || "Kami menjamin kualitas terbaik dalam setiap produk rempah yang kami ekspor."}
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              {texts.text_t_kami11 || "Kepercayaan"}
            </h3>
            <p className="text-gray-600">
              {texts.text_t_kami12 || "Kami membangun hubungan jangka panjang dengan mitra melalui kejujuran dan integritas."}
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 text-center">
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              {texts.text_t_kami13 || "Keberlanjutan"}
            </h3>
            <p className="text-gray-600">
              {texts.text_t_kami14 ||
                "Kami mendukung pertanian berkelanjutan yang memberdayakan petani dan menjaga lingkungan."}
            </p>
          </div>
        </div>
      </div>

      {/* Penutup */}
      <div className="max-w-3xl mx-auto text-center mt-16 text-white leading-relaxed">
        <p>
          {texts.text_t_kami15 ||
            "Ardi Nuansa Mandiri percaya bahwa setiap butiran rempah membawa cerita tentang tanah, budaya, dan dedikasi. Kami bangga menjadi bagian dari perjalanan rempah Indonesia menuju dunia."}
        </p>
      </div>

      {/* Google Maps */}
      <div className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-6">
          {texts.text_t_kami16 || "Lokasi Kami "}
        </h2>
        <p className="text-white mb-6">
          {texts.text_t_kami17 ||
            "Kunjungi kantor kami atau hubungi untuk kerja sama dan informasi lebih lanjut."}
        </p>

        <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.477523240762!2d106.98191995872655!3d-6.340060762948603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993003c231723%3A0x354bbcb5b53b42a1!2srumah!5e0!3m2!1sid!2sid!4v1759896467971!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
