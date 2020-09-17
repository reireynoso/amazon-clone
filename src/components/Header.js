import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RoomIcon from '@material-ui/icons/Room';
import './Header.css'

import {useStateValue} from '../StateProvider'
import {auth} from '../firebase'

export default () => {

    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const [searchTerm, setSearchTerm] = useState("")

    const handleAuth = () => {
        if(user){
            auth.signOut();
        }
    }

    const handleSubmit = e => {    
        if(searchTerm && (e.key=== "Enter" || e.type === "click")){
            history.push(`/search?term=${searchTerm}`)
            setSearchTerm("")
        }
    }

    return (
        <React.Fragment> 
            <div className="header">
                <Link to="/">
                    <img alt="icon" className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                </Link>

                <div className="header__search">
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        onKeyPress={handleSubmit}
                        className="header__searchInput" 
                        type="text"
                    />
                    <SearchIcon onClick={handleSubmit} className="header__searchIcon"/>
                </div>

                <div className="header__nav">
                    <Link to={!user ?  "/login" : history.location.pathname}>
                        <div onClick={handleAuth} className="header__option">
                            <span className="header__optionLineOne">Hello {!user ? "Guest" : user.email}</span>
                            <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                        </div>                
                    </Link>

                    <Link to="/orders">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">& Orders</span>
                        </div>
                    </Link>


                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>

                    <Link to="/checkout">
                        <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="subheader">
                <div className="subheader__deliveryInfo">
                    <RoomIcon/>
                    <div>
                        <p>Deliver to {user && user.email}</p>
                        <p>Jersey City, 07307</p>
                    </div>
                </div>

                <div className="subheader__selection">
                    <p>Today's deals</p>
                    <p>Find a Gift</p>
                    <p>Amazon Home</p>
                    <p>Best Sellers</p>
                    <p>Whole Foods</p>
                </div>

                <div className="subheader__deal">
                    <p>Get 5% back</p>
                </div>
            </div>
        </React.Fragment>
    )
}