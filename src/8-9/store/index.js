// 1.
import { createStore } from 'redux'
// 2.引入reducer
import reducers from './reducer'
export default createStore(reducers)