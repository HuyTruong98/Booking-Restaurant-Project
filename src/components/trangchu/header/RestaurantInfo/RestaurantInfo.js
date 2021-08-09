import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as act from "../../../../redux/actions/index";
import InfoResList from './infoResList';
import NextInfo from './nextInfo';

function RestaurantInfo(props) {
  const [checkShowPage, setCheckShowPage] = useState(false);
  const [typeShow, setTypeShow] = useState();
  const dispatch = useDispatch()
  const dataListRestaurant = useSelector(state => state.restaurant);

  function handleShowNhaHang(value) {
    setTypeShow(value);
    setCheckShowPage(true);
  }

  useEffect(() => {
    dispatch(act.actFetchRestaurantRequest());
  }, [])

  return (
    <div style={{ marginTop: 84 }}>
      {!checkShowPage && (
        <>
          <div className="all-Restaurant-Info" style={{ textAlign: 'center' }}>
            <img src="http://granddanang.muongthanh.com/FileUpload/Images/logo_all28da_nang_1.png" height="100px" alt="photo" />
            <p>Nhà Hàng Mường Thanh - Chuỗi Nhà Hàng Lớn Nhất Đông Dương.</p>
          </div>
          <div className="restaurant-Information">
            <div className="Image-Restaurant-Information">
              <section className="carousel">
                <input className="carousel__input" type="radio" id="carousel__slide--1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
                <div className="carousel__slide" style={{ backgroundImage: 'url(http://muongthanh.com/images/brands/2019/05/15/large/lux_danang_1557911833.jpg)' }}>
                  <img src="http://muongthanh.com/images/brands/2019/05/15/large/lux_danang_1557911833.jpg" />
                  <div className="carousel__caption">
                    <p>Xem nhà hàng Đà Nẵng <Button
                      type="primary"
                      onClick={() => handleShowNhaHang('Mường Thanh Grand Đà Nẵng')}
                    >
                      Xem thêm
                    </Button>
                    </p>
                  </div>
                </div>
                <input className="carousel__input" type="radio" id="carousel__slide--2" name="carousel" aria-hidden="true" hidden />
                <div className="carousel__slide" style={{ backgroundImage: 'url(http://muongthanh.com/images/brands/2019/05/16/original/buonmethuat_1557993624.jpg)' }}>
                  <img src="http://muongthanh.com/images/brands/2019/05/16/original/buonmethuat_1557993624.jpg" />
                  <div className="carousel__caption">
                    <p>Xem  nhà hàng Đà Nẵng <Button
                      type="primary"
                      onClick={() => handleShowNhaHang("Mường Thanh Luxury Sông Hàn")}>
                      Xem thêm
                    </Button></p>
                  </div>
                </div>
                <input className="carousel__input" type="radio" id="carousel__slide--3" name="carousel" aria-hidden="true" hidden />
                <div className="carousel__slide" style={{ backgroundImage: 'url(http://muongthanh.com/images/brands/2019/05/16/original/muine_1557992282.jpg)' }}>
                  <img src="http://muongthanh.com/images/brands/2019/05/16/original/muine_1557992282.jpg" />
                  <div className="carousel__caption">
                    <p>Xem  nhà hàng Sài Gòn <Button
                      type="primary"
                      onClick={() => handleShowNhaHang("Mường Thanh Luxury Sài Gòn")}
                    >
                      Xem thêm</Button></p>
                  </div>
                </div>
                <input className="carousel__input" type="radio" id="carousel__slide--4" name="carousel" aria-hidden="true" hidden />
                <div className="carousel__slide" style={{ backgroundImage: 'url(http://muongthanh.com/images/brands/2019/10/11/original/muong-thanh-grand-hanoi-centre_1570768502.jpg)' }}>
                  <img src="http://muongthanh.com/images/brands/2019/10/11/original/muong-thanh-grand-hanoi-centre_1570768502.jpg" />
                  <div className="carousel__caption">
                    <p>Xem  nhà hàng Hà Nội <Button
                      type="primary"
                      onClick={() => handleShowNhaHang("Mường Thanh Grand Hà Nội")}
                    >Xem thêm</Button></p>
                  </div>
                </div>
                <input className="carousel__input" type="radio" id="carousel__slide--5" name="carousel" aria-hidden="true" hidden />
                <div className="carousel__slide" style={{ backgroundImage: 'url(http://muongthanh.com/images/brands/2021/02/22/original/muong-thanh-grand-xa-la_1559031825_1613965916_1613967396.jpg)' }}>
                  <img src="http://muongthanh.com/images/brands/2021/02/22/original/muong-thanh-grand-xa-la_1559031825_1613965916_1613967396.jpg" />
                  <div className="carousel__caption">
                    <p>Xem nhà hàng Hà Nội <Button
                      type="primary"
                      onClick={() => handleShowNhaHang("Mường Thanh Hà Nội Centre")}
                    >Xem thêm</Button></p>
                  </div>
                </div>
                {/* ARROWS */}
                <label htmlFor="carousel__slide--5" className="carousel__arrow carousel__arrow--prev carousel__arrow--1" />
                <label htmlFor="carousel__slide--5" className="carousel__arrow carousel__arrow--next carousel__arrow--4" />
                <label htmlFor="carousel__slide--4" className="carousel__arrow carousel__arrow--prev carousel__arrow--5" />
                <label htmlFor="carousel__slide--4" className="carousel__arrow carousel__arrow--next carousel__arrow--3" />
                <label htmlFor="carousel__slide--3" className="carousel__arrow carousel__arrow--prev carousel__arrow--4" />
                <label htmlFor="carousel__slide--3" className="carousel__arrow carousel__arrow--next carousel__arrow--2" />
                <label htmlFor="carousel__slide--2" className="carousel__arrow carousel__arrow--prev carousel__arrow--3" />
                <label htmlFor="carousel__slide--2" className="carousel__arrow carousel__arrow--next carousel__arrow--1" />
                <label htmlFor="carousel__slide--1" className="carousel__arrow carousel__arrow--prev carousel__arrow--2" />
                <label htmlFor="carousel__slide--1" className="carousel__arrow carousel__arrow--next carousel__arrow--5" />
                {/* BULLETS */}
                <ol className="carousel__bullets">
                  <li>
                    <label htmlFor="carousel__slide--1" className="carousel__bullets--bullet" />
                  </li>
                  <li>
                    <label htmlFor="carousel__slide--2" className="carousel__bullets--bullet" />
                  </li>
                  <li>
                    <label htmlFor="carousel__slide--3" className="carousel__bullets--bullet" />
                  </li>
                  <li>
                    <label htmlFor="carousel__slide--4" className="carousel__bullets--bullet" />
                  </li>
                  <li>
                    <label htmlFor="carousel__slide--5" className="carousel__bullets--bullet" />
                  </li>
                </ol>
              </section>
            </div>
            <div className="Restaurant_Detail">
              <NextInfo dataListRestaurant={dataListRestaurant} />
            </div>
          </div>
        </>
      )}
      {
        checkShowPage && (
          <InfoResList
            dataListRestaurant={dataListRestaurant}
            typeShow={typeShow}
            setCheckShowPage={setCheckShowPage} />
        )
      }
    </div>
  );
}

export default RestaurantInfo;