import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    //CONTEXT
    const cartData = useContext(CartContext);

    //ADDITIONAL JS
    const cartString = document.getElementById('cart-string');

    //CART AMOUNTS
    const cartNet = cartData.cartWidgetAmount();
    const cartDiscount = cartNet * 0.10;
    const cartTax = Math.round((cartNet + Number.EPSILON) * 7) / 100;
    const cartTotalToPay = cartNet - cartDiscount + cartTax


    return (
        <>
            <h1 className='mb-5'>Your cart</h1>
            {
                cartString == null
                    ?
                    <>
                        <p>Your cart is empty!</p>
                        <Link to='/'><button type="button" className="btn btn-danger">Continue shopping</button></Link>
                    </>
                    :
                    <div className='cart d-flex'>
                        <div className='cart-left'>
                            {
                                cartData.cartList.map(item => (
                                    <div className='cart__item d-flex'>
                                        <img src={item.img} alt={item.title}></img>
                                        <div className='cart__item__desc'>
                                            <p>{item.title}</p>
                                            <p> Price: ${item.price} / each (Quantity: {item.qty})</p>
                                        </div>
                                        <button type="button" className="btn btn-danger" onClick={() => cartData.onRemove(item.id)}>Remove</button>
                                    </div>))
                            }
                        </div>
                        <div className='cart-right'>
                            <div className='cart__reduce'>
                                <div className='cart__reduce__net'>
                                    <p>Net Amount:</p>
                                    <b>$ {cartNet}</b>
                                </div>
                                <div className='cart__reduce__discount'>
                                    <p>Discount:</p>
                                    <b>- $ {cartDiscount}</b>
                                </div>
                                <div className='cart__reduce__tax'>
                                    <p>Taxes:</p>
                                    <b>$ {cartTax}</b>
                                </div>
                                <div className='cart__reduce__total'>
                                    <em><p>Total Amount:</p></em>
                                    <em><b>$ {cartTotalToPay}</b></em>
                                </div>
                            </div>
                            <button type="button" id='cart-clear' className="btn btn-danger" onClick={cartData.onClear}>Clear Cart</button>
                        </div>
                    </div>
            }
        </>
    )
}


export default Cart

//EXPORTED TO: ../containers/Cartcontainer.js