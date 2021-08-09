import { message } from "antd";
import * as Types from "../../constants/ActionType";
import callApi from "../../utils/apiCaller";
import * as Message from "../../constants/Message";

export const actFetchDataRequest = (data) => {
  return (dispatch) => {
    return callApi("url", "GET", null).then((res) => {
      dispatch(actFetchData(res.data));
    });
  };
};

export const actFetchData = (data) => {
  return {
    type: Types.FETCH_DATA,
    data,
  };
};

//HÀM LÊN SERVER GET TẤT CẢ DỮ LIỆU
export function actFetchRestaurantRequest() {
  return (dispatch) => {
    return callApi("listRestaurant", "GET", null).then((res) => {
      if (res) {
        dispatch(actFetchRestaurant(res.data));
      }
    });
  };
}

export const actFetchRestaurant = (data) => {
  return {
    type: Types.FETCH_RESTAURANT,
    data,
  };
};

export function actDeleteRestaurantRequest(id) {
  return (dispatch) => {
    return callApi(`listRestaurant/${id}`, "DELETE", null).then((res) => {
      if (res) {
        dispatch(actDeleteRestaurant(id));
      }
    });
  };
}

export const actDeleteRestaurant = (id) => {
  return {
    type: Types.DELETE_RESTAURANT,
    id,
  };
};

export function actCreateRestaurantRequest(value) {
  return (dispatch) => {
    return callApi(`listRestaurant`, "POST", value).then((res) => {
      console.log("🚀 ~ file: index.js ~ line 60 ~ returncallApi ~ res", res)
      if (res) {
        message.success(Message.THEM_THANH_CONG);
        dispatch(actCreateRestaurant(res.data));
      }
    });
  };
}

export const actCreateRestaurant = (value) => {
  return {
    type: Types.CREATE_RESTAURANT,
    value,
  };
};

export function actGetRestaurantRequest(id) {
  return (dispatch) => {
    return callApi(`listRestaurant/${id}`, "GET", null).then((res) => {
      console.log("🚀 ~ file: index.js ~ line 79 ~ returncallApi ~ res", res)
      if (res) {
        dispatch(actGetRestaurant(res.data));
      }
    });
  };
}

export const actGetRestaurant = (value) => {
  return {
    type: Types.EDIT_RESTAURANT,
    value,
  };
};

export function actUpdateRestaurantRequest(value) {
  return (dispatch) => {
    return callApi(`listRestaurant/${value.id}`, "PUT", value).then((res) => {
      message.success(Message.SUA_THANH_CONG);
      dispatch(actUpdateRestaurant(res.data));
    });
  };
}

export const actUpdateRestaurant = (value) => {
  return {
    type: Types.UPDATE_RESTAURANT,
    value,
  };
};

//USER

export function getUserInfoRequest() {
  return (dispatch) => {
    return callApi("users", "GET", null).then((res) => {
      if (res) {
        dispatch(getUserInfo(res.data));
      }
    });
  };
}

export const getUserInfo = (data) => {
  return {
    type: Types.GET_USER_INFO_REQUEST,
    data,
  };
};

export function actCreateUserRequest(value) {
  return (dispatch) => {
    return callApi("users", "POST", value).then((res) => {
      if (res) {
        dispatch(actCreateUser(res.data));
        message.success(Message.DANG_KY_THANH_CONG);
      }
    });
  };
}

export const actCreateUser = (data) => {
  return {
    type: Types.CREATE_USER,
    data,
  };
};

export function actUpdateUserRequest(value) {
  return (dispatch) => {
    return callApi(`users/${value.id}`, "PUT", value).then((res) => {
      message.success(Message.DOI_MAT_KHAU_THANH_CONG);
      dispatch(actUpdateUser(res.data));
    });
  };
}

export const actUpdateUser = (value) => {
  return {
    type: Types.UPDATE_USER,
    value,
  };
};

//Thêm vào checkToken
export function getUserById(id) {
  return (dispatch) => {
    return callApi(`users/${id}`, "GET", null).then((res) => {
      if (res) {
        dispatch(actGetUserById(res.data));
      }
    });
  };
}

