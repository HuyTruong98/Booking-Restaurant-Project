import * as Types from "../../../constants/ActionType";

const initialState = [];

const listLocation = (state = initialState, action) => {
  var { data } = action;
  switch (action.type) {
    case Types.FETCH_LOCATION:
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
}

export default listLocation;