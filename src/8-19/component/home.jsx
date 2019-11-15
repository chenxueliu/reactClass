import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.scss'
import { onChangeInput, onSearchBaiDuApi, errApi } from '../store/actionCreators'
class Home extends Component {
    render() {
        const { input, loading, list, err, onChangeInput, onSearch, closeErr } = this.props
        return (
            <div className='home-warp'>
                <label>
                    <input type='text' value={input} onChange={onChangeInput} />
                    <button onClick={() => onSearch(input)}>搜</button>
                </label>
                <main>
                    {
                        list.map((item, index) => {
                            return <p key={index}>{item}</p >
                        })
                    }
                </main>
                {/* loading加载提示层 */}
                {
                    loading && <div className='loading'>
                        <mark>正在请求中.......</mark>
                    </div>
                }

                {
                    err && <div className='err-alert'>
                        < a href=' ' onClick={closeErr}>关</ a>
                        <mark>接口请求出错，请稍后再试.....</mark>
                    </div>
                }

            </div>
        )
    }
}
// 如果仅仅是连接，而connent方法中没有传入任何参数，那么组件的props里就会有一个dispatch
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput({ target }) {
            dispatch(onChangeInput(target.value))
        },
        onSearch(value) {
            if (!value) return false;

            // 派发一个异步的action
            dispatch(onSearchBaiDuApi(value))

        },
        closeErr() {
            dispatch(errApi(false))
        }
        // onSearch(value) {
        // if(!value) return false;
        // // 1.请求前，需要展示loading等待的状态，那么需要dispatch一个同步的action
        // dispatch({
        // type: 'loading',
        // status: true
        // })
        // // 2.ajax请求
        // getBaidu(value).then(res => {
        // console.log(res);
        // // 3.请求成功
        // dispatch({
        // type: 'loading',
        // status: false
        // })
        // }).catch(err => {
        // dispatch({
        // type: 'err',
        // status: true
        // })
        // })

        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)