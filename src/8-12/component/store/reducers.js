import actionType from "./actionTypes.js";

const defaultState = {
  inputValue: "",
  list: []
};

export default (state = defaultState, action) => {
  // 1.拷贝一份我们的state
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionType.CHANGE_INPUT:
      newState.inputValue = action.value;
      return newState;

    case actionType.ADD_ITEM:
      // 如果input的value是空的，就不要给它添加
      if (newState.inputValue) {
        newState.list.push(newState.inputValue);
      }
      // 添加完以后将input的value值清空掉
      newState.inputValue = "";
      return newState;

    case actionType.DEL_ITEM:
      newState.list.splice(action.index, 1);
      return newState;

    default:
      return state;
  }
};
