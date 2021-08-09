import { combineReducers } from 'redux';

import listServices from "./services";
import editService from './item'
export default combineReducers({
  listServices,
  editService,
})