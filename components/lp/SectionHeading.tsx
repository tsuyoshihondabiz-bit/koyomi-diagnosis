interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClass} mb-12`}>
      <h2 className="font-serif text-gold text-xl sm:text-2xl font-bold tracking-wide">
        {title}
      </h2>
      {subtitle && (
        <p className="font-display italic text-text-dim/50 text-[11px] sm:text-xs tracking-[0.25em] mt-2 uppercase">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-px max-w-[60px] bg-gold/40 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
