import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {

    //CONTEXT
    const cartData = useContext(CartContext);
    
    //

    return (
        <>
        <h1>Bienvenido a tu carrito!</h1>
        {
            cartData.cartList.map (item => (<><p>{item.title} (Quantity: {item.qty})</p><button type="button" className="btn btn-danger" onClick={() => cartData.onRemove(item.id)}>Remove</button></>))
        }
        <br />
        <button type="button" className="btn btn-danger" onClick={cartData.onClear}>Clear</button>
        </>
    )
}


export default Cart

//EXPORTED TO: ../containers/Cartcontainer.js