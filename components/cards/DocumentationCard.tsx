import Image from 'next/image';
import Link from 'next/link';
import { DocumentationItem } from '@/data/documentation';

type DocumentationCardProps = {
  item: DocumentationItem;
};

export default function DocumentationCard({ item }: DocumentationCardProps) {
  return (
    <Link
      href={`/dokumentasi/${item.slug}`}
      className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-metal transition hover:-translate-y-1 hover:border-electric/50"
    >
      <div className="relative h-56 bg-garage-radial">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric">
          {item.serviceType}
        </p>
        <h3 className="mt-3 font-display text-2xl font-black uppercase text-white">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-garage-100/70">{item.summary}</p>
      </div>
    </Link>
  );
}
