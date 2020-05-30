import React, { Component, Fragment } from 'react'
import './index.less'

const  Button =({icon = '', children=''}) => {
    if(icon && children) {
        return(
            <button className="button-style-middle">
                <span className='button-icon'>
                    <img src={icon}></img>
                </span>
            </button>
            

        )
    }

  /*   if(isOnlyIcon) {
        return (
            <div className='navigation-content'>
                <img src={icon}/>
            </div>
        )
    }
    else {
        return (
            <div className='navigation-content'>
            { 
            icon
            ? 
                <div className='navigation-icon'>
                    <img src={icon}/>
                </div> 
            : 
                <Fragment/> 
            } 
            
            <div className='navigation-text-content'>
            <span className='navigation-text'>{children}</span>
            </div>
            
        </div>
        )
    }
 */

    
}

export default Button
