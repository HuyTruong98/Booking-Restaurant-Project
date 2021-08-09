import React, { useState } from "react";
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
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import * as Message from "../../../constants/Message";
import moment from "moment";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function TableQuanLyNhanVien({ match, data, onDelete, onEdit }) {
  const [selectionType, setSelectionType] = useState();
  const userLogin = useSelector((state) => state.account);

  const columns = [
    {
      title: "STT",
      render: (data, record, index) => renderSTT(data, record, index),
    },
    {
      title: "Tên chức vụ",
      dataIndex: "positionName",
    },
    {
      title: userLogin.role === "ADMIN" ? "" : "",
      dataIndex: "action",
      render: (data, record) => actionRender(record),
    },
  ];

  const renderSTT = (data, record, index) => {
    return <>{index + 1}</>;
  };

  function confirm(id) {
    onDelete(id);
    message.warning(Message.XOA_THANH_CONG);
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
  var url = match.url;
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
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default TableQuanLyNhanVien;
