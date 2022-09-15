import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const cartReduce = () => {
        const cartResult = cartList.reduce((previous, product) => previous + (product.price * product.qty), cartTotal)
        console.log(cartResult)
        setCartTotal(cartResult);
    }

    const onAdd = (item, qty) => {
        let itemToAdd = { ...item, qty };
        const dupedItem = cartList.find(product => product.id === item.id)
        if (dupedItem === undefined) {
            setCartList([...cartList, itemToAdd])
            cartReduce();
        } else {
            const dupedItemIndex = cartList.findIndex(product => product.id === item.id);
            const newQty = cartList[dupedItemIndex].qty + itemToAdd.qty;
            let qty = newQty;
            cartList[dupedItemIndex] = { ...item, qty }
            setCartList([...cartList])
            cartReduce();
        }
    }

    const onRemove = (id) => {
        let cartListFiltered = cartList.filter(item => item.id !== parseInt(id));
        setCartList(cartListFiltered)
    }

    const onClear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, cartTotal ,onAdd, onRemove, onClear }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;