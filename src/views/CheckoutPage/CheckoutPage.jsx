import { useState, useContext } from 'react';
import PaymentSuccess from '../../components/CheckoutComponents/PaymentSuccess';
import PaymentForms from '../../components/CheckoutComponents/PaymentForms';
import ShippingInformation from '../../components/CheckoutComponents/ShippingInformation';
import OrderSummary from '../../components/CheckoutComponents/OrderSummary';

import { GlobalContext } from '../../context/GlobalContext';

// Este es el componente "padre" o "contenedor" de la página de checkout.
// Su trabajo es manejar el estado y la lógica principal.
export default function CheckoutPage({discount}) {
  // --- ESTADO ---
  // Usamos useState para guardar datos que pueden cambiar con el tiempo.
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardName, setCardName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const { cartItems } = useContext(GlobalContext);
  

  // Calculamos el total basándonos en los items del carrito.
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) - (discount || 0);

  // --- LÓGICA ---
  // Esta función se ejecutará cuando el usuario envíe el formulario.
  const handlePayment = (e) => {
    // e.preventDefault() evita que la página se recargue al enviar el formulario.
    e.preventDefault();

    // Simulamos que el pago fue exitoso.
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
    <div>
      <header>
        <h1>Relatos de Papel - Checkout</h1>
      </header>

      <main>
        <form onSubmit={handlePayment}>
          <div>
            {/* 
              Aquí pasamos el estado y las funciones para cambiarlo como "props"
              a los componentes hijos.
            */}
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
        </form>
      </main>
    </div>
  );
}