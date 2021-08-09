import React from 'react';
import { Form, Input, Select, Radio, InputNumber, Button, Image, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
const { Option } = Select;


const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 20 },
};

function FormSanh({ onSave, form }) {

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onFinishFailed(errorInfo) {

  };

  function onChange(value) {
    console.log('changed', value);
  }

  const itemSanh = useSelector(state => state.hallEditing);

  return (
    <>
      <Form
        {...layout}
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
          label="Tên sảnh"
          name="hallName"
          // initialValue={initialValue.restaurantName}
          rules={[{ required: true, message: "Vui lòng nhập tên nhà sảnh!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Thuộc nhà hàng"
          name="restaurantName"
          // initialValue={initialValue.restaurantName}
          rules={[{ required: true, message: "Vui lòng nhập tên nhà hàng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số lượng khách"
          name="quantity"
          rules={[{ required: true, message: "Vui lòng nhập số lượng khách chứa!" }]}
        >
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          label="Giá / bàn"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập số tiền!" }]}
        >
          <InputNumber
            style={{ width: "660px" }}
            formatter={(value) =>
              ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>

        <Form.Item
          label="View"
          name="view"
          rules={[{ required: true, message: "Vui lòng chọn view nhà hàng!" }]}
        >
          <Select style={{ width: "100%" }} onChange={handleChange}>
            <Option value="Trong Nhà">Trong Nhà</Option>
            <Option value="Núi">Núi</Option>
            <Option value="Biển">Biển</Option>
            <Option value="Sông">Sông</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Tầng"
          name="floor"
          rules={[{ required: true, message: "Vui lòng nhập số tầng!" }]}
        >
          <InputNumber min={1} max={10} onChange={onChange} />
        </Form.Item>

        <Form.Item name="idRestaurant" style={{ paddingLeft: '20%' }}>
          <Radio.Group>
            <Radio value="1">Đà Nẵng</Radio>
            <Radio value="2">Hà Nội</Radio>
            <Radio value="3">Hồ Chí Minh</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Thành phố"
          name="city"
          rules={[{ required: true, message: "Vui lòng nhập thành phố!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Voucher"
          name="bookNice"
          rules={[{ required: true, message: "Vui lòng nhập quà free!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập tiêu đề!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ảnh của sảnh"
          name="img"
          rules={[{ required: true, message: "Vui lòng nhập ảnh!" }]}
        >
          <Upload
            listType="picture"
            beforeUpload={() => false}
          >
            <Button icon={<UploadOutlined />}>Up ảnh phụ</Button>
            {itemSanh && Array.isArray(itemSanh.img) && itemSanh.img.length > 0 && itemSanh.img.map((itemImg, index) => {
              if (itemImg) {
                return (
                  <Image key={index} src={itemImg} />
                )
              }
            })}
          </Upload>
        </Form.Item>
      </Form>
    </>
  );
}

export default FormSanh;