import actionType from './actionType'
const defaultState = {
    inputValue: "",
    list: []
}
export default (state = defaultState, action) => {
    // 1.拷贝一份我们的state
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case actionType.CHANGE_INPUT:
            newState.inputValue = action.inputValue;
            return newState;
        case actionType.ADD_ITEM:
            // 如果inputvalue是空的，就不要给他添加
            if (newState.inputValue) {
                newState.list.push(newState.inputValue)
            }
            // 添加完以后将inputvalue清空
            newState.inputValue = ''
            return newState;
        case actionType.DEL_ITEM:
            newState.list.splice(action.index);
            return newState
        default:
            return state
    }
}