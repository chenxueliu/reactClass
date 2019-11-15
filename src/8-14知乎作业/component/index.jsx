import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeInputAction, HistoryAction, DeleHistoryAction } from '../store/actionCreator'
// 引接口
import { getBaidu } from '../api'
import './index.scss'
class Home extends Component {
    render() {
        const { onChangeInput, inputValue, SearchRequest, search_list, history_list, AddhistoryJu, Delhistory } = this.props
        return (
            <div>
                <label htmlFor="">
                    <input type="text" placeholder='搜索' onChange={onChangeInput} value={inputValue} />
                    <button onClick={() => SearchRequest(inputValue)}>搜索</button>
                </label>
                <h5>搜索结果</h5>
                <ul className='search'>
                    {
                        search_list && search_list.map((item, index) => {
                            return <li key={index} onClick={() => AddhistoryJu(index)}>{item}</li>
                        })
                    }
                </ul>
                <h5>历史记录</h5>
                <ul className='history'>
                    {
                        history_list && history_list.map((item, index) => {
                            return <li key={index} onClick={() => Delhistory(index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
// input 监听
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput({ target }) {
            dispatch(changeInputAction(target.value))
        },
        // 点击搜索 请求接口
        SearchRequest(value) {
            if (value) {
                getBaidu({ value }).then(res => {
                    console.log(res)
                    if (res.s.length) {
                        dispatch({
                            type: 'pushSearchList',
                            list: res.s
                        })
                    }
                })
            }

        },
        // 添加到历史记录
        AddhistoryJu(index) {
            console.log(11)
            dispatch(HistoryAction(index))
        },
        // 删除历史记录
        Delhistory(index) {
            dispatch(DeleHistoryAction(index))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)