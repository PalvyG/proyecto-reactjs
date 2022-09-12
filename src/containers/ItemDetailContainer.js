import ItemDetail from '../components/ItemDetail.js'
import { useEffect, useState } from 'react'
import { products } from '../utils/products.js'
import { promiseOnLoad } from '../utils/promiseOnLoad.js'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    //STATE
    const [product, setProduct] = useState({});

    //PARAMS
    const { id } = useParams();

    //EFFECT MOUNT
    useEffect(() => {
        console.log('Component ItemDetailContainer.js mounted.')
    }, [])

    //EFFECT UPDATE PRODUCTS

    useEffect(() => {
        promiseOnLoad(products.find(product => product.id === parseInt(id)))
            .then(result => {
                setProduct(result)
                console.log('Component ItemDetailContainer.js updated.')
                console.log(result)
            })
            .catch(error => console.error(error))
    })

    return (
        <main>
            <ItemDetail item={product} />
        </main>
    )
}

export default ItemDetailContainer

//EXPORTED TO: ../home/Home.js