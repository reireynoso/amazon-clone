import React, {useState, useEffect} from 'react';
import './Payment.css'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../selector';
import axios from '../axios';
import {db} from '../firebase';
import FlipMove from 'react-flip-move';
    
export default () => {

    const [{basket,user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret whcih allows us to charge a customer
        const getClientSecret = async () => {
            if(basket && basket.length > 0){
                const response = await axios({
                    method: "post",
                    // stripe expect the total in a currencies subunits. i.e dollars is expected in cents
                    url: `/payments/create?total=${getBasketTotal(basket).toFixed(2) * 100}`
                })
                setClientSecret(response.data.clientSecret)
            }
        }
        getClientSecret();

    }, [basket])

    // console.log("THE SECRET IS >>>>> ", clientSecret)
    const handleSubmit = async e => {
        e.preventDefault();
        setProcessing(true);

        // takes the secret every tmie the basket changes
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                //gets the payment info from the CardElement input 
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation

            db.collection('users') // reach into dbs collection of users
                .doc(user?.uid) // specific user logged in
                .collection('orders') // the user's orders
                .doc(paymentIntent.id) //create a document with a payment id
                .set({
                    basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                }) // add information in

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace("/orders")
        })
    }

    const handleOnChange = e => {
        // listen for changes in the CardElement
        // display any errors as the customer types the card details
        setDisabled(e.empty);
        setError(e.error? e.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (<Link to="/checkout">{basket && basket.length} items</Link>)
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>

                    </div>

                    <div className="payment__address">
                        <p>{user && user.email}</p>
                        <p>123 React Lane</p>
                        <p>Jersey City, NJ</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        <FlipMove leaveAnimation="elevator">
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                        </FlipMove>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleOnChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />

                                <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {
                                error && <div>{error}</div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}