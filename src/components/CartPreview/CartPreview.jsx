import { useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

import { GlobalContext } from "../../context/GlobalContext";

export default function CartPreview({ setOpenCart }) {
    const navigate = useNavigate();
    const { cartItems } = useContext(GlobalContext);
    const cartRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {

            if (
                cartRef.current &&
                !cartRef.current.contains(event.target)
            ) {
                setOpenCart(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, [setOpenCart]);

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div ref={cartRef} className="surface-panel absolute right-0 top-full z-50 mt-4 w-[min(24rem,calc(100vw-2rem))] overflow-hidden p-5">
            <button onClick={() => setOpenCart(false)} className="absolute right-4 top-4 text-[var(--color-ink-muted)] transition hover:text-[var(--color-ink)]">✕</button>
            <p className="section-kicker">Compra en curso</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold">Mi carrito</h2>
            
            <div className="mt-5 max-h-[min(50vh,18rem)] space-y-4 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>

            <div className="mt-6 border-t border-[rgba(22,49,58,0.1)] pt-4">
                <div className="mb-4 flex justify-between text-sm font-bold uppercase tracking-[0.16em] text-[var(--color-ink)]">
                    <span>Subtotal</span>
                    <span>
                        ${subtotal.toFixed(2)}
                    </span>
                </div>

                <button onClick={() => {{
                            setOpenCart(false);
                            navigate("/cart");
                        }
                    }} className="btn-primary w-full">Ver carrito</button>
            </div>
        </div>
    );
}