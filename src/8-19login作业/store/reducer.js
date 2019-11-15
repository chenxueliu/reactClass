import { Value_CHANGE, VERIFY_CHANGE } from './actionType'
const defaultState = {
    intputState: {
        user: {
            value: '',
            yanCode: false
        },
        password: {
            value: '',
            yanCode: false
        },
        repassword: {
            value: '',
            yanCode: false
        },
        email: {
            value: '',
            yanCode: false
        },
        phone: {
            value: '',
            yanCode: false
        }
    }
}
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case Value_CHANGE:
            newState.intputState[action.name].value = action.value
            return newState
        case VERIFY_CHANGE:
            newState.intputState[action.name].yanCode = action.value
            return newState
    }
    return state
}