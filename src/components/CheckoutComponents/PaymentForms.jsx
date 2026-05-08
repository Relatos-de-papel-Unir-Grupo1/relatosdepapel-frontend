export default function PaymentForms({
  paymentMethod,
  setPaymentMethod,
  cardName,
  setCardName,
}) {
  return (
    <section className="surface-panel p-6 sm:p-7">
      <p className="section-kicker">Pago</p>
      <h3 className="mt-2 font-serif text-4xl font-semibold">Método de Pago</h3>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button type="button" onClick={() => setPaymentMethod('card')} className={paymentMethod === 'card' ? 'rounded-[22px] border border-transparent bg-[var(--color-primary)] px-4 py-4 text-left text-white shadow-lg' : 'rounded-[22px] border border-[rgba(22,49,58,0.08)] bg-white/75 px-4 py-4 text-left'}>
          Tarjeta de Crédito
        </button>
        <button type="button" onClick={() => setPaymentMethod('paypal')} className={paymentMethod === 'paypal' ? 'rounded-[22px] border border-transparent bg-[var(--color-primary)] px-4 py-4 text-left text-white shadow-lg' : 'rounded-[22px] border border-[rgba(22,49,58,0.08)] bg-white/75 px-4 py-4 text-left'}>
          PayPal
        </button>
      </div>

      {paymentMethod === 'card' ? (
        <div className="mt-6">
          <label className="block text-sm font-medium text-[var(--color-ink)]">
            Nombre en la tarjeta:
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
              className="input-field mt-2"
            />
          </label>
        </div>
      ) : (
        <p className="mt-6 rounded-[22px] bg-white/70 px-4 py-4 text-sm leading-7 text-[var(--color-ink-muted)]">Serás redirigido a PayPal para completar tu pago.</p>
      )}
    </section>
  );
}