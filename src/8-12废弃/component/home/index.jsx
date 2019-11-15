import React, { Component } from 'react'
// 引入子组件
import Header from './header'
import List from './list'
// 引入仓库
import store from './store'
import { changeinputAction, addItemAction, removeItemAction } from './store/actionCreators'
export default class Html extends Component {
    constructor() {
        super()
        // 获取默认值
        this.state = store.getState()
        // 订阅函数 监听store函数
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Header value={this.state.inputValue}
                    addItem={() => {
                        store.dispatch(addItemAction())
                    }}
                    changeinput={({ target }) => {
                        store.dispatch(changeinputAction(target.value))
                    }} />
                <List list={this.state.list} removeitem={(index) => {
                    store.dispatch(removeItemAction(index))
                }} />
            </div>
        )
    }
}


