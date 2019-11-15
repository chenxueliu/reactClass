import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import './index.scss'
import { router } from './router'
export default class Html extends Component {
  constructor() {
    super()
    this.state = {
      isShow: false
    }
  }
  render() {
    const childComponent = child => {
      if (!Array.isArray(child)) return ''
      return (
        <ul className="nav-two ">
          {child.map(item => {
            return (
              <li key={item.title} className="nav-item">
                <NavLink to={item.path} activeClassName="active">
                  {item.title}
                </NavLink>
                {item.child && childComponent(item.child)}
              </li>
            )
          })}
        </ul>
      )
    }
    return (
      <BrowserRouter>
        <div className="container">
          <main>
            <ul className="ulbox">
              {/* 一级导航 */}
              {router.map(item => {
                return (
                  <li key={item.path} className="nav-item">
                    <span className="add">+</span>
                    <NavLink to={item.path} activeClassName="active">
                      {item.title}
                    </NavLink>
                    {childComponent(item.child)}
                  </li>
                )
              })}
            </ul>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}
