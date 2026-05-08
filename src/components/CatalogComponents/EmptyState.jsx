export default function EmptyState({ onClearFilters }) {
  return (
    <div className="surface-panel flex flex-col items-start gap-4 px-6 py-8 sm:px-8">
      <span className="eyebrow-chip">Sin coincidencias</span>
      <h3 className="font-serif text-3xl font-semibold">No encontramos resultados para esa combinación.</h3>
      <p className="max-w-2xl text-sm leading-7 text-[var(--color-ink-muted)]">
        No encontramos libros que coincidan exactamente con tu búsqueda y
        filtros actuales. Intenta usar términos más generales o eliminar
        algunos filtros.
      </p>

      <button type="button" onClick={onClearFilters} className="btn-primary">
        LIMPIAR FILTROS
      </button>
    </div>
  );
}
