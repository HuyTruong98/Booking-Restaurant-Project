import React, { useEffect, useState } from "react";
import { Descriptions, Button, Image } from "antd";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as act from "../../../redux/actions/index";
import moment from "moment";

function Detail({ match, history }) {
    const { id } = match.params;
    const dispatch = useDispatch();
    const item = useSelector((state) => state.itemEditing);

    useEffect(() => {
        dispatch(act.actGetRestaurantRequest(id));
    }, [id]);

    function goBack() {
        history.goBack();
    }
    return (
        <>
            <div className="container-fluid" style={{ height: '1800px' }}>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h5 className=" mb-0 text-gray-800">{`Chi tiết nhà hàng ${item && item.restaurantName
                        ? item.restaurantName
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
                        <Descriptions.Item label="Tên nhà hàng" span={3}>
                            {item && item.restaurantName && item.restaurantName}
                        </Descriptions.Item>
                        <Descriptions.Item label="Tên chủ sở hữu" span={3}>
                            {item && item.ownerName && item.ownerName}
                        </Descriptions.Item>
                        <Descriptions.Item label="Số điện thoại" span={3}>
                            {item && item.phoneNumber && item.phoneNumber}
                        </Descriptions.Item>
                        <Descriptions.Item label="Giới tính" span={3}>
                            {item && item.gender && item.gender}
                        </Descriptions.Item>
                        <Descriptions.Item label="Ngày sinh" span={3}>
                            {moment(item && item.date && item.date).format("DD/MM/YYYY")}
                        </Descriptions.Item>
                        <Descriptions.Item label="Địa chỉ" span={3}>
                            {item && item.address && item.address}
                        </Descriptions.Item>
                        <Descriptions.Item label="Thuộc thành phố" span={3}>
                            {item && item.locationId && item.locationId}
                        </Descriptions.Item>
                        <Descriptions.Item label="Thuộc nhà hàng" span={3}>
                            {item && item.rate && item.rate} <i style={{ color: 'gold' }} class="fa fa-star" aria-hidden="true"></i>
                        </Descriptions.Item>
                        <Descriptions.Item label="Link video" span={3}>
                            <iframe width="300" height="250" src={item && item.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Descriptions.Item>
                        <Descriptions.Item label="Link map" span={3}>
                            <iframe src={item && item.map} width="300" height="250" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
                        </Descriptions.Item>
                        <Descriptions.Item label="Tất cả ảnh" span={3}>
                            <div className="row ">
                                <div className="col-md-12 restaurant1">
                                    <Image src={item && item.img} style={{ width: '100%', height: '260px', borderRadius: '7px' }} />
                                </div>
                                <div className="col-md-12 highlight-restaurant">
                                    {item && Array.isArray(item.img1) && item.img1.length > 0 && item.img1.map((item, index) => {
                                        if (item) {
                                            return (
                                                <Image key={index} src={item} style={{ width: '100%', height: '260px', borderRadius: '7px' }} />
                                            )
                                        }
                                    })}
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
