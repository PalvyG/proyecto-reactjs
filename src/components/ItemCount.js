import { useState } from "react";

const ItemCount = (props) => {

    //STATE
    const [qty, setQty] = useState(0)

    //ADD & SUBTRACT
    const qtyAdd = () => {
        qty < props.stock ? setQty(qty + 1) : console.log('Quantity cannot surpass stock available (' + props.stock + ')')
    };
    const qtySubtract = () => {
        qty > 1 ? setQty(qty - 1) : console.log('Quantity cannot be less than 1')
    }

    return (
        <div className="item-count">
            <div className="item-count__cont">
                <div className="item-count__cont__ctrls d-flex">
                    <button className="btn btn-danger" onClick={qtySubtract}>-</button>
                    <p>{qty}</p>
                    <button className="btn btn-danger" onClick={qtyAdd}>+</button>
                </div>
                <div>
                    <button id="btn-addToCart" className="btn btn-danger" onClick={() => props.addToCart(qty)} disabled={(parseInt(qty) !== 0 ? false : true)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;

// EXPORTED TO: ItemDetail.js