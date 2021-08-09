import * as Types from "../../constants/ActionType";

var initialState = [{}];

const data = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_DATA:
      state = action.return;
      return [...state];
    default:
      return [...state];
  }
};

export default data;
