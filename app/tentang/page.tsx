import type { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Tentang',
  description:
    'Profil Flash Garage, layanan home service mobil dan bengkel mobil panggilan di Bandung.'
};

const commitments = [
  {
    title: 'Home service sebagai layanan utama',
    description:
      'Flash Garage membantu pelanggan mendapatkan pengecekan dan servis ringan tanpa harus datang ke bengkel.'
  },
  {
    title: 'Transparansi biaya',
    description:
      'Harga awal ditampilkan jelas. Penyesuaian biaya karena jenis mobil, lokasi, atau spare part dikonfirmasi sebelum pengerjaan.'
  },
  {
    title: 'Standar kerja teknisi',
    description:
      'Teknisi melakukan pengecekan awal, menjaga area kerja tetap rapi, dan memberi rekomendasi lanjutan bila diperlukan.'
  },
  {
    title: 'Komunikasi mudah',
    description:
      'Booking dilakukan melalui WhatsApp agar pelanggan dapat mengirim keluhan, data mobil, dan lokasi dengan cepat.'
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-garage-radial px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Tentang Flash Garage"
            title="Bengkel mobil panggilan yang fokus pada kemudahan pelanggan"
            description="Flash Garage adalah layanan home service mobil di Bandung untuk membantu pengecekan, servis ringan, tune up, service rem, ganti oli, dan diagnosis awal langsung di lokasi pelanggan."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-metal">
              <h2 className="font-display text-2xl font-black uppercase text-white">
                Kenapa layanan ini dibuat?
              </h2>
              <p className="mt-4 text-sm leading-7 text-garage-100/75">
                Banyak pemilik mobil membutuhkan pengecekan awal atau servis ringan, tetapi
                tidak selalu punya waktu untuk datang dan antre di bengkel. Flash Garage hadir
                sebagai solusi praktis dengan teknisi yang datang ke rumah, kantor, atau lokasi
                kendaraan sesuai jadwal yang dikonfirmasi.
              </p>
              <p className="mt-4 text-sm leading-7 text-garage-100/75">
                Layanan ini tidak dibuat untuk menjanjikan semua kerusakan selesai di lokasi.
                Fokusnya adalah membantu pekerjaan yang memungkinkan dilakukan secara aman dan
                realistis di tempat pelanggan.
              </p>
            </div>

            <div className="rounded-[2rem] border border-electric/30 bg-electric/10 p-6 shadow-glow">
              <h2 className="font-display text-2xl font-black uppercase text-white">
                Catatan penting
              </h2>
              <p className="mt-4 text-sm leading-7 text-garage-100/80">
                Flash Garage belum menerima kunjungan bengkel fisik. Area Jl. Soekarno Hatta,
                Bandung digunakan sebagai titik layanan utama, bukan tempat pelanggan datang
                langsung. Pelanggan diarahkan untuk booking melalui WhatsApp agar teknisi dapat
                datang ke lokasi pelanggan.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="font-display text-xl font-black uppercase text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-garage-100/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Butuh teknisi datang ke lokasi Anda?" />
    </>
  );
}
