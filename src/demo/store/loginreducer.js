import { LOGIN } from './userActionType'
// 定义默认值
const defaultState = {
  username: '',
  password: '',
  status: false
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case LOGIN:
      newState.username = action.data.username
      newState.password = action.data.password
      newState.status = true
      return newState
    default:
      return newState
  }
}
