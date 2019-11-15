import React, { Component } from "react";
import Nav from "./component/nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/home";
import User from "./component/user";
import Login from "./component/login";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./store";

export default class Html extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </Provider>
    );
  }
}

// 1.登陆页，基础样式，样式不限，可手写，或框架
// 2.内容页有首页和用户页，路由匹配成功后红色高亮，样式不限，可手写，或框架

// 3.逻辑要求：登陆后需存用户名到redux，进入用户页显示用户名【xxx表示用户名】
// 逻辑要求：如果没有登陆，用户只能看首页，并且默认显示首页二级目录导航（嵌套路由）；没有登陆点击用户导航提示错误，并跳到登陆页。
