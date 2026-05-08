import { Routes, Route } from 'react-router-dom';
import CheckoutPage from './views/CheckoutPage/CheckoutPage';
import Layout from './components/Layout/LayoutComponents';
import ProfilePage from './views/ProfilePage/ProfilePage';
import ProductDetailsPage from './views/ProductDetailsPage/ProductDetailsPage';
import HomePage from './views/HomePage/HomePage';
import { GlobalProvider } from './context/GlobalContext';
import { BookProvider } from "./context/BookContext";
import Cart from './views/Cart/Cart';
import Login from './views/Login/login'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


function App() {
  return (
    <GlobalProvider>
    <BookProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="home" element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
        <Route path="login" element={<Login />} />

        {/* Rutas protegidas: requieren usuario autenticado */}
        <Route element={<ProtectedRoute />}>
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>  
    </BookProvider>
    </GlobalProvider>
  )

}

export default App
