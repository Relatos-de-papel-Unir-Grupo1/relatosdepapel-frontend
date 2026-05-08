export default function ProductInfo({ book, onAddToCart, onBuyNow }) {
  return (
    <div>
      {/* Categoría */}
      <p>Literatura universal</p>

      {/* Título y autor */}
      <h1>{book.title}</h1>
      <p>{book.author}</p>

      {/* Descripción */}
      <p>{book.description}</p>

      {/* Precio */}
      <div>
        <span>${book.price.toFixed(2)}</span>
        <span>RF-07 Stock</span>
      </div>

      {/* Disponibilidad */}
      <div>
        <span>✓</span>
        <span>Disponible</span>
        <span>(Envíos en 24h)</span>
      </div>

      {/* Botones */}
      <div>
        <button type="button" onClick={() => onAddToCart?.(book)}>
          Añadir al carrito
        </button>
        <button type="button" onClick={() => onBuyNow?.(book)}>
          Comprar ahora
        </button>
      </div>

      <hr />
    </div>
  );
}