export const actGetUserById = (value) => {
  return {
    type: Types.CHECK_TOKEN,
    value,
  };
};


export function getUserById2(id) {
  return (dispatch) => {
    return callApi(`users/${id}`, "GET", null).then((res) => {
      if (res) {
        dispatch(actGetUserById2(res.data));
      }
    });
  };
}

export const actGetUserById2 = (value) => {
  return {
    type: Types.EDIT_USER,
    value,
  };
};


export const checkToken = (data) => {
  return {
    type: Types.CHECK_TOKEN,
    data,
  };
};

export const applicationId = (value) => {
  return {
    type: Types.APPLICATION,
    value,
  };
};

export function actDeleteUserRequest(id) {
  return (dispatch) => {
    return callApi(`users/${id}`, "DELETE", null).then((res) => {
      if (res) {
        console.log("🚀 ~ file: index.js ~ line 221 ~ returncallApi ~ res", res)
        message.success(Message.XOA_THANH_CONG);
        dispatch(actDeleteUser(id));
      }
    });
  };
}

export const actDeleteUser = (id) => {
  return {
    type: Types.DELETE_USER,
    id,
  };
};

// Sảnh

export function actFetchSanhNhaHangRequest(id) {
  return (dispatch) => {
    return callApi("hallList", "GET", null).then((res) => {
      console.log(res);
      if (res) {
        let arr = [];
        res.data.map((item, index) => {
          if (id == item.idRestaurant) {
            arr.push(item);
          }
        });
        console.log(arr);
        dispatch(actFetchSanhNhaHang(arr));
      }
    });
  };
}

export const actFetchSanhNhaHang = (data) => {
  return {
    type: Types.FETCH_SANH_NHA_HANG,
    data,
  };
};


export function actFetchTatCaSanhRequest() {
  return (dispatch) => {
    return callApi("hallList", "GET", null).then((res) => {
      if (res) {
        dispatch(actFetchTatCaSanh(res.data));
      }
    });
  };
}

export const actFetchTatCaSanh = (data) => {
  return {
    type: Types.FETCH_TAT_CA_SANH,
    data,
  };
};

export function actDeleteSanhRequest(id) {
  return (dispatch) => {
    return callApi(`hallList/${id}`, "DELETE", null).then((res) => {
      if (res) {
        console.log("🚀 ~ file: index.js ~ line 221 ~ returncallApi ~ res", res)
        message.success(Message.XOA_THANH_CONG);
        dispatch(actDeleteSanh(id));
      }
    });
  };
}

export const actDeleteSanh = (id) => {
  return {
    type: Types.DELETE_SANH,
    id,
  };
};

export function actCreateSanhRequest(value) {
  return (dispatch) => {
    return callApi(`hallList`, "POST", value).then((res) => {
      if (res) {
        message.success(Message.THEM_THANH_CONG);
        dispatch(actCreateSanh(res.data));
      }
    });
  };
}

export const actCreateSanh = (value) => {
  return {
    type: Types.CREATE_SANH,
    value,
  };
};

export function actGetSanhRequest(id) {
  return (dispatch) => {
    return callApi(`hallList/${id}`, "GET", null).then((res) => {
      if (res) {
        console.log(res.data);
        dispatch(actGetSanh(res.data));
      }
    });
  };
}

export const actGetSanh = (value) => {
  return {
    type: Types.EDIT_SANH,
    value,
  };
};

export function actUpdateSanhRequest(value) {
  return (dispatch) => {
    return callApi(`hallList/${value.id}`, "PUT", value).then((res) => {
      message.success(Message.SUA_THANH_CONG);
      dispatch(actUpdateSanh(res.data));
    });
  };
}

export const actUpdateSanh = (value) => {
  return {
    type: Types.UPDATE_SANH,
    value,
  };
};

// Nhân Viên

export function actFetchNhanVienRequest() {
  return (dispatch) => {
    return callApi("employee", "GET", null).then((res) => {
      if (res) {
        dispatch(actFetchNhanVien(res.data));
      }
    });
  };
}

export const actFetchNhanVien = (data) => {
  return {
    type: Types.FETCH_NHANVIEN,
    data,
  };
};

