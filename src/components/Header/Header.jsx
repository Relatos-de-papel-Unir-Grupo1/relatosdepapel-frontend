import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header >
      <div >
        <Link to="/">Relatos de Papel</Link>
      </div>

      <div >
        <input type="search" placeholder="Buscar por título, autor..." />
        <button type="button" >Filtros</button>
      </div>

      <div >
        <Link to="/cart" aria-label="Carrito de compras">
          <span >🛒</span>
        </Link>
        <Link to="/profile" aria-label="Perfil de usuario">
          <span>👤</span>
        </Link>
      </div>
    </header>
  );
}