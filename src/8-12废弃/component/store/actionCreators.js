import actionType from './actionType'
const changeinputAction = (value) => {
    return {
        type: actionType.CHANGE_INPUT,
        value
    }
}
const addItemAction = () => {
    return {
        type: actionType.ADD_ITEM
    }
}
const removeItemAction = (index) => {
    return {
        type: actionType.DEL_ITEM,
        index
    }
}
export {
    // 改变输入框的值
    changeinputAction,
    // 添加一条数据
    addItemAction,
    // 删除一条数据
    removeItemAction
}