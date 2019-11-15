import React from 'react'
import store from '../store'
import { ChangeInputAction, AddItemAction, DeleteItemAction } from '../store/actionCreators'
export default (props) => {
    // 拿到默认值
    const data = store.getState().homeReducer
    console.log(data)
    // 监听input
    const onChange = ({ target }) => {
        console.log(target)
        store.dispatch(ChangeInputAction(target.value))
    }
    // 提交添加数据
    const Submit = () => {
        store.dispatch(AddItemAction)
    }
    // 删除数据
    const Delete = (index) => {
        store.dispatch(DeleteItemAction(index))
    }
    return <div style={{ background: '#B5CFFA', height: '100vh' }}>
        <div>
            <input type="text" placeholder='输入内容' onChange={onChange}
                value={data.inputValue} name='inputValue' />
            <button onClick={Submit}>提交</button>
        </div>
        <ul>
            {
                data.list && data.list.map((item, index) => {
                    return <li key={index}>{item}
                        <button onClick={() => { Delete(index) }}>删除</button>
                    </li>
                })
            }
        </ul>
    </div>
}