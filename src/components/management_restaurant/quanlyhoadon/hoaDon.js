import React from "react";
import { Collapse, Divider } from "antd";
import { renderTien } from "../../notification/renderConvert";

export default function HoaDon({ dataListBooking, typeShow }) {
  const { Panel } = Collapse;
  return dataListBooking.filter(
    (itemBooking) => itemBooking.itemHall.city === typeShow
  ).length > 0
    ? dataListBooking.filter
      ((itemBooking) => itemBooking.itemHall.city === typeShow).map((item, index) => {
        return (
          <Collapse defaultActiveKey={index}>
            <Panel
              header={
                item.itemHall.restaurantName +
                "-" +
                item.itemHall.hallName +
                "/" +
                item.timeBook +
                "/" +
                item.dateBook
              }
              key={index}
            >
              <Divider orientation="left">Thông tin khách hàng</Divider>
              <p>Email: {item.dataAccount.email}</p>
              <p>Email khác: {item.email}</p>
              <p>Tên: {item.dataAccount.name}</p>
              <p>Số điện thoại: {item.phoneCustomer}</p>
              <Divider orientation="left">Thông tin đặt tiệc</Divider>
              <p>Tên nhà hàng: {item.itemHall.restaurantName}</p>
              <p>Ngày đặt tiệc: {item.dateBook}</p>
              <p>Khung giờ: {item.timeBook}</p>
              <p>Số bàn đặt: {item.numberOfTable}</p>
              <p>Sảnh: {item.itemHall.hallName}</p>
              <p>Tầng: {item.itemHall.floor}</p>
              <p>view: {item.itemHall.view}</p>
              <p>Sức chứa: {item.itemHall.quantity}</p>
              <p>Đơn giá/bàn: {renderTien(item.itemHall.price)}</p>
              <p>Dịch vụ đi kèm: {item.titleService}</p>
              <p>Đơn giá: {renderTien(item.priceService)}</p>
              <strong>
                Tổng hoá đơn :
                {renderTien(item.numberOfTable * item.itemHall.price + item.priceService)}
              </strong> <br />
              <strong>
                Tổng hoá đơn thanh toán trước 10%:
                {renderTien(item.numberOfTable * item.itemHall.price * 0.1 + item.priceService)}
              </strong>
            </Panel>
          </Collapse>
        )
      }) : "Không có thông tin"
}