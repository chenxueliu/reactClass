import React, { Component } from "react";
import store from "./store";
import { addAction, addItemAction } from "./store/actionCreators.js";

export default class Html extends Component {
  constructor() {
    super();
    // 1.获取默认值
    this.state = store.getState();
    // 2.订阅获取仓库里新的值
    store.subscribe(() => {
      // 2.1每当store发生了改变，订阅函数都会触发，然后我们再获取一次state
      const state = store.getState();
      // console.log(state);
      this.setState(state);
    });
  }

  render() {
    return (
      <div>
        <mark>计数器</mark>
        <div>
          {this.state.list.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <button onClick={this.addItem}>添加一个item</button>

        <hr />

        <p>{this.state.count}</p>
        <button onClick={this.addCount}>计数器累加</button>
      </div>
    );
  }

  // 累加计数器
  addCount = () => {
    // store派发动作
    store.dispatch(addAction);
  };

  // list添加一条数据
  addItem = () => {
    store.dispatch(
      addItemAction(this.state.list[this.state.list.length - 1] + 1)
    );
  };
}
