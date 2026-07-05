import type { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { areaData } from '@/data/areas';
import { createWhatsAppLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Area Layanan',
  description:
    'Area layanan Flash Garage di Bandung. Teknisi datang ke lokasi pelanggan sesuai jarak dan ketersediaan teknisi.'
};

export default function AreaLayananPage() {
  return (
    <section className="bg-garage-radial px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Area Layanan"
          title={areaData.headline}
          description={areaData.description}
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-metal">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-metal">
              Titik layanan utama
            </p>
            <h2 className="mt-3 font-display text-3xl font-black uppercase text-white">
              {areaData.operationalPoint}
            </h2>
            <p className="mt-5 text-sm leading-7 text-garage-100/75">
              Area ini merupakan titik operasional layanan, bukan bengkel fisik untuk
              kunjungan pelanggan. Flash Garage mengarahkan pelanggan untuk mengirim lokasi
              melalui WhatsApp agar admin dapat memastikan jangkauan layanan dan jadwal
              teknisi.
            </p>

            <div className="mt-6">
              <Button href={createWhatsAppLink()} external>
                Kirim Lokasi via WhatsApp
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-electric/30 bg-electric/10 p-6 shadow-glow">
            <h2 className="font-display text-2xl font-black uppercase text-white">
              Wilayah yang dapat dikonfirmasi
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {areaData.commonAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-white/10 bg-garage-950/55 px-4 py-3 text-sm font-semibold text-garage-100/80"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {areaData.coverageNotes.map((note) => (
            <div key={note} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm leading-7 text-garage-100/78">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
