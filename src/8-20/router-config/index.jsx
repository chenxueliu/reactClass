import React, { Component } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router";
// react-router-config：只给生成路线-->Route

export default class Html extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/news">新闻</NavLink>
        {renderRoutes(routes)}
      </BrowserRouter>
    );
  }
}
