export default function OrderSummary({ cartItems, total }) {
  return (
    <aside className="surface-panel sticky top-28 p-6">
      <p className="section-kicker">Resumen</p>
      <h3 className="mt-2 font-serif text-4xl font-semibold">Resumen del Pedido</h3>

      <ul className="mt-6 space-y-3">
        {cartItems.map((item) => (
          <li key={item.id} className="rounded-[22px] border border-[rgba(22,49,58,0.08)] bg-white/70 px-4 py-3 text-sm leading-6">
            <span className="block font-semibold text-[var(--color-ink)]">{item.title}</span>
            <span className="text-[var(--color-ink-muted)]">x{item.quantity} · ${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-[22px] bg-[var(--color-primary-soft)] px-4 py-5">
        <strong className="font-serif text-3xl font-semibold">Total: ${total.toFixed(2)}</strong>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full">
        Confirmar y Pagar
      </button>
    </aside>
  );
}