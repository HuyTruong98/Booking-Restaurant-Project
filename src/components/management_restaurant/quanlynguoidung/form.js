import React from 'react';
import { Form, Input, Radio } from "antd";

function FormUser({ onSave, form }) {


  const onFinishFailed = () => {

  }

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        name="basic"
        onFinish={onSave}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          validateFirst
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên!"
            },
          ]}
        >
          <Input size="large" placeholder="@gmail.com" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          validateFirst
          rules={[
            {
              required: true,
              message: "Vui lòng nhập email!"
            },
            {
              type: "email",
              message: "Email không đúng định dạng!"
            },
          ]}
        >
          <Input size="large" placeholder="@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="confirmPass"
          rules={[{ required: true, message: "Vui lòng nhập lại mật khẩu!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item label="Chọn chức quyền" name="role">
          <Radio.Group>
            <Radio value="User">User</Radio>
            <Radio value="Admin">Admin</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  );
}

export default FormUser;