import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../store/userAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChangeInput = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  onSubmit = () => {
    const { username, password } = this.state;
    if (username && username.length >= 4 && password && password.length >= 6) {
      this.props.onSubmit({
        username,
        password
      });
      alert("登陆成功");
    } else if (!username || username.length < 4) {
      alert("用户名不许为空，且长度不小于4位");
    } else if (!password || password.length < 6) {
      alert("密码不许为空，且长度不小于6位");
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <form className="form-box">
        <label>
          用户名：
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.onChangeInput}
          />
        </label>
        <label>
          密码：
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onChangeInput}
          />
        </label>
        <label>
          <button type="button" onClick={this.onSubmit}>
            登陆
          </button>
        </label>
      </form>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    onSubmit(data) {
      dispatch(loginAction(data));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
