import React, { Component } from 'react'
import Child1 from './child'
import Child2 from './child2'
import DomPand from './domPand'
import store from './store'
export default class Html extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    onSubmit = () => {
        // action动作 告诉仓库要干什么
        const action = {
            type: 'changeValue',
            value: this.state.value
        }
        // 派发我们的动作到仓库里
        store.dispatch(action)
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <Child1 />
                <Child2 />
                <input type="text" value={value} name='value'
                    onChange={({ target }) => {
                        this.setState({
                            [target.name]: target.value
                        })
                        store.dispatch({
                            type: 'changeHtml',
                            value: target.value
                        })
                    }}

                />
                <button onClick={this.onSubmit}>提交</button>
                <DomPand />
            </div>
        )
    }
}
