import { Link } from "react-router-dom";

export default function Header() {
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

        {/* Iconos a la derecha */}
        <nav>
          <Link to="/cart" aria-label="Carrito de compras">
            Carrito
          </Link>
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
