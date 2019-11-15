// actionCreators集中管理，便于维护和解耦
import actionType from './actionType'
const addAction = {
    type: actionType.ADD_COUNT
}
// 如果有值的话，需要函数的形式去接受我们的参数
const addItemAction = (value) => ({
    type: actionType.ADD_ITEM,
    value
})
export {
    // 累加器的动作
    addAction,
    // 添加一条数据到list
    addItemAction
}