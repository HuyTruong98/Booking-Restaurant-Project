import React from 'react';
import { Form, Button, Divider, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as act from "../../../../redux/actions/index";

function ChangePass(props) {
  const account_current = useSelector(state => state.account);
  const dispatch = useDispatch();

  function onSubMit(value) {
    if (account_current?.checkToken && account_current.password === value.passwordOld && account_current !== null) {
      value = {
        ...account_current,
        password: value.newPassword,
      }
      dispatch(act.actUpdateUserRequest(value));
    }
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 26 },
      sm: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };
  return (
    <>
      <Form
        {...formItemLayout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={(value) => onSubMit(value)}
      >

        <Form.Item
          name="passwordOld"
          // initialValue={initialValue.restaurantName}
          rules={[{ required: true, message: "Vui lòng nhập Password!" }]}
        >
          <div className="form-group">
            <label htmlFor="txtFullname">Mật khẩu cũ:</label>
            <Input.Password />
          </div>
        </Form.Item>

        <Form.Item
          name="newPassword"
          // initialValue={initialValue.restaurantName}
          rules={[{ required: true, message: "Vui lòng nhập Password!" }]}
        >
          <div className="form-group">
            <label htmlFor="txtFullname">Mật khẩu mới:</label>
            <Input.Password />
          </div>
        </Form.Item>

        <Form.Item
          name="ComfirmNewPassword"
          // initialValue={initialValue.restaurantName}
          rules={[{ required: true, message: "Vui lòng nhập Password!" }]}
        >
          <div className="form-group">
            <label htmlFor="txtFullname">Xác nhận mật khẩu mới:</label>
            <Input.Password />
          </div>
        </Form.Item>

        <Button type="primary" htmlType="submit" style={{ color: 'black', marginLeft: '75%' }}>
          Đổi mật khẩu
        </Button>
      </Form>
    </>
  );
}

export default ChangePass;