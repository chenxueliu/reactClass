import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './recucer'
import thunk from 'redux-thunk'
// compose(applyMiddleware(reducer))===
// 就只用一个中间件，那么compose就没用了
// createStore最多三个参数s reducer 第二个或许是合并后的reucer
export default createStore(reducer, compose(applyMiddleware(thunk)))
