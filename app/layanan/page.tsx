import type { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/cards/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import { services } from '@/data/services';
import { pricingNote } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Layanan',
  description:
    'Daftar layanan Flash Garage: tune up biasa, tune up spesial, service rem, ganti oli, dan ganti oil filter di Bandung.'
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-garage-radial px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Layanan Flash Garage"
            title="Pilih layanan home service mobil sesuai kebutuhan kendaraan"
            description="Setiap layanan memiliki harga awal, manfaat, dan catatan pengerjaan. Konfirmasi biaya selalu dilakukan sebelum teknisi mulai bekerja."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-metal/20 bg-white/[0.04] p-6 text-center">
            <p className="mx-auto max-w-4xl text-sm leading-7 text-garage-100/75">
              {pricingNote}
            </p>
          </div>
        </div>
      </section>
      <CTASection title="Belum yakin layanan mana yang sesuai?" />
    </>
  );
}
