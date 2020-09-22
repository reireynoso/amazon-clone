import React, {useState} from 'react'
import './CheckoutProduct.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../StateProvider';
import {db} from '../firebase';

export default ({id,image,title,price,rating, hideButton, quantity}) => {
    const [{user}, dispatch] = useStateValue();
    const [removed, setRemoved] = useState(false)

    const removeFromBasket = () => {
        if(user){
            db.collection('users')
                .doc(user.uid)
                .collection('cart')
                .doc(id)
                .delete();
        }

        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }

    const initiateRemove = () => {
        setRemoved(true)
    }

    const addToBasket = (e) => {
        if(user){
            db.collection('users') // reach into dbs collection of users
                .doc(user?.uid) // specific user logged in
                .collection('cart') // the user's orders
                .doc(id) //create a document with a payment id
                .update({
                    quantity: e.target.value
                })
        }
        
        dispatch({
            type: "UPDATE_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating,
                quantity: e.target.value 
            }
        })
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
                        <div className="checkoutProduct__options">
                            <select onChange={addToBasket} value={quantity}>
                                <option value={1}>Qty: 1</option>
                                <option value={2}>Qty: 2</option>
                                <option value={3}>Qty: 3</option>
                                <option value={4}>Qty: 4</option>
                                <option value={5}>Qty: 5</option>
                                <option value={6}>Qty: 6</option>
                                <option value={7}>Qty: 7</option>
                                <option value={8}>Qty: 8</option>
                                <option value={9}>Qty: 9</option>
                                <option value={10}>Qty: 10</option>
                            </select>
                            <button onClick={initiateRemove}>Remove from basket</button>
                        </div>
                    )
                }
            </div>
            {
                !hideButton && <div className="checkoutProduct__priceInfo">
                    <h3>Price</h3>
                    <CurrencyFormat
                        renderText={(value) => {
                            return <strong>{value}</strong>
                        }}
                        decimalScale={2}
                        value={price * quantity}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
                </div>
            }
        </div>
    )
}