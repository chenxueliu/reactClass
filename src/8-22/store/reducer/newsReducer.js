// 当用户登录和注册成功之后，将用户信息和状态值存在这里。共享给其他页面
const defaultState = {
  username: '',
  status: false
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    default:
      return newState
  }
}
