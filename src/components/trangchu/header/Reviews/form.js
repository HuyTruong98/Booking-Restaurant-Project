import React from 'react';
import { Rate, Form, Button, Input, DatePicker } from 'antd';
import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { openNotification } from '../../../../components/notification/notification';

const { TextArea } = Input;
function FormComment({ onSubmit, form }) {
  const dataAccount = useSelector(state => state.account);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };


  const onFinishFailed = (errorInfo) => { };

  function onReport() {
    openNotification("Mời bạn đăng nhập để sử dụng");
  }

  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        name="basic"
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="comment"
          rules={[{ required: true, message: "Vui lòng nhập phản hồi!" }]}

        >
          <TextArea placeholder="Phản hồi tại đây..." rows={3} />

        </Form.Item>
        <Form.Item
          name="rate"
          rules={[{ required: true, message: "Vui lòng chọn sao!" }]}
        >
          <Rate allowHalf />
        </Form.Item>
        {dataAccount.checkToken ?
          <>
            <Button type="primary" htmlType="submit">
              Đánh giá
            </Button>
          </>
          :
          <Button onClick={() => onReport()}>
            Đánh giá
          </Button>
        }
      </Form>
    </>
  );
}

export default FormComment;