import { createContext, useState, useMemo } from "react";
import { useProducts } from "../hooks/useProducts";

export const BookContext = createContext();

const DEFAULT_FILTERS = {
  price: "all",
  formats: ["fisico", "digital"],
  popularity: "popular",
  date: "any",
};

function filterByPrice(book, price) {
  switch (price) {
    case "lt10":
      return book.unitPrice < 10;
    case "10to20":
      return book.unitPrice >= 10 && book.unitPrice <= 20;
    case "gt20":
      return book.unitPrice > 20;
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

export function BookProvider({ children }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [searchTerm, setSearchTerm] = useState("");
  const { products:books } = useProducts();

  const visibleBooks = useMemo(() => {
    let result = books.filter((b) => filterByPrice(b, filters.price));

    if (searchTerm) {
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (!filters.formats || filters.formats.length === 0) {
      result = [];
    }

    return sortByPopularity(result, filters.popularity);
  }, [books, filters, searchTerm]);

  const value = {
    books: visibleBooks,
    filters,
    setFilters,
    searchTerm,
    setSearchTerm,
    DEFAULT_FILTERS,
  };

  return (
    <BookContext.Provider value={value}>{children}</BookContext.Provider>
  );
}