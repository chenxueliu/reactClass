import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import Register from "./register";

export default class Html extends Component {
  render() {
    return (
      <Provider store={store}>
        <Register />
      </Provider>
    );
  }
}
