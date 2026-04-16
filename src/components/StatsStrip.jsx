export default function StatsStrip({ items }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="card-soft flex items-center gap-5 p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose/10 text-rose">
              <Icon size={24} />
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink">{item.value}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-ink/55">
                {item.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
