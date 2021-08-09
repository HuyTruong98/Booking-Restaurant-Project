import React, { useState } from "react";
import { Table, Divider, Radio, message, Popconfirm } from "antd";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import * as Message from "../../../constants/Message";
import moment from "moment";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function TableSanh() {
  const [selectionType, setSelectionType] = useState();
  const dsSanhNhaHang = useSelector((state) => state.sanhnhahang);

  const columns = [
    {
      title: "Tên sảnh",
      dataIndex: "hallName",
      render: (data, record) => renderDetail(record),
    },
    {
      title: "Số lượng khách",
      dataIndex: "quantity",
    },
    {
      title: "Tầng",
      dataIndex: "floor",
    },
    {
      title: "Giá suất / bàn",
      dataIndex: "price",
      render: (data, record) => renderPrice(record),
    },
    {
      title: "View",
      dataIndex: "view",
    }
  ];

  function renderDetail(record) {
    return <NavLink to="">{record.hallName}</NavLink>;
  }

  function renderPrice(record) {
    return <p to="">{record.price.toLocaleString()}</p>;
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
        columns={columns}
        dataSource={dsSanhNhaHang}
      />
    </div>
  );
}

export default TableSanh;
