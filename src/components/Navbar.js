import CartWidget from './CartWidget.js';
import NavbarLinks from './NavbarLinks.js';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="App-header">
                <nav className="navbar">
                    <Link to='/'>
                    <div className="logo">
                        <img src="https://images-platform.99static.com/Rvr4iFxZiT_9HPJgLWI8unYbTAY=/180x180:1620x1620/500x500/top/smart/99designs-contests-attachments/85/85417/attachment_85417654" alt="Logotipo" />
                    </div>
                    </Link>
                    <NavbarLinks />
                    <div>
                    <div className="navbar__signin-cart">
                        <button type="button" className="btn btn-danger">
                            Sign In
                        </button>
                        <CartWidget />
                    </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;

//EXPORTED TO: ../home/Home.js