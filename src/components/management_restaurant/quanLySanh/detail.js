import React, { useEffect, useState } from "react";
import { Descriptions, Button, Image } from "antd";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as act from "../../../redux/actions/index";
import { renderTien } from "../../notification/renderConvert";

function Detail({ match, history }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const item = useSelector((state) => state.hallEditing);

  useEffect(() => {
    dispatch(act.actGetSanhRequest(id));
  }, [id]);

  function goBack() {
    history.goBack();
  }
  return (
    <>
      <div className="container-fluid" style={{ height: '1800px' }}>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h5 className=" mb-0 text-gray-800">{`Chi tiết  ${item && item.hallName
            ? item.hallName
            : ""
            }`}</h5>
          <Button
            type="primary"
            style={{ color: 'black' }}
            onClick={() => {
              goBack();
            }}
          >
            Quay lại
          </Button>
        </div>
        <div className=" background-detail-custom  shadow " >
          <Descriptions size="small" layout="horizontal" bordered>
            <Descriptions.Item label="Tên sảnh" span={3}>
              {item && item.hallName && item.hallName}
            </Descriptions.Item>
            <Descriptions.Item label="Thuộc nhà hàng" span={3}>
              {item && item.restaurantName && item.restaurantName}
            </Descriptions.Item>
            <Descriptions.Item label="Sức chứa" span={3}>
              {item && item.quantity && item.quantity}
            </Descriptions.Item>
            <Descriptions.Item label="Tầng" span={3}>
              {item && item.floor && item.floor}
            </Descriptions.Item>
            <Descriptions.Item label="View" span={3}>
              {item && item.view && item.view}
            </Descriptions.Item>
            <Descriptions.Item label="Giá / bàn" span={3}>
              {item && item.price && renderTien(item.price)}
            </Descriptions.Item>
            <Descriptions.Item label="Sức chứa" span={3}>
              {item && item.quantity && item.quantity}
            </Descriptions.Item>
            <Descriptions.Item label="Được tặng" span={3}>
              {item && item.bookNice && item.bookNice}
            </Descriptions.Item>
            <Descriptions.Item label="Tiêu đề" span={3}>
              {item && item.title && item.title}
            </Descriptions.Item>
            <Descriptions.Item label="Ảnh của sảnh" span={3}>
              {Array.isArray(item && item.img) && item.img.length > 0 && item.img.map((item, index) => {
                if (item) {
                  return (
                    <Image key={index} src={item} style={{ width: '400px', height: '260px', borderRadius: '7px' }} />
                  )
                }
              })}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </>
  );
}

export default Detail;
