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
    <div className="space-y-5">
      <div className="surface-panel px-6 py-7">
        <p className="section-kicker">Historial</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold">Mis Pedidos</h1>
        <p className="mt-3 text-sm leading-7 text-[var(--color-ink-muted)]">Cada pedido usa la misma gramática visual del checkout para facilitar seguimiento y lectura.</p>
      </div>

      {userOrders.length === 0 ? (
        <div className="surface-panel px-6 py-8 text-sm text-[var(--color-ink-muted)]">No tienes pedidos aún.</div>
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
