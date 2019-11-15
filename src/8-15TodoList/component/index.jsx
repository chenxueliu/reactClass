import React from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { changeInputAction, deleTaskAction, truefinishedAction, falseunfinishedAction, clearTaskAction } from '../store/actionCreators'
const Home = (props) => {
    const { inputValue, ChangeInput, keyCodeFn, todolist, deleItem, TrueCheck, finishedList, FalseCheck, deleTask } = props
    return (
        <div className='todobox'>
            <div className='header'>
                <p className='todop'>ToDoList</p>
                <input type="text" className='inp' placeholder='添加ToDo'
                    value={inputValue} onChange={ChangeInput}
                    onKeyDown={keyCodeFn}
                />
            </div>
            <div className='flex boxing'>
                <h5>正在进行</h5>
                <span className='circle'>{todolist.length}</span>
            </div>
            <ul className='addlist'>
                {
                    todolist && todolist.map((item, index) => {
                        return <li key={index}>
                            <input type="checkbox"
                                className='check'
                                checked={item.isChecked}
                                onChange={({ target }) => TrueCheck(target.checked, index)}
                            />
                            {item.title}
                            <span className='delbtn' onClick={() => deleItem(index)}>X</span>
                        </li>
                    })
                }
            </ul>
            <hr />
            <div className='flex boxing'>
                <h5>已经完成</h5>
                <span className='circle'>{finishedList.length}</span>
            </div>
            <ul className='addlist'>
                {
                    finishedList && finishedList.map((item, index) => {
                        return <li key={index}>
                            <input type="checkbox"
                                className='check'
                                checked={item.isChecked}
                                onChange={({ target }) => FalseCheck(target.checked, index)}
                            />
                            {item.title}
                            <span className='delbtn' onClick={() => deleTask(index)}>X</span>

                        </li>
                    })
                }

            </ul>
            <p className='fp'> Copyright © 2014 todolist.cn </p>
        </div>
    )
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    // input 监听事件
    return {
        ChangeInput({ target }) {
            dispatch(changeInputAction(target.value))
        },
        // 键盘事件
        keyCodeFn(event) {
            if (event.keyCode === 13 || event.keyCode === 'enter') {
                dispatch({
                    type: 'onKeyCode'
                })
            }
        },
        // 删除事件
        deleItem(index) {
            dispatch(deleTaskAction(index))
        },
        // checkbox为true的时候添加到已完成列表
        TrueCheck(value, index) {
            dispatch(truefinishedAction(value, index))
        },
        // 
        FalseCheck(value, index) {
            dispatch(falseunfinishedAction(value, index))
        },
        // 完成任务列表删除
        deleTask(index) {
            dispatch(clearTaskAction(index))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Home)