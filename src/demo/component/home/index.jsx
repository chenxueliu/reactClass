import React from 'react'
import { NavLink, Route } from 'react-router-dom'

export default props => {
  return (
    <div>
      我是首页，谁都可以看
      <ul>
        <li>
          <NavLink to="/home/homeson">首页二级目录</NavLink>
        </li>
      </ul>
      <main>
        <Route path="/home/homeson" component={() => <p>首页二级目录内容</p>} />
      </main>
    </div>
  )
}
