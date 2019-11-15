import { LOGIN, REGISTER } from '../actionType/userActionType'
import axios from 'axios'
const loginAction = data => {
  return {
    type: LOGIN,
    data
  }
}
const registerAction = data => {
  return {
    type: REGISTER,
    data
  }
}
export const onSubmitACtion = data => {
  const { eventType, username, password } = data
  console.log(data)
  return (dispatch, getState) => {
    //   假设接口地址
    let url =
      eventType === 'register'
        ? 'http://localhost:3003/register'
        : 'http://localhost:3003/login'
    axios
      .post(url, data)
      .then(res => {
        //   逻辑 :如果注册成功，将用户信息存到reducer里
        if (eventType === 'register') {
          //    这里的data在真实项目中应该是接口返回的
          dispatch(registerAction(data))
          alert('注册成功')
        } else {
          // 逻辑：如果是登陆，那么需要从reducer里取出用户信息做对比，有就登陆成功，没有就报错
          console.log(username, password)
          const reducer = getState().userReducer
          console.log(reducer)
          if (username !== reducer.username) {
            alert('该用户没有注册')
          } else if (password !== reducer.password) {
            alert('您的密码有误，请检查！')
          } else {
            dispatch(loginAction())
          }
        }
      })
      .catch(err => {
        console.log('err')
      })
  }
}
// http://192.168.42.73:3003
