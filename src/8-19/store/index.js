import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
// 当使用多个中间件的时候：
// compose(applyMiddleware(thunk),applyMiddleware(fn1))
// createStore最多接收三个参数，第一个参数永远都是reducer，第二个是加载中间件的
// compose :是一个将多个函数用嵌套的方式依次从右向左去执行，使用场景，:当我们需要使用多个中间件的时候，而中间件的包裹器，appliMiddleware 只有最后一个参数才能拥有真实的dispatch
// applyMiddleware：用来包装中间件的，它会给我们的中间件传入两个参数，一个是state，一个是dispatch，如果不用它去包装，那么中间件是获取不到这些参数的
// const composeEnhancers = window.__REDUX.DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX.DEVTOOLS_EXTENSION__({}) : compose;
// 如果仅仅使用一个中间件的时候，直接用applyMiddleware即可
export default createStore(reducer, applyMiddleware(thunk))
// // 多个的时候
// export default createStore(reducer, compose(applyMiddleware(thunk1), applyMiddleware(thunk2)))