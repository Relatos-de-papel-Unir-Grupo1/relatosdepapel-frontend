import { useState, useContext } from 'react';
import PaymentSuccess from '../../components/CheckoutComponents/PaymentSuccess';
import PaymentForms from '../../components/CheckoutComponents/PaymentForms';
import ShippingInformation from '../../components/CheckoutComponents/ShippingInformation';
import OrderSummary from '../../components/CheckoutComponents/OrderSummary';

import { GlobalContext } from '../../context/GlobalContext';
import { buildApiUrl } from "../../Utils/apiConfig";
import { AuthContext } from '../../context/AuthContext';
// Este es el componente "padre" o "contenedor" de la página de checkout.
// Su trabajo es manejar el estado y la lógica principal.
export default function CheckoutPage() {
  // --- ESTADO ---
  // Usamos useState para guardar datos que pueden cambiar con el tiempo.
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardName, setCardName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const { user, accessToken } = useContext(AuthContext);

  const { cartItems, discount } = useContext(GlobalContext);
  
  
  // Calculamos el total basándonos en los items del carrito.
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxes = subtotal * 0.16;
  const total = subtotal + taxes - (discount || 0);

  // --- LÓGICA ---

  const handleProceedToPayment = async () => {
    if (cartItems.length === 0) return;

    try {
      const orderData = {
        "userId": user.cif,
        items: cartItems.map(item => ({
          bookId: item.id,
          quantity: item.quantity
        }))
      };

      // Usar el gateway para peticiones de órdenes
      const apiUrl = buildApiUrl('ORDERS', '/api/v1/orders');
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        },
        body: JSON.stringify({
            targetMethod: "POST",
            queryParams: {},
            body: orderData,
          })        
      });

      if (response.status !== 201) {
        throw new Error('Error al procesar el pedido');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al procesar el pedido. Por favor, inténtalo de nuevo.');
    }
  };

  // Esta función se ejecutará cuando el usuario envíe el formulario.
  const handlePayment = (e) => {
    // e.preventDefault() evita que la página se recargue al enviar el formulario.
    e.preventDefault();

    handleProceedToPayment();
    // Mostramos la pantalla de éxito cambiando el estado `showSuccess`.
    setShowSuccess(true);
  };

  // --- RENDERIZADO CONDICIONAL ---
  // Si `showSuccess` es true, mostramos el componente de éxito.
  if (showSuccess) {
    return <PaymentSuccess paymentMethod={paymentMethod} total={total} />;
  }

  // Si no, mostramos el formulario de pago.
  return (
    <div className="page-shell page-section space-y-8">
      <section className="surface-panel px-6 py-8 sm:px-8 lg:px-10">
        <p className="section-kicker">Checkout</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold leading-none sm:text-6xl">Cierre de compra claro y sereno.</h1>
        <p className="section-copy">
          La composición separa datos, pago y resumen para reducir carga visual en el momento más sensible del flujo.
        </p>
      </section>

      <main>
        <form onSubmit={handlePayment}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_360px]">
            {/* 
              Aquí pasamos el estado y las funciones para cambiarlo como "props"
              a los componentes hijos.
            */}
            <div className="space-y-6">
              <PaymentForms
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                cardName={cardName}
                setCardName={setCardName}
              />

              <ShippingInformation />
            </div>

            <div>
              <OrderSummary 
                cartItems={cartItems}
                total={total}
              />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}