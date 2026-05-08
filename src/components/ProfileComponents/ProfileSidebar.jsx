const SECTIONS = [
  { key: "perfil", label: "Mi Perfil" },
  { key: "pedidos", label: "Mis Pedidos" },
  { key: "direcciones", label: "Direcciones" },
  { key: "pagos", label: "Métodos de Pago" },
];

export default function ProfileSidebar({ active, onChange }) {
  return (
    <aside className="surface-panel h-fit p-5 sm:p-6">
      <p className="section-kicker">Navegación</p>
      <nav className="mt-5 space-y-2">
        {SECTIONS.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => onChange(s.key)}
            className={s.key === active ? 'w-full rounded-[20px] bg-[var(--color-primary)] px-4 py-3 text-left font-semibold text-white shadow-lg' : 'w-full rounded-[20px] border border-[rgba(22,49,58,0.08)] bg-white/75 px-4 py-3 text-left text-[var(--color-ink)] transition hover:bg-[var(--color-primary-soft)]'}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
