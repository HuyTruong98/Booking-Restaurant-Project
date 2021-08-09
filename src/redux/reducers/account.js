import * as Types from "../../constants/ActionType";

var initialState = {};

const account = (state = initialState, action) => {
  var { id, value, data } = action;
  switch (action.type) {
    case Types.CHECK_TOKEN:
      if (data) {
        value = {
          checkToken: false,
        };
      } else {
        value = {
          ...value,
          checkToken: true,
        };
        console.log(value);
      }
      state = { ...value };
      return state;
    default:
      return state;
  }
};

export default account;
