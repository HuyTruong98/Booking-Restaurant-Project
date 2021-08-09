import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../redux/actions/index";

function FormReg(props) {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user_list);
  const [regForm] = Form.useForm();

  const onFinishFailed = (errorInfo) => { };
  const onFinish = (value) => {
    const userSuccessIndex = dataUser.findIndex((item, index) => value.email === item.email);
    if (userSuccessIndex !== -1) {
      regForm.setFields([
        {
          name: 'email',
          errors: ['Email đăng kí đã tồn tại']
        }
      ])
    } else {
      const newValue = {
        name: value.name,
        email: value.email,
        password: value.password,
        role: "USER",
        // sợ bị vỡ ảnh thì cho 1 cái ảnh default ngay đây cũng đc
        img: "https://i.pinimg.com/564x/e6/57/55/e65755e73d8085e30aedfa21fde07f1b.jpg"
      };
      // Lúc tạo đừng thêm img của user, user sẽ cập nhật trong profile
      // Cho role mặt định là user, muốn nó là admin phải thay đổi trong user list của trang admin
      dispatch(act.actCreateUserRequest(newValue));
    }
  };
  return (
    <>
      <Form
        form={regForm}
        layout="vertical"
        name="basic"
        onFinish={onFinish}
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
          rules={[
            { required: true, message: "Vui lòng nhập lại mật khẩu!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('Mật khẩu không khớp!');
              },
            }),
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          name="agree"
          valuePropName="checked"
          rules={[{ required: true, message: "Vui lòng chọn!" }]}
        >
          <Checkbox>Tôi đồng ý</Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Đăng Ký
        </Button>
      </Form>
    </>
  );
}

export default FormReg;
