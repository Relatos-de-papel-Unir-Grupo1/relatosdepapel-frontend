import { useState, useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import CartPreview from "../CartPreview/CartPreview";
import { GlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import { useBooks } from "../../hooks/useBooks";

export default function Header() {
  const { cartItems } = useContext(GlobalContext);
  const { searchTerm, setSearchTerm } = useBooks();


  const [openCart, setOpenCart] = useState(false);

  return (
    <header className="header-container">
      <div className="header-logo">
        <Link to="/">Relatos de Papel</Link>
      </div>

      <div className="header-search">
        <input
          type="search"
          placeholder="Buscar por título, autor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" className="filter-button">Filtros</button>
      </div>


      <div className="header-actions">        
        <nav>
          <div className="relative">
            <button onClick={() => setOpenCart(!openCart)} className="relative rounded-full p-2 hover:bg-gray-100 transition">
              <TiShoppingCart size={28} />
              {cartItems.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cartItems.length}
                </span>
              )}
            </button>

            {openCart && (
              <CartPreview setOpenCart={setOpenCart} />
            )}
                       
            <Link to="/profile" className="header-action-link" aria-label="Perfil de usuario">
              <span className="icon">👤</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
