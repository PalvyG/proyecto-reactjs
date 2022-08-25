const NavbarLinks = () => {
    return (
    <div className="navbar__links">
        <div className="btn-group">
            <button type="button" className="btn btn-danger">
                Home
            </button>
            <button type="button" className="btn btn-danger">
                About
            </button>
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Products
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="all-products">All products</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="gpus">GPUs</a>
                <a className="dropdown-item" href="processors">Processors</a>
                <a className="dropdown-item" href="power-supplies">Power Supplies</a>
                <a className="dropdown-item" href="power-supplies">Coolers</a>
            </div>
        </div>
    </div>
    );
}

export default NavbarLinks;

//EXPORTED TO: Navbar.js