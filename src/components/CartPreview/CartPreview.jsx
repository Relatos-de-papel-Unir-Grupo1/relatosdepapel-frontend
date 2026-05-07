import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

export default function CartPreview({ setOpenCart }) {
    const navigate = useNavigate();
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
        <div ref={cartRef} className="absolute right-0 mt-4 w-96 rounded-2xl border bg-white p-4 shadow-2xl z-50">
            <button onClick={() => setOpenCart(false)} className="absolute right-4 top-4 text-gray-500 hover:text-black">✕</button>
            <h2 className="mb-4 text-xl font-bold">Mi carrito</h2>
            
            <div className="space-y-4">
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>

            <div className="mt-6 border-t pt-4">
                <div className="mb-4 flex justify-between font-bold">
                    <span>Subtotal</span>
                    <span>
                        ${subtotal.toFixed(2)}
                    </span>
                </div>

                <button onClick={() => {{
                            setOpenCart(false);
                            navigate("/cart");
                        }
                    }} className="w-full rounded-xl bg-black py-3 text-white hover:bg-gray-800 transition">Ver carrito</button>
            </div>
        </div>
    );
}