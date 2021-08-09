import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import FormRestaurant from "./form";
import { useForm } from "antd/lib/form/Form";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment'
import * as act from "../../../redux/actions/index";

function ModalCommon({ isVisible, handleCancel, onSave }) {
    const [form] = useForm();
    const initialValue = useSelector((state) => state.itemEditing);
    const dispatch = useDispatch();

    if (initialValue !== null) {
        var dataInitialValue = {}
        if (initialValue.date) {
            dataInitialValue = {
                ...initialValue,
                date: moment(initialValue.date)
            }
        } else {
            dataInitialValue = initialValue
        }
    }

    useEffect(() => {
        form.resetFields();
        form.setFieldsValue(dataInitialValue);
    }, [isVisible, initialValue, form]);

    useEffect(() => {
        dispatch(act.actFetchLocationRequest());
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
                <FormRestaurant onSave={onSave} form={form} />
            </Modal>
        </>
    );
}

export default ModalCommon;
