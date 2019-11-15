import actionType from "./actionTypes.js";

const changeInputAction = value => {
  return {
    type: actionType.CHANGE_INPUT,
    value
  };
};

const addItemAction = {
  type: actionType.ADD_ITEM
};

const removeItemAction = index => {
  return {
    type: actionType.DEL_ITEM,
    index
  };
};

export {
  // 改变输入框的值
  changeInputAction,
  // 添加一条数据到list
  addItemAction,
  // 删除一条数据从list
  removeItemAction
};
