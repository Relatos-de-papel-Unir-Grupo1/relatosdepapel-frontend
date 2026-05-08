import { Routes, Route } from 'react-router-dom';
import './App.css'
import CheckoutPage from './views/CheckoutPage/CheckoutPage';
import Layout from './components/Layout/LayoutComponents';
import ProfilePage from './views/ProfilePage/ProfilePage';
import ProductDetailsPage from './views/ProductDetailsPage/ProductDetailsPage';
import HomePage from './views/HomePage/HomePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CheckoutPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
      </Route>
    </Routes>  
  )
}

export default App
