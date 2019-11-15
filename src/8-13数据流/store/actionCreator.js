import { CHANGE_TITLE, QUERY_ITEM, CHANGE_INPUT_VALUE, ADD_ITEM } from "./actionType";
// 改变标题的动作
export const changeTitleACtion = (value) => {
    return {
        type: CHANGE_TITLE,
        value
    }
}
// 过滤查找的动作
export const queryItemACtion = (query) => {
    return {
        type: QUERY_ITEM,
        query
    }
}

// 改变reducers里input的value值
export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
}
// 像news列表添加
export const addItemAction = (value) => {
    return {
        type: ADD_ITEM,
        value
    }
}