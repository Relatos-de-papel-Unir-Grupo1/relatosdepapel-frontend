export default function EmptyState({ onClearFilters }) {
  return (
    <div>
      <h3>Sin resultados</h3>
      <p>
        No encontramos libros que coincidan exactamente con tu búsqueda y
        filtros actuales. Intenta usar términos más generales o eliminar
        algunos filtros.
      </p>

      <button type="button" onClick={onClearFilters}>
        LIMPIAR FILTROS
      </button>
    </div>
  );
}
