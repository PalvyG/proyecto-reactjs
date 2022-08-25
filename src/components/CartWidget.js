const CartWidget = () => {
    return (
        <button type="button" id="cart-btn" className="btn btn-danger">
            <i class="fa-solid fa-cart-shopping"></i>
            <span id="cart-string" class="badge bg-dark text-white ms-1 rounded-pill">0 - $0</span>
        </button>
    );
}

export default CartWidget;

// EXPORTED TO: Navbar.js