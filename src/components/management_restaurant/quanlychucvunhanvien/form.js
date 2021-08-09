import React, { useState } from "react";
import { Form, Input, Radio, DatePicker, Select } from "antd";
import { useSelector } from "react-redux";
const { Option } = Select;

function FormQuanLyChucVuNhanVien({ onSave, form }) {
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
  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="basic"
        onFinish={onSave}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="id" name="id" hidden={true}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Tên chức vụ"
          name="positionName"
          // initialValue={initialValue.restaurantName}
          rules={[{ required: true, message: "Vui lòng nhập!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </>
  );
}

export default FormQuanLyChucVuNhanVien;
