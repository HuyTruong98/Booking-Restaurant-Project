import React from 'react';
import { Form, Input, Radio, DatePicker, Select } from "antd";
import { useSelector } from "react-redux";
const { Option } = Select;

function FormQuanLyNhanVien({ onSave, form }) {
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
  const onFinishFailed = (errorInfo) => { };
  const dateFormat = "DD/MM/YYYY";
  const dataSelectChucVuNhanVien = useSelector((state) => state.danhmuc.listDanhMucChucVuNhanVien);


  console.log(dataSelectChucVuNhanVien);
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
          label="Tên nhân viên"
          name="fullName"
          // initialValue={initialValue.restaurantName}
          rules={[{ required: true, message: "Vui lòng nhập tên nhân viên!" }]}
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
          label="Ngày sinh"
          name="birthDay"
          hasFeedback
          validateStatus="success"
        >
          <DatePicker style={{ width: "100%" }} format={dateFormat} />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: "Vui lòng nhập số địa chỉ!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Thành phố" name="city">
          <Input />
        </Form.Item>

        <Form.Item
          label="Mã số nv"
          name="codeStaff"
          rules={[{ required: true, message: "Vui lòng nhập mã số nhân viên!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Chức vụ "
          name="positionId"
          rules={[{ required: true, message: "Vui lòng nhập chức vụ!" }]}
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
            {dataSelectChucVuNhanVien.map((item, index) => (
              <Option key={index + item.id} value={item.id}>
                {item.positionName}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </>
  );
}

export default FormQuanLyNhanVien;