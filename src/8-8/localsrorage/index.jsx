import React, { Component } from 'react'
import Son from './son'
export default class Html extends Component {
    componentDidMount() {
        // 预先存一份
        const Mylocal = localStorage.setItem;
        // 做代理事件
        localStorage.setItem = function (key, newValue) {
            console.log(key, newValue);
            // 要自定义事件
            const propty = new Event('setItem')
            propty.newValue = newValue
            // 派发自定义事件
            // 将自定义事件注册到全局对象window上
            window.dispatchEvent(propty)
            // 借原生的方法传值给他，以实现真实的数据
            Mylocal.apply(this, arguments)
            console.log(propty)
        }
        // 使用
        // localStorage.setItem('user', '陈个哈哈')
        // 使用自定义事件，在全局对象上做监听，所有的组件都可以得到被修改后的数据
        window.addEventListener('setItem', (event) => {
            console.log(event.key, event.newValue)
        })
    }
    onSetItem = () => {
        // const data = {
        //     name: '陈个哈哈',
        //     job: 'richer'
        // }
        localStorage.setItem('user', '{"name":"陈个哈哈","job":"richer"}')
    }
    render() {
        return (
            <div>
                <mark>使用localstorage来管理全局状态</mark>
                <button onClick={this.onSetItem}>添加值</button>
                <Son />
            </div>
        )
    }
}
