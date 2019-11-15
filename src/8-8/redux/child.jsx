import React, { Component } from 'react'
import store from './store'
export default class Child extends Component {
    constructor() {
        super()
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    reduce = () => {
        store.dispatch({
            type: "reduce",
            value: this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <p>子组件的数据：{this.state.count}</p>
                <button onClick={this.reduce}>子组件递减</button>
            </div>
        )
    }
}
