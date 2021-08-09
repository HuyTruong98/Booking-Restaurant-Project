import React, { createElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Avatar, Rate, Card } from 'antd';
import '../../../../static/style.css';
import * as act from "../../../../redux/actions/index";
import ModalComment from './modal';
import Footer from '../../Footer/Footer';
import ListComment from './list';
import { useForm } from "antd/lib/form/Form";
import moment from 'moment'

function Reviews({ match }) {
  const dispatch = useDispatch();
  const account_current = useSelector((state) => state.account);
  const listComment = useSelector(state => state.comment.list);
  const [form] = useForm();
  const [checkSubmitForm, setCheckSubmitForm] = useState(false)
  const dateFormat = moment().format('DD-MM-YYYY HH:mm:ss');


  function onDelete(id) {
    dispatch(act.actDeleteCommentRequest(id));
  }



  function onSubmit(value) {
    if (account_current && dateFormat) {
      value = {
        ...value,
        account_current: account_current,
        dateFormat: dateFormat
      }
      dispatch(act.actAddCommentRequest(value))
      setCheckSubmitForm(true)
    }
  }

  useEffect(() => {
    form.resetFields();
  }, [form, checkSubmitForm, dispatch])

  useEffect(() => {
    dispatch(act.actFetchCommentRequest());
  }, [])


  return (
    <div style={{ marginTop: 70 }}>
      <div className="about-us-logo" style={{ background: 'white' }} >
        <img src="http://granddanang.muongthanh.com/FileUpload/Images/logo_all28da_nang_1.png" height="100px" alt="photo" />
      </div>
      <div className="phuongcham" style={{ background: 'white' }}>
        <h1>Phương châm: Luôn lắng nghe, cải thiện, khắc phục, tận tâm</h1>
      </div>
      <div className="all-restaurant" style={{ background: 'white' }}>
        <div className="list-restaurant">
          <div className="restaurant-1">
            <Image src="http://muongthanh.com/images/brands/2019/05/15/large/sonla_1557912561.jpg" height="350px" width="100%" />
            <div className="title-image">
              <p>Thủ đô Hà Nội</p>
              <span>
                Hẳn bạn đã nghe rất nhiều về Hà Nội – Thủ đô hơn 1000 năm tuổi.
                Không chỉ nổi tiếng với lịch sử lâu đời, giàu bản sắc, văn hóa truyền thống dân tộc.
              </span>
            </div>
          </div>
          <div className="restaurant-2">
            <Image src="http://muongthanh.com/images/brands/2019/05/15/large/lux_danang_1557911833.jpg" height="350px" width="100%" />
            <div className="title-image">
              <p>Thành phố Đà Nẵng</p>
              <span>
                Đà Nẵng quả thật là một thành phố đáng sống với những điều tuyệt vời.
                Đây chính là một trong những thành phố bạn nên đặt chân
                đến khám phá và trải nghiệm. Chính vì thế,
                hãy để Mường Thanh cùng bạn đồng hành trong chuyến du lịch Đà Nẵng nhé!
              </span>
            </div>
          </div>
          <div className="restaurant-3">
            <Image src="https://pix10.agoda.net/hotelImages/502/502099/502099_14060516240019719334.jpg" height="350px" width="100%" />
            <div className="title-image">
              <p>Thành phố Hồ Chí Minh</p>
              <span>
                Sài Gòn - TPHCM trong tâm thức của những khách ẩm thực vẫn được mệnh danh là
                thành phố không đêm. Bởi lẽ, từ sáng tinh mơ cho đến tối muộn, vẫn một cuộc sống nhộn nhịp... Cái tuổi 300, cái tuổi không già bởi “thành phố tôi rất trẻ”
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="phanhoikhachhang" style={{ background: 'white' }}>
        <div className="phanhoichinh" style={{ background: 'white' }}>
          <p>Những bình luận nổi bật:</p>
          <div className="nhungbinhluan1">
            <Avatar src="https://img.icons8.com/bubbles/2x/user-male.png" />
            Huy Trương
            <Rate disabled defaultValue={5} />
            <div className="comment-user-1">
              Tôi ở Đà Nẵng thật sự rất hài lòng về nhà hàng ở đây,
              nhân viên chốt đơn báo giá rất nhanh, tổ chức bữa thử món ăn rất hợp lý,
              từ nhân viên phục vụ cho đến MC chương trình rất tốt.
              Tôi rất hài lòng về nhà hàng này! Mọi người nên đặt tiệc tại đây
            </div>
            <Avatar src="https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-doraemon-ngai-ngung-390x390.jpg" />
            Thảo Nguyễn
            <Rate disabled defaultValue={5} />
            <div className="comment-user-1">
              Tôi ở Hồ Chí Minh thật sự rất hài lòng về nhà hàng ở đây,
              nhân viên chốt đơn báo giá rất nhanh, tổ chức bữa thử món ăn rất hợp lý,
              từ nhân viên phục vụ cho đến MC chương trình rất tốt.
              Tôi rất hài lòng về nhà hàng này! Mọi người nên đặt tiệc tại đây
            </div>
            <Avatar src="https://pdp.edu.vn/wp-content/uploads/2021/01/anh-avatar-dep-dai-dien-facebook-zalo.jpg" />
            Châu Đặng
            <Rate disabled defaultValue={3} />
            <div className="comment-user-1">
              Tôi ở Hà Nội thật sự rất hài lòng về nhà hàng ở đây,
              nhân viên chốt đơn báo giá rất nhanh, tổ chức bữa thử món ăn rất hợp lý,
              từ nhân viên phục vụ cho đến MC chương trình rất tốt.
              Tôi rất hài lòng về nhà hàng này! Mọi người nên đặt tiệc tại đây
            </div>

          </div>

        </div>
        <div className="noicommentcuakhach">
          <div className="title-binhluan">
            <p>Đánh giá chung:</p>
          </div>
          <div className="danhgiakhachhang">
            {/* đánh giá */}
            <ModalComment
              onSubmit={onSubmit} form={form}
            />
            <ListComment
              style={{ background: '#f5f5f5' }}
              listComment={listComment}
              match={match}
              onDelete={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;