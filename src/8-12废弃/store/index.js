import { createStore } from 'redux'
import reducers from './reducers'
// 将reducers传给createStore 创建一个store实例，并暴露出去
export default createStore(reducers)