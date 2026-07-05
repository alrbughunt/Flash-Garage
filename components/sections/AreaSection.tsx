import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { areaData } from '@/data/areas';
import { createWhatsAppLink } from '@/lib/whatsapp';

export default function AreaSection() {
  return (
    <section className="bg-garage-radial px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionTitle
          eyebrow="Area Layanan"
          title="Teknisi datang dari titik layanan Bandung"
          description={areaData.description}
        />

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-metal">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-metal">
            Titik operasional
          </p>
          <p className="mt-3 text-2xl font-black text-white">{areaData.operationalPoint}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {areaData.commonAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-white/10 bg-garage-950/55 px-4 py-3 text-sm font-semibold text-garage-100/78"
              >
                {area}
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-sm leading-7 text-garage-100/75">
            {areaData.coverageNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>

          <Button href={createWhatsAppLink()} external className="mt-6 w-full">
            Kirim Lokasi via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
