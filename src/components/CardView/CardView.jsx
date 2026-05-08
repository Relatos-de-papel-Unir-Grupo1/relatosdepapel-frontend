import { TiShoppingCart } from "react-icons/ti";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export default function CardView({ id, title, price, imgSrc, subtitle }) {
    const { addToCart } = useContext(GlobalContext);

    return (

        <div className="w-64 rounded-xl bg-white p-4 shadow-md">
            <div className="w-full h-80" >
                <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="CardContent p-5">
                <h3>{title}</h3>

                <p style={{ fontWeight: 'normal', color: 'gray' }}>{subtitle}</p>
                <p style={{ fontWeight: 'bold' }}>${price.toFixed(2)}</p>
                <div className="flex flex-col gap-1">
                    <button className="mt-3 w-full rounded-lg bg-black py-2 text-white hover:bg-gray-800 transition flex items-center justify-center gap-2" 
                            onClick={() => addToCart({ id, title, price, image: imgSrc, subtitle, quantity: 1 })}>
                        <TiShoppingCart /> Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}