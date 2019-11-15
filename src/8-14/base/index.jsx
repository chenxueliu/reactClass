import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Home from './home'
export default class Html extends Component {
    render() {
        /*
        1.react-redux :
        provider组件只有一个参数store，接收的是redux创建的store
        作用：内置了订阅方法---subscribe
        用于根容器
         */
        return (
            <Provider store={store}>
                <Home />
            </Provider>

        )
    }
}
