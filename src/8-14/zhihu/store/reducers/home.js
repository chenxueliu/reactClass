import { CHANGE_INPUT } from '../actionTypes/home'

const defaultState = {
    inputValue: '',
    searchList: [],
    historyList: []
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        case 'pushSearchList':
            newState.searchList = action.list;
            return newState
        case 'pushHistoryList':
            const item = newState.searchList.find((item, index) => {
                if (index === action.index) {
                    return item
                }
            })
            newState.historyList.push(item)
            return newState
        default:
            return state;
    }
}