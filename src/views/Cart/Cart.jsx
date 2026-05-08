import { TiShoppingCart } from "react-icons/ti";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Cart() {
    const navigate = useNavigate();
    const [coupon, setCoupon] = useState("");
    const { cartItems, decreaseCartItemQuantity, increaseCartItemQuantity, removeFromCart, setDiscount, discount } = useContext(GlobalContext);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxes = subtotal * 0.16;
    const total = subtotal + taxes - discount;
    return (<>
        <div className="page-shell page-section space-y-8">
            <section className="surface-panel px-6 py-8 sm:px-8 lg:px-10">
                <p className="section-kicker">Conversión</p>
                <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h1 className="flex items-center gap-3 font-serif text-5xl font-semibold leading-none sm:text-6xl">
                    <TiShoppingCart />Mi Carrito
                </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-ink-muted)] sm:text-base">
                            Un resumen limpio, con foco en lectura rápida de productos, cantidades y total final antes del checkout.
                        </p>
                    </div>

                    <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-primary-deep)]">
                    {cartItems.length} artículos
                </p>
                </div>
            </section>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="surface-panel lg:col-span-2 overflow-hidden">
                    <div className="grid grid-cols-5 gap-4 border-b border-[rgba(22,49,58,0.1)] bg-white/60 p-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
                        <p className="col-span-2">Producto</p>
                        <p>Precio</p>
                        <p>Cantidad</p>
                        <p>Total</p>
                    </div>

                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-5 items-center gap-4 border-b border-[rgba(22,49,58,0.08)] p-4 last:border-b-0"
                        >
                            <div className="col-span-2 flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-20 w-16 rounded-xl object-cover"
                                />
                                <div>
                                    <h3 className="font-serif text-2xl font-semibold leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-[var(--color-ink-muted)]">
                                        {item.author || item.subtitle}
                                    </p>
                                </div>
                            </div>

                            <p className="font-medium text-[var(--color-ink)]">
                                ${item.price.toFixed(2)}
                            </p>

                            <div className="flex items-center gap-2">

                                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(22,49,58,0.12)] bg-white transition hover:bg-[var(--color-primary-soft)]" onClick={() => {
                                    decreaseCartItemQuantity(item.id);
                                }}>-</button>
                                <span className="min-w-6 text-center font-semibold">{item.quantity}</span>
                                <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(22,49,58,0.12)] bg-white transition hover:bg-[var(--color-primary-soft)]" onClick={() => {                                    
                                    increaseCartItemQuantity(item.id);
                                }}>+</button>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-[var(--color-ink)]">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button className="text-[var(--color-ink-muted)] transition hover:text-red-600" onClick={() => removeFromCart(item.id)}>
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="surface-panel h-fit p-6">

                    <p className="section-kicker">Pedido</p>
                    <h2 className="mt-2 font-serif text-4xl font-semibold">Resumen del pedido</h2>

                    <div className="mb-6 mt-6">
                        <label className="mb-2 block text-sm font-medium">Código de Cupón</label>

                        <div className="flex">
                            <input type="text" placeholder="Ej: DESCUENTO10" className="input-field rounded-r-none"
                             value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                            <button className="btn-primary rounded-l-none px-4" onClick={() => {                                
                                if (coupon === "DESCUENTO10" && discount === 0 && subtotal > 0) {
                                    setDiscount(subtotal * 0.1); 
                                }
                            }}>Aplicar</button>
                        </div>
                    </div>

                    <div className="space-y-3 border-t border-[rgba(22,49,58,0.1)] pt-4">
                        <div className="flex justify-between text-[var(--color-ink-muted)]">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-[var(--color-ink-muted)]">
                            <span>Impuestos (16%)</span>
                            <span>${taxes.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-[var(--color-ink-muted)]">
                            <span>Descuento</span>
                            <span>${discount.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between border-t border-[rgba(22,49,58,0.1)] pt-4 font-serif text-3xl font-semibold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>


                    <button className="btn-primary mt-6 w-full" onClick={() => {
                        navigate("/checkout");
                    }}>
                        Proceder al pago
                    </button>


                    <p className="mt-4 text-center text-sm text-[var(--color-ink-muted)]">
                        Envío calculado en el checkout
                    </p>
                </div>
            </div>

        </div>
    </>);
}