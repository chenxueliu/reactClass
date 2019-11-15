import { ON_CHANGE_INPUT, LOADING, PUSH_BAIDURES, ERR_API } from './actionType'
const defaultState = {
    input: "", //input 值
    list: [],
    loading: false,
    err: false //是否显示接口报错的提示
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ON_CHANGE_INPUT:
            newState.input = action.value
            return newState

        case LOADING:
            newState.loading = action.status
            return newState

        case PUSH_BAIDURES:
            newState.list = action.value
            return newState

        case ERR_API:
            newState.loading = false
            newState.err = action.status
            return newState


        default:
            return state
    }
}