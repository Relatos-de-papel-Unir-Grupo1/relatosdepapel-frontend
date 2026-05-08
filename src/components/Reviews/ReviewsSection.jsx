const reviews = [
  {
    id: 1,
    author: "Lector Constante",
    rating: 4,
    text: "Excelente encuadernación y una historia atrapante desde el primer capítulo.",
  },
  {
    id: 2,
    author: "Crítico Literario",
    rating: 4,
    text: "Una obra maestra moderna, imprescindible en cualquier colección.",
  },
];
const StarRating = ({ rating, max = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: max }, (_, i) => (
      <svg
        key={i}
        className={`h-3.5 w-3.5 ${i < rating ? "text-slate-800" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);
const ReviewCard = ({ author, rating, text }) => (
  <div className="rounded-[22px] border border-[rgba(22,49,58,0.08)] bg-white/70 p-4">
    <StarRating rating={rating} />
    <p className="mt-2 text-sm font-semibold text-[var(--color-ink)]">{author}</p>
    <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
      [<span className="font-normal">{text}</span>]
    </p>
  </div>
);
const ReviewsSection = ({ averageRating = 4.5, totalReviews = 128 }) => {
  return (
    <div className="surface-panel w-full max-w-md p-5">
      <div className="flex items-center justify-between border-b border-dashed border-[rgba(22,49,58,0.14)] pb-3">
        <h2 className="font-serif text-3xl font-semibold text-[var(--color-ink)]">Reseñas</h2>
        <span className="text-sm text-[var(--color-ink-muted)]">
          {averageRating} / 5 ({totalReviews} reseñas)
        </span>
      </div>
      <div className="mt-4 space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      <button className="btn-secondary mt-5">
        Ver todas las reseñas
      </button>
    </div>
  );
};

export default ReviewsSection;
