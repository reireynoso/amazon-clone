import React from 'react';
import './Product.css'
import {useStateValue} from '../StateProvider';
import { store } from 'react-notifications-component';

export default ({id, title, image,price,rating}) => {
    // destructured from state first arg
    const [{basket}, dispatch] = useStateValue();

    const notification = <div className="product__notification">
        <img src={image}/>
        <p>{title}</p>
    </div>

    const addToBasket = () => {

        store.addNotification({
            title: "Added to cart!",
            message: notification,
            type: "info",
            insert: "bottom",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true,
              showIcon:true
            },
            
          });
        //dispatch the item to reducer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating,
                quantity: 1
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