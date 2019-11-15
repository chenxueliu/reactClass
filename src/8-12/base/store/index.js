import { createStore } from "redux";
import reducer from "./reducer";
// 将reducer传给createStore，创建一个store实例，并暴露出去
export default createStore(reducer);
