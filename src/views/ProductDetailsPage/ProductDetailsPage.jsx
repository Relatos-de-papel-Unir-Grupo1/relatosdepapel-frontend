import { useNavigate, useParams } from "react-router-dom";
import { books } from "../../data/mocks";
import ProductGallery from "../../components/ProductDetails/ProductGallery";
import ProductInfo from "../../components/ProductDetails/ProductInfo";
import ProductVariants from "../../components/ProductDetails/ProductVariants";
import ProductReviews from "../../components/ProductDetails/ProductReviews";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export default function ProductDetailsPage({ book }) {
  const { id } = useParams();
  const { addToCart } = useContext(GlobalContext);
  const navigate = useNavigate();
  // Prioridad: prop > param de la URL > primer libro del mock
  const currentBook =
    book ||
    books.find((b) => String(b.id) === String(id)) ||
    books[0];

  if (!currentBook) {
    return (
      <div className="page-shell page-section">
        <div className="surface-panel px-6 py-10 sm:px-8">
          <p className="eyebrow-chip">Catálogo</p>
          <p className="mt-4 text-lg">Libro no encontrado.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = (b) => addToCart({ id: b.id, title: b.title, price: b.price, image: b.coverImage, subtitle: b.subtitle, author: b.author, quantity: 1 });
  const handleBuyNow = (b) => {
    addToCart({ id: b.id, title: b.title, price: b.price, image: b.coverImage, subtitle: b.subtitle, author: b.author, quantity: 1 });
    navigate("/cart");
  };
  const handleAddToWishlist = () =>
    console.log("Agregado a lista de deseos:", currentBook.title);
  const handleNotify = () =>
    console.log("Avísame cuando haya stock:", currentBook.title);

  return (
    <div className="page-shell page-section space-y-8">
      <section className="surface-panel overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <ProductGallery book={currentBook} />

        <div className="space-y-6">
          <ProductInfo
            book={currentBook}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onAddToWishlist={handleAddToWishlist}
          />          
          <ProductVariants onNotify={handleNotify} />
        </div>
      </div>
      </section>

      <ProductReviews />
    </div>
  );
}
