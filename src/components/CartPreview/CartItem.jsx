export default function CartItem({ item }) {
  return (
    <div className="flex items-center gap-4">
      <img src={item.image} alt={item.title} className="h-16 w-12 rounded object-cover" />

      <div className="flex-1">
        <h3 className="font-semibold">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500">
          Cantidad: {item.quantity}
        </p>
      </div>

      <p className="font-bold">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}