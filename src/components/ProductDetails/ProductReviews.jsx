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
    <section>
      {/* Cabecera */}
      <div>
        <h2>Reseñas</h2>
        <p>
          {averageRating} / 5 ({totalReviews} reseñas)
        </p>
      </div>

      {/* Lista de reseñas */}
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>
            <Stars rating={r.rating} />
            <p>
              <strong>{r.author}</strong>
            </p>
            <p>{r.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
