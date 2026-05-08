import { books, orders } from "../../data/mocks";
import OrderCard from "./OrderCard";

const STATUS_CYCLE = ["PENDIENTE", "EN PREPARACIÓN", "ENVIADO", "ENTREGADO"];

// Estado fake determinístico segun el id del pedido
function statusFor(orderId) {
  return STATUS_CYCLE[orderId % STATUS_CYCLE.length];
}

export default function MyOrders({ userId = 1 }) {
  const userOrders = orders.filter((o) => o.userId === userId);

  const handleCancel = (order) => {
    console.log("Cancelar pedido:", order.orderNumber);
  };

  return (
    <div>
      <h1>Mis Pedidos</h1>

      {userOrders.length === 0 ? (
        <p>No tienes pedidos aún.</p>
      ) : (
        userOrders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            status={statusFor(order.id)}
            books={books}
            onCancel={handleCancel}
          />
        ))
      )}
    </div>
  );
}
