import React from 'react'
import { NavLink, withRouter, Prompt } from 'react-router-dom'
import { connect } from 'react-redux'
const Header = props => {
  const redirect = () => {
    const pathname = props.location.pathname
    const go = props.history.replace
  }
  console.log(props)

  return (
    <ul className="nav-link flex">
      <Prompt
        message={location => {
          const pathname = location.pathname
          const go = props.history.replace
          const { status } = props.userReducer
          console.log(status)
          //   逻辑：如果你没有登录，userreducer里的status为false的时候。需要在此拦截，判断status和pathname吗，如果status为false，并且pathname不为登录，注册，退出，我们用这个go('/login')
          if (status === false) {
            if (
              pathname !== '/login' &&
              pathname !== '/register' &&
              pathname !== '/outlogin'
            ) {
              go('/login')
              return false
            } else {
              return true
            }
          }
        }}
      />
      <li>
        <NavLink to="/home" activeClassName="active-link">
          首页
        </NavLink>
      </li>
      <li>
        <NavLink to="/news" activeClassName="active-link">
          新闻
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="active-link">
          登录
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" activeClassName="active-link">
          注册
        </NavLink>
      </li>
      <li>
        <NavLink to="/outlogin" activeClassName="active-link">
          退出
        </NavLink>
      </li>
    </ul>
  )
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(withRouter(Header))
