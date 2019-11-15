import { CHANGE_INPUT, TOKEN, ADD_ITEM } from '../actionType/home'
// token 是全局令牌，以下每个action都会带上，他最终会被dispatch带到reducer里，reducer通过它去做拦截判断
const token = TOKEN
export const changeInputACtion = value => {
  return {
    type: CHANGE_INPUT,
    value,
    token
  }
}
// 添加一条
export const addItemAction = () => {
  // 如果action返回的是一个对象，就像上面那个一样，他就是一个同步的，如果返回的是一个函数，那么就是是用来redux-thunk插件
  return (dispatch, getState) => {
    // 中间件的使用，可以将逻辑写在这里，避免了组件中写大量逻辑以及避免破坏reducer
    console.log(getState())
    const home = getState().homereducer
    console.log(home)
    const value = home.input
    const list = home.list
    const item = { id: list[list.length - 1].id + 1, label: value }
    dispatch({
      type: ADD_ITEM,
      item,
      token
    })
  }
}
