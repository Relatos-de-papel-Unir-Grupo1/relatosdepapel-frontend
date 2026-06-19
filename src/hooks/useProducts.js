import { useState, useEffect } from "react";
import { books } from "../data/mocks";
import { buildApiUrl } from "../Utils/apiConfig";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        // Usar el gateway para peticiones de catálogo
        const apiUrl = buildApiUrl("CATALOGUE", "/api/v1/books");
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            targetMethod: "GET",
            queryParams: {},
            body: null,
          }),
        });

        if (!response.ok) {
          throw new Error("Error al cargar productos del servidor");
        }

        const data = await response.json();
        setProducts(data.books);
        setLoading(false);
      } catch (err) {
        console.log("Error en petición HTTP:", err.message);
        console.log("Cargando datos de respaldo...");

        // Cargar datos de respaldo con un pequeño delay para simular carga
        setTimeout(() => {
          setProducts(books);
          setError("Datos cargados desde caché local");
          setLoading(false);
        }, 1000);
      }
    };
    fetchProducts();
  }, []); // Se ejecuta en cada montaje del componente
  return { products, loading, error };
}
