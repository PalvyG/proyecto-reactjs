import Item from './Item.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fsFetchList } from '../utils/firebaseConfig';

const ItemList = () => {
    //STATE
    const [data, setData] = useState([]);

    //PARAMS
    const { id } = useParams();

    //EFFECT UPDATE PRODUCTS

    useEffect(() => {
        fsFetchList(id)
        .then(result => {
            console.log(result)
            setData(result)})
        .catch(err => console.log(err))
    }, [id])

    return (
        <div id="container-products"
            className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
            {
                data.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        img={item.img}
                    />
                ))
            }
        </div>
    )
}

export default ItemList

//EXPORTED TO: ../containers/ItemListContainer.js