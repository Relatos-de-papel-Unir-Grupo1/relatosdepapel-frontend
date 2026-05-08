import { useMemo, useState } from "react";
import { books } from "../../data/mocks";
import FiltersSidebar from "../../components/CatalogComponents/FiltersSidebar";
import BookGrid from "../../components/CatalogComponents/BookGrid";
import EmptyState from "../../components/CatalogComponents/EmptyState";

const DEFAULT_FILTERS = {
  price: "all",
  formats: ["fisico", "digital"],
  popularity: "popular",
  date: "any",
};

function filterByPrice(book, price) {
  switch (price) {
    case "lt10":
      return book.price < 10;
    case "10to20":
      return book.price >= 10 && book.price <= 20;
    case "gt20":
      return book.price > 20;
    case "all":
    default:
      return true;
  }
}

function sortByPopularity(list, popularity) {
  const copy = [...list];
  switch (popularity) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "title-asc":
      return copy.sort((a, b) => a.title.localeCompare(b.title));
    case "popular":
    default:
      return copy;
  }
}

export default function HomePage() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const visibleBooks = useMemo(() => {
    let result = books.filter((b) => filterByPrice(b, filters.price));

    // Si no hay formatos seleccionados, no muestra nada
    if (!filters.formats || filters.formats.length === 0) {
      result = [];
    }

    return sortByPopularity(result, filters.popularity);
  }, [filters]);

  const handleClearFilters = () => setFilters(DEFAULT_FILTERS);  

  return (
    <div>
      <p>RF-01 HOME</p>
      <h1>Catálogo de Libros</h1>

      <div>
        <FiltersSidebar filters={filters} onChange={setFilters} />

        <div>
          {visibleBooks.length === 0 ? (
            <EmptyState onClearFilters={handleClearFilters} />
          ) : (
            <BookGrid books={visibleBooks} />
          )}
        </div>
      </div>
    </div>
  );
}
