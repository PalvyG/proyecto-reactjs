import ItemCount from '../components/ItemCount.js';
import ItemList from '../components/ItemList.js';
import { useEffect } from 'react';
import {products} from '../utils/products.js';


const ItemListContainer = (props) => {

    useEffect(() => {
        console.log('Container ItemListContainer.js mounted.')
    }, [])

    return (
        <>
            <h1 className='greeting'>{props.greeting}</h1>
            <ItemCount stock={5} />
            <ItemList products={products} />
        </>
    );
};

export default ItemListContainer;

//EXPORTED TO: Main.js