
import actionType from './actionType'
const deafultState = {
    inputValue: '',
    list: [
        { id: 1, text: '1.来日方长' },
        { id: 2, text: '2.薛先生' },
        { id: 3, text: '1.未来可期' },
        { id: 4, text: '3.星河滚烫' },
        { id: 5, text: '2.财源滚滚' },
        { id: 6, text: '3.开心快乐' },
    ]
}
export default (state = deafultState, action) => {
    // 深拷贝一份
    const newState = JSON.parse(JSON.stringify(state))
    // 查询input 监听
    switch (action.type) {
        case actionType.QUERY_CHANGE:
            newState.inputValue = action.value;
            return newState;
        // 查找逻辑
        case actionType.QUERY_ITEM:
            newState.list = newState.list.filter((item) => {
                if (item.text.search(newState.inputValue) !== -1) {
                    return item
                }
            })
            return newState
        // 添加数据
        case actionType.TIAN_ITEM:
            // 
            const _length = newState.list.length - 1
            const item = newState.list[_length] ? newState.list[_length] : 0
            console.log(newState.list[_length])
            newState.list.push({ id: item.id + 1, text: item.id + newState.inputValue })
            newState.inputValue = '';
            return newState
        // 删除
        case actionType.CLEAR_ITEM:
            console.log(action.index)
            newState.list.splice(action.index, 1)
            return newState
        default:
            return state
    }
}