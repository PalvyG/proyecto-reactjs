import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { updateDoc, setDoc, collection, doc, serverTimestamp, increment } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';


const Cart = () => {

    //CONTEXT
    const cartData = useContext(CartContext);

    //ADDITIONAL JS
    const cartString = document.getElementById('cart-string');

    //CART AMOUNTS
    const cartNet = cartData.cartWidgetAmount();
    const cartDiscount = cartNet * 0.10;
    const cartTax = Math.round((cartNet + Number.EPSILON) * 7) / 100;
    const cartTotalToPay = cartNet - cartDiscount + cartTax;

    //PURCHASE ORDER
    const checkoutOnclick = () => {
        const createPurchaseOrder = () => {
            let purchaseOrderItems = cartData.cartList.map(item => ({
                id: parseInt(item.id),
                title: item.title,
                qty: item.qty,
                price: item.price
            }));
            let purchaseOrder = {
                buyer: {
                    name: 'John',
                    lastName: 'Doe',
                    email: 'johndoe@example.com',
                    phone: '123-456-789'
                },
                date: serverTimestamp(),
                items: purchaseOrderItems,
                grossProfit: cartNet,
                discount: cartDiscount,
                netProfit: cartNet - cartDiscount,
                taxes: cartTax,
                totalAmount: cartTotalToPay,
            }
            console.log(purchaseOrder)
            return purchaseOrder;
        }

        let purchaseOrder = createPurchaseOrder();

        const createPurchaseOrderFirestore = async () => {
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, purchaseOrder);
            return newOrderRef;
        }

        createPurchaseOrderFirestore()
            .then(result => {
                alert('Purchase order created successfully!\n\nPlease, take note of your order ID: ' + result.id)
            })
            .catch(err => console.log(err));
        cartData.cartList.forEach(async (item) => {
            const itemRef = doc(db, 'products', item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.qty)
            })
        })
        cartData.onClear()
    }


    return (
        <>
            <h1 className='mb-5'>Your cart</h1>
            {
                cartString == null
                    ?
                    <>
                        <p>Your cart is empty!</p>
                        <Link to='/proyecto-reactjs/'><button type="button" className="btn btn-danger">Continue shopping</button></Link>
                    </>
                    :
                    <div className='cart d-flex'>
                        <div className='cart-left'>
                            {
                                cartData.cartList.map(item => (
                                    <div className='cart__item d-flex'>
                                        <div className='d-flex align-items-center'>
                                            <img src={item.img} alt={item.title}></img>
                                            <div className='cart__item__desc'>
                                                <p>{item.title}</p>
                                                <p> Price: ${item.price} / each (Quantity: {item.qty})</p>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-danger cart__remove" onClick={() => cartData.onRemove(item.id)}>Remove</button>
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
                            <div className='cart__commands'>
                                <button type="button" id='cart-clear' className="btn btn-secondary" onClick={cartData.onClear}>Clear Cart</button>
                                <button type="button" id='cart-checkout' className="btn btn-danger" onClick={checkoutOnclick}>Checkout</button>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}


export default Cart

//EXPORTED TO: ../containers/Cartcontainer.js