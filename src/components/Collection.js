import React, {useState, useEffect} from 'react';
import './Collection.css'
import Carousel from 'react-elastic-carousel';
import Product from './Product';
import {Link} from 'react-router-dom'
import items from '../amazon-products-data';
import CircularProgress from '@material-ui/core/CircularProgress';

export default ({index}) => {

    const [amazonItems, setAmazonItems] = useState([])
    const {name} = items[index]

    useEffect(() => {
        const loadItems = setTimeout(() => {
            setAmazonItems(items[index].products)
        }, 500)

        // avoid memory leak if component dismounts before running setTimeout
        return () => {
            clearTimeout(loadItems)
        }
    }, [])

    return (
        <div className="collection__categoryContainer">
            <div        
                className="collection__categoryTitle"
            >
                <span>{name}</span>
                <span>
                    <Link to={`/categories/${name.replace(" ", "_")}`}>
                        View All
                    </Link>
                </span>
            </div>
            <Carousel          
                itemsToShow={3}
                itemsToScroll={3}
                >
                {
                    amazonItems.length ? amazonItems.map(product => {
                        return (
                            <Product
                                key={product.id}
                                id={product.id} 
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                rating={Math.round(product.rating)}
                            />
                        )
                    })
                    :
                    [1,2,3].map(loader => {
                        return <CircularProgress key={loader}/>
                    })
                }
            </Carousel>
        </div>
    )
}