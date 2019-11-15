import React, { Component } from 'react'
import Home from './component'
import { Provider } from 'react-redux'
import store from './store'
export default class Html extends Component {
    render() {
        return (
            <Provider store={store} >
                <Home />
            </Provider>
        )
    }
}
