import { useContext } from "react";
import { BookContext } from "../context/BookContext";

export const useBooks = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("useBooks debe ser usado dentro de un BookProvider");
  }
  return context;
};