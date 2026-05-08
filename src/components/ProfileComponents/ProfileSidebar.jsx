const SECTIONS = [
  { key: "perfil", label: "Mi Perfil" },
  { key: "pedidos", label: "Mis Pedidos" },
  { key: "direcciones", label: "Direcciones" },
  { key: "pagos", label: "Métodos de Pago" },
];

export default function ProfileSidebar({ active, onChange }) {
  return (
    <aside>
      <nav>
        {SECTIONS.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => onChange(s.key)}
          >
            {s.key === active ? <strong>{s.label}</strong> : s.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
