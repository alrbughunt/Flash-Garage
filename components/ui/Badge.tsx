import { cn } from '@/lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-garage-100',
        className
      )}
    >
      {children}
    </span>
  );
}
