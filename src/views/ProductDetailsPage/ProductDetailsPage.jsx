import { useParams } from "react-router-dom";
import { books } from "../../data/mocks";
import ProductGallery from "../../components/ProductDetails/ProductGallery";
import ProductInfo from "../../components/ProductDetails/ProductInfo";
import ProductVariants from "../../components/ProductDetails/ProductVariants";
import ProductReviews from "../../components/ProductDetails/ProductReviews";

export default function ProductDetailsPage({ book }) {
  const { id } = useParams();

  // Prioridad: prop > param de la URL > primer libro del mock
  const currentBook =
    book ||
    books.find((b) => String(b.id) === String(id)) ||
    books[0];

  if (!currentBook) {
    return (
      <div>
        <p>Libro no encontrado.</p>
      </div>
    );
  }

  const handleAddToCart = (b) => console.log("Añadir al carrito:", b.title);
  const handleBuyNow = (b) => console.log("Comprar ahora:", b.title);
  const handleAddToWishlist = () =>
    console.log("Agregado a lista de deseos:", currentBook.title);
  const handleNotify = () =>
    console.log("Avísame cuando haya stock:", currentBook.title);

  return (
    <div>
      <div>
        <ProductGallery book={currentBook} />

        <div>
          <ProductInfo
            book={currentBook}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onAddToWishlist={handleAddToWishlist}
          />
          <ProductVariants onNotify={handleNotify} />
        </div>
      </div>

      <ProductReviews />
    </div>
  );
}
