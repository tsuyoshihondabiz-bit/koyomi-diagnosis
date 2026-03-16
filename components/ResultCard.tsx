interface ResultCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

export default function ResultCard({ icon, title, children }: ResultCardProps) {
  return (
    <section className="card-hover bg-bg-card border border-gold/10 rounded-xl p-6">
      <h3 className="text-gold-bright font-serif text-lg mb-4">
        {icon} {title}
      </h3>
      <div className="text-text text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}
