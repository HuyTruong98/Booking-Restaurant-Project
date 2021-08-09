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

const hallList = (state = initialState, action) => {
  var index = -1;
  var { id, value, data } = action;
  switch (action.type) {
    case Types.FETCH_TAT_CA_SANH:
      var arrayNew = [];
      data.map((item, index) => {
        item = {
          ...item,
          key: item.id,
        };
        arrayNew.push(item);
      });
      state = arrayNew;
      return [...state];
    case Types.CREATE_SANH:
      state.push(action.value);
      return [...state];
    case Types.DELETE_SANH:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    case Types.UPDATE_SANH:
      index = findIndex(state, value.id);
      state[index] = value;
      return [...state];
    default:
      return [...state];
  }
}

export default hallList;