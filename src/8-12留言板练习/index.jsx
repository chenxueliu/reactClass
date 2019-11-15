import React, { Component } from 'react'
// 引入子组件
import Header from './header'
import List from './list'
// 引入仓库
import store from './store'
// 引入创见者
import { changeValueAction, addItemAction, deleteItemAction } from './store/actionCreator'
export default class Html extends Component {
    constructor(props) {
        super()
        this.state = store.getState()
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    render() {
        return (
            <div>
                <Header value={this.state.inputValue}
                    changeinput={({ target }) => {
                        store.dispatch(changeValueAction(target.value))
                    }}
                    additem={() => {
                        store.dispatch(addItemAction)
                    }}

                />
                <List list={this.state.list}
                    deleteitem={(index) => {
                        store.dispatch(deleteItemAction(index))
                    }}
                />
            </div>
        )
    }
}
