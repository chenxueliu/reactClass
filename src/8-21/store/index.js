import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import homereducer from './home'
import newsreducer from './news'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers({ homereducer, newsreducer }),
  applyMiddleware(thunk)
)
