import React, { Component, Fragment } from 'react'
import './index.less'

const  Navigation =({icon = null, children='按钮'}) => {

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

export default Navigation
