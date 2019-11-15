import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import * as serviceWorker from './serviceWorker';
import Html from './8-13作业'
import store from './8-13作业/store';
// import Html from './8-13数据流'
// import store from './8-13数据流/store'
// ReactDOM.render(<Html />, document.getElementById('root'))
const render = () => ReactDOM.render(<Html />, document.getElementById('root'))
render()
// 注销监听 subscribe 方法返回值就是注销的方法
store.subscribe(render)
// store.subscribe(render)
// 如果我们的路由容器需要整体用withRouter包裹，那么不一定要在包裹的根元素外部使用路由容器包裹，及withRouter不能包裹路由容器，否则会报错
// 不推荐包裹根元素
// ReactDOM.render(
//     // 路由器放在入口文件，包裹根元素
//     // 不要用withRouter包裹根元素，因为它会使所有组件产生更新，造成性能浪费
//     // <BrowserRouter>
//     <Html />
//     // </BrowserRouter>
//     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
