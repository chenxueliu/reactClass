import { LOGIN, REGISTER } from '../actionType/loginType'
const defaultState = {
  username: '',
  password: '',
  status: false
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    // 登录
    case LOGIN:
      newState.status = true
      sessionStorage.setItem('newState', JSON.stringify(newState))
      return newState
    // 注册
    case REGISTER:
      newState.username = action.data.username
      newState.password = action.data.password
      // 本地持久化
      sessionStorage.setItem('newState', JSON.stringify(newState))
      return newState
    default:
      return JSON.parse(sessionStorage.getItem('newState')) || state
  }
}
