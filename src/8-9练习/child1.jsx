import React, { Component } from 'react'
import store from './store'
export default class child1 extends Component {
    constructor() {
        super()
        // 获取仓库里的值
        this.state = store.getState()
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.value} </p>
            </div>
        )
    }
}
