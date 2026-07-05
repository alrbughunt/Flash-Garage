import SectionTitle from '@/components/ui/SectionTitle';
import BenefitCard from '@/components/cards/BenefitCard';

const benefits = [
  {
    icon: '⚡',
    title: 'Respons Praktis',
    description:
      'Pelanggan cukup kirim keluhan dan lokasi. Admin membantu mengarahkan layanan yang paling sesuai.'
  },
  {
    icon: '🔧',
    title: 'Teknisi Datang',
    description:
      'Fokus layanan adalah pengerjaan di rumah, kantor, atau lokasi kendaraan yang aman untuk teknisi.'
  },
  {
    icon: '🧾',
    title: 'Biaya Transparan',
    description:
      'Harga awal ditampilkan jelas. Perubahan biaya dikonfirmasi terlebih dahulu sebelum pengerjaan.'
  },
  {
    icon: '🛡️',
    title: 'Batasan Jelas',
    description:
      'Tidak semua kerusakan bisa selesai di lokasi. Teknisi memberi rekomendasi lanjutan bila dibutuhkan.'
  }
];

export default function TrustSection() {
  return (
    <section className="bg-garage-radial px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Keunggulan"
          title="Layanan otomotif panggilan yang rapi, jelas, dan realistis"
          description="Flash Garage dirancang untuk membantu kebutuhan servis ringan dan diagnosis awal tanpa membuat klaim berlebihan."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
