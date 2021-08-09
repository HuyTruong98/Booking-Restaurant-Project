import React, { useState } from 'react';
import { Divider, Table, Popconfirm, message } from 'antd';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";
import * as Message from '../../../constants/Message';

function TableUser({ data, match, onDelete, onEdit }) {

  const [selectionType, setSelectionType] = useState();
  const columns = [

    {
      title: "Email",
      dataIndex: "email",
      render: (data, record) => renderDetail(record),
    },
    {
      title: "Tên người dùng",
      dataIndex: "name",
    },
    {
      title: "Mật khẩu",
      dataIndex: "password",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (data, record) => actionRender(record),
    },
  ];



  function renderDetail(record) {
    return (
      <NavLink to={`${url}/${record.id}`}>{record.email}</NavLink>
    );
  }

  function confirm(id) {
    onDelete(id);
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
    <>
      <Divider />
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
}

export default TableUser;