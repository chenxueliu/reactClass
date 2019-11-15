import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducer/userReducer'
import homeReducer from './reducer/homeReducer'
import newsReducer from './reducer/newsReducer'
export default createStore(
  combineReducers({ userReducer, homeReducer, newsReducer }),
  applyMiddleware(thunk)
)
