import SectionTitle from '@/components/ui/SectionTitle';
import DocumentationCard from '@/components/cards/DocumentationCard';
import Button from '@/components/ui/Button';
import { documentationItems } from '@/data/documentation';

export default function DocumentationSection() {
  return (
    <section className="bg-garage-950 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Dokumentasi"
            title="Galeri pekerjaan dan proses teknisi"
            description="Gunakan area ini untuk foto asli proses servis, alat kerja, teknisi, dan pengecekan kendaraan. Saat ini memakai placeholder rapi yang mudah diganti."
          />
          <Button href="/dokumentasi" variant="secondary" className="md:mb-2">
            Lihat Galeri
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {documentationItems.map((item) => (
            <DocumentationCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
