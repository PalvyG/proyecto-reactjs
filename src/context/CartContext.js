import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const onAdd = (item, qty) => {
        let itemToAdd = { ...item, qty };
        setCartList([...cartList, itemToAdd])
    }

    const onRemove = (id) => {
        let cartListFiltered = cartList.filter(item => item.id !== parseInt(id));
        setCartList(cartListFiltered)
    }

    const onClear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, onAdd, onRemove, onClear }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;