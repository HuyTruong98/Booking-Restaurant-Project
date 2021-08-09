import * as Types from '../../../constants/ActionType';
var initialState = {};

const editService = (state = initialState, action) => {
  var { value } = action;
  switch (action.type) {
    case Types.EDIT_SERVICES:
      return value;
    default:
      return state;
  }
};

export default editService;