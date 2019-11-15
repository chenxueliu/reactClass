import React, { Component } from 'react'
import Child1 from './child1'
import Child2 from './child2'
import store from './store'
import actionType from './store/actionType'
export default class Html extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    addCount = () => {
        const action = {
            type: ADD_COUNT,
            value: this.state.value + 1
        }
        store.dispatch(action)
    }
    reduceCount = () => {
        const action = {
            type: REDUCE_COUNT,
            value: this.state.value - 1
        }
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <Child1 />
                <Child2 />
                <button onClick={this.addCount}>+</button>
                <button onClick={this.reduceCount}>-</button>
            </div>
        )
    }
}
