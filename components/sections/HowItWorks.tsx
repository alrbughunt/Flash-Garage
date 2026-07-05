import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { createWhatsAppLink } from '@/lib/whatsapp';

const steps = [
  {
    number: '01',
    title: 'Kirim keluhan dan data mobil',
    description:
      'Sampaikan merk, tipe, tahun, keluhan, lokasi, dan waktu yang diinginkan melalui WhatsApp.'
  },
  {
    number: '02',
    title: 'Admin cek jadwal dan estimasi',
    description:
      'Admin membantu memastikan layanan yang sesuai, area jangkauan, jam teknisi, dan estimasi biaya awal.'
  },
  {
    number: '03',
    title: 'Teknisi datang ke lokasi',
    description:
      'Teknisi menuju rumah, kantor, atau lokasi kendaraan pada jam yang sudah dikonfirmasi.'
  },
  {
    number: '04',
    title: 'Pengerjaan dan rekomendasi',
    description:
      'Pekerjaan dilakukan sesuai kondisi kendaraan. Jika perlu tindakan lanjutan, teknisi memberi rekomendasi yang jelas.'
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-[#080C14] px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Cara Kerja"
          title="Booking jelas, pengerjaan sore sampai malam"
          description="Flash Garage memisahkan jam booking dan jam eksekusi agar pelanggan mudah mengatur waktu."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-electric font-display text-xl font-black text-white shadow-glow">
                {step.number}
              </div>
              <h3 className="font-display text-xl font-black uppercase text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-garage-100/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-electric/30 bg-electric/10 p-6 text-center">
          <p className="text-lg font-bold text-white">
            Booking dan konsultasi: 08.00 - 16.00 WIB. Eksekusi teknisi: 16.00 -
            21.00 WIB setiap hari.
          </p>
          <div className="mt-6">
            <Button href={createWhatsAppLink()} external>
              Cek Jadwal Layanan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
