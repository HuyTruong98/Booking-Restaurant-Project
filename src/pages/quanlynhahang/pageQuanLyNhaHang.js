import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ModalCommon from "../../components/management_restaurant/quanlynhahang/modalCommon";
import TableManagementHotel from "../../components/management_restaurant/quanlynhahang/table";
import TableSanhTheoNhaHang from "../../components/management_restaurant/quanlynhahang/tableSanhTheoNhaHang";
import { Button } from "antd";
import * as act from "../../redux/actions/index";

function PageQuanLyNhaHang({ match, location }) {
  const [openModal, setOpenModal] = useState(false);
  const [visibleTableNhaHang, setVisibleTableNhaHang] = useState(false);
  const [visibleTableSanhTheoNhaHang, setVisibleTableSanhTheoNhaHang] =
    useState(false);

  // Xún redux lấy dữ liệu về theo  (state.restaurant)
  const dataListRestaurant = useSelector((state) => state.restaurant);
  const itemRestaurant = useSelector((state) => state.itemEditing);

  // Khai bái dispatch để sử dụng được dispatch
  const dispatch = useDispatch();

  const onEdit = (id) => {
    console.log(id);
    dispatch(act.actGetRestaurantRequest(id));
    setOpenModal(true);
  };

  function cancel() {
    setOpenModal(false);
  }

  function onSave(value) {
    console.log(value);
    if (value.id) {
      console.log(value.id);
      dispatch(act.actGetRestaurantRequest(value.id))
      const newImg = value.img.fileList &&
        Array.isArray(value.img.fileList) &&
        value.img.fileList ? value.img.fileList.map((file) => file.thumbUrl) : itemRestaurant.img;
      const newImages =
        value.img1.fileList &&
          Array.isArray(value.img1.fileList) &&
          value.img1.fileList ? value.img1.fileList.map((file) => file.thumbUrl) : itemRestaurant.img1;
      const newValue = {
        ...value,
        img: newImg,
        img1: newImages,
      }
      dispatch(act.actUpdateRestaurantRequest(newValue));
    } else {
      console.log(value);
      const newImg = value.img.fileList &&
        Array.isArray(value.img.fileList) &&
        value.img.fileList ? value.img.fileList.map((file) => file.thumbUrl) : itemRestaurant.img;
      const newImages =
        value.img1.fileList &&
          Array.isArray(value.img1.fileList) &&
          value.img1.fileList ? value.img1.fileList.map((file) => file.thumbUrl) : itemRestaurant.img1;
      const newValue = {
        ...value,
        img: newImg && Array.isArray(newImg) && newImg.length > 0 && newImg[0],
        img1: newImages,
      }
      dispatch(act.actCreateRestaurantRequest(newValue));
    }
    cancel();
  }


  function onDelete(id) {
    dispatch(act.actDeleteRestaurantRequest(id));
  }

  function resetForm() {
    dispatch(act.actGetRestaurant(null));
  }

  function openForm() {
    resetForm();
    setOpenModal(true);
  }

  // Sau khi component load xong thì được gọi
  useEffect(() => {
    // Gọi lên server để lấy(GET)
    dispatch(act.actFetchRestaurantRequest());
    setVisibleTableNhaHang(true);
  }, []);
  function onShowSanhTheoNhaHang(id) {
    console.log(id);
    setVisibleTableNhaHang(false);
    setVisibleTableSanhTheoNhaHang(true);
    dispatch(act.actFetchSanhNhaHangRequest(id));
  }

  function goBack() {
    setVisibleTableNhaHang(true);
    setVisibleTableSanhTheoNhaHang(false);
  }

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h5 className=" mb-0 text-gray-800">Quản lý nhà hàng</h5>
        {visibleTableNhaHang ?
          (
            <Button
              type="primary"
              onClick={() => {
                openForm();
              }}
            >
              Thêm mới
            </Button>
          ) :
          (
            <Button
              type="primary"
              style={{ color: 'black' }}
              onClick={() => {
                goBack()
              }}
            >Quay Lại</Button>
          )
        }
      </div>

      <div className="row">
        {/* <!-- Area Chart --> */}
        <div className="col-xl-12 col-lg-12">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold ">Danh sách nhà hàng</h6>
            </div>
            <ModalCommon
              isVisible={openModal}
              handleCancel={() => cancel()}
              onSave={onSave}
            />
            {visibleTableNhaHang && (
              <TableManagementHotel
                data={dataListRestaurant}
                match={match}
                onDelete={onDelete}
                onEdit={onEdit}
                onShowSanhTheoNhaHang={onShowSanhTheoNhaHang}
              />
            )}

            {visibleTableSanhTheoNhaHang && <TableSanhTheoNhaHang />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageQuanLyNhaHang;
