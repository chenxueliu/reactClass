import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import routes from './router/index'
import Nav from './component/nav'
export default class Html extends Component {
  render() {
    // redux配合router 嵌套关系，一定是redux包裹router
    console.log(routes)
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Nav />

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
