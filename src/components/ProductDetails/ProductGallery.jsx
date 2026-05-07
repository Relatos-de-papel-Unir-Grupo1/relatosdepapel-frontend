export default function ProductGallery({ book }) {
  return (
    <div>
      {book.coverImage ? (
        <img src={book.coverImage} alt={book.title} />
      ) : (
        <div>Imagen</div>
      )}
    </div>
  );
}
