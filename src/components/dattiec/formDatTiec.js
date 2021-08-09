import React, { useEffect, useState } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Image, Descriptions, Badge,
  Skeleton, Spin, Card
} from "antd";
import moment from 'moment';
import { useSelector, useDispatch } from "react-redux";
import * as act from '../../redux/actions/index';
import { useForm } from "antd/lib/form/Form";
import { openNotification } from '../../components/notification/notification';

const { Option } = Select;
function FormDatTiec({ visible, handleCloseDrawer, onSave, setCheckDatTiec, saveSuccess }) {
  const dataListRestaurant = useSelector((state) => state.restaurant);
  const dsSanhNhaHang = useSelector((state) => state.hallList);
  const itemSanh = useSelector((state) => state.hallEditing);
  const dataAccount = useSelector((state) => state.account);
  const listBooking = useSelector((state) => state.booking.bookingRestaurant);
  const allServices = useSelector((state) => state.service.listServices);
  const itemService = useSelector((state) => state.service.editService);

  const dispatch = useDispatch()
  const [form] = useForm();
  const [dataSanh, setDataSanh] = useState([]);
  const [thoiGianDatTiec, setThoiGianDatTiec] = useState();
  const [gioDatTiec, setGioDatTiec] = useState();
  const [soBan, setSoBan] = useState();

  let totalMoney = 0;
  if (itemSanh.price && itemService.price && itemSanh.quantity) {
    totalMoney = ((itemSanh.price * soBan) + itemService.price)
  }

  let totalPercent = 0;
  if (itemSanh.price && itemService.price && itemSanh.quantity) {
    totalPercent = totalMoney - (totalMoney * 0.9)
  }

  function changeSanhTheoCity(value) {
    dispatch(act.actGetRestaurantRequest(value));
    setDataSanh(dsSanhNhaHang.filter(item => item.idRestaurant === value));
  }

  const numberOgTableChange = (e) => {
    setSoBan(e.target.value);
  }

  const showDetailSanh = (value) => {
    dispatch(act.actGetSanhRequest(value));
    if (
      listBooking &&
      Array.isArray(listBooking) && listBooking.filter(
        (itemBK) =>
          itemBK.hallListId === value &&
          itemBK.dateBook === thoiGianDatTiec &&
          itemBK.timeBook === gioDatTiec
      ).length > 0
    ) {
      openNotification(
        "Thông báo",
        "Khung giờ này đã có người đặt, Mong quý khách thông cảm!"
      );
      setCheckDatTiec(true);
    } else {
      setCheckDatTiec(false);
    }
  };

  const onChangeData = (value) => {
    setThoiGianDatTiec(moment(value).format("DD-MM-YYYY"));
  };

  const onChangeGioToChuc = (value) => {
    setGioDatTiec(value);
  }

  function onChangeService(value) {
    dispatch(act.actGetEditServicesRequest(value));
  }

  const renderTien = (value) => {
    return (
      <>
        {` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + "vnđ"}
      </>
    )
  }

  useEffect(() => {
    form.resetFields();
  }, [saveSuccess])

  const dateFormat = 'DD/MM/YYYY';
  return (
    <>
      <div className="site-drawer-render-in-current-wrapper">
        <Drawer
          title={dataAccount.checkToken ? "Mời bạn đặt tiệc tại đây" : "Mời bạn đăng nhập để đặt tiệc"}
          placement="right"
          width="60%"
          onClose={handleCloseDrawer}
          visible={visible}
          getContainer={false}
          zIndex={1}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              {dataAccount.checkToken ?
                <Button onClick={() => form.submit()} type="primary">
                  Đặt tiệc
                </Button> :
                "Phải đăng ký mới đặt được nha!"
              }
              <Button
                onClick={handleCloseDrawer}
                type="danger"
                style={{ marginLeft: 10 }}
              >
                Hủy
              </Button>
            </div>
          }
        >
          {dataAccount.checkToken
            ?
            <Form layout="vertical" form={form} onFinish={onSave}>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="numberOfTable"
                    label="Số lượng bàn"
                    rules={[{
                      required: true,
                    }]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      placeholder="Nhập số lượng bàn"
                      onChange={numberOgTableChange}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="idRestaurant"
                    label="Địa điểm nhà hàng"
                    rules={[
                      { required: true, message: "Vui lòng chọn nhà hàng!" },
                    ]}
                  >
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      placeholder="Vui lòng chọn Thành Phố!"
                      onChange={changeSanhTheoCity}
                    >
                      {dataListRestaurant.map((item, index) => (
                        <Option key={index + item.id} value={item.id} >
                          {item.city}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Ngày tổ chức"
                    name="dateBook"
                    hasFeedback
                    validateStatus="success"
                    rules={[{ required: true, message: "Vui lòng chọn ngày!" }]}

                  >
                    <DatePicker onChange={onChangeData} style={{ width: "100%" }} format={dateFormat} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="timeBook"
                    label="Giờ tổ chức"
                    rules={[{ required: true, message: "Vui lòng chọn giờ!" }]}
                  >
                    <Select placeholder="Vui lòng chọn giờ" onChange={onChangeGioToChuc}>
                      <Option value="10:00 - 14:00">10:00 - 14:00</Option>
                      <Option value="16:00 - 20:00">16:00 - 20:00</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="idEmployee"
                    label="Nhân viên"
                    rules={[{ required: true, message: "Vui lòng chọn nhân viên!" }]}
                  >
                    <Select placeholder="Vui lòng chọn nhân viên">
                      <Option value="13">
                        Nguyễn Tuyết Nhi
                    </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="serviceId"
                    label="Tiết mục văn nghệ"
                    rules={[{ required: true, message: "Vui lòng chọn tiết mục văn nghệ!" }]}
                  >
                    <Select
                      placeholder="Vui lòng chọn tiết mục văn nghê"
                      onChange={onChangeService}
                    >
                      {
                        allServices.map((item, index) => (
                          <Option key={index} value={item.id} >
                            {item.title}
                          </Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="phoneCustomer"
                    label="Số điện thoại"
                    rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
                  >
                    <Input placeholder="Nhập số điện thoại." />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="hallListId"
                    label="Sảnh"
                    rules={[{ required: true, message: "Vui lòng chọn sảnh!" }]}
                  >
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      placeholder="Chọn Sảnh và view tại đây"
                      onChange={showDetailSanh}
                    >
                      {
                        dataSanh.map((item, index) => (
                          <Option key={index} value={item.id} >
                            {item.hallName}
                          </Option>
                        ))
                      }
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Descriptions title="Thông tin về Sảnh" bordered>
                    <Descriptions.Item label="Tên sảnh">{itemSanh.hallName && itemSanh.hallName}</Descriptions.Item>
                    <Descriptions.Item label="Sức chứa">{itemSanh.quantity && itemSanh.quantity} người / sảnh</Descriptions.Item>
                    <Descriptions.Item label="Thuộc tầng">{itemSanh.floor && itemSanh.floor}</Descriptions.Item>
                    <Descriptions.Item label="Giá / Bàn">{itemSanh.price && renderTien(itemSanh.price)}</Descriptions.Item>
                    <Descriptions.Item label="View" span={3}>
                      <Badge status="processing" text="Tổ Chức tại:" style={{ paddingRight: "10px" }} />
                      {itemSanh.view && itemSanh.view}
                    </Descriptions.Item>

                    <Descriptions.Item style={{ textAlign: 'center' }} label="Ảnh giới thiệu">
                      <Badge status="processing" text="Ảnh dưới thiệu về Sảnh" />

                      <br />
                      {Array.isArray(itemSanh.img) && itemSanh.img.length > 0 && itemSanh.img.map((item, index) => {
                        if (item) {
                          return (
                            <Image key={index} src={item} style={{ width: '100%', height: '300px' }} />
                          )
                        }
                      })}
                      <br />

                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>

              {/* Thanh toán */}
              <Row gutter={16} style={{ paddingTop: '40px', justifyContent: 'center' }}>
                <Col span={12}>
                  <Card
                    title="Tổng tiền cần phải thanh toán:" type="inner"
                    actions={[
                      <p style={{ color: 'red', fontSize: '20px', height: '30px' }}>Thanh toán trước 10%
                      <div style={{ backgroundColor: '#e5efe799' }}>{renderTien(totalPercent)}</div>
                      </p>
                    ]}
                  >
                    <p>Người / Sảnh : {soBan && soBan * 10} người</p>
                    <p>Tổng số bàn : {soBan} bàn</p>
                    <p>Giá / Bàn :  {itemSanh.price && renderTien(itemSanh.price)}</p>
                    <p>Tiền văn nghệ : {itemService.price && renderTien(itemService.price)}</p>
                    <p>Tổng tiền : {renderTien(totalMoney)}</p>
                  </Card>
                </Col>
              </Row>
            </Form>
            :
            <Spin tip="Loading...">
              <Skeleton active />
            </Spin>
          }

        </Drawer>
      </div>
    </>
  );
}

export default FormDatTiec;
