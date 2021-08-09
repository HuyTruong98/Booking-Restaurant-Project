import * as Types from '../../../constants/ActionType';

const initialState = [];

const listService = (state = initialState, action) => {
  var { data } = action;
  switch (action.type) {
    case Types.FETCH_SERVICES:
      var arrayNew = [];
      data.map((item) => {
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

export default listService;