import actionType from './actionType'
const defaultState = {
    inputValue:'',
    list: []
}
export default (state = defaultState, action) => {
    //   克隆一份
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
    case actionType.CHANGE_INPUT:
        newState.inputValue = action.value;
        return newState;
    case actionType.ADD_ITEM:
        if (newState.inputValue) {
            newState.list.push(newState.inputValue);
        }
        // 添加完以后将input的value值清空掉
        newState.inputValue = "";
        return newState;
    case actionType.DELE_ITEM:
        newState.list.splice(action.index, 1)
        return newState
    default:
    return state
    }

}