import { Routes, Route } from 'react-router-dom';
import './App.css'
import CheckoutPage from './views/CheckoutPage/CheckoutPage';
import Layout from './components/Layout/LayoutComponents';
import ProductDetailsPage from './views/ProductDetailsPage/ProductDetailsPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CheckoutPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
      </Route>
    </Routes>
  )
}

export default App
