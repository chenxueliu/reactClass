import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// 引入ui库的样式
// import 'antd-mobile/dist/antd-mobile.css';
import * as serviceWorker from './serviceWorker'
import Html from './8-26'

ReactDOM.render(<Html />, document.getElementById('root'))

serviceWorker.unregister()
