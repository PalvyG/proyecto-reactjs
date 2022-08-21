const NavBar = () => {
    return (
        <>
            <header className="App-header">
                <nav className="navbar">
                    <div className="logo">
                        <img src="https://images-platform.99static.com/Rvr4iFxZiT_9HPJgLWI8unYbTAY=/180x180:1620x1620/500x500/top/smart/99designs-contests-attachments/85/85417/attachment_85417654" alt="Logotipo" />
                    </div>
                    <div className="navbar_links">
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger">
                                Home
                            </button>
                            <button type="button" class="btn btn-danger">
                                About
                            </button>
                            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="all-products">All products</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="gpus">GPUs</a>
                                <a class="dropdown-item" href="processors">Processors</a>
                                <a class="dropdown-item" href="power-supplies">Power Supplies</a>
                                <a class="dropdown-item" href="power-supplies">Coolers</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar_signin">
                    <button type="button" class="btn btn-danger">
                            Sign In
                    </button>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavBar;