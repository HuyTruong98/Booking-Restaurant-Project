import React, { useEffect, useState } from 'react';
import { Button } from "antd";
import ModalNhanVien from '../../components/management_restaurant/quanlynhanvien/modalNhanVien';
import TableQuanLyNhanVien from '../../components/management_restaurant/quanlynhanvien/tableQuanLyNhanVien';
import { useSelector, useDispatch } from 'react-redux';
import * as act from '../../redux/actions/index';

function PageQuanLyNhanVien({ match, location }) {
  const [openModal, setOpenModal] = useState(false);

  const dataListNhanVien = useSelector((state) => state.quanlynhanvien.list);
  const listDanhMucChucVuNhanVien = useSelector((state) => state.quanlychucvunhanvien.list);

  let data = [];

  dataListNhanVien.map((item, id) => {
    if (listDanhMucChucVuNhanVien.filter((item2) => item.positionId === item2.id)) {
      console.log(listDanhMucChucVuNhanVien.filter((item2) => item.positionId === item2.id));
      item = {
        ...item,
        positionName: listDanhMucChucVuNhanVien.filter((item2) => item.positionId === item2.id)[0]?.positionName,
      };
      data.push(item)
    }
  });


  const dispatch = useDispatch();

  const onEdit = (id) => {
    dispatch(act.actGetNhanVienRequest(id));
    setOpenModal(true);
  }

  function cancel() {
    setOpenModal(false);
  }

  function resetForm() {
    dispatch(act.actGetRestaurant(null));
  }

  function openForm() {
    resetForm();
    setOpenModal(true);
  }

  function onSave(value) {
    if (value.id) {
      dispatch(act.actUpdateNhanVienRequest(value));
    } else {
      dispatch(act.actCreateNhanVienRequest(value));
    }
    cancel();
  }

  function onDelete(id) {
    dispatch(act.actDeleteNhanVienRequest(id));
  }

  useEffect(() => {
    dispatch(act.actFetchNhanVienRequest());
    dispatch(act.actFetchChucVuNhanVienRequest());
  }, [])


  return (
    <>
      <div className="container-fluid" >
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h5 className=" mb-0 text-gray-800">Quản lý nhân viên</h5>
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
                <h6 className="m-0 font-weight-bold ">Danh sách nhân viên</h6>
              </div>
              <ModalNhanVien
                isVisible={openModal}
                handleCancel={() => cancel()}
                onSave={onSave}
              />
              <TableQuanLyNhanVien
                data={data}
                match={match}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageQuanLyNhanVien;