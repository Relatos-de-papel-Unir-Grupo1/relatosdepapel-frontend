import { TiShoppingCart } from "react-icons/ti";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export default function Cart() {
    const navigate = useNavigate();
    const [discount, setDiscount] = useState(0);
    const [coupon, setCoupon] = useState("");
    const { cartItems, decreaseCartItemQuantity, increaseCartItemQuantity, removeFromCart } = useContext(GlobalContext);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    //apply cuppon discunt here if there is any
    const taxes = subtotal * 0.16;
    const total = subtotal + taxes - discount;
    return (<>
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mb-6">
                <h1 className="flex items-center gap-2 text-3xl font-bold">
                    <TiShoppingCart />Mi Carrito
                </h1>

                <p className="text-gray-500">
                    {cartItems.length} artículos
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border">
                    <div className="grid grid-cols-5 gap-4 border-b p-4 font-semibold text-gray-600">
                        <p className="col-span-2">Producto</p>
                        <p>Precio</p>
                        <p>Cantidad</p>
                        <p>Total</p>
                    </div>

                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-5 gap-4 items-center p-4 border-b last:border-b-0"
                        >
                            <div className="col-span-2 flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-20 w-16 object-cover rounded"
                                />
                                <div>
                                    <h3 className="font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {item.author}
                                    </p>
                                </div>
                            </div>

                            <p className="font-medium">
                                ${item.price.toFixed(2)}
                            </p>

                            <div className="flex items-center gap-2">

                                <button className="h-8 w-8 rounded border hover:bg-gray-100" onClick={() => {
                                    decreaseCartItemQuantity(item.id);
                                }}>-</button>
                                <span>{item.quantity}</span>
                                <button className="h-8 w-8 rounded border hover:bg-gray-100" onClick={() => {                                    
                                    increaseCartItemQuantity(item.id);
                                }}>+</button>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="font-bold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(item.id)}>
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl shadow-sm border p-6 h-fit">

                    <h2 className="text-2xl font-bold mb-6">Resumen del pedido</h2>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium">Código de Cupón</label>

                        <div className="flex">
                            <input type="text" placeholder="Ej: DESCUENTO10" className="flex-1 border rounded-l-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
                             value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                            <button className="bg-slate-900 text-white px-4 rounded-r-lg hover:bg-slate-800" onClick={() => {                                
                                if (coupon === "DESCUENTO10" && discount === 0 && subtotal > 0) {
                                    setDiscount(subtotal * 0.1); 
                                }
                            }}>Aplicar</button>
                        </div>
                    </div>

                    <div className="space-y-3 border-t pt-4">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-gray-600">
                            <span>Impuestos (16%)</span>
                            <span>${taxes.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-gray-600">
                            <span>Descuento</span>
                            <span>${discount.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-2xl font-bold border-t pt-4">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>


                    <button className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-white font-semibold hover:bg-slate-800 transition" onClick={() => {
                        navigate("/checkout");
                    }}>
                        Proceder al pago
                    </button>


                    <p className="mt-4 text-center text-sm text-gray-400">
                        Envío calculado en el checkout
                    </p>
                </div>
            </div>

        </div>
    </>);
}