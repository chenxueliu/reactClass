// 1.引入redux
import { createStore } from 'redux';
// 2.创建仓库 && 传入一个reducers
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 开启浏览器里的Redux插件 
// state是默认值，是只读的，不可以直接修改
// action 是我们的dispatch传过来的数据
const defaultState = { count: 0 }
const store = createStore((state = defaultState, action) => {
    switch (action.type) {
        case 'add':
            // state不能直接修改，所以使用该方法进行合并
            // state.count = action.value
            return { count: action.value }
        // { ...state, count: action.value }
        case 'reduce':
            return { count: state.count - 1 }
        default:
            return state;
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store)
export default store;