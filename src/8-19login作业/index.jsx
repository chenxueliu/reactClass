import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Login from './component/login'
import store from './store'
export default class Html extends Component {
    render() {
        return (
            <Provider store={store}>
                <Login />
            </Provider>
        )
    }
}
