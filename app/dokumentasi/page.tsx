import type { Metadata } from 'next';
import SectionTitle from '@/components/ui/SectionTitle';
import DocumentationCard from '@/components/cards/DocumentationCard';
import CTASection from '@/components/sections/CTASection';
import { documentationItems } from '@/data/documentation';

export const metadata: Metadata = {
  title: 'Dokumentasi',
  description:
    'Galeri dokumentasi placeholder Flash Garage untuk proses servis, teknisi, alat kerja, dan pengecekan kendaraan.'
};

export default function DocumentationPage() {
  return (
    <>
      <section className="bg-garage-radial px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Dokumentasi"
            title="Galeri proses layanan Flash Garage"
            description="Halaman ini disiapkan untuk dokumentasi pekerjaan, foto teknisi, alat kerja, proses servis, dan pengecekan kendaraan. Placeholder bisa diganti dengan foto asli kapan saja."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {documentationItems.map((item) => (
              <DocumentationCard key={item.slug} item={item} />
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-metal/20 bg-white/[0.04] p-6 text-center">
            <p className="mx-auto max-w-3xl text-sm leading-7 text-garage-100/75">
              Catatan: website ini tidak membuat testimoni palsu. Gunakan foto dan cerita
              pekerjaan nyata setelah tersedia, serta samarkan data pelanggan yang sensitif.
            </p>
          </div>
        </div>
      </section>
      <CTASection title="Ingin booking layanan seperti dokumentasi di atas?" />
    </>
  );
}
