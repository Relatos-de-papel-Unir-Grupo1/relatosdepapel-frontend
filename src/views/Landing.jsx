import Footer from '../components/Footer/Footer'
import CardView from '../components/CardView/CardView';

import { books } from '../data/mocks';

export default function Landing() {
    return (<>
        <div className='grid grid-cols-4 gap-4'>
            {books.map((book, idx) => (
                <div key={idx}>
                    <CardView title={book.title} price={book.price} imgSrc={book.coverImage} subtitle={book.author} />
                </div>
            ))}
        </div>
        <Footer />
    </>);
}