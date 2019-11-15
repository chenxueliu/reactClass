import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "./index.scss";
import { router } from "./router";

export default class Html extends Component {
    render() {
        // 递归组件，多级渲染，特别适合不确定有多少的时候
        const renderChild = child => {
            if (!Array.isArray(child)) return "";
            return (
                <ul className="n-l-two flex">
                    {child.map(item => {
                        return (
                            <li className="nav-item" key={item.label}>
                                <NavLink to={item.path}>{item.label}</NavLink>
                                {item.child && renderChild(item.child)}
                            </li>
                        );
                    })}
                </ul>
            );
        };
        return (
            <BrowserRouter>
                <nav className="nav-link">
                    <ul className="n-l-one flex">
                        {/* 一级导航 */}
                        {router.map(item => {
                            return (
                                <li className="nav-item" key={item.label}>
                                    <NavLink to={item.path}>{item.label}</NavLink>
                                    {/* 二级导航 */}
                                    {renderChild(item.child)}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </BrowserRouter>
        );
    }
}

{
    /* <li className="nav-item">
    <NavLink to="/home">首页</NavLink>
    <ul className="n-l-two flex">
      <li className="nav-item">
        <NavLink to="/home/left">首页-左侧</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/home/right">首页-右侧</NavLink>
      </li>
    </ul>
  </li>; */
}
