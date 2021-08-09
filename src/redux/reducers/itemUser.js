import * as Types from "../../constants/ActionType";
var initialState = {};

const itemUser = (state = initialState, action) => {
  var { value } = action;
  switch (action.type) {
    case Types.EDIT_USER:
      return value;
    default:
      return state;
  }
};

export default itemUser;
