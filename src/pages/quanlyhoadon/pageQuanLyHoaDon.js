import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as act from "../../redux/actions/index";
import QuanLyHoaDonTheoKhucVuc from "../../components/management_restaurant/quanlyhoadon/quanLyHoaDonTheoKhuVuc";

function PageQuanLyHoaDon({ match, location }) {
  const [checkShowHoaDon, setCheckShowHoaDon] = useState(false);
  const dataListBooking = useSelector((state) => state.quanlyhoadon.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(act.actFetchDatBanRequest());
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h5 className=" mb-0 text-gray-800">Hóa đơn</h5>
          <a
            onClick={() => {
              setCheckShowHoaDon(false);
            }}
          >
            <i
              className="fa fa-chevron-left"
              style={{ color: "GrayText" }}
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <QuanLyHoaDonTheoKhucVuc
          dataListBooking={dataListBooking}
          checkShowHoaDon={checkShowHoaDon}
          setCheckShowHoaDon={setCheckShowHoaDon}
        />
      </div>
    </>
  );
}

export default PageQuanLyHoaDon;
