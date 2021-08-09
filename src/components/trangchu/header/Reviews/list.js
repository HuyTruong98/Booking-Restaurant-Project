import React from 'react';
import { List, Avatar, Comment, Rate, Popconfirm, Tooltip, DatePicker } from 'antd';
import * as Message from '../../../../constants/Message';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

function ListComment({ listComment, onDelete, onEdit }) {
  const dataAccount = useSelector((state) => state.account);

  // let commentUser = [];
  // if (commentAccount && commentAccount.filter((itemAccount) =>
  //   itemAccount.account_current.id)
  // ) {
  //   commentAccount.filter((itemAccount) =>
  //     itemAccount.account_current.id).account_current.map((item) => {
  //       commentUser.push(item);
  //     })
  // }

  function confirm(id) {
    onDelete(id);
  }

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={listComment}
        renderItem={item => (

          <Comment
            actions={[
              <>

                {dataAccount?.checkToken && dataAccount.name === item.account_current.name ?
                  <Popconfirm
                    placement="topRight"
                    title={Message.BAN_CO_MUON_XOA_BINH_LUAN}
                    onConfirm={() => confirm(item.id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <span >Xóa</span>
                  </Popconfirm>
                  : ""
                }
              </>
            ]}
            author={<p style={{ fontSize: '15px' }}>{item.account_current.name}</p>}
            avatar={
              <Avatar
                src={item.account_current.img}
              />
            }
            content={
              <>
                <p>{item.comment}</p>
                <Rate disabled value={item.rate} />
              </>
            }

            datetime={
              <span>{item.dateFormat}</span>
            }
          />

        )}
      />
    </>
  );
}

export default ListComment;