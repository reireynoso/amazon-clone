import React from 'react';
import './Product.css'
import {useStateValue} from '../StateProvider';

export default ({id, title, image,price,rating}) => {
    // destructured from state first arg
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch the item to reducer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {
                        Array(rating).fill().map((_,i) => (
                            <p key={i}>🌟</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt={image}/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}