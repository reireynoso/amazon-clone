import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'

export default () => {

    return (
        <div className="checkout"> 
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668" alt="ad"/>
            
                <h2 className="checkout__title">
                    Your shopping basket
                </h2>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}