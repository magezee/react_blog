import React, { Component } from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import {routers} from '../../routers'

export default class MiddlePart extends Component {
    render() {
        return (
            <Switch>
                {
                    routers.map(router => {
                        return <Route
                            key = {router.pathname}
                            path = {router.pathname}
                            exact = {router.exact}
                            render = {(routerProps) => {
                                return <router.viewCompoment {...routerProps} />
                            
                            }}
                        />
                    })
                }
                <Redirect to='/404' />      {/* 搜寻不到路由时跳转404 */}
                
            </Switch>
        )
    }
}
