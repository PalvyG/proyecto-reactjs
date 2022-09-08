import ItemList from '../components/ItemList.js';
import { useEffect } from 'react';
import {products} from '../utils/products.js';


const ItemListContainer = (props) => {

    useEffect(() => {
        console.log('Container ItemListContainer.js mounted.')
    }, [])

    return (
        <main>
            <h1 className='greeting'>{props.greeting}</h1>
            <ItemList products={products} />
        </main>
    );
};

export default ItemListContainer;

//EXPORTED TO: ../App.js