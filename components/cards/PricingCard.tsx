type PricingCardProps = {
  service: string;
  price: string;
  note: string;
};

export default function PricingCard({ service, price, note }: PricingCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-metal">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-metal">
        Harga Awal
      </p>
      <h3 className="mt-3 font-display text-2xl font-black uppercase text-white">
        {service}
      </h3>
      <p className="mt-4 text-3xl font-black text-electric">{price}</p>
      <p className="mt-4 text-sm leading-7 text-garage-100/70">{note}</p>
    </div>
  );
}
