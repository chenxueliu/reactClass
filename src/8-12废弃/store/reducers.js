import actionType from './actionType'
// 默认值
const defultState = {
    count: 0,
    list: [1, 2, 3]
}
// 2.state 是状态数据默认会给一个默认值，action是组件
export default (state = defultState, action) => {
    // 深拷贝 state可以使用lodash的deepclone(),一般使用json的就可以
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case actionType.ADD_COUNT:
            //返回值一定要和默认值做合并，不然程序会有bug
            newState.count = state.count + 1
            return newState
        case actionType.ADD_ITEM:
            newState.list.push(action.value)
            return newState
        default:
            return state;
    }
}