import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import FormQuanLyChucVuNhanVien from "./form";
import { useForm } from "antd/lib/form/Form";
import moment from "moment";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import * as act from "../../../redux/actions/index";

function ModalQuanLyChucVuNhanVien({ isVisible, handleCancel, onSave }) {
  const [form] = useForm();
  const initialValue = useSelector((state) => state.quanlychucvunhanvien.item);
  const dispatch = useDispatch();

  if (initialValue !== null) {
    var dataInitialValue = {};
    if (initialValue.date) {
      dataInitialValue = {
        ...initialValue,
        date: moment(initialValue.date),
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
  }, []);

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
        <FormQuanLyChucVuNhanVien onSave={onSave} form={form} />
      </Modal>
    </>
  );
}

export default ModalQuanLyChucVuNhanVien;
