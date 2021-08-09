import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Button } from "antd";
import ModalQuanLyChucVuNhanVien from '../../components/management_restaurant/quanlychucvunhanvien/modal';
import TableQuanLyChucVuNhanVien from '../../components/management_restaurant/quanlychucvunhanvien/table';
import * as act from '../../redux/actions/index';

function PageQuanLyChucVuNhanVien({ match, location }) {
  const [openModal, setOpenModal] = useState(false);

  const dataListChucVuNhanVien = useSelector(
    (state) => state.quanlychucvunhanvien.list
  );



  const dispatch = useDispatch();

  const onEdit = (id) => {
    dispatch(act.actGetChucVuNhanVienRequest(id));
    setOpenModal(true);
  };

  function cancel() {
    setOpenModal(false);
  }

  function onSave(value) {
    if (value.id) {
      dispatch(act.actUpdateChucVuNhanVienRequest(value));
    } else {
      dispatch(act.actCreateChucVuNhanVienRequest(value));
    }
    cancel();
  }

  function onDelete(id) {
    dispatch(act.actDeleteChucVuNhanVienRequest(id));
  }

  function resetForm() {
    dispatch(act.actGetRestaurant(null));
  }

  function openForm() {
    resetForm();
    setOpenModal(true);
  }

  useEffect(() => {
    dispatch(act.actFetchChucVuNhanVienRequest());
  }, []);

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h5 className=" mb-0 text-gray-800">Quản lý chức vụ nhân viên</h5>
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
        {/* <!-- Area Chart --> */}
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold ">
                Danh sách chức vụ nhân viên
            </h6>
            </div>
            <ModalQuanLyChucVuNhanVien
              isVisible={openModal}
              handleCancel={() => cancel()}
              onSave={onSave}
            />
            <TableQuanLyChucVuNhanVien
              data={dataListChucVuNhanVien}
              match={match}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageQuanLyChucVuNhanVien;