export default function CartItem({ item }) {
  return (
    <div className="flex items-center gap-4 rounded-[20px] border border-[rgba(22,49,58,0.08)] bg-white/70 p-3">
      <img src={item.image} alt={item.title} className="h-16 w-12 rounded-xl object-cover" />

      <div className="flex-1">
        <h3 className="font-serif text-xl font-semibold leading-tight">
          {item.title}
        </h3>

        <p className="text-sm text-[var(--color-ink-muted)]">
          Cantidad: {item.quantity}
        </p>
      </div>

      <p className="font-semibold text-[var(--color-ink)]">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}