import ItemCount from '../components/ItemCount.js';

const ItemListContainer = (props) => {
    return (
        <>
            <h1>{props.greeting}</h1>
            <ItemCount stock={5}/>
        </>
    );
};

export default ItemListContainer;

//EXPORTED TO: Main.js