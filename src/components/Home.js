import React from 'react'
import './Home.css'

import Product from './Product'

export default () => {

    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt="home"
                />

                <div className="home__row">
                    <Product
                        id={"123124ggsdfds"} 
                        title="The lean startup"
                        price={29.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
                    <Product
                        id={"123124ggg"} 
                        title="The lean startup"
                        price={29.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={"123124s"} 
                        title="The lean startup"
                        price={29.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
                    <Product
                        id={"123124wqeqwe"} 
                        title="The lean startup"
                        price={29.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
                    <Product
                        id={"123124wqedasd"} 
                        title="The lean startup"
                        price={29.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={"123124dasdafsaf"} 
                        title="The lean startup"
                        price={29.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
                </div>

            </div>
        </div>
    )
}