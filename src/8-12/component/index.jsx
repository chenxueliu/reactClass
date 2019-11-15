import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Home from "./home";
import Zhanshi from "./zhanshi";

export default class Html extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavLink to="/liuyan">留言板</NavLink>
        <NavLink to="/zhanshi">展示</NavLink>
        <Route path="/liuyan" component={Home} />
        <Route path="/zhanshi" component={Zhanshi} />
      </BrowserRouter>
    );
  }
}
