import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
// compose(applyMiddleware(reducer))===
// 就只用一个中间件，那么compose就没用了
const _thunk = applyMiddleware(thunk)
export default createStore(reducer, _thunk)