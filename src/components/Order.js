import React from 'react'
import './Order.css';
import CheckoutProduct from './CheckoutProduct';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../selector';

export default ({order}) => {
    
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMM Do YYYY, h:mma')}</p>
            <p className="order__id">
                <small>Order #: {order.id}</small>
            </p>
            
            {
                order.data.basket.map(item => (
                    <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                    />
                ))
            }

            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={getBasketTotal(order.data.basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}