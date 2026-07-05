import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import SectionTitle from '@/components/ui/SectionTitle';
import CTASection from '@/components/sections/CTASection';
import { documentationItems, getDocumentationBySlug } from '@/data/documentation';

type DocumentationDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return documentationItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: DocumentationDetailPageProps): Metadata {
  const item = getDocumentationBySlug(params.slug);

  if (!item) {
    return {
      title: 'Dokumentasi tidak ditemukan'
    };
  }

  return {
    title: item.title,
    description: `${item.title} - ${item.summary}`
  };
}

export default function DocumentationDetailPage({ params }: DocumentationDetailPageProps) {
  const item = getDocumentationBySlug(params.slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section className="bg-garage-radial px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={item.serviceType}
            title={item.title}
            description={item.summary}
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {item.gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative h-72 overflow-hidden rounded-[2rem] border border-white/10 bg-garage-950 shadow-metal"
                >
                  <Image
                    src={image}
                    alt={`${item.title} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-metal">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-metal">
                Lokasi umum
              </p>
              <p className="mt-3 text-xl font-bold text-white">{item.location}</p>

              <h2 className="mt-8 font-display text-2xl font-black uppercase text-white">
                Catatan pekerjaan
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-garage-100/75">
                {item.notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-electric" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <CTASection title="Butuh layanan home service mobil?" />
    </>
  );
}
