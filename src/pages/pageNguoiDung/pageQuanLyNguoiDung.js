import React, { useEffect, useState } from 'react';
import { Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import ModalUser from "../../components/management_restaurant/quanlynguoidung/modal";
import TableUsers from "../../components/management_restaurant/quanlynguoidung/table";
import * as act from "../../redux/actions/index";


function PageQuanLyNguoiDung({ match }) {
  const [openModal, setOpenModal] = useState(false);

  const dataUsers = useSelector(state => state.user_list);
  const dispatch = useDispatch();

  function onEdit(id) {
    console.log(id);
    dispatch(act.getUserById2(id));
    setOpenModal(true);
  }

  function cancel() {
    setOpenModal(false);
  }

  function onSave(value) {
    console.log(value);
    if (value.id) {
      dispatch(act.actUpdateUserRequest(value));
    } else {
      dispatch(act.actCreateUserRequest(value));
    }
    cancel();
  }

  function onDelete(id) {
    dispatch(act.actDeleteUserRequest(id));
  }

  function resetForm() {
    dispatch(act.actGetUserById2(null));
  }

  function openForm() {
    resetForm();
    setOpenModal(true);
  }


  return (
    <>
      < div className="container-fluid" >
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h5 className=" mb-0 text-gray-800">Quản lý người dùng</h5>
          <Button
            type="primary"
            onClick={() => {
              openForm();
            }}
          >
            Thêm mới
            </Button>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold ">Danh sách tất cả người dùng</h6>
              </div>
              <ModalUser
                isVisible={openModal}
                handleCancel={() => cancel()}
                onSave={onSave}
              />
              <TableUsers
                data={dataUsers}
                match={match}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default PageQuanLyNguoiDung;