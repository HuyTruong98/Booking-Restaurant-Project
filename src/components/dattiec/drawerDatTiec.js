import React, { useEffect, useState } from 'react';
import { Drawer, Button, Descriptions, Form, Row, Col, Input, Badge, Card, Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'antd/lib/form/Form';
import { renderTien } from "../notification/renderConvert";
import * as act from "../../redux/actions/index";
import moment from 'moment';
const { Option } = Select;


function DrawerDatTiec({ visible, onClose, onSave, saveSuccess, setThoiGianDatTiec, setGioDatTiec }) {
  const dispatch = useDispatch();
  const datTheoSanh = useSelector(state => state.hallEditing);
  const allServices = useSelector(state => state.service.listServices);
  const itemService = useSelector(state => state.service.editService);
  const account_current = useSelector((state) => state.account);
  const [form] = useForm();
  const [thoiGian, setThoiGian] = useState();
  const [soBan, setSoBan] = useState();

  let totalMoney = 0;
  if (datTheoSanh.price && itemService.price) {
    totalMoney = ((datTheoSanh.price * soBan) + itemService.price)
  }

  let totalPercent = 0;
  if (datTheoSanh.price && itemService.price) {
    totalPercent = totalMoney - (totalMoney * 0.9)
  }

  function onChangeService(value) {
    dispatch(act.actGetEditServicesRequest(value));
  }

  const onChangeGioToChuc = (value) => {
    setGioDatTiec(value);
    setThoiGian(value)
  }

  const onChangeData = (value) => {
    setThoiGianDatTiec(moment(value).format("DD-MM-YYYY"));
  };

  const numberOgTableChange = (e) => {
    setSoBan(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    dispatch(act.actFetchServiceRequest());
  }, [])

  useEffect(() => {
    form.resetFields();
  }, [saveSuccess])


  const dateFormat = 'DD/MM/YYYY';
  return (
    <>
      <Drawer
        title="Cảm ơn vì đã chọn chúng tôi"
        placement="right"
        onClose={onClose}
        visible={visible}
        width={900}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button type="primary" onClick={() => form.submit()}>
              Đặt tiệc
            </Button>
            <Button
              onClick={onClose}
              style={{ marginLeft: 10 }}
            >
              Hủy
            </Button>
          </div>
        }
      >
        <Form layout="vertical" form={form} onFinish={onSave}>
          <Row gutter={16} style={{ paddingBottom: '20px' }}>
            <Col span={24}>
              <Descriptions title="Thông tin về Sảnh" bordered>
                <Descriptions.Item label="Tên sảnh">{datTheoSanh.hallName && datTheoSanh.hallName}</Descriptions.Item>
                <Descriptions.Item label="Sức chứa">{datTheoSanh.quantity && datTheoSanh.quantity} người / sảnh</Descriptions.Item>
                <Descriptions.Item label="Thuộc tầng">{datTheoSanh.floor && datTheoSanh.floor}</Descriptions.Item>
                <Descriptions.Item label="Giá / Bàn">{datTheoSanh.price && renderTien(datTheoSanh.price)}</Descriptions.Item>
                <Descriptions.Item label="View" span={3}>
                  <Badge status="processing" style={{ paddingRight: "10px" }} />
                  {datTheoSanh.view && datTheoSanh.view}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <Descriptions title="Theo nhu cầu">
            <Row gutter={16}>
              <Col span={11}>
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
              <Col span={2}></Col>
              <Col span={11}>
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
          </Descriptions>
          <Descriptions>
            <Row gutter={16}>
              <Col span={11}>
                <Form.Item
                  name="numberOfTable"
                  label="Số lượng bàn"
                  rules={[{
                    required: true, message: "Vui lòng nhập số lượng bàn!"
                  }]}
                >
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Nhập số lượng bàn"
                    onChange={numberOgTableChange}
                  />
                </Form.Item>
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
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
          </Descriptions>
          <Descriptions title="Thông tin liên lạc">
            <Row gutter={16}>
              <Col span={11}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{
                    required: true,
                    message: "Vui lòng nhập email!",
                    type: 'email'
                  }]}

                >
                  <Input
                    style={{ width: "100%" }}
                    placeholder={account_current.email}
                  />
                </Form.Item>
              </Col>
              <Col span={2}></Col>
              <Col span={11}>
                <Form.Item
                  name="phoneCustomer"
                  label="Số điện thoại"
                  rules={[{
                    required: true,
                    message: "Vui lòng nhập số điện thoại!"
                  }]}
                >
                  <Input
                    style={{ width: "100%" }}
                    placeholder="Nhập số số điện thoại..."
                  />
                </Form.Item>
              </Col>
            </Row>
          </Descriptions>
          <Row gutter={24}>
            <Col span={24}>
              <Card title="Tổng tiền cần phải thanh toán và số liệu tiêu chuẩn :" type="inner">
                <p><strong>Người / Sảnh :</strong> {soBan && soBan * 10} người</p>
                <p><strong>Số bàn :</strong> {soBan && soBan} bàn</p>
                <p><strong>Giá bàn :</strong> {datTheoSanh.price && renderTien(datTheoSanh.price)}</p>
                <p><strong>Tiền văn nghệ :</strong> {itemService.price && renderTien(itemService.price)}</p>
                <strong>Tổng tiền : {renderTien(totalMoney)}</strong>
              </Card>
              <p style={{ color: 'red', fontSize: '20px', height: '30px', textAlign: 'center' }}>Thanh toán trước 10% <br />
                <div style={{ color: 'black', width: '50%', border: '1px solid red' }} className=" btn btn-lg   infinite like disabled">{renderTien(totalPercent)}</div>
              </p>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}

export default DrawerDatTiec;