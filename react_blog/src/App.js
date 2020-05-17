import React,{Component, Fragment} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import {routers} from './routers'

import './App.less'

export default class App extends Component {
    
    render() {
        return (
            <Fragment>
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

            </Fragment>
        )
    }
}