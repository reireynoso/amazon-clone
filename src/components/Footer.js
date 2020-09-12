import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import FlagIcon from '@material-ui/icons/Flag';
import './Footer.css';
export default () => {

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h3>Get to Know Us</h3>
                    <ul className="footer__list">
                        <li className="footer__listItem">Careers</li>
                        <li className="footer__listItem">Blog</li>
                        <li className="footer__listItem">About Amazon</li>
                        <li className="footer__listItem">Press Center</li>
                        <li className="footer__listItem">Investor Relations</li>
                        <li className="footer__listItem">Amazon Devices</li>
                        <li className="footer__listItem">Amazon Tours</li>
                    </ul>   
                </div>

                <div className="footer__section">
                    <h3>Make Money with Us</h3>
                    <ul className="footer__list">
                        <li className="footer__listItem">Sell on Amazon</li>
                        <li className="footer__listItem">Sell Under Amazon Accelerator</li>
                        <li className="footer__listItem">Sell on Amazon Handmade</li>
                        <li className="footer__listItem">Sell on Amazon Business</li>
                        <li className="footer__listItem">Sell Your Apps on Amazon</li>
                        <li className="footer__listItem">Become an Affliate</li>
                        <li className="footer__listItem">Advertise Your Products</li>
                        <li className="footer__listItem">Self-Publish with Us</li>
                        <li className="footer__listItem">Host an Amazon Hub</li>
                    </ul>   
                </div>

                <div className="footer__section">
                    <h3>Amazon Payment Products</h3>
                    <ul className="footer__list">
                        <li className="footer__listItem">Amazon Rewards Visa Signature Cards</li>
                        <li className="footer__listItem">Amazon.com Store Card</li>
                        <li className="footer__listItem">Amazon Business Card</li>
                        <li className="footer__listItem">Amazon Business Line of Credit</li>
                        <li className="footer__listItem">Shop with Points</li>
                        <li className="footer__listItem">Credit Card Marketplace</li>
                        <li className="footer__listItem">Reload Your Balance</li>
                        <li className="footer__listItem">Amazon Currency Converter</li>
                    </ul>   
                </div>

                <div className="footer__section">
                    <h3>Let Us Help You</h3>
                    <ul className="footer__list">
                        <li className="footer__listItem">Amazon and COVID-19</li>
                        <li className="footer__listItem">Your Account</li>
                        <li className="footer__listItem">Your Orders</li>
                        <li className="footer__listItem">Shipping Rates & Policies</li>
                        <li className="footer__listItem">Amazon Prime</li>
                        <li className="footer__listItem">Returns and Replacements</li>
                        <li className="footer__listItem">Manage Your Content and Devices</li>
                        <li className="footer__listItem">Amazon Assistant</li>
                        <li className="footer__listItem">Help</li>
                    </ul>   
                </div>
            </div>

            <div className="footer__line">
            
            </div>

            <div className="footer__additional">
                <img alt="icon" className="footer__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                <div className="footer__selection">
                    <LanguageIcon/> English
                </div>
                <div className="footer__selection">
                    <FlagIcon/> United States
                </div>
            </div>
        </div>
    )
}