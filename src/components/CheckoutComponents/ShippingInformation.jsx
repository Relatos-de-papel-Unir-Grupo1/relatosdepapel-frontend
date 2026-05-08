export default function ShippingInformation() {
  return (
    <section className="surface-panel p-6 sm:p-7">
      <p className="section-kicker">Entrega</p>
      <h3 className="mt-2 font-serif text-4xl font-semibold">Información de Envío</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-[var(--color-ink)] sm:col-span-2">
          Nombre completo:
          <input type="text" required className="input-field mt-2" />
        </label>
        <label className="block text-sm font-medium text-[var(--color-ink)] sm:col-span-2">
          Dirección:
          <input type="text" required className="input-field mt-2" />
        </label>
      </div>
    </section>
  );
}