import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Button } from 'antd/lib/radio';

function InfoResList({ dataListRestaurant, typeShow, setCheckShowPage }) {

  const renderDate = () => {
    return <>{moment().format("DD/MM/YYYY")}</>;
  }

  return dataListRestaurant.filter(
    (itemList) => itemList.restaurantName === typeShow
  ).length > 0
    ? dataListRestaurant.filter
      ((itemList) => itemList.restaurantName === typeShow).map((item, index) => {
        return (
          <>
            <div style={{ background: 'whitesmoke' }}>
              <Button
                type="primary"
                style={{ marginLeft: '82%', fontSize: '20px', background: 'pink', color: 'white' }}
                onClick={() => {
                  setCheckShowPage(false);
                }}
              >
                Quay lại
              </Button>
              <div className="phongcach">
                Mang phong cách sang trọng, hiện đại từ nhà hàng {item.restaurantName}!
              </div>
              <section className="carousel" style={{ marginTop: '40px' }}>
                <input className="carousel__input" type="radio" id="carousel__slide--1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
                <div className="carousel__slide" style={{ backgroundImage: `url(${item.img})` }}>
                  <img src={item.img} />
                  <div className="carousel__caption">
                  </div>
                </div>
              </section>

              <div class="container">
                <div class="columns">
                  <div class="column col-12 text-center">
                    <p class="cool-re">Về nhà hàng {item.restaurantName}</p>
                  </div>
                </div>
                <div class="columns">
                  <div class="column col-12">
                    <div class="timeline">
                      <div class="timeline-item" id="timeline-example-1">
                        <div class="timeline-left"><a class="timeline-icon" href="#timeline-example-1"></a></div>
                        <div class="timeline-content">
                          <div class="tile">
                            <div class="tile-content">
                              <p class="tile-subtitle">{renderDate(item.date)}</p>
                              <p class="tile-title">Ngày Thành lập</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="timeline-item" id="timeline-example-2">
                        <div class="timeline-left"><a class="timeline-icon" href="#timeline-example-2"></a></div>
                        <div class="timeline-content">
                          <div class="tile">
                            <div class="tile-content">
                              <p class="tile-subtitle">7 / 2021</p>
                              <p class="tile-title">Sở hữu :</p>
                              <p class="tile-title">4 Sảnh lớn tại {item.city}</p>
                              <p class="tile-title">Địa chỉ:</p>
                              <p class="tile-title">{item.address} / {item.district} / {item.city}</p>
                            </div>

                          </div>
                        </div>
                      </div>
                      <div class="timeline-item" id="timeline-example-3">
                        <div class="timeline-left"><a class="timeline-icon" href="#timeline-example-3"></a></div>
                        <div class="timeline-content">
                          <div class="tile">
                            <div class="tile-content">
                              <p class="tile-subtitle">3 / 2017</p>
                              <p class="tile-title">Công cuộc tuyển chọn nhân viên</p>
                              <p class="tile-title">Nhân viên Bếp Trưởng</p>
                              <p class="tile-title">Nhân viên Bếp</p>
                              <p class="tile-title">Quản lý khu vực</p>
                              <p class="tile-title">Nhân viên Phục vụ</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }) : "Không có"
}

export default InfoResList;