import React, { Component } from 'react'
import store from './store'
export default class DomPand extends Component {
    constructor() {
        super()
        this.state = store.getState()
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }
    render() {
        console.log(this.state)
        return (
            <div dangerouslySetInnerHTML={{
                __html: this.state.html
            }}>·
            </div>
        )
    }
}
