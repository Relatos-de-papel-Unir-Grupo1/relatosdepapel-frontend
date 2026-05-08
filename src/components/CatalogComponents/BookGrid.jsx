import CardView from '../CardView/CardView';

export default function BookGrid({ books }) {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {books.map((book, idx) => (
        <div key={idx}>
          <CardView id={book.id} title={book.title} price={book.price} imgSrc={book.coverImage} subtitle={book.author} />
        </div>
      ))}
    </div>
  );
}
