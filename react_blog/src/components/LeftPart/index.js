// /src/components/LeftPart/index.js
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import {routers}  from '../../routers'
import './index.less'

const navigation = routers.filter(router => router.isNav === true)      // 过滤掉不是导航用的路由

@withRouter
class LeftPart extends Component {

    changeRoute = (pathname) =>{
        this.props.history.push(pathname)
    }

    render() {
        return (
            
            <div className="navigation">
                {navigation.map(route => {
                    return <button
                            key={route.pathname}
                            onClick={this.changeRoute.bind(this, route.pathname)}    /* 因为要直接往里面传参，因此需要用到bind方法 */
                        >{route.title}</button>
                })}              
            </div>
        )}
}
export default LeftPart
