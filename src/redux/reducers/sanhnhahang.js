import * as Types from "../../constants/ActionType";

var initialState = [];

const sanhnhahang = (state = initialState, action) => {
  var { data } = action;
  switch (action.type) {
    case Types.FETCH_SANH_NHA_HANG:
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
    default:
      return [...state];
  }
};

export default sanhnhahang;
