import React from 'react';
// 渲染内容list组件
export default (props) => {
    return <ul>
        {
            props.list && props.list.map((item) => {
                return <li key={item}>{item}
                    <button onClick={(index) => {
                        props.removeitem(index)
                    }}>删除</button>
                </li>
            })
        }
    </ul>
}