import { ON_CHANGE_INPUT, ON_RED_ISSHOW, ON_RESET } from "./actionTypes";

export const onchangeinputAction = (name, value) => {
  return {
    type: ON_CHANGE_INPUT,
    name,
    value
  };
};

export const onblurAction = ({ target }, repass) => {
  // 判断用户名
  if (target.name === "username") {
    if (target.value.length === 0 || target.value.length < 6) {
      return {
        type: ON_RED_ISSHOW,
        name: target.name,
        value: true
      };
    } else {
      return {
        type: ON_RED_ISSHOW,
        name: target.name,
        value: false
      };
    }
  }
  // 密码
  if (target.name === "password") {
    if (target.value.length === 0 || target.value.length < 6) {
      return {
        type: ON_RED_ISSHOW,
        name: target.name,
        value: true
      };
    } else {
      return {
        type: ON_RED_ISSHOW,
        name: target.name,
        value: false
      };
    }
  }
  // 确认密码
  if (target.name === "repassword") {
    if (target.value.length === 0 || repass !== target.value) {
      return {
        type: ON_RED_ISSHOW,
        name: target.name,
        value: true
      };
    } else {
      return {
        type: ON_RED_ISSHOW,
        name: target.name,
        value: false
      };
    }
  }
  // 邮箱
  const regEmail = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
  if (target.name === "email") {
    if (target.value === "" || !regEmail.test(target.value)) {
      return {
        type: ON_RED_ISSHOW,
        name: target.name,
        value: true
      };
    } else {
      return {
        type: ON_RED_ISSHOW,
        name: target.name,
        value: false
      };
    }
  }
  // 手机号
  const regPhone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
  if (target.name === "phone") {
    if (target.value === "" || !regPhone.test(target.value)) {
      return {
        type: ON_RED_ISSHOW,
        name: target.name,
        value: true
      };
    } else {
      return {
        type: ON_RED_ISSHOW,
        name: target.name,
        value: false
      };
    }
  }
};

const onresetLala = (dispatch, data) => {
  for (let key in data) {
    // console.log(key);
    dispatch({
      type: ON_RESET,
      name: key
    });
  }
};

export const onresetAction = () => {
  return (dispatch, getState) => {
    const data = getState();
    onresetLala(dispatch, data);
  };
};

const onsubmitLala = (dispatch, data) => {
  for (let key in data) {
    if (!data[key][key]) {
      dispatch({
        type: ON_RED_ISSHOW,
        name: key,
        value: true
      });
    }
  }
};

export const onsubmitAction = () => {
  return (dispatch, getState) => {
    const data = getState();
    onsubmitLala(dispatch, data);
  };
};
