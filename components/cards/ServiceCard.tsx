import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/data/services';
import { createServiceWhatsAppLink } from '@/lib/whatsapp';
import Button from '@/components/ui/Button';

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-metal transition duration-200 hover:-translate-y-1 hover:border-electric/50 hover:bg-white/[0.07]">
      <div className="relative h-48 overflow-hidden bg-garage-radial">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover opacity-90 transition duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-metal backdrop-blur">
          Home Service
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm font-bold text-electric">{service.price}</p>
        <h3 className="mt-2 font-display text-2xl font-black uppercase text-white">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-garage-100/75">
          {service.shortDescription}
        </p>
        <ul className="mt-5 space-y-2 text-sm text-garage-100/70">
          {service.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-electric" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={`/layanan/${service.slug}`} variant="secondary" className="w-full">
            Detail
          </Button>
          <Button
            href={createServiceWhatsAppLink(service.title)}
            external
            className="w-full"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </article>
  );
}
