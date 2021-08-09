import * as Types from "../../constants/ActionType";
var initialState = {};

const hallEditing = (state = initialState, action) => {
  var { value } = action;
  switch (action.type) {
    case Types.EDIT_SANH:
      return value;
    default:
      return state;
  }
};

export default hallEditing;
