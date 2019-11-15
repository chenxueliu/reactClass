import { CHANGE_INPUT, LOADING, RE_SET } from './actionType'
import axios from 'axios'
import Axios from 'axios';
export const changeInputAction = (...data) => {
    return {
        type: CHANGE_INPUT,
        data
    }
}
const loading = (status) => {
    return {
        type: LOADING,
        status
    }
}
export const submitAction = () => {
    // 在redux里使用redux-thunk中间件处理异步请求，固有写法
    return (dispatch, getState) => {
        console.log(dispatch, getState)
        // 请求前发送一个action
        dispatch(loading(true))
        const data = getState()
        Axios.post('/index.json', { params: data }).then(res => {
            console.log(res)
            dispatch(loading(false))
        }).catch(err => {
            dispatch({
                type: "ERR",
                status: false
            })
        })
    }
}
const reset = () => {
    return {
        type: RE_SET
    }
}
export const reSetAction = () => {
    return (dispatch, getState) => {
        dispatch(loading(true))
        axios.get('/').then(res => {
            // 接口响应之后派发一个动作
            dispatch(loading(false))
            dispatch(reset())
        })
    }
}