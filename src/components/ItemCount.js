import { useState } from "react";

const ItemCount = (props) => {
    const [qty, setQty] = useState(1)

    const qtyAdd = () => {
        qty < props.stock ? setQty(qty+1) : console.log('Quantity cannot surpass stock available (' + props.stock + ')')
    }

    const qtySubtract = () => {
        qty > 1 ? setQty(qty-1) : console.log('Quantity cannot be less than 1')
    }

    return (
        <div className="item-count">
            <p>Product Name</p>
            <div className="item-count__cont">
                <div className="item-count__cont__ctrls d-flex">
                    <button className="btn btn-danger" onClick={qtySubtract}>-</button>
                    <p>{qty}</p>
                    <button className="btn btn-danger" onClick={qtyAdd}>+</button>
                </div>
                <div>
                <button id="btn-addToCart" className="btn btn-danger">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;

// EXPORTED TO: ItemListContainer.js