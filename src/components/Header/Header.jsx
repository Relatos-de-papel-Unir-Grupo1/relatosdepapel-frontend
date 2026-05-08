import { useState, useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { IoPersonCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import CartPreview from "../CartPreview/CartPreview";
import { GlobalContext } from "../../context/GlobalContext";
import { useBooks } from "../../hooks/useBooks";

export default function Header() {
  const { cartItems } = useContext(GlobalContext);
  const { searchTerm, setSearchTerm } = useBooks();


  const [openCart, setOpenCart] = useState(false);

  return (
    <header className="site-header">
      <div className="page-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-soft)] text-lg font-extrabold text-[var(--color-primary-deep)]">
              RP
            </span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--color-primary-deep)]">
                Libreria online
              </p>
              <p className="font-serif text-2xl font-semibold leading-none text-[var(--color-ink)]">
                Relatos de Papel
              </p>
            </div>
          </Link>

          <Link
            to="/profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(22,49,58,0.12)] bg-white/80 text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-md lg:hidden"
            aria-label="Perfil de usuario"
          >
            <IoPersonCircle size={26} />
          </Link>
        </div>

        <div className="flex flex-1 items-center gap-3 lg:max-w-2xl">
          <div className="surface-panel flex flex-1 items-center gap-3 rounded-full px-4 py-2.5">
            <input
              type="search"
              placeholder="Buscar por título, autor o atmósfera literaria"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />            
          </div>

          <nav className="hidden items-center gap-3 lg:flex">
            <div className="relative flex items-center gap-3">
              <button
                onClick={() => setOpenCart(!openCart)}
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(22,49,58,0.12)] bg-white/80 text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <TiShoppingCart size={28} />
                {cartItems.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-[10px] font-bold text-white">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {openCart && <CartPreview setOpenCart={setOpenCart} />}

              <Link
                to="/profile"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(22,49,58,0.12)] bg-white/80 text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-md"
                aria-label="Perfil de usuario"
              >
                <IoPersonCircle size={28} />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
