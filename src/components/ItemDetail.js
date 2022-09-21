import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'

const ItemDetail = ({ item }) => {

    //CONTEXT
    const ctxObj = useContext(CartContext)

    //STATES
    const [count, setCount] = useState(0)

    const addToCart = (qty) => {
        alert('You have added ' + qty + ' units to your cart.')
        setCount(qty)
        ctxObj.onAdd(item, qty)
        console.log(ctxObj.cartList)
    }

    return (
        <div id="container-products" className="product-details d-flex">
            <div className="img-cont">
                <img className="img" src={item.img} alt="Product" />
            </div>
            <div className="details">
            <div className="details__text">
                <h1 className="details__text__title">{item.title}</h1>
                <p className="details__text__desc">{item.desc}</p>
            </div>
            <div className="details__bottom">
                {
                    count === 0
                    ? <ItemCount stock={item.stock} count={count} addToCart={addToCart} />
                    : <Link to='/cart'><button className="btn btn-danger">Checkout</button></Link>
                }
                <section>
                <p className="details__bottom__price"><i class="fa-regular fa-money-bill-1"></i> Price - <i class="fa-solid fa-dollar-sign"></i> {item.price}</p>
                <p className="details__bottom__stock"><i class="fa-solid fa-boxes-stacked"></i> Stock - {item.stock} units</p>
                </section>
            </div>
            </div>
        </div>
    )
}

export default ItemDetail

//EXPORTED TO: ../containers/ItemDetailContainer.js