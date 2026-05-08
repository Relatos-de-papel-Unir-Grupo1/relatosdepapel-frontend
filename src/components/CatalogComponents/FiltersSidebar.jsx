const PRICE_OPTIONS = [
  { value: "all", label: "Todos" },
  { value: "lt10", label: "Menos de €10" },
  { value: "10to20", label: "€10 - €20" },
  { value: "gt20", label: "Más de €20" },
];

const FORMAT_OPTIONS = [
  { value: "fisico", label: "Físico" },
  { value: "digital", label: "Digital" },
];

const POPULARITY_OPTIONS = [
  { value: "popular", label: "Más populares" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "title-asc", label: "Título: A - Z" },
];

const DATE_OPTIONS = [
  { value: "any", label: "Cualquier fecha" },
  { value: "last-month", label: "Último mes" },
  { value: "last-year", label: "Último año" },
  { value: "older", label: "Más de un año" },
];

export default function FiltersSidebar({ filters, onChange }) {
  const handle = (key, value) => onChange({ ...filters, [key]: value });

  const toggleFormat = (value) => {
    const current = filters.formats || [];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    handle("formats", next);
  };

  return (
    <aside className="surface-panel h-fit p-6 sm:p-7">
      <p className="section-kicker">Exploración</p>
      <h2 className="mt-2 font-serif text-3xl font-semibold">Filtros</h2>
      <p className="mt-3 text-sm leading-6 text-[var(--color-ink-muted)]">
        Acota por precio, formato, orden y fecha para navegar el catálogo con menos ruido visual.
      </p>

      <div className="mt-8 space-y-7">
        <div className="space-y-4">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--color-primary-deep)]">Precio</h3>
          <div className="space-y-2">
          {PRICE_OPTIONS.map((opt) => (
            <label key={opt.value} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[rgba(22,49,58,0.08)] bg-white/80 px-4 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:border-[rgba(0,194,159,0.3)] hover:bg-[var(--color-primary-soft)]/40">
              <input
                type="radio"
                name="price"
                value={opt.value}
                checked={filters.price === opt.value}
                onChange={() => handle("price", opt.value)}
                className="h-4 w-4 accent-[var(--color-primary)]"
              />
              {opt.label}
            </label>
          ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--color-primary-deep)]">Formato</h3>
          <div className="space-y-2">
          {FORMAT_OPTIONS.map((opt) => (
            <label key={opt.value} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[rgba(22,49,58,0.08)] bg-white/80 px-4 py-3 text-sm font-medium text-[var(--color-ink)] transition hover:border-[rgba(0,194,159,0.3)] hover:bg-[var(--color-primary-soft)]/40">
              <input
                type="checkbox"
                checked={(filters.formats || []).includes(opt.value)}
                onChange={() => toggleFormat(opt.value)}
                className="h-4 w-4 rounded accent-[var(--color-primary)]"
              />
              {opt.label}
            </label>
          ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--color-primary-deep)]">Popularidad</h3>
        <select
          value={filters.popularity}
          onChange={(e) => handle("popularity", e.target.value)}
          className="select-field"
        >
          {POPULARITY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--color-primary-deep)]">Fecha de publicación</h3>
        <select
          value={filters.date}
          onChange={(e) => handle("date", e.target.value)}
          className="select-field"
        >
          {DATE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        </div>
      </div>
    </aside>
  );
}
