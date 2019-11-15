import React, { Component } from 'react'
import { NavLink, BrowserRouter, Route } from 'react-router-dom'
import Home from './component/home'
import Production from './component/production'
import store from './store'
export default class Html extends Component {
    constructor() {
        super()
        // store.subscribe(() => {
        //     this.forceUpdate();
        //     // forceupdate 强制更新会略过shouldcomponentupdate会造成一定的影响
        //     // 比如基于shouldcomponentupdate的性能优化
        // })
    }
    render() {
        return (
            <BrowserRouter>
                <div className='flex'>
                    <NavLink to='/home'>首页</NavLink>
                    <NavLink to='/chanpin'>产品</NavLink>
                </div>
                <Route path='/home' component={Home} />
                <Route path='/chanpin' component={Production} />
            </BrowserRouter>
        )
    }
}
