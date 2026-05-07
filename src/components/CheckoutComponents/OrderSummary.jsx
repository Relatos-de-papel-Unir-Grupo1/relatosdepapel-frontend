export default function OrderSummary({ cartItems, total }) {
  return (
    <div>
      <h3>Resumen del Pedido</h3>

      {/* Lista de items */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} (x{item.quantity}) - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <div>
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>

      <button type="submit">
        Confirmar y Pagar
      </button>
    </div>
  );
}