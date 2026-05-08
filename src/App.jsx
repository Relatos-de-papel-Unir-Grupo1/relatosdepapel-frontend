import { Routes, Route } from 'react-router-dom';
import CheckoutPage from './views/CheckoutPage/CheckoutPage';
import Layout from './components/Layout/LayoutComponents';
import Landing from './views/Landing';
import Cart from './views/Cart/Cart';
import Login from './login.jsx'
import ProfilePage from './views/ProfilePage/ProfilePage';
import ProductDetailsPage from './views/ProductDetailsPage/ProductDetailsPage';
import HomePage from './views/HomePage/HomePage';
import { GlobalProvider } from './context/GlobalContext';


function App() {
  return (
    <GlobalProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>  
    </GlobalProvider>
  )

}

export default App
