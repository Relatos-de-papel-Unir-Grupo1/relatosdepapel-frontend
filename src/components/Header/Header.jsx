import { Link } from "react-router-dom";
import { useBooks } from "../../hooks/useBooks";

export default function Header() {
  const { searchTerm, setSearchTerm } = useBooks();

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
        <Link to="/cart" className="header-action-link" aria-label="Carrito de compras">
          <span className="icon">🛒</span>
        </Link>
        <Link to="/profile" className="header-action-link" aria-label="Perfil de usuario">
          <span className="icon">👤</span>
        </Link>
      </div>
    </header>
  );
}
