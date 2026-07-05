type BenefitCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-metal transition hover:-translate-y-1 hover:border-electric/50 hover:bg-white/[0.07]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-metal/30 bg-electric/15 text-2xl shadow-glow">
        {icon}
      </div>
      <h3 className="font-display text-xl font-black uppercase tracking-wide text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-garage-100/75">{description}</p>
    </div>
  );
}
