import Badge from './Badge';
import { cn } from '@/lib/utils';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  className
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mx-auto max-w-3xl',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-garage-100/80 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