export function actGetNhanVienRequest(id) {
  return (dispatch) => {
    return callApi(`employee/${id}`, "GET", null).then((res) => {
      if (res) {
        dispatch(actGetNhanVien(res.data));
      }
    });
  };
}

export const actGetNhanVien = (value) => {
  return {
    type: Types.EDIT_NHANVIEN,
    value,
  };
};

export function actUpdateNhanVienRequest(value) {
  return (dispatch) => {
    return callApi(`employee/${value.id}`, "PUT", value).then((res) => {
      message.success(Message.SUA_THANH_CONG);
      dispatch(actUpdateNhanVien(res.data));
    });
  };
}

export const actUpdateNhanVien = (value) => {
  return {
    type: Types.UPDATE_NHANVIEN,
    value,
  };
};

export function actCreateNhanVienRequest(value) {
  return (dispatch) => {
    return callApi(`employee`, "POST", value).then((res) => {
      if (res) {
        message.success(Message.THEM_THANH_CONG);
        dispatch(actCreateNhanVien(res.data));
      }
    });
  };
}

export const actCreateNhanVien = (value) => {
  return {
    type: Types.CREATE_NHANVIEN,
    value,
  };
};

export function actDeleteNhanVienRequest(id) {
  return (dispatch) => {
    return callApi(`employee/${id}`, "DELETE", null).then((res) => {
      if (res) {
        message.success(Message.XOA_THANH_CONG);
        dispatch(actDeleteNhanVien(id));
      }
    });
  };
}

export const actDeleteNhanVien = (id) => {
  return {
    type: Types.DELETE_NHANVIEN,
    id,
  };
};

export function actGetAllChucVuNhanVienRequest(id) {
  return (dispatch) => {
    return callApi("positionEmployee", "GET", null).then((res) => {
      if (res) {
        dispatch(actGetAllChucVuNhanVien(res.data));
      }
    });
  };
}

//Get chức vụ nhân viên
export const actGetAllChucVuNhanVien = (value) => {
  return {
    type: Types.DANH_MUC_CHUC_VU_NHAN_VIEN,
    value,
  };
};

//chức vụ nhân viên

export function actFetchChucVuNhanVienRequest() {
  return (dispatch) => {
    return callApi("positionEmployee", "GET", null).then((res) => {
      if (res) {
        dispatch(actFetchChucVuNhanVien(res.data));
      }
    });
  };
}

export const actFetchChucVuNhanVien = (data) => {
  return {
    type: Types.FETCH_CHUCVU_NHANVIEN,
    data,
  };
};

export function actGetChucVuNhanVienRequest(id) {
  return (dispatch) => {
    return callApi(`positionEmployee/${id}`, "GET", null).then((res) => {
      if (res) {
        dispatch(actGetChucVuNhanVien(res.data));
      }
    });
  };
}

export const actGetChucVuNhanVien = (value) => {
  return {
    type: Types.EDIT_CHUCVU_NHANVIEN,
    value,
  };
};

export function actUpdateChucVuNhanVienRequest(value) {
  return (dispatch) => {
    return callApi(`positionEmployee/${value.id}`, "PUT", value).then((res) => {
      message.success(Message.SUA_THANH_CONG);
      dispatch(actUpdateNhanVien(res.data));
    });
  };
}

export const actUpdateChucVuNhanVien = (value) => {
  return {
    type: Types.UPDATE_CHUCVU_NHANVIEN,
    value,
  };
};

export function actCreateChucVuNhanVienRequest(value) {
  return (dispatch) => {
    return callApi(`positionEmployee`, "POST", value).then((res) => {
      if (res) {
        message.success(Message.THEM_THANH_CONG);
        dispatch(actCreateChucVuNhanVien(res.data));
      }
    });
  };
}

export const actCreateChucVuNhanVien = (value) => {
  return {
    type: Types.CREATE_CHUCVU_NHANVIEN,
    value,
  };
};

export function actDeleteChucVuNhanVienRequest(id) {
  return (dispatch) => {
    return callApi(`positionEmployee/${id}`, "DELETE", null).then((res) => {
      if (res) {
        message.success(Message.XOA_THANH_CONG);
        dispatch(actDeleteChucVuNhanVien(id));
      }
    });
  };
}

