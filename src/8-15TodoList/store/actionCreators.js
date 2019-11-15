import { CHANGE_INPUT, DELE_TASK, TRUE_FINISHED, FALSE_UNFINISHED, CLEAR_TASK } from './actionType'
export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
}
// 删除
export const deleTaskAction = (index) => {
    return {
        type: DELE_TASK,
        index
    }
}
// 
export const truefinishedAction = (value, index) => {
    return {
        type: TRUE_FINISHED,
        value,
        index
    }
}
// 
export const falseunfinishedAction = (value, index) => {
    return {
        type: FALSE_UNFINISHED,
        value,
        index
    }
}
export const clearTaskAction = (index) => {
    return {
        type: CLEAR_TASK,
        index
    }
}