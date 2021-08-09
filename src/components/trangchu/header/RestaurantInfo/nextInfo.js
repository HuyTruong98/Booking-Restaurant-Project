import { Row, Col, List, Avatar, Space } from 'antd';
import { LikeOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';


const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function NextInfo({ dataListRestaurant }) {
  // return dataListRestaurant.map(item => {
  return (
    <>
      <div className="title-Name-restaurant">
        <p>Hiện tại trên toàn cả nước Mường Thanh chúng tôi đã sở hữu 8 nhà hàng trải dài từ Nam ra Bắc</p>
      </div>
      <Row>
        <Col span={4}></Col>
        <Col span={16} style={{ background: 'white' }}>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
            }}
            dataSource={dataListRestaurant}
            footer={
              <div style={{ textAlign: 'center', paddingTop: '40px' }}>
                <b>Đặt Bàn</b> để nhận ưu đãi và được báo giá sớm nhất!
              </div>
            }
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="200" key="list-vertical-like-o" />,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src={item.img}
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.img} />}
                  title={<a >{item.restaurantName}</a>}
                  description={<a >{item.address} / {item.district} / {item.city} </a>}
                />
                <iframe width="200" height="100" src={item.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> &emsp;
                <iframe src={item.map} width="200" height="100" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
              </List.Item>
            )}
          />
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
  // })
}

export default NextInfo;