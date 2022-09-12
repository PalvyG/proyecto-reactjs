import Navbar from '../components/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from '../containers/ItemListContainer';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import CartContainer from '../containers/CartContainer';

const Home = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='Bienvenido a GPDudes!' />} />
                <Route path='/category/:id' element={<ItemListContainer />} />
                <Route path='/product/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<CartContainer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Home;