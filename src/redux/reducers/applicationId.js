import * as Types from "../../constants/ActionType";
var initialState = 0;

const applicationId = (state = initialState, action) => {
  var { value } = action;
  switch (action.type) {
    case Types.APPLICATION:
      return value;
    default:
      return state;
  }
};

export default applicationId;
