import { CHANGE_INPUT, TOKEN, ADD_ITEM } from '../actionType/news'
import axios from 'axios'
const token = TOKEN
export const changeInputACtion = value => {
  return {
    type: CHANGE_INPUT,
    value,
    token
  }
}
//
const additem = value => {
  return {
    type: '123',
    value,
    token
  }
}
// 添加
export const addItemAction = () => {
  return (dispatch, getState) => {
    console.log(getState())
    const news = getState().newsreducer
    const value = news.input
    const list = news.list
    let item = { id: 1, label: value }
    if (list.length) {
      item.id = list[list.length - 1].id + 1
    }
    // let item =   {}
    // length为0 表示false
    // if (list.length) {
    //   item = { id: list[list.length - 1] + 1, label: value }
    // } else {
    //   item = { id: 1, label: value }
    // }
    // const value = getState().newsreducer.input
    // 模拟接口使用中间件
    axios.get('/', { input: value }).then(res => {
      dispatch(additem(item))
    })
  }
}
