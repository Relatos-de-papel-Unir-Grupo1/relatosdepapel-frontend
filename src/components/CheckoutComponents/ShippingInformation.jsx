export default function ShippingInformation() {
  return (
    <div>
      <h3>Información de Envío</h3>
      <div>
        <label>
          Nombre completo:
          <input type="text" required />
        </label>
        <label>
          Dirección:
          <input type="text" required />
        </label>
      </div>
    </div>
  );
}