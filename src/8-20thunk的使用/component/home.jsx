import React from 'react'
import { connect } from 'react-redux'
import './index.scss'
import { changeInputAction, submitAction, reSetAction } from '../store/actionCreator'
const Home = (props) => {
    console.log(props)
    const { username, password, repassword, onChangeInput, onSubmit, loading, onReset } = props
    return (
        <form className='form-box'>
            <label htmlFor="">
                <input type="text" placeholder='请输入用户名'
                    value={username} name='username'
                    onChange={onChangeInput} />
            </label>
            <label htmlFor="">
                <input type="password" placeholder='请输入密码' value={password} name='password'
                    onChange={onChangeInput} />
            </label>
            <label htmlFor="">
                <input type="password" placeholder='请确认密码' value={repassword} name='repassword'
                    onChange={onChangeInput} />
            </label>
            <button onClick={onSubmit}>登录</button>
            <button onClick={onReset}>重置</button>
            {
                loading && <label htmlFor="">
                    <h2 className='loading'>正在请求中。。。</h2>
                </label>
            }
        </form>
    )
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        // 改变input的值
        onChangeInput({ target }) {
            dispatch(changeInputAction(target.name, target.value))
        },
        // 提交
        onSubmit() {
            dispatch(submitAction())
        },
        onRest() {
            dispatch(reSetAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)