import SectionTitle from '@/components/ui/SectionTitle';
import PricingCard from '@/components/cards/PricingCard';
import Button from '@/components/ui/Button';
import { pricing, pricingNote } from '@/data/pricing';
import { createWhatsAppLink } from '@/lib/whatsapp';

export default function PricingPreview() {
  return (
    <section className="bg-garage-950 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Estimasi Harga"
          title="Harga awal layanan Flash Garage"
          description="Estimasi berikut membantu pelanggan memahami kisaran biaya. Admin tetap melakukan konfirmasi berdasarkan jenis mobil, kondisi, lokasi, dan kebutuhan spare part."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pricing.map((item) => (
            <PricingCard key={item.service} {...item} />
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-metal/20 bg-white/[0.04] p-6 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-garage-100/75">
            {pricingNote}
          </p>
          <div className="mt-6">
            <Button href={createWhatsAppLink()} external>
              Konsultasi Estimasi Biaya
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
