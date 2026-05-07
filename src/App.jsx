import { Routes, Route } from 'react-router-dom';
import './App.css'
import CheckoutPage from './views/CheckoutPage/CheckoutPage';
import Layout from './components/Layout/LayoutComponents';
import HomePage from './views/HomePage/HomePage';


function App() {
  return (
    <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<CheckoutPage />} />
    <Route path="home" element={<HomePage />} />
    <Route path="checkout" element={<CheckoutPage />} />
  </Route>
</Routes>
  )
}

export default App
