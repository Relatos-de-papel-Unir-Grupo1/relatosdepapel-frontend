const MOCK_REVIEWS = [
  {
    id: 1,
    author: "Lector Constante",
    rating: 4,
    text: "[Texto de la reseña simulada. Excelente encuadernación y una historia atrapante desde el primer capítulo.]",
  },
  {
    id: 2,
    author: "Crítico Literario",
    rating: 5,
    text: "[Texto de la reseña simulada. Una obra maestra moderna, imprescindible en cualquier colección.]",
  },
];

function Stars({ rating, max = 5 }) {
  return (
    <span aria-label={`${rating} de ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} aria-hidden>
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}

export default function ProductReviews({
  reviews = MOCK_REVIEWS,
  averageRating = 4.5,
  totalReviews = 128,
}) {
  return (
    <section className="surface-panel px-6 py-8 sm:px-8">
      <div className="flex flex-col gap-3 border-b border-dashed border-[rgba(22,49,58,0.14)] pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Lectores</p>
          <h2 className="mt-2 font-serif text-4xl font-semibold">Reseñas</h2>
        </div>
        <p className="text-sm text-[var(--color-ink-muted)]">
          {averageRating} / 5 ({totalReviews} reseñas)
        </p>
      </div>

      <ul className="mt-6 grid gap-4 lg:grid-cols-2">
        {reviews.map((r) => (
          <li key={r.id} className="rounded-[24px] border border-[rgba(22,49,58,0.08)] bg-white/70 p-5">
            <div className="text-lg text-[var(--color-primary-deep)]">
              <Stars rating={r.rating} />
            </div>
            <p className="mt-3">
              <strong>{r.author}</strong>
            </p>
            <p className="mt-2 text-sm leading-7 text-[var(--color-ink-muted)]">{r.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
