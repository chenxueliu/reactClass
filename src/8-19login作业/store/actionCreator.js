import { Value_CHANGE, VERIFY_CHANGE } from './actionType'
export const valueChange = ({ target }) => {
    return {
        type: Value_CHANGE,
        value: target.value,
        name: target.name
    }
}
export const BlurInput = ({ target }, pass) => {
    // console.log(target.name)
    if (target.name === 'user') {
        if (target.value.length === 0 || target.value.length < 3) {
            return {
                type: VERIFY_CHANGE,
                name: target.name,
                value: true
            }
        } else {
            return {
                type: VERIFY_CHANGE,
                name: target.name,
                value: false
            }
        }
    }
    // 密码
    console.log(target.name)
    if (target.name === 'password') {
        if (target.value.length === 0 || target.value.length < 6) {
            return {
                type: VERIFY_CHANGE,
                name: target.name,
                value: true
            }
        } else {
            return {
                type: VERIFY_CHANGE,
                name: target.name,
                value: false
            }
        }
    }
    // 确认密码
    if (target.name === 'repassword') {
        if (target.value.length === 0 || pass != target.value) {
            return {
                type: VERIFY_CHANGE,
                name: target.name,
                value: true
            }
        } else {
            return {
                type: VERIFY_CHANGE,
                name: target.name,
                value: false
            }
        }
    }
    // 邮箱
    if (target.name === 'email') {
        if (target.value.length === 0 || target.value.length < 11) {
            return {
                type: VERIFY_CHANGE,
                name: target.name,
                value: true
            }
        } else {
            return {
                type: VERIFY_CHANGE,
                name: target.name,
                value: false
            }
        }
    }
    // 手机
    if (target.name === 'phone') {
        if (target.value.length === 0 || target.value.length < 11) {
            return {
                type: VERIFY_CHANGE,
                name: target.name,
                value: true
            }
        } else {
            return {
                type: VERIFY_CHANGE,
                name: target.name,
                value: false
            }
        }
    }
}


export const submitBtn = (dispach, state) => {
    let arr = []
    for (let key in state.intputState) {
        arr.push(state.intputState[key])
        if (!state.intputState[key].value) {
            dispach({
                type: VERIFY_CHANGE,
                name: key,
                value: true
            })
        }
    }
    let yanCode = arr.every(item => item.yanCode === false)
    let value = arr.every(item => item.value.length !== 0)
    console.log(value, yanCode)

    if (value && yanCode) {
        alert('注册成功')
    }
}

export const submitAction = () => {
    return (dispach, getSatet) => {
        console.log(dispach, getSatet())
        submitBtn(dispach, getSatet())
    }
}
