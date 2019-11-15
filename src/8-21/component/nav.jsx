import React from 'react'
import { NavLink, withRouter, Prompt } from 'react-router-dom'
import { connect } from 'react-redux'
import routers from '../router'
const Nav = props => {
  return (
    <nav>
      <Prompt
        message={location => {
          console.log(location)
          // 利用该组件可以做路由拦截
          if (location.pathname === '/news') {
            return false
          }
          return true
        }}
      />
      <ul className="flex">
        {routers.map(item => {
          return (
            <li style={{ margin: '0px 10px' }} key={item.path}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
// withRouter 路由里面的高级函数。使用他包裹非路由组件，可以使该组件的到路由信息
// null 是占位符，如果该组件不需要传入一些参数，那么可以使用null来占位

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  // 这个组件可以做路由拦截
  const user = false
  // 这里写的好处，防止用户手动在地址栏输入跳转，如果该组件只一个路由组件的话，我们可以直接使用路由对象里面的方法去跳转了
  if (window.location.pathname === '/news' && !user) {
    // 这里让他去跳转
    window.location.href = '/home'
  }
  return {}
}
export default connect(
  null,
  mapDispatchToProps
)(withRouter(Nav))
