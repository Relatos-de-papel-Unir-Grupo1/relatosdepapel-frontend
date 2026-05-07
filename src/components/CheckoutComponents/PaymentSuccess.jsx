export default function PaymentSuccess({ paymentMethod, total }) {
  return (
    <div>
      <h2>¡Pago Confirmado!</h2>
      <p>Tu pedido ha sido procesado exitosamente.</p>

      <div>
        <p>Total pagado: ${total.toFixed(2)}</p>
        <p>Método de pago: {paymentMethod === 'card' ? 'Tarjeta de Crédito' : 'PayPal'}</p>
      </div>

      <a href="/">Continuar comprando</a>
    </div>
  );
}