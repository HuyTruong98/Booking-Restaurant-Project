import React, { useEffect, useState } from 'react';
import { Button } from "antd";
import TableTatCaSanh from "../../components/management_restaurant/quanLySanh/quanLyTatCaSanh";
import { useDispatch, useSelector } from 'react-redux';
import * as act from '../../redux/actions/index';
import ModalSanh from '../../components/management_restaurant/quanLySanh/modalSanh';

function PageQuanLySanh({ match }) {
  const [openModal, setOpenModal] = useState(false);
  const dataHallList = useSelector((state) => state.hallList);
  const itemSanh = useSelector(state => state.hallEditing);

  const dispatch = useDispatch();

  function onEdit(id) {
    dispatch(act.actGetSanhRequest(id));
    setOpenModal(true);
  }

  function cancel() {
    setOpenModal(false);
  }

  function onSave(value) {
    if (value.id) {
      dispatch(act.actGetRestaurantRequest(value.id))
      const newImg = value.img.fileList &&
        Array.isArray(value.img.fileList) &&
        value.img.fileList ? value.img.fileList.map((file) => file.thumbUrl) : itemSanh.img;
      const newValue = {
        ...value,
        img: newImg,
      }
      dispatch(act.actUpdateSanhRequest(newValue));
    } else {
      const newImg = value.img.fileList &&
        Array.isArray(value.img.fileList) &&
        value.img.fileList ? value.img.fileList.map((file) => file.thumbUrl) : itemSanh.img;
      const newValue = {
        ...value,
        img: newImg,
      }
      dispatch(act.actCreateSanhRequest(newValue));
    }
    cancel();
  }

  function onDelete(id) {
    dispatch(act.actDeleteSanhRequest(id));
  }

  function resetForm() {
    dispatch(act.actGetSanh(null));
  }

  function openForm() {
    resetForm();
    setOpenModal(true);
  }

  useEffect(() => {
    dispatch(act.actFetchTatCaSanhRequest());
  }, []);
  return (
    <>
      < div className="container-fluid" >
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h5 className=" mb-0 text-gray-800">Quản lý tất cả sảnh</h5>
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
                <h6 className="m-0 font-weight-bold ">Danh sách tất cả sảnh</h6>
              </div>
              <ModalSanh
                isVisible={openModal}
                handleCancel={() => cancel()}
                onSave={onSave}
              />
              <TableTatCaSanh
                data={dataHallList}
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

export default PageQuanLySanh;