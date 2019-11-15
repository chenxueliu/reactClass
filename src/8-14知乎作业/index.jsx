import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Home from './component'
import store from './store'
export default class Html extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />

            </Provider>
        )
    }
}
