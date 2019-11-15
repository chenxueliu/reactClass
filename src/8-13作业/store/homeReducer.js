import actionType from './actionType'
const defaultState = {
    inputValue: '',
    list: []
}
export default (state = defaultState, action) => {
    console.log(state)
    // 深拷贝一份
    const newState = JSON.parse(JSON.stringify(state))
    console.log(action)
    switch (action.type) {
        case actionType.CHAGE_INPUT:
            newState.inputValue = action.value
            return newState
        // 添加数据
        case actionType.ADD_ITEM:
            if (newState.inputValue) {
                newState.list.push(newState.inputValue)
                newState.inputValue = "";
            }
            return newState
        // 删除数据
        case actionType.DELE:
            newState.list.splice(action.index, 1)
            return newState
        default:
            return state
    }
}