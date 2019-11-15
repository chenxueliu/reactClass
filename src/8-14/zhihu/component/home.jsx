import React, { Component } from 'react'
import './home.scss'
import { connect } from 'react-redux'
import { changeInputAction } from '../store/actionCreators/home'
import { getBaidu } from '../api'
class Home extends Component {
    render() {
        const { inputValue, onChangeInput, onPushHistoryList, searchList, historyList } = this.props
        return (
            <div>
                <label htmlFor="" className='search-bar'>
                    <input type="text" placeholder='搜索' value={inputValue} onChange={onChangeInput} />
                    <button onClick={() => this.props.onSearch(inputValue)}>搜索</button>
                </label>
                <div>
                    <h6>搜索结果</h6>
                    <ul className='search-list'>
                        {
                            searchList && searchList.map((item, index) => {
                                return <li key={index} onClick={() => onPushHistoryList(index)}>{item}</li>
                            })
                        }
                    </ul>
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <h6>历史记录</h6>

                    <ul className='history-list'>
                        {
                            historyList && historyList.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
// connect 会在我们传入的两个函数里自动注入state和dispatch
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput({ target }) {
            console.log(target.value)
            dispatch(changeInputAction(target.value))
        },
        onSearch(value) {
            if (value) {
                getBaidu({ value }).then(res => {
                    if (res.s.length) {
                        dispatch({
                            type: 'pushSearchList',
                            list: res.s
                        })
                    }
                    console.log(res)
                })
            }
        },
        onPushHistoryList(index) {
            dispatch({
                type: 'pushHistoryList',
                index
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)