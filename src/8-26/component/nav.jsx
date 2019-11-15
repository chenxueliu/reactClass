import React from 'react'
import { NavLink, withRouter, Prompt } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = props => {
  console.log(props)
  return (
    <nav className="nav-box">
      <ul className="flex">
        <Prompt
          message={location => {
            const pathname = location.pathname
            if (props.status === false) {
              if (
                pathname !== '/home' &&
                pathname !== '/login' &&
                pathname !== '/home/homeson'
              ) {
                alert('该用户还没登陆')
                return false
              } else {
                return true
              }
            }
          }}
        />
        <li>
          <NavLink to="/home" activeClassName="activeStyle">
            首页
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" activeClassName="activeStyle">
            用户
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="activeStyle">
            登陆
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(withRouter(Nav))
