import FiltersSidebar from "../../components/CatalogComponents/FiltersSidebar";
import BookGrid from "../../components/CatalogComponents/BookGrid";
import EmptyState from "../../components/CatalogComponents/EmptyState";
import { useBooks } from "../../hooks/useBooks";

export default function HomePage() {
  const { books, filters, setFilters, DEFAULT_FILTERS } = useBooks();

  const handleClearFilters = () => setFilters(DEFAULT_FILTERS);  

  return (
    <div>
      <p>RF-01 HOME</p>
      <h1>Catálogo de Libros</h1>

      <div>
        <FiltersSidebar filters={filters} onChange={setFilters} />

        <div>
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
