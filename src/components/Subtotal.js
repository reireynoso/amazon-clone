import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css';
import {useStateValue} from '../StateProvider';
import {getBasketTotal} from '../selector'

export default () => {

    const [{basket}] = useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <Fragment>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </Fragment>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>  
    )
}