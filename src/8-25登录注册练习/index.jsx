import React, { Component } from 'react'
import {
  BrowserRouter,
  NavLink,
  Route,
  Redirect,
  Switch,
  Prompt
} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import Home from './component/home'
import Login from './component/login'
import './index.scss'
import Nav from './component/header'
export default class Html extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <Provider store={store}>
        <BrowserRouter>
          <nav className="flex nav-link">
            <Nav />
          </nav>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path={['/login', '/register']} component={Login} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
