import { LOGIN } from './userActionType'

export const loginAction = data => {
  return {
    type: LOGIN,
    data
  }
}
