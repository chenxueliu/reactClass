import { CHANGE_INPUT, ADD_ITEM } from '../actionType/homeActiontype'
// 当用户登录和注册成功之后，将用户信息和状态值存在这里。共享给其他页面
const defaultState = {
  input: '',
  list: [{ id: 1, label: '梳理知识点' }]
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    // 添加一条数据
    case ADD_ITEM:
      const item = {
        id: newState.list[newState.list.length - 1].id + 1,
        label: newState.input
      }
      console.log(newState.list[newState.list.length - 1])
      newState.list.push(item)
      newState.input = ''
      return newState
    // 改变input
    case CHANGE_INPUT:
      newState.input = action.value
      return newState
    default:
      return newState
  }
}
