import { Routes, Route } from 'react-router-dom';
import CheckoutPage from './views/CheckoutPage/CheckoutPage';
import Layout from './components/Layout/LayoutComponents';
import Landing from './views/Landing';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  )
}

export default App
