import type { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import ContactForm from '@/components/forms/ContactForm';
import { siteConfig } from '@/lib/site';
import { createWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    'Hubungi Flash Garage via WhatsApp, email, Instagram, TikTok, dan Facebook untuk booking home service mobil di Bandung.'
};

export default function ContactPage() {
  const contactItems = [
    {
      label: 'WhatsApp',
      value: `+${siteConfig.whatsappNumber}`,
      href: createWhatsAppLink()
    },
    {
      label: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`
    },
    {
      label: 'Area Operasional',
      value: siteConfig.operationalArea,
      href: '/area-layanan'
    }
  ];

  return (
    <section className="bg-garage-radial px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Kontak Flash Garage"
          title="Booking dan konsultasi layanan melalui WhatsApp"
          description="Kirim data mobil, keluhan, lokasi, dan waktu yang diinginkan. Admin akan membantu cek jadwal teknisi dan estimasi biaya."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-electric/50 hover:bg-white/[0.07]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-metal">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-bold text-white">{item.value}</p>
              </a>
            ))}

            <div className="rounded-3xl border border-electric/30 bg-electric/10 p-6 shadow-glow">
              <h2 className="font-display text-2xl font-black uppercase text-white">
                Jam operasional
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-garage-100/80">
                <p>
                  <strong className="text-white">Booking dan konsultasi:</strong>
                  <br />
                  {siteConfig.hours.booking}
                </p>
                <p>
                  <strong className="text-white">Eksekusi layanan teknisi:</strong>
                  <br />
                  {siteConfig.hours.service}
                </p>
                <p>{siteConfig.hours.days}</p>
              </div>
              <Button href={createWhatsAppLink()} external className="mt-6 w-full">
                Hubungi via WhatsApp
              </Button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="font-display text-2xl font-black uppercase text-white">
                Media sosial
              </h2>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-electric hover:bg-white/10">
                  Instagram
                </a>
                <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-electric hover:bg-white/10">
                  TikTok
                </a>
                <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-electric hover:bg-white/10">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
