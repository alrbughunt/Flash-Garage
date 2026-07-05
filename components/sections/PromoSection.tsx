import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { promo } from '@/data/promo';
import { createWhatsAppLink } from '@/lib/whatsapp';

export default function PromoSection() {
  return (
    <section className="bg-[#080C14] px-4 py-16 md:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-electric/30 bg-gradient-to-br from-electric/20 via-white/[0.05] to-metal/10 p-6 shadow-glow md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <SectionTitle
            eyebrow="Promo Aktif"
            title={promo.title}
            description={promo.description}
          />
          <div className="rounded-[2rem] border border-white/10 bg-garage-950/70 p-6">
            <p className="font-display text-4xl font-black uppercase text-white">
              {promo.discount}
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-garage-100/75">
              {promo.terms.map((term) => (
                <li key={term} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-electric" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
            <Button href={createWhatsAppLink()} external className="mt-6 w-full">
              Cek Promo via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
