// 默认值
const defaultState = {
    value: '来自store的一句话',
    html: ''
}
// 2.创建一个纯函数 它就reducers
const reducer = (state = defaultState, action) => {
    // action 动作对象 就是组件里使用dispatch方法传进过来的
    switch (action.type) {
        case 'changeValue':
            // 2.2 尽管可以修改state 但是这样会有副作用，而且官方不提直接倡修改因为state在官方定义里是只读的 所以返回一个新值 是开发规范，createStore方法底层给我们将新旧值做处理
            return { value: action.value }
        case 'changeHtml':
            // 我们的state是只读的，所以深拷贝一份进行修改
            const newState = JSON.parse(JSON.stringify(state))
            newState.html = action.value + 1
            return newState
    }
    console.log(action.value)
    // 2.2返回一个默认值
    return state
}
// 3.暴露出去
export default reducer;