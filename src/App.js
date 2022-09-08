import './App.css';
import './components/Navbar.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenido a GPDudes!'/>} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/product/:idProduct' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
