import React from 'react';
import './BackToTop.css'

export default () => {

    return(
        <div onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })} className="backtotop">
            Back to top
        </div>
    )
}