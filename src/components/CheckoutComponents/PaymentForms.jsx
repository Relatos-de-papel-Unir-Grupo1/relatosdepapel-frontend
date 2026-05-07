export default function PaymentForms({
  paymentMethod,
  setPaymentMethod,
  cardName,
  setCardName,
}) {
  return (
    <div>
      <h3>Método de Pago</h3>

      {/* Selección de método de pago */}
      <div>
        <button type="button" onClick={() => setPaymentMethod('card')}>
          Tarjeta de Crédito
        </button>
        <button type="button" onClick={() => setPaymentMethod('paypal')}>
          PayPal
        </button>
      </div>

      {/* Formulario de tarjeta */}
      {paymentMethod === 'card' ? (
        <div>
          <label>
            Nombre en la tarjeta:
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </label>
        </div>
      ) : (
        <p>Serás redirigido a PayPal para completar tu pago.</p>
      )}
    </div>
  );
}