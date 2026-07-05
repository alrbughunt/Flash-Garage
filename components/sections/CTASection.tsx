import Button from '@/components/ui/Button';
import { createWhatsAppLink } from '@/lib/whatsapp';

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = 'Siap booking home service mobil?',
  description = 'Kirim data mobil, keluhan, lokasi, dan waktu yang diinginkan. Admin Flash Garage akan membantu cek jadwal dan estimasi layanan.'
}: CTASectionProps) {
  return (
    <section className="bg-garage-radial px-4 py-20 md:px-6">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-electric/30 bg-garage-950/70 p-8 text-center shadow-glow md:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-electric">
          Flash Garage
        </p>
        <h2 className="mt-4 font-display text-3xl font-black uppercase text-white md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-garage-100/78">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={createWhatsAppLink()} external>
            Panggil Teknisi Sekarang
          </Button>
          <Button href="/kontak" variant="secondary">
            Kontak Flash Garage
          </Button>
        </div>
      </div>
    </section>
  );
}
