import React, { useState } from "react";
import { Table, Divider, Radio, message, Popconfirm, Pagination } from "antd";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import * as Message from '../../../constants/Message';
import { QuestionCircleOutlined } from "@ant-design/icons";



function TableSanh({ match, data, onDelete, onEdit }) {


  const [selectionType, setSelectionType] = useState();

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
      title: "Giá suất / bàn",
      dataIndex: "price",
      render: (data, record) => renderPrice(record),
    },
    {
      title: "Tầng",
      dataIndex: "floor",
    },
    {
      title: "Thành phố",
      dataIndex: "city",
    },
    {
      title: "View",
      dataIndex: "view",
    },
    {
      title: "Hỗ trợ",
      dataIndex: "bookNice",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (data, record) => actionRender(record),
    },
  ];


  function renderDetail(record) {
    return (
      <NavLink to={`${url}/${record.id}`}>{record.hallName}</NavLink>
    );
  }

  function renderPrice(record) {
    return <p to="">{record.price.toLocaleString()}</p>;
  }

  function confirm(id) {
    onDelete(id);
    message.warning(Message.XOA_THANH_CONG)
  }

  function actionRender(record) {
    return (
      <div className="row">
        <div className="col-md-2">
          <a>
            <i
              className="fa fa-pencil-square-o"
              style={{ color: "green", fontSize: "18px" }}
              onClick={() => {
                onEdit(record.id);
              }}
            ></i>
          </a>
        </div>
        <div className="col-md-2">
          <Popconfirm
            placement="topRight"
            title={Message.BAN_CO_MUON_XOA}
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            onConfirm={() => confirm(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <a>
              <i
                className="fa fa-trash-o"
                style={{ color: "red", fontSize: "20px" }}
              ></i>
            </a>
          </Popconfirm>
        </div>
      </div>
    )
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

export default TableSanh;
