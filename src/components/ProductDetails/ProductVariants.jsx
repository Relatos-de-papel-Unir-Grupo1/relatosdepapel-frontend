export default function ProductVariants({ onNotify }) {
  return (
    <div className="rounded-[26px] border border-[rgba(22,49,58,0.08)] bg-white/70 p-5 sm:p-6">
      <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--color-primary-deep)]">Disponibilidad secundaria</p>
      <h3 className="mt-3 font-serif text-3xl font-semibold">Variante visual sin stock</h3>

      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[rgba(22,49,58,0.04)] px-4 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(22,49,58,0.08)]">✕</span>
        <span className="font-medium">Agotado</span>
      </div>

      <button type="button" onClick={onNotify} className="btn-secondary mt-5 w-full sm:w-auto">
        Avísame
      </button>
    </div>
  );
}
