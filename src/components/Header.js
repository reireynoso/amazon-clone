import React from 'react';
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css'

import {useStateValue} from '../StateProvider'
import {auth} from '../firebase'

export default () => {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuth = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img alt="icon" className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">Hello, {user ? user.email : "Guest"}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>                
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

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
    )
}