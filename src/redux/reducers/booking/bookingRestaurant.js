import * as Types from "../../../constants/ActionType";

const initialState = [];

const bookingRestaurant = (state = initialState, action) => {
  var { id, value, data } = action;
  switch (action.type) {
    case Types.FETCH_BOOKING_ROOM:
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
    case Types.BOOKING_RESTAURANT_ROOM_REQUEST:
      state.push(action.value);
      return [...state];
    default:
      return [...state];
  }
}

export default bookingRestaurant;