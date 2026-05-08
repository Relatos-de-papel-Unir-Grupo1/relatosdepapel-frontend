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
    <article className="surface-panel overflow-hidden px-5 py-6 sm:px-6">
      <div className="flex flex-col gap-4 border-b border-[rgba(22,49,58,0.08)] pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--color-primary-deep)]">Pedido {order.orderNumber}</p>
          <p className="mt-2 text-sm text-[var(--color-ink-muted)]">Realizado el {formatDate(order.date)}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary-deep)]">{status}</span>
          <span className="font-serif text-3xl font-semibold">€{order.total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-5 grid gap-4">
        {items.map((it) => (
          <div key={it.bookId} className="grid gap-4 rounded-[22px] border border-[rgba(22,49,58,0.08)] bg-white/72 p-4 sm:grid-cols-[88px_minmax(0,1fr)] sm:items-center">
            <div>
              {it.book?.coverImage ? (
                <img src={it.book.coverImage} alt={it.book.title} className="h-24 w-full rounded-2xl object-cover sm:w-20" />
              ) : (
                "Imagen"
              )}
            </div>
            <div>
              <h3 className="font-serif text-2xl font-semibold">{it.book?.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                {it.book?.author} • {formatFor(it.bookId)}
              </p>
              <p className="mt-2 text-sm font-medium text-[var(--color-ink)]">Cant: {it.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {isShipped && (
        <div className="mt-5 rounded-[22px] bg-[rgba(0,194,159,0.08)] px-4 py-4">
          <div className="flex items-start gap-3">
            <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-full bg-white">🚚</span>
            <div>
              <p className="font-semibold">Envío Exprés - Correos</p>
              <p className="text-sm text-[var(--color-ink-muted)]">Llegada estimada: Mañana</p>
            </div>
          </div>
          <a href="#" className="mt-3 inline-flex text-sm font-semibold text-[var(--color-primary-deep)]">Seguimiento: ES-9988776655 ↗</a>
        </div>
      )}

      {isPending && (
        <div className="mt-5">
          <button type="button" onClick={() => onCancel?.(order)} className="btn-secondary">
            Cancelar pedido
          </button>
        </div>
      )}
    </article>
  );
}
