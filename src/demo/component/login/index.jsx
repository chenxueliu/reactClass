import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { onSubmitACtion } from '../../store/actionCreator'
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
    const isShow = match.path === '/login' ? true : false
    return isShow
  }
  // 登录按钮
  onSubmit = () => {
    const { username, password } = this.state
    const { onSubmit } = this.props
    if (username && username.length > 3 && password && password >= 6) {
      onSubmit({
        username,
        password
      })
    } else if (!username || username.length < 3) {
      alert('请输入正确的用户名，且用户名的长度不小于3位')
    } else if (!password || password.length < 6) {
      alert('密码不许为空，且长度不小于6位')
    }
  }
  render() {
    const { username, password } = this.state
    const isShow = this.isShow()
    console.log(isShow)
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
        <label htmlFor="">
          <button type="button" onClick={this.onSubmit}>
            登录
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
      dispatch(LoginAction(data))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
