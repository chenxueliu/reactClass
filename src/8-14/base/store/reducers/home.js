const defaultState = {
    inputValue: '默认值',
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'changeInput':
            newState.inputValue = action.value
            return newState
        default:
            return state;
    }
}