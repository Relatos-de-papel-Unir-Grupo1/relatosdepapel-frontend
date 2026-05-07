import Footer from './components/Footer/Footer'
import CheckoutPage from './views/CheckoutPage/CheckoutPage'
import CardView from './components/CardView/CardView';

import {books} from './data/mocks';


function App() {

  return (
    <>        
      <div className='grid grid-cols-4 gap-4'>
        {books.map((book, idx) => (
          <div key={idx}>
            <CardView title={book.title} price={book.price} imgSrc={book.coverImage} subtitle={book.author} />
          </div>
        ))}
      </div>      
      <CheckoutPage />
      {/* Footer de la aplicación */}
      <Footer />
    </>
  )
}

export default App
