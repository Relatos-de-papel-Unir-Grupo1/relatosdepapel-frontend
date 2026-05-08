const FORMATS = ["Tapa Dura", "Bolsillo", "Edición Ilustrada", "Tapa Blanda"];

function formatDate(iso) {
  const d = new Date(iso);
  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
  ];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function OrderCard({ order, status, books, onCancel }) {
  // Resolver libros a partir de los items
  const items = order.items.map((it) => {
    const book = books.find((b) => b.id === it.bookId);
    return { ...it, book };
  });

  const isShipped = status === "ENVIADO";
  const isPending = status === "PENDIENTE";

  // Formato fake determinístico por bookId
  const formatFor = (bookId) => FORMATS[bookId % FORMATS.length];

  return (
    <article>
      {/* Header */}
      <div>
        <div>
          <p>Pedido {order.orderNumber}</p>
          <p>Realizado el {formatDate(order.date)}</p>
        </div>
        <div>
          <span>{status}</span>
          <span>€{order.total.toFixed(2)}</span>
        </div>
      </div>

      {/* Items */}
      <div>
        {items.map((it) => (
          <div key={it.bookId}>
            <div>
              {it.book?.coverImage ? (
                <img src={it.book.coverImage} alt={it.book.title} />
              ) : (
                "Imagen"
              )}
            </div>
            <div>
              <h3>{it.book?.title}</h3>
              <p>
                {it.book?.author} • {formatFor(it.bookId)}
              </p>
              <p>Cant: {it.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tracking (solo enviados) */}
      {isShipped && (
        <div>
          <div>
            <span aria-hidden>🚚</span>
            <div>
              <p>Envío Exprés - Correos</p>
              <p>Llegada estimada: Mañana</p>
            </div>
          </div>
          <a href="#">Seguimiento: ES-9988776655 ↗</a>
        </div>
      )}

      {/* Acción: cancelar (solo pendientes) */}
      {isPending && (
        <div>
          <button type="button" onClick={() => onCancel?.(order)}>
            Cancelar pedido
          </button>
        </div>
      )}
    </article>
  );
}
