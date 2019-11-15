import { CHANGE_INPUT, His_JL, DELE_HIS } from '../actionType/home'
export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}
// 添加到历史记录
export const HistoryAction = (index) => {
    return {
        type: His_JL,
        index
    }
}
// 删除历史记录
export const DeleHistoryAction = (index) => {
    return {
        type: DELE_HIS,
        index
    }
}