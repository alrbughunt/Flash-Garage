import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/cards/ServiceCard';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import { createWhatsAppLink } from '@/lib/whatsapp';

export default function ServicesSection() {
  return (
    <section className="bg-garage-950 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Layanan Utama"
            title="Servis ringan mobil langsung di lokasi pelanggan"
            description="Pilih layanan sesuai keluhan kendaraan. Biaya akhir selalu dikonfirmasi sebelum teknisi melakukan pengerjaan."
          />
          <Button href={createWhatsAppLink()} external className="md:mb-2">
            Konsultasi Kerusakan Mobil
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
