import React, { Fragment } from 'react'
import { render } from 'react-dom'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import App from './App'

render(
    <Fragment>
        {/* 访问域名立即渲染App组件 */}
        <Router>    
            <Route path='/' render={(routerProps) =>{
                    return <App {...routerProps}  />     // 传递路由api
            }} /> 
        
        </Router>     
    </Fragment>,
    document.querySelector('#root')
)