import ItemList from '../components/ItemList.js';


const ItemListContainer = (props) => {

    return (
        <main>
            <h1 className='greeting'>{props.greeting}</h1>
            <ItemList/>
        </main>
    );
};

export default ItemListContainer;

//EXPORTED TO: ../pages/Home.js