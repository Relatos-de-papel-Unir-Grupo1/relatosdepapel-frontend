export default function ProductInfo({ book, onAddToCart, onBuyNow }) {
  return (
    <div className="space-y-6">
      <div>
        <p className="section-kicker">Literatura contemporánea</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold leading-none sm:text-6xl">{book.title}</h1>
        <p className="mt-3 text-lg text-[var(--color-ink-muted)]">por {book.author}</p>
      </div>

      <p className="max-w-2xl text-sm leading-7 text-[var(--color-ink-muted)] sm:text-base">
        {book.description}
      </p>

      <div className="flex flex-wrap items-end gap-4 rounded-[26px] border border-[rgba(22,49,58,0.08)] bg-white/72 p-5">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--color-primary-deep)]">Precio</p>
          <span className="mt-2 block font-serif text-4xl font-semibold">${book.unitPrice.toFixed(2)}</span>
        </div>
        <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary-deep)]">
          Stock disponible
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-[26px] border border-[rgba(22,49,58,0.08)] bg-[rgba(0,194,159,0.08)] px-5 py-4 text-sm text-[var(--color-ink)]">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-primary-deep)]">✓</span>
        <div>
          <p className="font-semibold">Disponible para entrega</p>
          <p className="text-[var(--color-ink-muted)]">Envíos estimados en 24h para referencias en stock.</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => onAddToCart?.(book)} className="btn-primary flex-1">
          Añadir al carrito
        </button>
        <button type="button" onClick={() => onBuyNow?.(book)} className="btn-secondary flex-1">
          Comprar ahora
        </button>
      </div>

      <hr className="hairline" />
    </div>
  );
}
