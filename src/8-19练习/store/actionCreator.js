import { ONCHANGE_INPUT } from './actionType'
import { getBaidu } from '../api'
export const onChangeInputAction = (value) => {
    return {
        type: ONCHANGE_INPUT,
        value
    }
}
// 异步请求
// const RequestApi() => {


// }