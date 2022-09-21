import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const cartWidgetAmount = () => {
        let totalToPay = 0;
        cartList.map(item => 
            totalToPay += item.price * item.qty
        )
        return totalToPay
    }

    const cartWidgetQty = () => {
        let totalQty = 0;
        cartList.map(item => 
            totalQty += item.qty
        )
        return totalQty
    }

    const cartReduce = () => {
        cartList.forEach(product => {
            product.totalAmount = product.price * product.qty
        });
        const cartResult = cartList.reduce((previous, product) => previous + product.totalAmount, 0)
        setCartTotal(cartResult);
    }

    const onAdd = (item, qty) => {
        let itemToAdd = { ...item, qty };
        const dupedItem = cartList.find(product => product.id === item.id)
        if (dupedItem === undefined) {
            setCartList([...cartList, itemToAdd])
            cartReduce();
            console.log(cartList)
        } else {
            const dupedItemIndex = cartList.findIndex(product => product.id === item.id);
            const newQty = cartList[dupedItemIndex].qty + itemToAdd.qty;
            let qty = newQty;
            cartList[dupedItemIndex] = { ...item, qty }
            setCartList([...cartList])
            cartReduce();
            console.log(cartList)
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
        <CartContext.Provider value={{ cartList, cartTotal, cartWidgetAmount, cartWidgetQty, onAdd, onRemove, onClear }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;