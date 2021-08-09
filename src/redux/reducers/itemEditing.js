import * as Types from "../../constants/ActionType";
var initialState = {};

const itemEditing = (state = initialState, action) => {
  var { value } = action;
  switch (action.type) {
    case Types.EDIT_RESTAURANT:
      console.log(value);
      return value;
    default:
      return state;
  }
};

export default itemEditing;
