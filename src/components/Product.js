import React, {useState} from 'react';
import './Product.css'
import {useStateValue} from '../StateProvider';
import { store } from 'react-notifications-component';
import {db} from '../firebase';

export default ({id, title, image,price,rating}) => {
    // destructured from state first arg
    const [{basket, user}, dispatch] = useStateValue();
    const [clickable, setClickable] = useState(true);

    const notification = <div className="product__notification">
        <img alt="notification" src={image}/>
        <p>{title}</p>
    </div>

    const addToBasket = () => {
        setClickable(false)
        // check if item exists in basket already
        const existingItem = basket.findIndex(item => item.id === id)
        let updatedArray;
        if(existingItem > -1){
            updatedArray = basket.map(item => {
                if(item.id === id){
                    if(parseInt(item.quantity) === 10){
                        return item
                    }
                    if(user){
                        // update item in the database
                        db.collection('users') // reach into dbs collection of users
                            .doc(user?.uid) // specific user logged in
                            .collection('cart') // the user's orders
                            .doc(id) //create a document with a payment id
                            .update({
                                quantity: parseInt(item.quantity) + 1
                            })
                    }
                    
                    return {
                        ...item,
                        quantity: parseInt(item.quantity) + 1
                    }
                }
                return item
            })
        }
        else{
            const newItem = {
                title,
                image,
                price,
                rating,
                quantity: 1
            }
            if(user){
                // add item in the dataase
                db.collection('users') // reach into dbs collection of users
                .doc(user?.uid) // specific user logged in
                .collection('cart') // the user's orders
                .doc(id) //create a document with a payment id
                .set(newItem) // add information in
            }

            updatedArray = [...basket, {
                id,
                ...newItem
            }]
        }

        store.addNotification({
            title: "Added to cart!",
            message: notification,
            type: "info",
            insert: "bottom",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 1500,
              onScreen: true,
              showIcon:true
            },
            onRemoval: () => setClickable(true)
          });
        //dispatch the item to reducer
        // dispatch({
        //     type: "ADD_TO_BASKET",
        //     item: {
        //         id,
        //         title,
        //         image,
        //         price,
        //         rating,
        //         quantity: 1
        //     }
        // })
        dispatch({
            type: "ADD_TO_BASKET",
            basket: updatedArray
        })
    }

    const truncateTitle = () => {
        return title.length > 100 ? title.slice(0,97) + "..." : title
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{truncateTitle()}</p>
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
            <button disabled={!clickable} onClick={addToBasket}>{clickable ? "Add to Basket" : "Adding..."}</button>
        </div>
    )
}