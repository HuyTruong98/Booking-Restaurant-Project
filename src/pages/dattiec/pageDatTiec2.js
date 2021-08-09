import {
  Row,
  Col,
  Divider,
  List,
  Descriptions,
  Button,
  Image,
  Space,
  Rate,
  Input,
  Card,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import * as act from "../../redux/actions/index";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import weddingBackground from "../../static/img/wedding-background.jpg";

function PageDatTiec2() {
  const dispatch = useDispatch();
  const listLocations = useSelector((state) => state.location.listLocation);
  const restaurantList = useSelector((state) => state.restaurant);
  const [dataNhaHang, setDataNhaHang] = useState();
  const [searchKey, setSearchKey] = useState("");
  const [locationSelected, setLocationSelected] = useState(-1);

  const filterRestaurant = restaurantList.filter((item) => {
    return (
      item.restaurantName
        .trim()
        .toLowerCase()
        .indexOf(searchKey.trim().toLowerCase()) !== -1
    );
  });

  const handleOnChangeTheoNH = (id) => {
    console.log(id);
    setLocationSelected(id);
    dispatch(act.actGetRestaurantRequest(id));
    setDataNhaHang(restaurantList.filter((itemNH) => itemNH.locationId === id));
  };


  const renderDate = () => {
    return <>{moment().format("DD/MM/YYYY")}</>;
  };

  useEffect(() => {
    dispatch(act.actFetchLocationRequest());
    dispatch(act.actFetchRestaurantRequest());
    dispatch(act.actFetchTatCaSanhRequest());
  }, []);

  const renderRestaurantItems = () => {
    const restaurantList =
      dataNhaHang && dataNhaHang.length > 0 ? dataNhaHang : filterRestaurant;
    return restaurantList.map((restaurantItem, restaurantIndex) => (
      <Card size="small" style={{ marginBottom: 16 }}>
        <Row gutter={16}>
          <Col span={8}>
            <Image
              src={restaurantItem.img}
              style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: 5 }}
            />
          </Col>
          <Col span={16}>
            <Row justify="space-between">
              <div>
                <h4 style={{ color: '#c41d7f' }}>{restaurantItem.restaurantName}</h4>
                <Rate disabled value={restaurantItem.rate} />
              </div>
              <NavLink
                to={{
                  pathname: `/booking/${restaurantItem.id}`,
                  id: restaurantItem.id,
                }}
              >
                <Button type="primary">Chi tiết</Button>
              </NavLink>
            </Row>
            <Descriptions
              layout="horizontal"
              bordered
              size="small"
              style={{ marginTop: 16 }}
            >
              <Descriptions.Item label="Số điện thoại" span={3}>
                {restaurantItem.phoneNumber}
              </Descriptions.Item>
              <Descriptions.Item label="Địa chỉ" span={3}>
                {restaurantItem.address} - {restaurantItem.district}
              </Descriptions.Item>
              <Descriptions.Item label="Thành phố" span={3}>
                {restaurantItem.city}
              </Descriptions.Item>
              <Descriptions.Item label="Ngày thành lập" span={3}>
                {renderDate(restaurantItem.date)}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Card>
    ));
  };

  return (
    <>
      <div style={{ marginTop: 70, background: "#fff0f6" }}>
        <div
          className="restaurant-list-top"
          style={{ backgroundImage: `url(${weddingBackground})` }}
        >
          <div className="restaurant-list-background">
            <Input
              size="large"
              placeholder="Tìm nhà hàng..."
              bordered
              suffix={<SearchOutlined />}
              onChange={(e) => setSearchKey(e.target.value)}
              style={{ width: 500 }}
            />
          </div>
        </div>
        <div className="restaurant-list-container">
          <Row gutter={16}>
            <Col span={5}>
              <Divider orientation="left" style={{ color: '#c41d7f' }}>Địa điểm</Divider>
              <Card size="small">
                <List
                  dataSource={[
                    {
                      id: -1,
                      city: "Tất cả",
                      key: -1,
                    },
                    ...listLocations,
                  ]}
                  renderItem={(item) => (
                    <List.Item
                      className={`restaurant-location-item ${locationSelected === item.id ? "active" : ""
                        }`}
                      onClick={() => handleOnChangeTheoNH(item.id)}
                    >
                      {item.city}
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
            <Col span={19}>
              <Divider orientation="left" style={{ color: '#c41d7f' }}>
                Danh sách nhà hàng theo địa điểm
              </Divider>
              {renderRestaurantItems()}
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default PageDatTiec2;
