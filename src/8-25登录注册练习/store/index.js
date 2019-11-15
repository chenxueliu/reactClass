import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loginreducer from '../store/reducer/loginreducer'
export default createStore(loginreducer, applyMiddleware(thunk))
