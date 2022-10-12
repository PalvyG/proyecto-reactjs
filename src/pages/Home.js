import Navbar from '../components/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from '../containers/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import CartContainer from '../containers/CartContainer';
import CartContextProvider from '../context/CartContext.js';

const Home = () => {

    return (
        <CartContextProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/proyecto-reactjs/' element={<ItemListContainer greeting='Welcome to GPDudes!' />} />
                    <Route path='/proyecto-reactjs/category/:id' element={<ItemListContainer />} />
                    <Route path='/proyecto-reactjs/product/:id' element={<ItemDetailContainer />} />
                    <Route path='/proyecto-reactjs/cart' element={<CartContainer />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home;