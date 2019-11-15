import { CHANGE_TITLE } from "./actionType";
const defaultState = {
    title: '欢迎光临首页',
    list: [
        { id: 1, text: '开学了' }
    ]
}
// reducer一定是个纯函数，纯函数没有依赖于第三方的任何东西，包括js内置的一些全局变量比如newDate,定时器
export default (state = defaultState, action) => {
    // console.log('我是home的reducers')
    // 深拷贝一份state，state在redux中被定义为是只读的 不可以直接修改
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_TITLE:
            newState.title = action.value;
            return newState
        default:
            return state;
    }
}