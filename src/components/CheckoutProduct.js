import React, {useState} from 'react'
import './CheckoutProduct.css'

import {useStateValue} from '../StateProvider'

export default ({id,image,title,price,rating, hideButton}, ref) => {
    const [{basket}, dispatch] = useStateValue();
    const [removed, setRemoved] = useState(false)

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }

    const initiateRemove = () => {
        setRemoved(true)
    }

    return (
        <div onAnimationEnd={removeFromBasket} className={`checkoutProduct ${removed ? "fadeOut" : ""}`}>
            <img className="checkoutProduct__image" src={image} alt={image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, index) => (<p key={index}>🌟</p>))
                    }
                </div>
                {
                    !hideButton && (
                        <button onClick={initiateRemove}>Remove from basket</button>
                    )
                }
            </div>
        </div>
    )
}