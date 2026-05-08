import { Routes, Route } from 'react-router-dom';
import './App.css'
import CheckoutPage from './views/CheckoutPage/CheckoutPage';
import Layout from './components/Layout/LayoutComponents';
import ProfilePage from './views/ProfilePage/ProfilePage';
import ProductDetailsPage from './views/ProductDetailsPage/ProductDetailsPage';
import HomePage from './views/HomePage/HomePage';
import { GlobalProvider } from './context/GlobalContext';
import { BookProvider } from "./context/BookContext";
import Cart from './views/Cart/Cart';
import Login from './views/Login/login'


function App() {
  return (
    <GlobalProvider>
    <BookProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>  
    </BookProvider>
    </GlobalProvider>
  )

}

export default App
