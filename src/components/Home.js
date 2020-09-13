import React from 'react'
import './Home.css'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product from './Product';
import ReactNotification from 'react-notifications-component';

export default () => {

    return (
        <div className="home">
            <ReactNotification/>
            <div className="home__container">
                <Carousel
                    autoPlay 
                    showArrows={true} 
                    showThumbs={false} 
                    showIndicators={false} 
                    showStatus={false} 
                    infiniteLoop={true}
                    interval={7000}
                    >         
                        <img 
                            className="home__image" 
                            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                            alt="home"
                        />

                        <img 
                            className="home__image" 
                            src="https://images-na.ssl-images-amazon.com/images/G/01/PLF/MOON_BACK/MB-HA-2020/HEROES/MB-SLEEPBABYKIDS-2_GW_Amazon_GRD_DesktopHero_Template_3000x1200_1x._CB410257358_.jpg" 
                            alt="home"
                        />

                        <img 
                            className="home__image" 
                            src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2/AMZN_TheBoys-S2_WEEK1_GWBleedingHero_1x_1500x600_en-US_f._CB407833826_.jpg" 
                            alt="home"
                        />

                        <img 
                            className="home__image" 
                            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MWE1MmNlZDAt-w1500._CB406132032_.jpg" 
                            alt="home"
                        />

                        <img 
                            className="home__image" 
                            src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2020/Perception-Test-Sep20/prime_ufg_desktophero_message2_en_1500x600._CB406595857_.jpg" 
                            alt="home"
                        />
                   
                </Carousel>

                <div className="home__row">
                    <Product
                        id={"123124ggsdfds"} 
                        title="The lean startup"
                        price={29.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                        rating={4}
                    />
                    <Product
                        id={"rokuexpress2019"} 
                        title="Roku Express HD Streaming Media Player 2019"
                        price={29.00}
                        image={"https://images-na.ssl-images-amazon.com/images/I/81T70LF0wWL._AC_SL1500_.jpg"}
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={"watchstand"} 
                        title="Ikee Design Antique Color (Brown) Wooden Display Jewelry Accessory Stand"
                        price={10.29}
                        image={"https://images-na.ssl-images-amazon.com/images/I/515Q5uzDYfL._AC_SL1000_.jpg"}
                        rating={4}
                    />
                    <Product
                        id={"sandiskextremepro"} 
                        title="SanDisk Extreme Pro MicroSDXC UHS-I U3 A2 V30 64GB + Adapter"
                        price={18.45}
                        image={"https://images-na.ssl-images-amazon.com/images/I/61OjQlburwL._AC_SL1100_.jpg"}
                        rating={5}
                    />
                    <Product
                        id={"samsungbarplus"} 
                        title="Samsung BAR Plus USB 3.1 Flash Drive 128GB - 300MB/s (MUF-128BE3/AM) - Champagne Silver"
                        price={20.99}
                        image={"https://images-na.ssl-images-amazon.com/images/I/81LwWPCRV%2BL._AC_SL1500_.jpg"}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={"seagateonetouchssd"} 
                        title="Seagate One Touch SSD 500GB External Solid State Drive Portable – Black, USB 3.0 for PC Laptop and Mac, 1yr Mylio Create, 2 months Adobe CC Photography (STJE500400)"
                        price={79.00}
                        image={"https://images-na.ssl-images-amazon.com/images/I/915Wwi1mn-L._AC_SL1500_.jpg"}
                        rating={4}
                    />
                </div>

            </div>
        </div>
    )
}