export const actDeleteChucVuNhanVien = (id) => {
  return {
    type: Types.DELETE_CHUCVU_NHANVIEN,
    id,
  };
};

// POST đặt bàn nhà hàng
export function actCreateDatBanRequest(value) {
  return (dispatch) => {
    return callApi(`bookRestaurant`, "POST", value).then((res) => {
      if (res) {
        message.success(Message.DAT_BAN_THANH_CONG);
        dispatch(actCreateDatBan(res.data));
      }
    });
  };
}

export const actCreateDatBan = (value) => {
  return {
    type: Types.BOOKING_RESTAURANT_ROOM_REQUEST,
    value,
  };
};

export function actFetchDatBanRequest() {
  return (dispatch) => {
    return callApi("bookRestaurant", "GET", null).then((res) => {
      if (res) {
        dispatch(actFetchDatBan(res.data));
      }
    });
  };
}

export const actFetchDatBan = (data) => {
  return {
    type: Types.FETCH_BOOKING_ROOM,
    data,
  };
};

// SERVICE

export function actFetchServiceRequest() {
  return (dispatch) => {
    return callApi("services", "GET", null).then((res) => {
      if (res) {
        dispatch(actFetchService(res.data));
      }
    });
  };
}

export const actFetchService = (data) => {
  return {
    type: Types.FETCH_SERVICES,
    data,
  };
};

export function actGetEditServicesRequest(id) {
  return (dispatch) => {
    return callApi(`services/${id}`, "GET", null).then((res) => {
      if (res) {
        dispatch(actGetEditServices(res.data));
      }
    });
  };
}

export const actGetEditServices = (value) => {
  return {
    type: Types.EDIT_SERVICES,
    value,
  };
};

// COMMENT

export function actFetchCommentRequest() {
  return (dispatch) => {
    return callApi("comments", "GET", null).then((res) => {
      if (res) {
        dispatch(actFetchComment(res.data));
      }
    });
  };
}

export const actFetchComment = (data) => {
  return {
    type: Types.FETCH_COMMENT,
    data,
  };
};

export function actDeleteCommentRequest(id) {
  return (dispatch) => {
    return callApi(`comments/${id}`, "DELETE", null).then((res) => {
      if (res) {
        message.success(Message.XOA_BINH_LUAN_THANH_CONG);
        dispatch(actDeleteComment(id));
      }
    });
  };
}

export const actDeleteComment = (id) => {
  return {
    type: Types.DELETE_COMMENT,
    id,
  };
};

export function actAddCommentRequest(value) {
  return (dispatch) => {
    return callApi(`comments`, "POST", value).then((res) => {
      if (res) {
        message.success(Message.BINH_LUAN_THANH_CONG);
        dispatch(actAddComment(res.data));
      }
    });
  };
}

export const actAddComment = (value) => {
  return {
    type: Types.CREATE_COMMENT,
    value,
  };
};

export function actGetCommentRequest(id) {
  return (dispatch) => {
    return callApi(`comment/${id}`, "GET", null).then((res) => {
      if (res) {
        dispatch(actGetComment(res.data));
      }
    });
  };
}

export const actGetComment = (value) => {
  return {
    type: Types.EDIT_COMMENT,
    value,
  };
};

export function actUpdateCommentRequest(value) {
  return (dispatch) => {
    return callApi(`comment/${value.id}`, "PUT", value).then((res) => {
      message.success(Message.SUA_BINH_LUAN_THANH_CONG);
      dispatch(actUpdateComment(res.data));
    });
  };
}

export const actUpdateComment = (value) => {
  return {
    type: Types.UPDATE_COMMENT,
    value,
  };
};

// LOCATION
export function actFetchLocationRequest() {
  return (dispatch) => {
    return callApi("locations", "GET", null).then((res) => {
      if (res) {
        dispatch(actFetchLocation(res.data));
      }
    });
  };
}

export const actFetchLocation = (data) => {
  return {
    type: Types.FETCH_LOCATION,
    data,
  };
};