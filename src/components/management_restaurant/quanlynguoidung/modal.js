import React, { useEffect } from 'react';
import FormUser from "../../management_restaurant/quanlynguoidung/form";
import { Modal, Button } from "antd";
import { useForm } from 'antd/lib/form/Form';
import { useSelector } from 'react-redux';

function ModalUser({ isVisible, handleCancel, onSave }) {

  const [form] = useForm();
  const initialValue = useSelector(state => state.itemUser);
  console.log(initialValue);

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(initialValue)
  }, [isVisible, initialValue, form])


  return (
    <>
      <Modal
        title="Thêm mới"
        visible={isVisible}
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Button onClick={handleCancel}>Hủy</Button>,
          <Button onClick={() => form.submit()}>OK</Button>
        ]}
      >
        <FormUser onSave={onSave} form={form} />
      </Modal>
    </>
  );
}

export default ModalUser;