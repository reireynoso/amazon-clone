import React, {useEffect, useState} from 'react';
import './ResultContainer.css'
import Product from './Product'
import {useLocation} from 'react-router-dom'
import ReactNotification from 'react-notifications-component';
import ReactPaginate from 'react-paginate';

import products from '../amazon-products-data'

export default ({category}) => {
    const location = useLocation();
    const [title, setTitle] = useState("");
    const [product, setProduct] = useState([])
    const [total, setTotal] = useState(0)

    const [totalPages, setTotalPages] = useState(0)

    const [startingPoint, setStartingPoint] = useState(0)
  
    useEffect(() => {
        if(category){
            const pathSplit = location.pathname.split("/")
            const categoryTitle = pathSplit[pathSplit.length - 1].replace("_", " ")
            setTitle(categoryTitle)

            const productIndex = products.findIndex(category => category.name === categoryTitle)
            setProduct(products[productIndex].products)
            setTotal(products[productIndex].products.length)

            // find length of results.
            // divide it by num you want to show in page
            // => total num of pages

            setTotalPages(Math.ceil(products[productIndex].products.length) / 10);
        }
    }, [])

    const handlePageClick = (data) => {
        setStartingPoint(data.selected * 10)
    }
    
    
    return (
        <div className="result">
            <ReactNotification/>
            <div className="result__header">
                <span>{startingPoint + 1}-{startingPoint + 10 > total ? total: startingPoint + 10} of {total} results for "{title}"</span>
                <select>
                    <option>Sort by: Featured</option>
                </select>
            </div>

            <div className="result__products">

                {
                    product.slice(startingPoint,(startingPoint + 10)).map(item => {
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

            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'pagination__pages'}
                activeClassName={'pagination__active'}
                previousClassName={'pagination__prev'}
                nextClassName={'pagination__next'}
                pageLinkClassName={'pagination__link'}
                previousLinkClassName={'pagination__linkPrev'}
                nextLinkClassName={'pagination__linkNext'}
            />
        </div>
    )
}