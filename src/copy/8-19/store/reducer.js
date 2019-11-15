import { ON_CHANGE_INPUT, ON_RED_ISSHOW, ON_RESET } from "./actionTypes";

const defaultState = {
  username: {
    username: "",
    redstatus: false,
    greenstatus: false
  },
  password: {
    password: "",
    redstatus: false,
    greenstatus: false
  },
  repassword: {
    repassword: "",
    redstatus: false,
    greenstatus: false
  },
  email: {
    email: "",
    redstatus: false,
    greenstatus: false
  },
  phone: {
    phone: "",
    redstatus: false,
    greenstatus: false
  }
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ON_CHANGE_INPUT:
      newState[action.name][action.name] = action.value;
      return newState;

    case ON_RED_ISSHOW:
      newState[action.name].redstatus = action.value;
      newState[action.name].greenstatus = !action.value;
      return newState;

    case ON_RESET:
      newState[action.name][action.name] = "";
      newState[action.name].redstatus = false;
      newState[action.name].greenstatus = false;
      return newState;

    default:
      return newState;
  }
};
