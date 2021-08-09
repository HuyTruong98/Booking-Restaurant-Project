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

function TableManagementHotel({
  match,
  data,
  onDelete,
  onEdit,
  onShowSanhTheoNhaHang,
}) {
  const [selectionType, setSelectionType] = useState();
  const userLogin = useSelector((state) => state.account);

  const columns = [
    {
      title: "Tên nhà hàng",
      dataIndex: "restaurantName",
      render: (data, record) => renderDetail(record),
    },
    {
      title: "Chủ sở hữu",
      dataIndex: "ownerName",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
    },
    {
      title: "Ngày đăng ký",
      dataIndex: "date",
      render: (data, record) => renderDate(data),
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Quận",
      dataIndex: "district",
    },
    {
      title: "Thành phố",
      dataIndex: "city",
    },
    {
      title: "Rate",
      dataIndex: "rate",
    },
    {
      title: "Location",
      dataIndex: "locationId",
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
    return (
      <NavLink to={`${url}/${record.id}`}>{record.restaurantName}</NavLink>
    );
  }

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
        <Menu.Item>
          <a
            style={{ textAlign: "center" }}
            onClick={() => {
              onShowSanhTheoNhaHang(record.id);
            }}
          >
            Sảnh nhà hàng
          </a>
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

export default TableManagementHotel;
