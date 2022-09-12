import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const ItemCount = (props) => {

    //EFFECT MOUNT
    useEffect(() => {
        console.log('Component ItemCount.js mounted.')
    }, [])


    //STATE
    const [qty, setQty] = useState(0)
    const [count, setCount] = useState(0)

    //ADD
    const qtyAdd = () => {
        qty < props.stock ? setQty(qty + 1) : console.log('Quantity cannot surpass stock available (' + props.stock + ')')
    }

    //SUBTRACT
    const qtySubtract = () => {
        qty > 1 ? setQty(qty - 1) : console.log('Quantity cannot be less than 1')
    }

    //ALERT
    const qtyAlert = () => {
        alert('You have added ' + qty + ' units to your cart.')
        setCount(qty)
    }

    //EFFECT UPDATE QUANTITY
    useEffect(() => {
        console.log('Component ItemCount.js updated.')
    }, [qty])

    return (
        <>
            {
                count === 0
                    ?
                    <div className="item-count">
                        <div className="item-count__cont">
                            <div className="item-count__cont__ctrls d-flex">
                                <button className="btn btn-danger" onClick={qtySubtract}>-</button>
                                <p>{qty}</p>
                                <button className="btn btn-danger" onClick={qtyAdd}>+</button>
                            </div>
                            <div>
                                <button id="btn-addToCart" className="btn btn-danger" onClick={qtyAlert}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    :
                    <Link to='/cart'><button className="btn btn-danger">Checkout</button></Link>
            }
        </>
    );
};

export default ItemCount;

// EXPORTED TO: ItemDetail.js