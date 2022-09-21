import ItemDetail from '../components/ItemDetail.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fsFetchDetail } from '../utils/firebaseConfig.js'

const ItemDetailContainer = () => {
    //STATE
    const [product, setProduct] = useState({});

    //PARAMS
    const { id } = useParams();



    useEffect(() => {
        fsFetchDetail(id)
            .then(result => {
                setProduct(result)
            })
            .catch(error => console.error(error))
    }, [id])



    // //EFFECT UPDATE PRODUCT
    // useEffect(() => {
    //     promiseOnLoad(products.find(product => product.id === parseInt(id)))
    //         .then(result => {
    //             setProduct(result)
    //         })
    //         .catch(error => console.error(error))
    // })

    return (
        <main>
            <ItemDetail item={product} />
        </main>
    )
}

export default ItemDetailContainer

//EXPORTED TO: ../pages/Home.js