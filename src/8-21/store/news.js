import { CHANGE_INPUT, TOKEN, ADD_ITEM } from '../store/actionType/home'
const defaultState = {
  input: '',
  list: []
}
export default (state = defaultState, action) => {
  if (action.token !== TOKEN) return state
  console.log('news的reducer')
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    // 添加一条
    case ADD_ITEM:
      newState.list.push(action.value)
      return newState
    case CHANGE_INPUT:
      newState.input = action.value
      return newState
    default:
      return newState
  }
}
