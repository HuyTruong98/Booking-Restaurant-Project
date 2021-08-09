import * as Types from "../../../constants/ActionType";

var initialState = [];

const listDanhMucChucVuNhanVien = (state = initialState, action) => {
  var { value } = action;
  switch (action.type) {
    case Types.DANH_MUC_CHUC_VU_NHAN_VIEN:
      return [...value];

    default:
      return [...state];
  }
};

export default listDanhMucChucVuNhanVien;