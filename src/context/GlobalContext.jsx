import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [user, setUser] = useState(null);

    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(prev => prev.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
        } else {            
            setCartItems(prev => [...prev, item]);
        }        
    };

    const increaseCartItemQuantity = (itemId) => {
        setCartItems(prev => prev.map(item => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item));
    }

    const decreaseCartItemQuantity = (itemId) => {
        setCartItems(prev => prev.map(item => item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item));
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => prev.filter(item => item.id !== itemId));
    }

    const addToWishlist = (item) => {
        setWishlistItems(prev => [...prev, item]);
    };

    return (
        <GlobalContext.Provider value={{ cartItems, addToCart, wishlistItems, addToWishlist, user, setUser, increaseCartItemQuantity, decreaseCartItemQuantity, removeFromCart }}>
            {children}
        </GlobalContext.Provider>
    );
}