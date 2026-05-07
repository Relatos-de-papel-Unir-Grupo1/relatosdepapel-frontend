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
    <aside>
      <h2>Filtros</h2>

      {/* Precio */}
      <div>
        <h3>Precio</h3>
        <div>
          {PRICE_OPTIONS.map((opt) => (
            <label key={opt.value}>
              <input
                type="radio"
                name="price"
                value={opt.value}
                checked={filters.price === opt.value}
                onChange={() => handle("price", opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* Formato */}
      <div>
        <h3>Formato</h3>
        <div>
          {FORMAT_OPTIONS.map((opt) => (
            <label key={opt.value}>
              <input
                type="checkbox"
                checked={(filters.formats || []).includes(opt.value)}
                onChange={() => toggleFormat(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* Popularidad */}
      <div>
        <h3>Popularidad</h3>
        <select
          value={filters.popularity}
          onChange={(e) => handle("popularity", e.target.value)}
        >
          {POPULARITY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Fecha de publicación */}
      <div>
        <h3>Fecha de publicación</h3>
        <select
          value={filters.date}
          onChange={(e) => handle("date", e.target.value)}
        >
          {DATE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}
