import React from 'react';
import store from './store';
// 输入内容添加组件
export default (props) => {
    console.log(props)
    return <div>
        <input type="text"
            value={props.value}
            onChange={props.changeinput}
        />
        <button onClick={props.additem}>添加</button>
    </div>
}