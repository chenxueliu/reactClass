import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.scss";
import {
  onchangeinputAction,
  onblurAction,
  onresetAction,
  onsubmitAction
} from "../store/actionCreators";

class Register extends Component {
  render() {
    const {
      username,
      password,
      repassword,
      email,
      phone,
      onchange,
      onblur,
      onreset,
      onsubmit
    } = this.props;
    return (
      <div>
        <form className="form">
          <label>
            用户名：
            <input
              type="text"
              name="username"
              value={username.username}
              onChange={onchange}
              onBlur={onblur}
            />
            <span className="red">*</span>
            {username.redstatus && (
              <span className="red">用户名不得小于6位</span>
            )}
            {username.greenstatus && <span className="green">√正确</span>}
          </label>
          <label>
            密码：
            <input
              type="password"
              name="password"
              value={password.password}
              onChange={onchange}
              onBlur={onblur}
            />
            <span className="red">*</span>
            {password.redstatus && <span className="red">密码不得为空</span>}
            {password.greenstatus && <span className="green">√正确</span>}
          </label>
          <label>
            确认密码：
            <input
              type="password"
              name="repassword"
              value={repassword.repassword}
              onChange={onchange}
              onBlur={event => onblur(event, password.password)}
            />
            <span className="red">*</span>
            {repassword.redstatus && (
              <span className="red">两次密码不一样</span>
            )}
            {repassword.greenstatus && <span className="green">√正确</span>}
          </label>
          <label>
            邮件：
            <input
              type="email"
              name="email"
              value={email.email}
              onChange={onchange}
              onBlur={onblur}
            />
            <span className="red">*</span>
            {email.redstatus && <span className="red">邮件的格式不正确</span>}
            {email.greenstatus && <span className="green">√正确</span>}
          </label>
          <label>
            手机：
            <input
              type="number"
              name="phone"
              value={phone.phone}
              onChange={onchange}
              onBlur={onblur}
            />
            <span className="red">*</span>
            {phone.redstatus && (
              <span className="red">手机号不得为空，必须是11位数字</span>
            )}
            {phone.greenstatus && <span className="green">√正确</span>}
          </label>
        </form>
        <button onClick={onsubmit}>提交</button>
        <button onClick={onreset}>重置</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    onchange({ target }) {
      dispatch(onchangeinputAction(target.name, target.value));
    },
    onblur(event, repass) {
      dispatch(onblurAction(event, repass));
    },
    onreset() {
      dispatch(onresetAction());
    },
    onsubmit() {
      dispatch(onsubmitAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
