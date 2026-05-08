import FiltersSidebar from "../../components/CatalogComponents/FiltersSidebar";
import BookGrid from "../../components/CatalogComponents/BookGrid";
import EmptyState from "../../components/CatalogComponents/EmptyState";
import { useBooks } from "../../hooks/useBooks";

export default function HomePage() {
  const { books, filters, setFilters, DEFAULT_FILTERS } = useBooks();

  const handleClearFilters = () => setFilters(DEFAULT_FILTERS);  

  return (
    <div className="page-shell page-section space-y-8 sm:space-y-10">
      

      <div className="grid gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
        <FiltersSidebar filters={filters} onChange={setFilters} />

        <div className="space-y-5">
          <div className="flex flex-col gap-3 rounded-[24px] border border-[rgba(22,49,58,0.1)] bg-white/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--color-primary-deep)]">
                Catálogo
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold">Libros para leer con calma</h2>
            </div>
            <p className="text-sm text-[var(--color-ink-muted)]">
              Resultados activos: <span className="font-semibold text-[var(--color-ink)]">{books.length}</span>
            </p>
          </div>

          {books.length === 0 ? (
            <EmptyState onClearFilters={handleClearFilters} />
          ) : (
            <BookGrid books={books} />
          )}
        </div>
      </div>
    </div>
  );
}
