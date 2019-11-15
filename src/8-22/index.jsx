import React from 'react'
import Register from './component/register'
import Home from './component/home'
import News from './component/news'
import Nav from './component/header'
import './index.scss'
import store from './store'
import { Provider } from 'react-redux'
import OutLogin from './component/register/outLogin'
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
// 1注册-登录
// 2.首页
// 3.新闻页
// 逻辑:先注册，登录，登录时匹配注册信息是否一致
// 2.登录成功 后自动跳转到首页，如果用户非正常途径回到登录页，需要重定向到首页
// 3.如果用户没有登录，通过非章程途径去往其他页面，需要重定向到登录页
export default props => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path={['/login', '/register']} component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/outlogin" component={OutLogin} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
