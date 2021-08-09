import { Row, Rate, List, Image, Space, Col, Button, Skeleton, Tag, Card, Alert, Descriptions, Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { AudioOutlined, ClockCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { renderTien } from '../notification/renderConvert';
import DrawerDatTiec from './drawerDatTiec';
import * as act from "../../redux/actions/index";
import { openNotification } from '../notification/notification';
import { ClockCircleFilled } from '@ant-design/icons';
import moment from 'moment';

function DetailSanh({ match, history }) {

  const { id } = match.params;

  const dispatch = useDispatch();
  const restaurantList = useSelector(state => state.itemEditing);
  const sanhTheoNh = useSelector((state) => state.sanhnhahang);
  const dataAccount = useSelector(state => state.account);
  const itemHall = useSelector((state) => state.hallEditing);
  const dataListService = useSelector(state => state.service.listServices);
  const listBooking = useSelector((state) => state.booking.bookingRestaurant);
  const [visible, setVisible] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [thoiGianDatTiec, setThoiGianDatTiec] = useState();
  const [gioDatTiec, setGioDatTiec] = useState();
  const [idCheck, setIdCheck] = useState();

  function comeBack() {
    history.goBack();
  }

  function renderWarning() {
    return (
      <Card title="Mời bạn đăng nhập để đặt tiệc" extra={<Button type="primary" onClick={() => comeBack()}>Quay lại</ Button>}>
        <Skeleton active />
      </Card>
    )
  }

  function showDrawer(id) {
    setVisible(true);
    dispatch(act.actGetSanhRequest(id));
    setIdCheck(id)
  };

  function onSave(value) {

    let titleService = 0;
    let priceService = 0;

    if (listBooking && Array.isArray(listBooking) && listBooking.filter(
      (itemBK) =>
        itemBK.itemHall.id === idCheck &&
        itemBK.dateBook === thoiGianDatTiec &&
        itemBK.timeBook === gioDatTiec
    ).length > 0
    ) {
      openNotification(
        "Thông báo",
        "Khung giờ này đã có người đặt, Mong quý khách thông cảm!"
      );
    } else {
      if (
        dataListService && Array.isArray(dataListService) &&
        dataListService.filter((itemService) => itemService.id === value.serviceId).length > 0
      ) {
        titleService = dataListService.filter((itemService) => itemService.id === value.serviceId)[0].title;
        priceService = dataListService.filter((itemService) => itemService.id === value.serviceId)[0].price;
      }
      value = {
        ...value,
        dateBook: moment(value.dateBook).format("DD-MM-YYYY"),
        itemHall: itemHall,
        titleService: titleService,
        priceService: priceService,
        dataAccount: dataAccount,
      };
      dispatch(act.actCreateDatBanRequest(value));
      setSaveSuccess(!saveSuccess);
    }
  }

  useEffect(() => {
    dispatch(act.actFetchSanhNhaHangRequest(id));
    dispatch(act.actGetRestaurantRequest(id));
  }, [])
  const onClose = () => {
    setVisible(false);
  };

  function renderHallItems() {
    return sanhTheoNh.map((hallItem, hallIndex) => {
      return (
        <Card key={`hall-${hallIndex}`} style={{ marginTop: 16 }}>
          <Alert
            message={hallItem.bookNice}
            type="error"
            icon={<ClockCircleOutlined />}
            showIcon
            style={{ marginBottom: 16 }}
          />
          <Row justify="space-between">
            <h4 style={{ color: '#c41d7f' }}>{hallItem.hallName}</h4>
            <Space>
              <div>Vui lòng đặt bàn tại Sảnh để được báo giá!</div>
              <Button type="primary" onClick={() => showDrawer(hallItem.id)}>Đặt bàn</Button>
            </Space>
          </Row>
          <Row gutter={16} style={{ marginTop: 16 }}>
            <Col span={8}>
              {Array.isArray(hallItem.img) && hallItem.img.length > 0 && hallItem.img.map((hallItem, index) => {
                if (hallItem) {
                  return (
                    <Image key={index} src={hallItem} style={{ width: '100%', height: '135px', objectFit: 'cover' }} />
                  )
                }
              })}
            </Col>
            <Col span={10}>
              <Descriptions
                layout="horizontal"
                bordered
              >
                <Descriptions.Item label="Sức chứa" span={3}>
                  {hallItem.quantity} bàn
                </Descriptions.Item>
                <Descriptions.Item label="Tầng" span={3}>
                  {hallItem.floor}
                </Descriptions.Item>
                <Descriptions.Item label="View" span={3}>
                  {hallItem.view}
                </Descriptions.Item>
                <Descriptions.Item label="Thuộc Thành Phố" span={3}>
                  {hallItem.city}
                </Descriptions.Item>
                <Descriptions.Item label="Giá/bàn" span={3}>
                  {renderTien(hallItem.price)}
                </Descriptions.Item>
              </Descriptions>
            </Col>
            <Col span={6}>
              <Divider orientation="left" style={{ marginTop: 0, color: '#c41d7f' }}>Các tiếc mục</Divider>
              <ul>
                <li style={{ fontSize: '16px' }}>Nhảy sexy: Vũ điệu hawai sôi nổi</li>
                <li style={{ fontSize: '16px' }}>Band nhạc trẻ: Những ca khúc hot</li>
                <li style={{ fontSize: '16px' }}>Múa quạt: Động tác dẻo dai</li>
                <li style={{ fontSize: '16px' }}>Múa cổ điển: Đi theo năm tháng</li>
                <li style={{ fontSize: '16px' }}>Múa nước: Sẽ đẹp hơn khi tại biển</li>
              </ul>
            </Col>
          </Row>
          <Space>
            <InfoCircleOutlined />
            <div style={{ fontSize: 16, marginTop: 8 }}>{hallItem.title}</div>
          </Space>
        </Card>
      );
    })
  }

  return (
    <div style={{ background: '#fff0f6', marginTop: 70 }}>
      <div style={{ maxWidth: 1280, width: '100%', margin: '0 auto', padding: '32px 16px' }}>
        {
          dataAccount.checkToken ?
            <>
              {/* <Button style={{ marginTop: '20px', marginLeft: '20px' }} type="primary" onClick={() => comeBack()}>Quay lại</Button> */}
              <Row gutter={[16, 8]}>
                <Col span={14}>
                  <iframe style={{ borderRadius: 5 }} width="100%" height="376px" src={restaurantList.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col span={10}>
                  <Row gutter={[16, 8]}>
                    <Col span={24}>
                      <div>
                        <Image src={restaurantList.img} style={{ width: '100%', height: '180px', borderRadius: 5, objectFit: 'cover' }} />
                      </div>
                    </Col>
                    {Array.isArray(restaurantList.img1) && restaurantList.img1.length > 0 && restaurantList.img1.map((item, index) => {
                      if (item) {
                        return (
                          <Col span={12}>
                            <Image key={index} src={item} style={{ width: '100%', height: '180px', borderRadius: 5, objectFit: 'cover' }} />
                          </Col>
                        )
                      }
                    })}
                  </Row>
                </Col>
                <Col span={14}>
                  <Card style={{ marginBottom: '16px' }}>
                    <div>
                      <div>
                        <Tag icon={<AudioOutlined />} color="#c41d7f" style={{ height: 24 }}>
                          MC miễn phí
                        </Tag>
                      </div>
                      <Space>
                        <h4 style={{ fontSize: '24px', paddingTop: '16px' }}>
                          {restaurantList.restaurantName}
                        </h4>
                        <Rate disabled value={restaurantList.rate} />
                      </Space>
                      <div>
                        <div style={{ fontSize: '16px' }}>{restaurantList.address}, {restaurantList.district}, {restaurantList.city} </div>
                        <div style={{ fontSize: '16px' }}>Số điện thoại:  {restaurantList.phoneNumber}</div>
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div style={{ display: 'flex', width: '100%', textAlign: 'center', color: 'green' }}>
                      <div style={{ width: '20%' }}><i style={{ color: 'green', fontSize: '18px' }} class="fa fa-beer" aria-hidden="true"></i> <br /> Bia cao cấp</div>
                      <div style={{ width: '20%' }}><i style={{ color: 'green', fontSize: '18px' }} class="fa fa-glass" aria-hidden="true"></i> <br /> Khu bar</div>
                      <div style={{ width: '20%' }}><i style={{ color: 'green', fontSize: '18px' }} class="fa fa-television" aria-hidden="true"></i> <br /> TV chiếu</div>
                      <div style={{ width: '20%' }}><i style={{ color: 'green', fontSize: '18px' }} class="fa fa-phone" aria-hidden="true"></i> <br /> Nhân viên chăm sóc khách hàng </div>
                      <div style={{ width: '20%' }}><i style={{ color: 'green', fontSize: '18px' }} class="fa fa-snowflake-o" aria-hidden="true"></i> <br /> Điều hòa </div>
                    </div>
                  </Card>
                </Col>
                <Col span={10}>
                  <Card>
                    <Row justify="space-between" style={{ marginBottom: 8, paddingBottom: 4, borderBottom: '1px solid #f5f5f5' }}>
                      <Space>
                        <i style={{ color: 'green', fontSize: '18px' }} class="fa fa-car" aria-hidden="true"></i>
                        <div>Đỗ xe </div>
                      </Space>
                      <span style={{ paddingLeft: '59%' }}>MIỄN PHÍ</span>
                    </Row>
                    <div style={{ width: '100%', height: '100%' }}>
                      <iframe src={restaurantList.map} width="100%" height="216px" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Divider orientation="left" style={{ color: '#c41d7f' }}>Hiện có {sanhTheoNh && sanhTheoNh.length} sảnh có sẵn</Divider>
              {renderHallItems()}
              <DrawerDatTiec
                saveSuccess={saveSuccess}
                visible={visible}
                onClose={onClose}
                onSave={onSave}
                setThoiGianDatTiec={setThoiGianDatTiec}
                setGioDatTiec={setGioDatTiec}
              />
            </>
            :

            renderWarning()
        }
      </div>
    </div >
  );
}

export default DetailSanh;