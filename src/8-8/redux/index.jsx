import React, { Component } from 'react'
// 1.引入我们的仓库
import store from './store'
import Child from './child'
export default class Html extends Component {
    constructor() {
        super()
        // 2获取仓库里的状态数据
        this.state = store.getState()
        // 2.1订阅一下我们的store
        //  subscribe里的参数必须是一个函数
        store.subscribe(() => {
            console.log('仓库有变化了')
            // 2.2当订阅触发后，重新获取仓库里的状态数据
            this.setState(store.getState())
        })
    }
    // 3.修改仓库里的状态
    addCount = () => {
        // 3.1派发一个动作到仓库里,参数是一个对象，这个对象是官方规定的，这个对象里至少有两个参数，一个是类型，表示本次操作的是什么，第二个是传进去的值
        store.dispatch({
            type: "add",
            value: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <p>当前页:{this.state.count} </p>
                <div>子组件:<Child /> </div>
                <button onClick={this.addCount}>父组件累加</button>
            </div>
        )
    }
}
