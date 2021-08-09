import React from 'react';
import { Result, Row, Col } from 'antd';
import ChangePass from './ChangePass'
import { SmileOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { renderTien } from '../../../notification/renderConvert';


function Profile(props) {
  const dataAccount = useSelector(state => state.account)
  const listHoaDon_current = useSelector((state) => state.quanlyhoadon.list);

  let dataListBooking = []
  if (listHoaDon_current &&
    listHoaDon_current.filter((itemHoaDon) =>
      itemHoaDon.dataAccount.id == dataAccount.id).length > 0) {
    listHoaDon_current.filter((itemHoaDon) =>
      itemHoaDon.dataAccount.id == dataAccount.id).map((item, index) => {
        dataListBooking.push(item)
      })
  };


  function clearModal() {

  }
  return (
    <div style={{ marginTop: 70, background: "#fff0f6", minHeight: 'calc(100vh - 70px)' }}>
      <img
        src="https://images.pexels.com/photos/630754/autumn-orange-nature-red-630754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        width="100%"
        height={200}
        style={{ objectFit: "cover" }}
      />
      <div className="container main-secction">
        <div className="row user-left-part">
          <div className="col-md-3 col-sm-3 col-xs-12 user-profil-part pull-left">
            <div className="row ">
              <div className="col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center">
                {dataAccount.img ? (
                  <img src={dataAccount.img} className="rounded-circle" />
                ) : (
                  <i
                    style={{ fontSize: "30px" }}
                    class="fa fa-user-circle-o"
                    aria-hidden="true"
                  ></i>
                )}
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 user-detail-section1 text-center">
                <button
                  id="btn-contact"
                  onClick={() => clearModal()}
                  data-toggle="modal"
                  data-target="#contact"
                  className="btn btn-success btn-block follow"
                >
                  Đổi mật khẩu
                </button>
                <button className="btn btn-warning btn-block">Thông tin</button>
              </div>
              <div className="row user-detail-row">
                <div className="col-md-12 col-sm-12 user-detail-section2 pull-left">
                  <div className="border" />
                  <p>Đánh giá nhà hàng:</p>
                  <span>5/5</span>{" "}
                  <i
                    class="fa fa-star"
                    style={{ color: "gold", fontSize: "15px" }}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section">
            <div className="row profile-right-section-row">
              <div className="col-md-12 profile-header">
                <div className="row">
                  <div className="col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left">
                    <h1>{dataAccount.name}</h1>
                    <h5>{dataAccount.role}</h5>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-6 profile-header-section1 text-right pull-rigth"></div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-8">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#profile"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i class="fa fa-user" aria-hidden="true"></i> Thông
                          tin người dùng
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#buzz"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i class="fa fa-list-alt" aria-hidden="true"></i> Đơn
                          đặt
                        </a>
                      </li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane fade show active"
                        id="profile"
                      >
                        <div className="row">
                          <div className="col-md-2">
                            <label>ID</label>
                          </div>
                          <div className="col-md-6">
                            <p>{dataAccount.role}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <label>Tên</label>
                          </div>
                          <div className="col-md-6">
                            <p>{dataAccount.name}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <label>Email</label>
                          </div>
                          <div className="col-md-6">
                            <p>{dataAccount.email}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <label>Phone</label>
                          </div>
                          <div className="col-md-6">
                            <p>12345678</p>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade" id="buzz">
                        {dataListBooking.length > 0 ? (
                          Array.isArray(dataListBooking) &&
                          dataListBooking.length > 0 &&
                          dataListBooking.map((item, index) => {
                            return (
                              <>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Email khác</label>
                                  </div>
                                  <div class="col-md-6">
                                    <p>{item.email}</p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Tên nhà hàng</label>
                                  </div>
                                  <div class="col-md-6">
                                    <p>{item.itemHall.restaurantName}</p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Tên sảnh</label>
                                  </div>
                                  <div class="col-md-6">
                                    <p>{item.itemHall.hallName}</p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Số bàn</label>
                                  </div>
                                  <div class="col-md-6">
                                    <p>{item.numberOfTable}</p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Ngày đặt</label>
                                  </div>
                                  <div class="col-md-6">
                                    <p>{item.dateBook}</p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Khung giờ</label>
                                  </div>
                                  <div class="col-md-6">
                                    <p>{item.timeBook}</p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Tiền / bàn</label>
                                  </div>
                                  <div class="col-md-6">
                                    <p>{renderTien(item.itemHall.price)}</p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Dịch vụ đi kèm</label>
                                  </div>
                                  <div class="col-md-6">
                                    <p>{item.titleService}</p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Tiền dịch vụ</label>
                                  </div>
                                  <div class="col-md-6">
                                    <p>{renderTien(item.priceService)}</p>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Tổng thanh toán</label>
                                  </div>
                                  <div class="col-md-6">
                                    <strong>
                                      {renderTien(
                                        item.numberOfTable *
                                          item.itemHall.price +
                                          item.priceService
                                      )}
                                    </strong>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <label>Tổng thanh toán 10%</label>
                                  </div>
                                  <div class="col-md-6">
                                    <strong>
                                      {renderTien(
                                        item.numberOfTable *
                                          item.itemHall.price *
                                          0.1 +
                                          item.priceService
                                      )}
                                    </strong>
                                  </div>
                                </div>
                              </>
                            );
                          })
                        ) : (
                          <Result
                            icon={<SmileOutlined />}
                            title="Bạn chưa có đơn đặt!"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 img-main-rightPart">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row image-right-part">
                          <div className="col-md-6 pull-left image-right-detail">
                            <h6>Xin chào!</h6>
                          </div>
                        </div>
                      </div>
                      <div style={{ background: "white" }}>
                        <div className="col-md-12 image-right">
                          <img
                            style={{ background: "white" }}
                            src="http://granddanang.muongthanh.com/FileUpload/Images/logo_all28da_nang_1.png"
                            alt="photo"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 image-right-detail-section2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="contact"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contact">
                Đổi mật khẩu
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <ChangePass />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <Row>
    //     <Col span={4}>
    //       <Menu
    //         onClick={handleClick}
    //         style={{

    //           paddingTop: '40%',
    //           width: 256,
    //           background: '#d3355036',
    //           height: '650px'
    //         }}
    //         defaultSelectedKeys={['1']}
    //         defaultOpenKeys={['sub1']}
    //         mode="inline"
    //       >
    //         <Menu.Item key="5" style={{ width: '100%', background: '#dc3545', marginBottom: '20px' }}>
    //           <a style={{ color: 'white', width: '100%', fontSize: '18px' }} className=" btn  infinite like"
    //             onClick={() => handleShowInfo()}
    //           >Thông tin người dùng
    //       </a>
    //         </Menu.Item>
    //         <Menu.Item key="6" style={{ width: '100%', background: '#dc3545' }}>
    //           <a style={{ color: 'white', width: '100%', fontSize: '18px' }} className=" btn infinite like"
    //             onClick={() => handleOnPassword()}
    //           >Đổi mật khẩu
    //       </a>
    //         </Menu.Item>
    //       </Menu>
    //     </Col>
    //     <Col span={4} style={{ background: 'whitesmoke' }}></Col>

    //     <Col span={8} style={{ paddingTop: '3%', background: 'whitesmoke' }}>
    //       {
    //         showInfo ?
    //           <ChangePass /> :
    //           <ShowInfo style={{ background: 'whitesmoke' }} />
    //       }

    //     </Col>
    //     <Col span={8} style={{ background: 'whitesmoke' }}>
    //     </Col>
    //   </Row>
    // </div >
  );
}

export default Profile;