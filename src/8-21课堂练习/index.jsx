import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import store from './store'
import routes from './router'
export default class Html extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <nav>
            {routes.map(item => {
              return (
                <li key={item.label} style={{ margin: '0px 10px' }}>
                  <NavLink to={item.path}>{item.label}</NavLink>
                </li>
              )
            })}
          </nav>
          <main>
            {routes.map(item => {
              return (
                <Route
                  key={item.label}
                  path={item.path}
                  component={item.component}
                />
              )
            })}
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
}
