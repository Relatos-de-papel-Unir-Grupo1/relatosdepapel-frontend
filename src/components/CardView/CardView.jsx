import { TiShoppingCart } from "react-icons/ti";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function CardView({ id, title, price, imgSrc, subtitle }) {
    const { addToCart } = useContext(GlobalContext);

    return (
        <article className="surface-panel group flex h-full flex-col overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <Link to={{ pathname: `/product/${id}` }} className="relative block h-80 overflow-hidden rounded-[22px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,49,58,0.22)] via-transparent to-transparent" />
                <div className="h-80 overflow-hidden rounded-[22px]">
                    <img src={imgSrc} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
            </Link>
            <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[var(--color-primary-deep)]">Selección editorial</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold leading-tight">{title}</h3>

                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{subtitle}</p>
                <div className="mt-5 flex flex-col items-start gap-2">
                    <p className="font-serif text-3xl font-semibold">${price.toFixed(2)}</p>
                    <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-primary-deep)]">
                        Disponible
                    </span>
                </div>
                <div className="mt-auto flex flex-col gap-2 pt-6">
                    <button className="btn-primary w-full"
                        onClick={() => addToCart({ id, title, price, image: imgSrc, subtitle, author: subtitle, quantity: 1 })}>
                        <TiShoppingCart /> Añadir al carrito
                    </button>
                    <Link to={{ pathname: `/product/${id}` }} className="btn-secondary w-full">
                        Ver detalle
                    </Link>
                </div>
            </div>
        </article>
    );
}