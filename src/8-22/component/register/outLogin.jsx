import React from 'react'
import { connect } from 'react-redux'
import { outLoginAction } from '../../store/actionCreator/outLoginAction'
const OutLogin = props => {
  return (
    <div>
      <button onClick={() => props.outLogin(props.status)}>退出</button>
    </div>
  )
}
const mapStateToProps = state => state.userReducer
const mapDispatchToProps = dispatch => {
  return {
    //   逻辑：如果用户没有登录，退出无效，否则需要询问是否退出，在用户确认后执行退出动作
    outLogin(status) {
      if (status === false) return false
      const isOut = window.confirm('您确认退出吗？')
      if (isOut) {
        dispatch(outLoginAction())
        alert('退出成功')
      }
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutLogin)
