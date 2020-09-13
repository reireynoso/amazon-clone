import React, {useState, useEffect} from 'react';
import './Orders.css'
import {db} from '../firebase';
import {useStateValue} from '../StateProvider'
import Order from './Order';

export default () => {
    const [{basket,user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc') // sort the collection by descending order
            .onSnapshot(snapshot => ( //gives us realtiem snapshot of the database of what it looks like. it will update based on that value if it changes in the db
                // snapshot.docs to access all orders as documents. structure the object
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        }else{
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {
                    orders.map(order => (
                        <Order
                        key={order.id} 
                        order={order}/>
                    ))
                }            
            </div>
        </div>
    )
}