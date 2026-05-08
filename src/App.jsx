import { Routes, Route } from 'react-router-dom';
import './App.css'
import CheckoutPage from './views/CheckoutPage/CheckoutPage';
import Layout from './components/Layout/LayoutComponents';
import Login from './login.jsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CheckoutPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
          <Route path="login" element={<Login />} />
      </Route>
    </Routes>

  )

}

export default App
