import React, { useEffect } from 'react';
import { Modal, Button } from "antd";
import { useForm } from 'antd/lib/form/Form';
import FormSanh from './formSanh';
import { useSelector } from 'react-redux';

function ModalSanh({ handleCancel, onSave, isVisible }) {
  const [form] = useForm();
  const initialValue = useSelector((state) => state.hallEditing);

  if (initialValue !== null) {
    var dataInitialValue = {}
    if (initialValue.date) {
      dataInitialValue = {
        ...initialValue,
      }
    } else {
      dataInitialValue = initialValue
    }
  }

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(dataInitialValue);
  }, [isVisible, initialValue, form]);

  return (
    <>
      <Modal
        title="Thêm mới"
        visible={isVisible}
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Button onClick={() => form.submit()}>OK</Button>,
          <Button onClick={handleCancel}>Hủy</Button>,
        ]}
      >
        <FormSanh onSave={onSave} form={form} />
      </Modal>
    </>
  );
}

export default ModalSanh;