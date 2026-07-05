import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className,
  external = false,
  ariaLabel
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-garage-950';
  const variants = {
    primary:
      'bg-electric text-white shadow-glow hover:-translate-y-0.5 hover:bg-garage-700',
    secondary:
      'border border-metal/40 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:border-electric hover:bg-electric/20',
    ghost:
      'text-garage-100 hover:bg-white/10 hover:text-white'
  };

  const props = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
