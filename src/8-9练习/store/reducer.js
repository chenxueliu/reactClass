// 定义页面默认值
const defaultstate = {
    value: 100 + '$'
}
// 创建一个纯函数就是reducer
const reducers = (state = defaultstate, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case 'changeValue':
            return { value: action.value }
        case 'reduceValue':
            return { value: action.value }
    }
    return state
}
export default reducers;