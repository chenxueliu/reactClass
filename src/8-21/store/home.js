import { CHANGE_INPUT, TOKEN, ADD_ITEM } from '../store/actionType/home'
const defaultState = {
  input: '',
  list: [{ id: 1, label: '默认值' }]
}
export default (state = defaultState, action) => {
  if (action.token !== 'home') return state //楔子 自定义的优化，用令牌的方法
  console.log('首页的reducer')
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    // 添加一条数据
    case ADD_ITEM:
      newState.list.push(action.item)
      return newState
    case TOKEN:
    // 改变input值
    case CHANGE_INPUT:
      newState.input = action.value
      return newState
    default:
      return newState
  }
}
