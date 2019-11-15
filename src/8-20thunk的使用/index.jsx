import React, { Component } from 'react'
import store from './store'
import Home from './component/home'
import { Provider } from 'react-redux'
export default class Html extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }
}
