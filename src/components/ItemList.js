import Item from './Item.js'
import { useEffect, useState } from 'react'
import { products } from '../utils/products.js'
import { promiseOnLoad } from '../utils/promiseOnLoad.js'

const ItemList = () => {
    //STATE
    const [data, setData] = useState([]);

    //EFFECT MOUNT
    useEffect(() => {
        console.log('Component ItemList.js mounted.')
    }, [])

    //EFFECT UPDATE PRODUCTS

    useEffect(() => {
        promiseOnLoad(products)
            .then(result => {
                setData(result)
                console.log('Component ItemList.js updated.')
            })
            .catch(error => console.error(error))
    })

    return (
        <div id="container-products"
            className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
            {
                data.map(item => (
                    <Item
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        img={item.pictureUrl}
                    />
                ))
            }
        </div>
    )
}

export default ItemList

//EXPORTED TO: ../containers/ItemListContainer.js