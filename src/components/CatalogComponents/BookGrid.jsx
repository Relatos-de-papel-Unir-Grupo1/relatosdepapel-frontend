import BookCard from "./BookCard";

export default function BookGrid({ books, onAddToCart }) {
  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
