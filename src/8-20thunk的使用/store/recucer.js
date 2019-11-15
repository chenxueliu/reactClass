import { CHANGE_INPUT, LOADING, RE_SET } from './actionType'
const defaultState = {
    username: '',
    password: '',
    repassword: '',
    loading: false
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT:
            console.log(action)
            newState[action.data[0]] = action.data[1];
            return newState
        case LOADING:
            newState.loading = action.status;
            return newState;
        // 重置表单
        case RE_SET:
            newState = defaultState;
            return newState
        default:
            return newState
    }
}

