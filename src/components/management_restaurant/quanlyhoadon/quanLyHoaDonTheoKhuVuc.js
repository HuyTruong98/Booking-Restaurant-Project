import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import HoaDon from "./hoaDon";
function QuanLyHoaDonTheoKhucVuc({
  dataListBooking,
  checkShowHoaDon,
  setCheckShowHoaDon,
}) {
  const [typeShow, setTypeShow] = useState();
  const showHoaDon = (value) => {
    setTypeShow(value);
    setCheckShowHoaDon(true);
  };
  return (
    <div>
      {!checkShowHoaDon && (
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Mường Thanh - Đà Nẵng" bordered={true}>
                <a
                  onClick={() => {
                    showHoaDon("Đà Nẵng");
                  }}
                >
                  chi tiết
                </a>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Mường Thanh - Hồ Chí Minh" bordered={true}>
                <a
                  onClick={() => {
                    showHoaDon("Hồ Chí Minh");
                  }}
                >
                  chi tiết
                </a>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Mường Thanh - Hà Nội" bordered={true}>
                <a
                  onClick={() => {
                    showHoaDon("Hà Nội");
                  }}
                >
                  chi tiết
                </a>
              </Card>
            </Col>
          </Row>
        </div>
      )}
      {checkShowHoaDon && (
        <HoaDon dataListBooking={dataListBooking} typeShow={typeShow} />
      )}
    </div>
  );
}

export default QuanLyHoaDonTheoKhucVuc;
