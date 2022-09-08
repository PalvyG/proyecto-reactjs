import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {

    useEffect(() => {
        console.log('Component Item.js mounted.')
    }, []);

    return (
        <div className="card-responsive col mb-5">
            <div className="card h-100">
                {/* Product image */}
                <div className="card-img-container">
                    <img className="card-img-top" src={props.img} alt="..." />
                </div>
                {/* Product details */}
                <div className="card-body p-1">
                    <div className="text-center">
                        {/* Product name */}
                        <p className="fw-bolder product-title">{props.title}</p>
                        {/* Product price */}
                        <p className="fw-bolder product-price">${props.price}</p>
                    </div>
                </div>
                {/* Product actions */}
                <Link to={`/product/${props.id}`}>
                <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><btn className="btn btn-danger mt-auto mb-2">Show Details</btn></div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Item

//EXPORTED TO: ItemList.js