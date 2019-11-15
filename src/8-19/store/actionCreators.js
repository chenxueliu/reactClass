import { ON_CHANGE_INPUT, LOADING, PUSH_BAIDURES, ERR_API } from './actionType'
import { getBaidu } from '../api'
export const onChangeInput = (value) => {
    return {
        type: ON_CHANGE_INPUT,
        value
    }
}
export const loading = (status) => {
    return {
        type: LOADING,
        status
    }
}
// 将异步接口存起来
const pushBaiDures = (value) => {
    return {
        type: PUSH_BAIDURES,
        value
    }
}
// 当接口报错了执行的action
export const errApi = (status) => {
    return {
        type: ERR_API,
        status
    }
}
// 异步接口请求
// 只有把异步请求/函数写在action里才叫真正意义上的redux异步处理数据，否则都是同步
export const onSearchBaiDuApi = (value) => {
    // 这就是使用异步处理中间件react-thunk固定语法
    return (dispatch, getState) => {
        // dispath 和getState 是applyMiddleware给的
        // console.log(diaptch)
        // console.log(getState())
        // 1.请求前需要展示loading等待的状态，那么需要dispatch一个同步的action
        dispatch(loading(true))
        getBaidu(value).then(res => {
            console.log(res)
            // 2.接口成功后发起一个同步的取消loading动作
            dispatch(loading(false))
            //3. 将数据存到store里
            dispatch(pushBaiDures(res.s))
        }).catch(err => {
            console.log(err)
        })
    }
}


// 使用redux-thunk中间件处理异步的好处：
// 集中管理接口，便于维护和迭代，符合redux的异步处理概念
// redux里的异步概念：
// action 派发后，reducer立即计算state，这叫同步
// action派发后，reducer过一段时间后再计算state，这叫异步