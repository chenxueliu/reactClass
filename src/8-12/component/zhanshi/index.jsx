import React, { Component } from "react";
import store from "../store";

export default class Zhanshi extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  render() {
    return (
      <div>
        <mark>我是内容展示区</mark>
        {this.state.list.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    );
  }
}
