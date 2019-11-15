import React, { Component } from 'react'
import store from './store'
import { changeInputAction } from './store/actionCreator'
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux'
import Son from './component/son'
export default class Html extends Component {
    constructor() {
        super()
        this.state = store.getState()
        store.subscribe(() => {
            this.setState(store.getState())
        })
        // bindActionCreators接收两个参数
        // 1第一个是actionCreator
        // 2.第二个是dispatch
        // 3.作用:将我们的动作和dispatch做了一个封装,返回了一个对象,这样我们再使用返回的actionCreator ,就不用dispatch了
        // 如果传入的是一个对象，返回一个对象，如果是函数，返回一个函数
        // this.sonFn = bindActionCreators(changeInputAction, store.dispatch)
        //传入对象的形式，可以放多个事件
        this.sonFn = bindActionCreators({ changeInputAction }, store.dispatch)
        console.log(this.sonFn)
    }
    render() {
        return (
            <Provider store={store}>
                首页
                <Son inputvalue={store.getState().inputvalue} sonfn={this.sonFn} />
            </Provider>
        )
    }
}
