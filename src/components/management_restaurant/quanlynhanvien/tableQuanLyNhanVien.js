import React, { useState } from 'react';
import {
  Table,
  Divider,
  Radio,
  message,
  Popconfirm,
  Menu,
  Dropdown,
  Button,
  Space,
} from "antd";
import * as Message from '../../../constants/Message';
import moment from 'moment';
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';


function TableQuanLyNhanVien({ match, data, onDelete, onEdit }) {
  const [selectionType, setSelectionType] = useState();
  const userLogin = useSelector((state) => state.account);
  const columns = [
    {
      title: "Tên nhân viên",
      dataIndex: "fullName",
      render: (data, record) => renderDetail(record),
    },

    {
      title: "Ngày sinh",
      dataIndex: "birthDay",
      render: (data, record) => renderDate(data),
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Thành phố",
      dataIndex: "city",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Chức vụ",
      dataIndex: "positionName",
    },
    {
      title: "Mã số nv",
      dataIndex: "codeStaff",
    },
    {
      title: userLogin.role === "ADMIN" ? "" : "",
      dataIndex: "action",
      render: (data, record) => actionRender(record),
    },
  ];

  const renderDate = (data) => {
    if (data) {
      return <>{moment(data).format("DD/MM/YYYY")}</>;
    }
  };

  function renderDetail(record) {
    return <p>{record?.fullName}</p>;
  }

  function confirm(id) {
    onDelete(id);
    message.warning(Message.BAN_CO_MUON_XOA);
  }

  function actionRender(record) {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            style={{ textAlign: "center" }}
            onClick={() => {
              onEdit(record.id);
            }}
          >
            Sửa
          </a>
        </Menu.Item>
        <Menu.Item>
          <Popconfirm
            placement="topRight"
            title={Message.BAN_CO_MUON_XOA}
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            onConfirm={() => confirm(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <a style={{ textAlign: "center" }}>Xóa</a>
          </Popconfirm>
        </Menu.Item>
      </Menu>
    );
    return (
      <>
        <Space direction="vertical">
          <Space wrap>
            <Dropdown overlay={menu} placement="bottomCenter">
              <i
                className="fa fa-cogs"
                style={{ color: "GrayText", fontSize: "18px" }}
              ></i>
            </Dropdown>
          </Space>
        </Space>
      </>
    );
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => { },
  };
  return (
    <div>
      <Divider />
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        dataSource={data}
        columns={columns}
      />
    </div>
  );
}

export default TableQuanLyNhanVien;