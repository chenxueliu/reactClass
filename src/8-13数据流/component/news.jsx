import React from 'react'
import store from '../store'
// import newReducer from '../store/newsReducer.js'

import { queryItemACtion, changeInputAction, addItemAction } from '../store/actionCreator'

// import { combineReducers } from 'redux';
// 使用replaceReducers重新定义指定的reducer需要再次使用combineReducers做一个包裹
// const rede = combineReducers({ newReducer })
// store.replaceReducer(rede)/
export default (props) => {
    const data = store.getState().newsReducer;
    const query = () => {
        store.dispatch(queryItemACtion())
        // if (data.inputValue) {
        //     store.dispatch(queryItemACtion())
        // }
    }
    const handleChange = ({ target }) => {
        store.dispatch(changeInputAction(target.value))
    }
    const addItem = () => {
        store.dispatch(addItemAction())
    }
    return <div>
        <div>新闻</div>
        <label htmlFor=''>
            <input type="text" value={data.inputValue} onChange={handleChange} />
            <button onClick={query}>查询</button>
            <button onClick={addItem}>添加</button>
        </label>
        <ul>
            {
                data.list.map((item) => {
                    return <li key={item.id}>{item.text}</li>
                })
            }
        </ul>
    </div>
}