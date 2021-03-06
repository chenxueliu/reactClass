import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Home from './component/home'
export default () => {
    return <Provider store={store}>
        <Home />
    </Provider>
}