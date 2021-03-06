import React from 'react';
import Subtotal from './Subtotal'
import './Checkout.css'
import {useStateValue} from '../StateProvider'

import CheckoutProduct from './CheckoutProduct'

export default () => {

    const [{basket, user}] = useStateValue();

    return (
        <div className="checkout"> 
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668" alt="ad"/>    
                <div>
                    <h3>Hello, {user && user.email}</h3>
                    <h2 className="checkout__title">
                        Your shopping basket
                    </h2>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    quantity={item.quantity}
                                />
                            ))
                        }
                </div>

            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}