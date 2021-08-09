import React from "react";
import { Form, Input, Button } from "antd";

function FormLog({ login }) {

  const onFinishFailed = (errorInfo) => { };

  return (
    <div className="login-form-container">
      <Form
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={(values) => login(values)}
        onFinishFailed={onFinishFailed}
      >
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
          rules={[{ required: true, message: "Vui lòng nhập Password!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Đăng Nhập
        </Button>
      </Form>
    </div>
  );
}

export default FormLog;
