import { createStore, combineReducers } from 'redux'
import homeReducer from './homeReducer'
import newsReducer from './newsReducer'
// 1.创建一个reducers
// combineReducers 就是合并多个reducers的
const reducers = combineReducers({
    homeReducer,
    newsReducer
})
// 2.创建一个store ,传入合并后的reducers
const store = createStore(reducers)
export default store