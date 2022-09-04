import ItemDetail from '../components/ItemDetail.js'
import { useEffect, useState } from 'react'
import { products } from '../utils/products.js'
import { promiseOnLoad } from '../utils/promiseOnLoad.js'

const ItemDetailContainer = () => {
    //STATE
    const [product, setProduct] = useState({});

    //EFFECT MOUNT
    useEffect(() => {
        console.log('Component ItemDetailContainer.js mounted.')
    }, [])

    //EFFECT UPDATE PRODUCTS

    useEffect(() => {
        promiseOnLoad(products[9])
            .then(result => {
                setProduct(result)
                console.log('Component ItemDetailContainer.js updated.')
            })
            .catch(error => console.error(error))
    })

    return (
        <ItemDetail item={product} />
    )
}

export default ItemDetailContainer

//EXPORTED TO: ../components/Main.js