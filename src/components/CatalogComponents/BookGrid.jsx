import CardView from '../CardView/CardView';

export default function BookGrid({ books }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {books.map((book, idx) => (
        <div key={idx} className="h-full">
          <CardView id={book.id} title={book.title} price={book.price} imgSrc={book.coverImage} subtitle={book.author} />
        </div>
      ))}
    </div>
  );
}
