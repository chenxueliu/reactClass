import { LOGIN, REGISTER } from '../actionType/loginType'
import axios from 'axios'
// 登录
const LoginAction = data => {
  return {
    type: LOGIN,
    data
  }
}
// 注册
const RegisterAction = data => {
  return {
    type: REGISTER,
    data
  }
}
// 提交
export const onSubmitACtion = data => {
  const { eventType, username, password } = data
  let url =
    eventType === 'Login'
      ? 'http://localhost:3003/Login'
      : 'http://localhost:3003/Register'
  return (dispatch, getState) => {
    axios
      .post(url, data)
      .then(res => {
        if (eventType === 'Register') {
          alert('注册成功')
          dispatch(RegisterAction(data))
        } else {
          // 登录时候
          console.log(getState())
          if (username !== getState().username) {
            alert('该用户没有注册')
          } else if (password !== getState().password) {
            alert('您的密码有误，请检查')
          } else {
            alert('登录成功')
            dispatch(LoginAction())
          }
        }
      })
      .catch(err => {
        console.log('err')
      })
  }
}
