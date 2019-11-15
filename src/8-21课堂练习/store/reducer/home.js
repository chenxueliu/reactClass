import { CHANGE_INPUT } from '../acrionType'
const defaultState = {
  input: '',
  list: [{ id: 1, label: '默认值' }]
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case CHANGE_INPUT:
      newState.input = action.value
    default:
      return newState
  }
}
