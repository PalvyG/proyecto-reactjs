import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    //CONTEXT
    const cartData = useContext(CartContext)


    return (
        <button type="button" id="cart-btn" className="btn btn-danger">
            <i className="fa-solid fa-cart-shopping"></i>
            {
                cartData.cartList.length === parseInt(0)
                ? ''
                : <span id="cart-string" className="badge bg-dark text-white ms-1 rounded-pill">{cartData.cartList.length} - ${cartData.cartTotal}</span>
            }
        </button>
    );
}

export default CartWidget;

// EXPORTED TO: Navbar.js