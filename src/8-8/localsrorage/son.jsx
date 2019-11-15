import React, { Component } from 'react'

export default class Son extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        const _this = this;
        window.addEventListener('setItem', (event) => {
            console.log(event.key, event.newValue)
            // object和json格式上的区别在于object 键可以不加引号，但json一定要键值都加引号
            _this.setState(JSON.parse(event.newValue))
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.job}</p>

            </div>
        )
    }
}
