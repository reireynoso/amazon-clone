import React, {Fragment} from 'react';
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css';
import {useStateValue} from '../StateProvider'

export default () => {

    const [{basket}, dispatch] = useStateValue();

    const calculateTotal = () => {
        let total = 0;
        for(let i = 0; i < basket.length; i++){
            total += basket[i].price
        }
        console.log(total)
        return total
    }
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
                value={calculateTotal()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>  
    )
}