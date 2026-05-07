export default function BookCard({ book, onAddToCart }) {
  return (
    <article>
      {/* Imagen */}
      <div>
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={book.title}
            loading="lazy"
          />
        ) : (
          <span>Imagen</span>
        )}
      </div>

      {/* Info */}
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>

        <p>€ {book.price.toFixed(2)}</p>

        <button type="button" onClick={() => onAddToCart?.(book)}>
          AÑADIR AL CARRITO
        </button>
      </div>
    </article>
  );
}
