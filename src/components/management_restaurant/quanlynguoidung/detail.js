import React, { useEffect } from 'react';
import { Descriptions, Button, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../../redux/actions/index";

function Detail({ match, history }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const item = useSelector(state => state.itemUser);
  function goBack() {
    history.goBack();
  }

  useEffect(() => {
    dispatch(act.getUserById2(id));
  }, [id]);

  return (
    <>
      <div className="container-fluid" style={{ height: '1800px' }}>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h5 className=" mb-0 text-gray-800">{`Chi tiết người dùng ${item.email !== null && item.restaurantName !== undefined
            ? item.email
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
            <Descriptions.Item label="Tên người dùng" span={3}>
              {item.name && item.name}
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={3}>
              {item.email && item.email}
            </Descriptions.Item>
            <Descriptions.Item label="Mật khẩu" span={3}>
              {item.password && item.password}
            </Descriptions.Item>
            <Descriptions.Item label="Role" span={3}>
              {item.role && item.role}
            </Descriptions.Item>
            <Descriptions.Item label="Ảnh đại diện" span={3}>
              <div className="row ">
                <div className="col-md-12 restaurant1">
                  <Image src={item.img} style={{ width: '80px', height: '80px', borderRadius: '7px' }} />
                </div>

              </div>
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    </>
  );
}

export default Detail;