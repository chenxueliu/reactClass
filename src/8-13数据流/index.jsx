import React, { Component } from 'react'
import { NavLink, Route, BrowserRouter } from 'react-router-dom'
import Home from './component/home'
import News from './component/news'
export default class Html extends Component {
    constructor() {
        super()
        // store.subscribe(() => {
        // console.log('强制更新')
        // this.forceUpdate();
        // forceupdate 强制更新会略过shouldcomponentupdate会造成一定的影响
        // 比如基于shouldcomponentupdate的性能优化
        // })
    }
    render() {
        return (
            <BrowserRouter>

                <NavLink to='/home'>首页</NavLink>
                <NavLink to='/news'>新闻</NavLink>
                <Route path='/home' component={Home} />
                <Route path='/news' component={News} />

            </BrowserRouter>
        )
    }
}
