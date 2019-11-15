import React from 'react'
import './index.scss'
import { onSubmitACtion } from '../../store/actionCreator/userAction'
import { connect } from 'react-redux'
class LogiReg extends React.Component {
  constructor(props) {
    super(props)
    // 该组件有自己的状态，只有当接口成功之后再把相应的值存到redux中
    this.state = {
      username: '',
      password: '',
      rePassword: ''
    }
    //   从props里结构
    // 用于判断该组件是哪个
  }
  flag = () => {
    const { match } = this.props
    const flag = match.path === '/login' ? false : true
    return flag
  }
  //   改变input的值
  changeInput = ({ target }) => {
    // console.log(target.name, target.value)
    this.setState({
      [target.name]: target.value
    })
  }
  isLogin() {
    const { history } = this.props
    const { status } = this.props.userReducer
    // 当登陆成功后，让页面跳到首页
    if (status) {
      history.replace('/home')
    }
  }
  componentDidMount() {
    this.isLogin()
  }
  componentDidUpdate() {
    this.isLogin()
  }
  onSubmit = () => {
    const { username, password, rePassword } = this.state
    // console.log(this.state)
    // 判断的时候，我们需要根据路由信息，来确定是哪个组件类型【登录/注册】
    // this.flag：true表示注册页面，否则就是登录
    // es6里冻结对象的方法，使用它，代码不可以修改，特别适合常量
    const LENGTH = Object.freeze({
      USER_LENGTH: 2,
      PASSWORD: 4
    })
    // 从props解构出我们的派发事件
    const { onSubmit } = this.props
    if (this.flag()) {
      if (
        username &&
        username.length >= LENGTH.USER_LENGTH &&
        password &&
        password.length >= LENGTH.PASSWORD &&
        rePassword === password
      ) {
        onSubmit({
          eventType: 'register',
          username,
          password,
          rePassword
        })
      } else if (!username || username.length < LENGTH.USER_LENGTH) {
        alert('用户名不许为空，且长度不小于' + LENGTH.USER_LENGTH + '位')
      } else if (!password || password.length < LENGTH.PASSWORD) {
        alert('密码不许为空，且长度不小于' + LENGTH.PASSWORD + '位')
      } else if (!rePassword || rePassword !== password) {
        alert('两次密码不一致')
      }
    } else {
      if (
        username &&
        username.length >= LENGTH.USER_LENGTH &&
        password &&
        password.length >= LENGTH.PASSWORD
      ) {
        onSubmit({
          eventType: 'login',
          username,
          password
        })
      } else if (!username || username.length < LENGTH.USER_LENGTH) {
        alert('用户名不许为空，且长度不小于' + LENGTH.USER_LENGTH + '位')
      } else if (!password || password.length < LENGTH.PASSWORD) {
        alert('密码不许为空，且长度不小于' + LENGTH.PASSWORD + '位')
      }
    }
  }
  render() {
    console.log(this.props)
    //   先写注册
    const flag = this.flag()
    // 从state里结构
    const { username, password, rePassword } = this.state
    return (
      <form action="" className="form-box">
        <label>
          <input
            type="text"
            placeholder="用户名"
            value={username}
            name="username"
            onChange={this.changeInput}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="密码"
            value={password}
            name="password"
            onChange={this.changeInput}
          />
        </label>
        {flag && (
          <label>
            <input
              type="password"
              placeholder="确认密码"
              value={rePassword}
              name="rePassword"
              onChange={this.changeInput}
            />
          </label>
        )}

        <label>
          <button type="button" onClick={this.onSubmit}>
            {flag ? '注册' : '登录'}
          </button>
        </label>
      </form>
    )
  }
}
// const mapStateToProps = state => state.userReducer
const mapDispatchToProps = dispatch => {
  return {
    onSubmit(data) {
      //   console.log(data)
      dispatch(onSubmitACtion(data))
    }
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogiReg)
