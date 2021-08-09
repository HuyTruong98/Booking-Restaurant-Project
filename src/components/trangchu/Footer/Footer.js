import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FacebookFilled, TwitterOutlined, InstagramFilled, YoutubeFilled } from '@ant-design/icons';

function Footer(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="slide-up" className="footer">
        <div className="brand-res" style={{ textAlign: 'center' }}>
          <img src="http://granddanang.muongthanh.com/FileUpload/Images/logo_all28da_nang_1.png" alt="photo" />
          <div className="forms-of-payment">
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png"
              width="64"
              height="24"
              alt="photo"
            />
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png"
              width="64"
              height="24"
              alt="photo"
            />
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339591544-eae8263f3d4021c8951e271bdddf60a0.png"
              width="64"
              height="24"
              alt="photo"
            />
            <img
              src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png"
              width="64"
              height="24"
              alt="photo"
            />

          </div>
        </div>
        <div className="office-address">
          <div className="title-office">Địa Chỉ Văn Phòng</div>
          <div className="number-address">
            Wedding Studio Hòa Cường Bắc, Hải Châu, Đà Nẵng <br /> <br />
            Hãy để chúng tôi ghi lại những khoảnh khắc đẹp của bạn. Đặt bàn ngây
            thôi.
          </div>

        </div>
        <div className="cooperate-with-us">
          <div className="with-us">Liên Hệ Với Chúng Tôi Để Đặt Tiệc</div>
          <div className="numberPhone">0793.329.299</div>
          <div className="tintuc">
            <FacebookFilled />&ensp;
            <TwitterOutlined />&ensp;
            <InstagramFilled />&ensp;
            <YoutubeFilled />
          </div>
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100"
            width="94"
            height="44"
            alt="photo"
          />
          <img
            src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100"
            width="94"
            height="44"
            alt="photo"
          />
        </div>
      </div>
      <div className="copyright" style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '17px' }}>
        © Wedding 2021 Powered by Hoàng Huy • Have Nice Day!
      </div>
    </>
  );
}

export default Footer;
