import React, { useState } from "react";
import { Tabs, notification } from "antd";
import FormLog from "../../components/login/FormLog";
import FormReg from "../../components/login/FormReg";
// import actions vào
import * as act from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "antd/lib/form/Form";

export default function Pagelogin() {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user_list);

  const [form] = useForm();

  const { TabPane } = Tabs;

  //tạo function login
  function login(value) {
    const userSuccessIndex = dataUser.findIndex((item, index) => value.email === item.email && value.password === item.password);
    console.log(userSuccessIndex);
    if (userSuccessIndex !== -1) {
      localStorage.setItem("userInfo", JSON.stringify(dataUser[userSuccessIndex].id));
      dispatch(act.applicationId(dataUser[userSuccessIndex].id));
      notification.success({
        message: 'Đăng nhập thành công',
      });
    } else {
      notification.error({
        message: 'Đăng nhập thất bại',
        description: 'Tài khoản hoặc mật khẩu không đúng!',
      });
    }
  }

  return (
    <>
      <div className="form-v2">
        <div className="page-content" >
          <div className="form-v2-content">
            <div className="form-left">
              <img src="https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="form" width="100%" height="100%" />
              <div className="text-1">
                <p>Mường Thanh Restaurant<span>Xin chào!</span></p>
              </div>

            </div>
            <div className="form-detail" action="#" method="post" id="myform">
              <Tabs >
                <TabPane tab="Đăng Nhập" key="1" >
                  <FormLog data={dataUser} login={login} form={form} />
                </TabPane>
                <TabPane tab="Đăng Ký" key="2">
                  <FormReg />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
