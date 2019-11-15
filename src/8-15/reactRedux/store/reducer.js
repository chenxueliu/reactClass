import { CHANGE_INPUT } from './actionType'
const defaultState = {
    inputValue: ''
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState;
        default:
            return state

    }

}