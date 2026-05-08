export default function PaymentSuccess({ paymentMethod, total }) {
  return (
    <div className="page-shell page-section">
      <div className="surface-panel mx-auto max-w-3xl px-6 py-10 text-center sm:px-8">
        <p className="section-kicker">Pago confirmado</p>
        <h2 className="mt-3 font-serif text-5xl font-semibold">¡Pedido procesado!</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--color-ink-muted)]">Tu pedido ha sido procesado exitosamente.</p>

        <div className="mx-auto mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
          <div className="rounded-[22px] border border-[rgba(22,49,58,0.08)] bg-white/70 px-4 py-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-deep)]">Total pagado</p>
            <p className="mt-2 font-serif text-3xl font-semibold">${total.toFixed(2)}</p>
          </div>
          <div className="rounded-[22px] border border-[rgba(22,49,58,0.08)] bg-white/70 px-4 py-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-primary-deep)]">Método</p>
            <p className="mt-2 font-medium">{paymentMethod === 'card' ? 'Tarjeta de Crédito' : 'PayPal'}</p>
          </div>
        </div>

        <a href="/" className="btn-primary mt-8">
          Continuar comprando
        </a>
      </div>
    </div>
  );
}