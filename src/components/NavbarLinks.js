import { Link } from 'react-router-dom';

const NavbarLinks = () => {
    return (
    <div className="navbar__links">
        <div className="btn-group">
            <Link to='/category/gpu'>
            <button type="button" className="btn btn-danger border-radius-left">
                GPUs
            </button>
            </Link>
            <Link to='/category/processor'>
            <button type="button" className="btn btn-danger border-radius-none">
                Processors
            </button>
            </Link>
            <Link to='/category/cooler'>
            <button type="button" className="btn btn-danger border-radius-right">
                Coolers
            </button>
            </Link>
        </div>
    </div>
    );
}

export default NavbarLinks;

//EXPORTED TO: Navbar.js