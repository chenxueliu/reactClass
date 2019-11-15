import { createStore, combineReducers } from 'redux'
import homeReducer from './homeReducer'
import productionReducer from './productionReducer'
// 创建reducers 合并reducers
const reducers = combineReducers({
    homeReducer,
    productionReducer
})
// 将合并进来的reducers放到仓库里导出
const store = createStore(reducers)
export default store