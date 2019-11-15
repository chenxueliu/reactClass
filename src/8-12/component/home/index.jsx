import React, { Component } from "react";
// 引入子组件
import Header from "./headers.jsx";
import List from "./list.jsx";

// 引入仓库store
import store from "../store";

// 引入动作创建者
import {
  changeInputAction,
  addItemAction,
  removeItemAction
} from "../store/actionCreators.js";

export default class Home extends Component {
  constructor() {
    super();
    // 1.获取默认值
    this.state = store.getState();
    // 2.订阅函数--监听store函数
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });

    // 取消监听
    // const unsubscribe = store.subscribe(handleChange);
    // unsubscribe();
  }

  componentWillUnmount() {
    // 取消订阅 --》
    console.log("取消订阅");
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Header
          value={this.state.inputValue}
          additem={() => {
            store.dispatch(addItemAction);
          }}
          changeinput={({ target }) => {
            store.dispatch(changeInputAction(target.value));
          }}
        />
        <List
          list={this.state.list}
          removeitem={index => {
            store.dispatch(removeItemAction(index));
          }}
        />
      </div>
    );
  }
}
