import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

    return (
        <div id="container-products" className="product-details d-flex">
            <div className="details__img-cont">
                <img className="details__img" src={item.img} alt="Product" />
            </div>
            <div className="details__text">
                <h1 className="details__text__title">{item.title}</h1>
                <p className="details__text__desc">{item.desc}</p>
                <ItemCount stock={5} />
            </div>
        </div >
    )
}

export default ItemDetail

//EXPORTED TO: ../containers/ItemDetailContainer.js