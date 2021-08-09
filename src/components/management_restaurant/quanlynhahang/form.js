import React, { useState } from "react";
import { Form, Input, Radio, DatePicker, Rate, Select, Upload, Button, Image } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
const { Option } = Select;


export default function FormRestaurant({ onSave, form }) {

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
        },
    };
    const onFinishFailed = (errorInfo) => {

    };
    const dateFormat = 'DD/MM/YYYY';
    const allLocation = useSelector(state => state.location.listLocation);
    const item = useSelector(state => state.itemEditing);

    return (
        <>
            <Form
                {...formItemLayout}
                form={form}
                name="basic"
                onFinish={onSave}
                onFinishFailed={onFinishFailed}
            >

                <Form.Item
                    label="id"
                    name="id"
                    hidden={true}
                // rules={[{ required: true, message: "Vui lòng nhập tên nhà hàng!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Tên nhà hàng"
                    name="restaurantName"
                    // initialValue={initialValue.restaurantName}
                    rules={[{ required: true, message: "Vui lòng nhập tên nhà hàng!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Tên chủ sở hữu"
                    name="ownerName"
                    rules={[{ required: true, message: "Vui lòng nhập tên chủ sở hữu!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Số điện thoại"
                    name="phoneNumber"
                    rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="gender" label="Giới tính">
                    <Radio.Group>
                        <Radio value="Nam">Nam</Radio>
                        <Radio value="Nữ">Nữ</Radio>
                        <Radio value="Khác">Khác</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Số đường"
                    name="address"
                    rules={[{ required: true, message: "Vui lòng nhập số địa chỉ!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Quận"
                    name="district"
                    rules={[{ required: true, message: "Vui lòng nhập số quận!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Thành phố"
                    name="city"
                    rules={[{ required: true, message: "Vui lòng nhập số thành phố!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Video"
                    name="video"
                    rules={[{ required: true, message: "Vui lòng nhập link video!" }]}
                >
                    <Input placeholder="http://.." />
                </Form.Item>

                <Form.Item
                    label="Định vị"
                    name="map"
                    rules={[{ required: true, message: "Vui lòng nhập link định vị!" }]}
                >
                    <Input placeholder="http://.." />
                </Form.Item>


                <Form.Item
                    label="Ảnh chính"
                    name="img"
                    rules={[{ required: true, message: "Vui lòng nhập  ảnh!" }]}
                >
                    <Upload
                        listType="picture"
                        beforeUpload={() => false}
                    >
                        <Button icon={<UploadOutlined />}>Up ảnh chính</Button>
                        <Image src={item && item.img} />
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Ảnh phụ"
                    name="img1"
                    rules={[{ required: true, message: "Vui lòng nhập  ảnh!" }]}
                >
                    <Upload
                        listType="picture"
                        beforeUpload={() => false}
                    >
                        <Button icon={<UploadOutlined />}>Up ảnh phụ</Button>
                        {item && Array.isArray(item.img1) && item.img1.length > 0 && item.img1.map((itemImg1, index) => {
                            if (itemImg1) {
                                return (
                                    <Image key={index} src={itemImg1} />
                                )
                            }
                        })}
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Rate"
                    name="rate"
                    rules={[{ required: true, message: "Vui lòng chọn sao!" }]}
                >
                    <Rate allowHalf />
                </Form.Item>

                <Form.Item
                    label="Thuộc Tp"
                    name="locationId"
                    rules={[{ required: true, message: "Vui lòng chọn!" }]}
                >
                    <Select
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children
                                .toLowerCase()
                                .localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {allLocation.map((item, index) => (
                            <Option key={index + item.id} value={item.id}>
                                {item.city}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item label="Ngày đăng ký" name="date" hasFeedback validateStatus="success">
                    <DatePicker style={{ width: "100%" }} format={dateFormat} />
                </Form.Item>


            </Form>
        </>
    );
}

