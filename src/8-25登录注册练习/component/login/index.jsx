import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { onSubmitACtion } from '../../store/actionCreator/loginAction'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      repassword: ''
    }
  }
  // 改变input
  changeInput = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }
  isShow = () => {
    const { match } = this.props
    const isShow = match.path === '/login' ? false : true
    return isShow
  }
  isLogin() {
    const { history, status } = this.props
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
    const { username, password, repassword } = this.state
    const { onSubmit } = this.props
    if (this.isShow()) {
      if (
        username &&
        username.length > 3 &&
        password &&
        password.length >= 6 &&
        repassword === password
      ) {
        onSubmit({
          eventType: 'Register',
          username,
          password,
          repassword
        })
      } else if (!username || username.length < 3) {
        alert('请输入正确的用户名，且用户名的长度不小于3位')
      } else if (!password || password.length < 6) {
        alert('密码不许为空，且长度不小于6位')
      } else if (password !== repassword) {
        alert('两次密码不一致')
      }
    } else {
      if (
        username !== '' &&
        username.length >= 3 &&
        password &&
        password.length >= 6
      ) {
        onSubmit({
          eventType: 'Login',
          username,
          password
        })
      } else if (!username && username < 3) {
        alert('请输入正确的用户名，且用户名的长度不小于3位')
      } else if (!password && password < 6) {
        alert('密码不许为空，且长度不小于6位')
      }
    }
  }
  render() {
    const { username, password, repassword } = this.state
    const isShow = this.isShow()
    return (
      <div className="labelbox">
        <label htmlFor="">
          <input
            type="text"
            placeholder="请输入用户名"
            value={username}
            name="username"
            onChange={this.changeInput}
          />
        </label>
        <label htmlFor="">
          <input
            type="password"
            placeholder="请输入密码"
            value={password}
            name="password"
            onChange={this.changeInput}
          />
        </label>
        {isShow && (
          <label htmlFor="">
            <input
              type="password"
              placeholder="请确认密码"
              value={repassword}
              name="repassword"
              onChange={this.changeInput}
            />
          </label>
        )}
        <label htmlFor="">
          <button type="button" onClick={this.onSubmit}>
            {isShow ? '注册' : '登录'}
          </button>
        </label>
      </div>
    )
  }
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    onSubmit(data) {
      dispatch(onSubmitACtion(data))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
