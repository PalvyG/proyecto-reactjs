import ItemList from '../components/ItemList.js';
import {products} from '../utils/products.js';


const ItemListContainer = (props) => {

    return (
        <main>
            <h1 className='greeting'>{props.greeting}</h1>
            <ItemList products={products} />
        </main>
    );
};

export default ItemListContainer;

//EXPORTED TO: ../pages/Home.js