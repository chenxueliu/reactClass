import React from 'react'
import store from '../store'
import { QueryItemAction, QueryChangeAction, TianItemAction, ClearItemAction } from '../store/actionCreators'
export default () => {
    const data = store.getState().productionReducer
    console.log(data)
    const ChaItem = () => {
        store.dispatch(QueryItemAction())
    }
    const querychacnge = ({ target }) => {
        store.dispatch(QueryChangeAction(target.value))
    }
    const addTian = () => {
        store.dispatch(TianItemAction())
    }
    const Clear = (index) => {
        store.dispatch(ClearItemAction(index))
    }
    return <div>
        <div>
            <input type="text"
                onChange={querychacnge}
                placeholder='查询内容'
                value={data.inputValue} name='inputValue' />
            <button onClick={ChaItem}>查询</button>
            <button onClick={addTian}>添加</button>
        </div>
        <ul>
            {
                data.list.map((item, index) => {
                    return <li key={item.id}>{item.text}
                        <button onClick={() => { Clear(index) }}>删除</button>
                    </li>
                })
            }
        </ul>
    </div>
}