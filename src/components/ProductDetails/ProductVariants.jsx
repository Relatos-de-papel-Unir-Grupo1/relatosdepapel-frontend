export default function ProductVariants({ onNotify }) {
  return (
    <div>
      <p>Variante visual: sin stock</p>

      <div>
        <span>✕</span>
        <span>Agotado</span>
      </div>

      <button type="button" onClick={onNotify}>
        Avísame
      </button>
    </div>
  );
}
