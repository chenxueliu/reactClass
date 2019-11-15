import { LOGIN } from './actionType'
import axios from 'axios'
const LoginAction = data => {
  return {
    type: LOGIN,
    data
  }
}
