export default function ProductGallery({ book }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="eyebrow-chip">Edición destacada</span>
        <span className="text-sm text-[var(--color-ink-muted)]">Portada seleccionada</span>
      </div>

      {book.coverImage ? (
        <div className="overflow-hidden rounded-[28px] border border-[rgba(22,49,58,0.08)] bg-white/80 p-3 shadow-lg">
          <img src={book.coverImage} alt={book.title} className="h-[420px] w-full rounded-[22px] object-cover sm:h-[520px]" />
        </div>
      ) : (
        <div className="flex h-[420px] items-center justify-center rounded-[28px] border border-dashed border-[rgba(22,49,58,0.16)] bg-white/60 text-[var(--color-ink-muted)] sm:h-[520px]">
          Imagen
        </div>
      )}
    </div>
  );
}
