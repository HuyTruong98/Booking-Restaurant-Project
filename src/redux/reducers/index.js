import { combineReducers } from "redux";
import product from "./product";
import data from "./data";
import restaurant from "./restaurant";
import itemEditing from "./itemEditing";
import user_list from "./user_list";
import account from "./account";
import application from "./applicationId";
import sanhnhahang from "./sanhnhahang";
import hallList from "./hallList";
import hallEditing from "./hallEditing";
import quanlynhanvien from './quanlynhanvien';
import quanlychucvunhanvien from './quanlychucvunhanvien';
import danhmuc from './danhmuc';
import booking from './booking';
import service from './service';
import quanlyhoadon from './quanlyhoadon';
import comment from './comment';
import location from './location';
import itemUser from "./itemUser";

const appReducers = combineReducers({
  product,
  data,
  restaurant,
  itemEditing,
  user_list,
  account,
  application,
  sanhnhahang,
  hallList,
  hallEditing,
  quanlynhanvien,
  quanlychucvunhanvien,
  danhmuc,
  booking,
  service,
  quanlyhoadon,
  comment,
  location,
  itemUser
});

export default appReducers;
