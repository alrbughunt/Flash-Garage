import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';
import { services, getServiceBySlug } from '@/data/services';
import { createServiceWhatsAppLink } from '@/lib/whatsapp';
import { pricingNote } from '@/data/pricing';

type ServiceDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Layanan tidak ditemukan'
    };
  }

  return {
    title: service.title,
    description: `${service.title} Flash Garage di Bandung. ${service.shortDescription}`
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const detailBlocks = [
    { title: 'Masalah yang biasa ditangani', items: service.problems },
    { title: 'Apa saja yang dicek', items: service.checks },
    { title: 'Kapan membutuhkan layanan ini', items: service.whenNeeded },
    { title: 'Catatan batasan pengerjaan', items: service.limitations }
  ];

  return (
    <>
      <section className="bg-garage-radial px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SectionTitle
                eyebrow="Detail Layanan"
                title={service.title}
                description={service.description}
              />

              <div className="mt-8 rounded-[2rem] border border-electric/30 bg-electric/10 p-6 shadow-glow">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-metal">
                  Harga mulai dari
                </p>
                <p className="mt-3 font-display text-4xl font-black uppercase text-white">
                  {service.price}
                </p>
                <p className="mt-4 text-sm leading-7 text-garage-100/75">{pricingNote}</p>
                <Button
                  href={createServiceWhatsAppLink(service.title)}
                  external
                  className="mt-6 w-full"
                >
                  Booking {service.title}
                </Button>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                <h2 className="font-display text-2xl font-black uppercase text-white">
                  Estimasi proses
                </h2>
                <p className="mt-4 text-sm leading-7 text-garage-100/75">
                  {service.processEstimate}
                </p>
              </div>

              {detailBlocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <h2 className="font-display text-2xl font-black uppercase text-white">
                    {block.title}
                  </h2>
                  <ul className="mt-5 grid gap-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-7 text-garage-100/75">
                        <span className="mt-2 h-2 w-2 rounded-full bg-electric" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Konsultasi ${service.title} via WhatsApp`}
        description="Kirim merk, tipe, tahun kendaraan, keluhan, lokasi, dan waktu yang diinginkan agar admin dapat membantu cek jadwal teknisi."
      />
    </>
  );
}
