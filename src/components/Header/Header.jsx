import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import CartPreview from "../CartPreview/CartPreview";

export default function Header() {
  const cartItems = [
        {
            id: 1,
            title: "El Padrino",
            author: "Mario Puzo",
            price: 19.99,
            quantity: 1,
            image: "/covers/2456184-1200-auto.gif"
        }
    ];

  const [openCart, setOpenCart] = useState(false);
 

  return (
    <header>
      <div>
        {/* Logo */}
        <Link to="/">Relatos de Papel</Link>

        {/* Buscador */}
        <div>
          <input type="search" placeholder="Buscar por título, autor..." />
          <button type="button" aria-label="Buscar">
            Buscar
          </button>
        </div>

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
        </div>                  
          <Link to="/wishlist" aria-label="Favoritos">
            Favoritos
          </Link>
          <button type="button" aria-label="Notificaciones">
            Notificaciones
          </button>
          <Link to="/profile" aria-label="Perfil de usuario">
            Perfil
          </Link>
        </nav>
      </div>
    </header>
  );
}
