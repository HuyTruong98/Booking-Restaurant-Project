import { useForm } from 'antd/lib/form/Form';
import { Modal, Button } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as act from '../../../redux/actions/index';
import moment from "moment";
import FormQuanLyNhanVien from './formQuanLyNhanVien';

function ModalNhanVien({ isVisible, handleCancel, onSave }) {
  const [form] = useForm();
  const initialValue = useSelector((state) => state.quanlynhanvien.item);
  const dispatch = useDispatch();

  if (initialValue !== null) {
    var dataInitialValue = {};
    if (initialValue) {
      dataInitialValue = {
        ...initialValue,
        birthDay: moment(initialValue.birthDay),
      };
    } else {
      dataInitialValue = initialValue;
    }
  }

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue(dataInitialValue);
  }, [isVisible, initialValue, form]);

  useEffect(() => {
    dispatch(act.actGetAllChucVuNhanVienRequest());
  }, [])

  return (
    <>
      <Modal
        title="Thêm mới"
        visible={isVisible}
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Button onClick={handleCancel}>Hủy</Button>,
          <Button onClick={() => form.submit()}>OK</Button>,
        ]}
      >
        <FormQuanLyNhanVien onSave={onSave} form={form} />
      </Modal>
    </>
  );
}

export default ModalNhanVien;