interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  ornament?: boolean;
}

export default function SectionHeading({ title, subtitle, ornament = true }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {ornament && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="sparkle-star text-[8px]" style={{ animationDelay: '0s' }}>✦</span>
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <span className="text-gold/40 text-xs">☽</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold/40" />
          <span className="sparkle-star text-[8px]" style={{ animationDelay: '1s' }}>✦</span>
        </div>
      )}
      <h2 className="section-heading__title">
        {title}
      </h2>
      {subtitle && (
        <span className="section-heading__sub">{subtitle}</span>
      )}
      <span className="section-heading__rule" />
    </div>
  );
}
