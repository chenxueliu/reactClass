import React from 'react'
import store from '../store'
import { changeTitleACtion } from '../store/actionCreator'
export default (props) => {
    const reducer = store.getState()
    console.log(reducer)

    const data = reducer.homeReducer
    // 改变仓库里对应的title
    const changeTitle = () => {
        const time = new Date().getTime()
        store.dispatch(changeTitleACtion(data.title + time))
    }
    return <div>
        {data.title}
        <ul>
            {
                data.list.map((item, index) => {
                    return <li key={item.id}>{item.text}</li>
                })
            }
        </ul>
        <button onClick={changeTitle}>添加</button>
    </div>
}