import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {

    //CONTEXT
    const cartData = useContext(CartContext);

    //

    return (
        <>
            <h1 className='mb-5'>Your cart</h1>
            <div className='cart'>
                <div className='cart-left'>
                    {
                        cartData.cartList.map(item => (
                            <div className='cart__item d-flex'>
                                <img src={item.img} alt={item.title}></img>
                                <div className='cart__item__desc'>
                                <p>{item.title} (Quantity: {item.qty})</p>
                                <p> Price: ${item.price} / each</p>
                                </div>
                                <button type="button" className="btn btn-danger" onClick={() => cartData.onRemove(item.id)}>Remove</button>
                            </div>))
                    }
                </div>
                <div className='cart-right'>
                    <button type="button" className="btn btn-danger" onClick={cartData.onClear}>Clear</button>
                    <div className='cart__reduce'>
                        <div className='cart__reduce__net'></div>
                        <div className='cart__reduce__tax'></div>
                        <div className='cart__reduce__discount'></div>
                        <div className='cart__reduce__total'></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Cart

//EXPORTED TO: ../containers/Cartcontainer.js