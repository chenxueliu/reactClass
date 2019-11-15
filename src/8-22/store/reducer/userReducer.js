import { LOGIN, REGISTER } from '../actionType/userActionType'
import { OUT_LOGIN } from '../actionType/outLoginActionType'

// 当用户登录和注册成功之后，将用户信息和状态值存在这里。共享给其他页面
const defaultState = {
  username: '',
  password: '',
  status: false
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    // 退出登录
    case OUT_LOGIN:
      sessionStorage.setItem('newState', JSON.stringify(defaultState))
      return defaultState
    // 登陆
    case LOGIN:
      newState.status = true
      // 数据本地持久化
      sessionStorage.setItem('newState', JSON.stringify(newState))
      return newState
    // 注册
    case REGISTER:
      newState.username = action.data.username
      newState.password = action.data.password
      // 数据本地持久化
      sessionStorage.setItem('newState', JSON.stringify(newState))
      return newState
    default:
      return JSON.parse(sessionStorage.getItem('newState')) || state
  }
}
