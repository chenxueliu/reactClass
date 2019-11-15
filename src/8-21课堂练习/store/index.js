import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import homereducer from './reducer/home'
import newsreducer from './reducer/news'
import thunk from 'redux-thunk'
export default createStore(
  combineReducers({ newsreducer, homereducer }),
  applyMiddleware(thunk)
)
