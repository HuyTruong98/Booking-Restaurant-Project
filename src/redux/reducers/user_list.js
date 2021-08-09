import * as Types from "../../constants/ActionType";

var initialState = [];

var findIndex = (data, id) => {
  var result = -1;
  data.forEach((data, index) => {
    if (data.id === id) {
      result = index
    }
  });
  return result;
}

const user_list = (state = initialState, action) => {
  var index = -1;
  var { data, value, id } = action;
  switch (action.type) {
    case Types.CREATE_USER:
      var newArray = [];
      newArray.push(data);
      state = newArray;
      return [...state];
    case Types.GET_USER_INFO_REQUEST:
      state = data;
      return [...state];
    case Types.UPDATE_USER:
      index = findIndex(state, value.id);
      state[index] = value;
      return [...state];
    case Types.DELETE_USER:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    default:
      return [...state];
  }
};

export default user_list;
