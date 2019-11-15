const defaultState = {
  input: '',
  list: [{ id: 1, label: '默认值' }]
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    default:
      return newState
  }
}
