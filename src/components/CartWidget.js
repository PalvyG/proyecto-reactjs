const CartWidget = () => {
    return (
        <button type="button" id="cart-btn" className="btn btn-danger">
            <i className="fa-solid fa-cart-shopping"></i>
            <span id="cart-string" className="badge bg-dark text-white ms-1 rounded-pill">0 - $0</span>
        </button>
    );
}

export default CartWidget;

// EXPORTED TO: Navbar.js