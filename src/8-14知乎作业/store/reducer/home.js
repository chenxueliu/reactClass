import { CHANGE_INPUT, His_JL, DELE_HIS } from '../actionType/home'
const defaultState = {
    inputValue: '',
    search_list: [],
    history_list: []
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        // 接口渲染
        case 'pushSearchList':
            newState.search_list = action.list
            console.log(action.list)
            newState.inputValue = ''
            return newState
        // 添加到历史记录
        case His_JL:
            const data = newState.search_list.find((item, index) => {
                if (index === action.index) {
                    return item
                }
            })
            newState.history_list.push(data)
            return newState
        // 删除历史记录
        case DELE_HIS:
            newState.history_list.splice(action.index, 1)
            return newState
        default:
            return state
    }
}