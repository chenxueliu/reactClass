import React, { Component } from 'react'
import store from './store/index'
import { addAction, addItemAction } from './store/actionCreators'
export default class Html extends Component {
    constructor() {
        super()
        // 1.获取新值
        this.state = store.getState();
        // 2.订阅获取仓库里的新的值
        store.subscribe(() => {
            // 2.1每当store发生了改变，订阅函数都会触发然后我们再获取一次state
            const state = store.getState();
            console.log(state)
            this.setState(state)
        })
    }
    addCount = () => {
        // store 派发动作
        // const action = {
        //     type: actionType.ADD_COUNT,
        // }
        store.dispatch(addAction)
    }
    // list添加一条数据
    addItem = () => {
        store.dispatch(addItemAction(this.state.list[this.state.list.length - 1] + 1))
    }
    render() {
        return (
            <div>
                <mark>计数器</mark>
                <div>
                    {
                        this.state.list.map((item, index) => {
                            return <p key={index}>{item}</p>
                        })
                    }
                </div>
                <button onClick={this.addItem}>添加一个item</button>
                <p>{this.state.count}</p>
                <button onClick={this.addCount}>加</button>
            </div>
        )
    }
}


