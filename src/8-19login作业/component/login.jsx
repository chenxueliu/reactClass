import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { valueChange, BlurInput, submitAction } from '../store/actionCreator'
class Login extends Component {
    render() {
        // console.log(this.props)
        const { ChangeInput, intputState, OnBlurInput, onsubmit } = this.props
        const { user, password, repassword, email, phone } = intputState
        return (
            <div className='box'>
                <label>
                    <span>用户名</span>
                    <input type="text"
                        onChange={ChangeInput}
                        value={user.value}
                        name='user'
                        onBlur={OnBlurInput} />
                    {user.yanCode && <div className='red'>*用户名错误</div>}
                </label>
                <label>
                    <span>密码</span>
                    <input type="password"
                        value={password.value}
                        name='password'
                        onChange={ChangeInput}
                        onBlur={OnBlurInput} />
                    {password.yanCode && <div className='red'>*密码错误</div>}
                </label>
                <label>
                    <span>确认密码</span>
                    <input type="password"
                        value={repassword.value}
                        name='repassword'
                        onChange={ChangeInput}
                        onBlur={(e) => OnBlurInput(e, password.value)}
                    />
                    {repassword.yanCode && <div className='red'>*请确认密码</div>}
                </label>
                <label>
                    <span>邮件</span>
                    <input type="email"
                        value={email.value}
                        name='email'
                        onChange={ChangeInput}
                        onBlur={OnBlurInput} />
                    {email.yanCode && <div className='red'>*邮箱错误</div>}
                </label>
                <label>
                    <span>手机</span>
                    <input type="number"
                        value={phone.value}
                        name='phone'
                        onChange={ChangeInput}
                        onBlur={OnBlurInput} />
                    {phone.yanCode && <div className='red'>*手机号错误</div>}
                </label>
                <label>
                    <button onClick={onsubmit} >提交</button>
                    <button>重置</button>
                </label>
            </div>
        )
    }
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        ChangeInput(e) {
            dispatch(valueChange(e))
        },
        // 失去焦点
        OnBlurInput(e, pass) {
            console.log('sss')
            dispatch(BlurInput(e, pass))
        },
        // 提交
        onsubmit() {
            dispatch(submitAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)