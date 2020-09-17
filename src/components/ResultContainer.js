import React, {useEffect, useState} from 'react';
import './ResultContainer.css'
import Product from './Product'
import {useLocation} from 'react-router-dom'
import ReactNotification from 'react-notifications-component';

import products from '../amazon-products-data'

export default ({category}) => {
    const location = useLocation();
    const [title, setTitle] = useState("");
    const [product, setProduct] = useState([])
    const [total, setTotal] = useState(0)
  
    useEffect(() => {
        if(category){
            const pathSplit = location.pathname.split("/")
            const categoryTitle = pathSplit[pathSplit.length - 1].replace("_", " ")
            setTitle(categoryTitle)

            const productIndex = products.findIndex(category => category.name === categoryTitle)
            setProduct(products[productIndex].products)
            setTotal(products[productIndex].products.length)
        }
    }, [])
    
    
    return (
        <div className="result">
            <ReactNotification/>
            <div className="result__header">
                <span>1-10 of {total} results for "{title}"</span>
                <select>
                    <option>Sort by: Featured</option>
                </select>
            </div>

            <div className="result__products">

                {
                    product.map(item => {
                        return <Product
                            key={item.id}
                            id={item.id} 
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={Math.round(item.rating)}
                        />
                    })
                }
            </div>
        </div>
    )
}