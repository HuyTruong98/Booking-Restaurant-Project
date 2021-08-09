import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import OwlCarousel from 'react-owl-carousel';
import Footer from '../Footer/Footer';
import Aos from 'aos';


function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);


  return (
    <div className="container-fluid  p-0">
      <Carousel
        className="header"
        autoplay
        effect="scrollx"
      >
        <div class="carousel-item active">
          <img src="https://www.eachotherweddingsandevents.com/test/wp-content/uploads/2020/04/slide_home.jpg" width="100%" height="700px" alt="photo" />
          <div class="carousel-caption d-none d-md-block">
            <p className="heading animated bounceInLeft">Yêu Là Phải Cưới</p>
            <p className="sub-heading animated flipInY ">Đặt Bàn Đám Cưới Ngây Tại Mường Thanh!</p>
            <a className="btn btn-lg btn-danger mt-5  animated bounce  infinite like">Mường Thanh</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg" width="100%" height="700px" alt="photo" />
          <div class="carousel-caption d-none d-md-block">
            <p className="heading animated bounceInRight">Cưới Thôi Chờ Chi?</p>
            <p className="sub-heading animated flipInY">Đặt Bàn Đám Cưới Ngây Tại Mường Thanh!</p>
            <a className="btn btn-lg btn-danger mt-5  animated bounce  infinite like">Mường Thanh</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://images.pexels.com/photos/818649/pexels-photo-818649.jpeg" width="100%" height="700px" alt="photo" />
          <div class="carousel-caption d-none d-md-block">
            <p className="heading animated rotateInDownLeft">Trao Nhẫn Cùng Chung Đôi</p>
            <p className="sub-heading animated flash">Đặt Bàn Đám Cưới Ngây Tại Mường Thanh!</p>
            <a className="btn btn-lg btn-danger mt-5  animated bounce  infinite like">Mường Thanh</a>
          </div>
        </div>
      </Carousel>

      <div className="main">
        <div className="title" data-aos="fade-up" style={{ textAlign: 'center' }}>
          Service
       </div>
        <div className="img-service" data-aos="fade-up">
          <figure class="snip0016">
            <img src="http://muongthanh.com/images/brands/2021/02/22/original/muong-thanh-grand-xa-la_1559031825_1613965916_1613967396.jpg" height="210px" alt="sample41" />
            <figcaption>
              <h2>Hà Nội</h2>
              <p> Không phải vội, cưới thôi!</p>
              <a href="#"></a>
            </figcaption>
          </figure>
          <figure class="snip0016">
            <img src="http://muongthanh.com/images/brands/2019/05/15/large/lux_danang_1557911833.jpg" height="210px" alt="sample42" />
            <figcaption>
              <h2>Chờ chi khi?</h2>
              <p>Một đám cưới là kết quả của một mối tình đẹp đẽ và bền bỉ.</p>
              <a href="#"></a>
            </figcaption>
          </figure>
          <figure class="snip0016">
            <img src="http://muongthanh.com/images/brands/2019/05/16/original/bacgiang_1557992670.jpg" height="210px" alt="sample43" />
            <figcaption>
              <h2>Sài Gòn? </h2>
              <p>Tình yêu lớn không phải là yêu nhiều người, mà là yêu một người và yêu suốt đời.</p>
              <a href="#"></a>
            </figcaption>
          </figure>
        </div>
        <div data-aos="fade-up-right" className="img-share" style={{ textAlign: 'center' }}>
          <img src="https://themify.me/demo/themes/ultra-wedding2/files/2020/12/leaf-blue-ornament-54x64.png" width="54" height="64" alt="photo" />
          <h4 style={{ textAlign: 'center' }}>CHÚNG TÔI LẮNG NGHE CÂU CHUYỆN</h4>
          <div className="title-share" style={{ textAlign: 'center' }}>
            Chúng tôi ở đây để kết nối và ghi lại
            câu chuyện tình yêu của bạn theo
            cách bạn muốn nó kể
          </div>
          <div className="title-img">
            <div className="title-img-0">

            </div>
            <div className="title-img-1">
              <img src="https://themify.me/demo/themes/ultra-wedding2/files/2020/12/camera-icon-75x75.png" alt="photo" width="75" height="75" />
              <h3 className="img-title">Chụp Ảnh Cưới</h3>
              <div className="img-caption">
                Chúng tôi đảm bảo rằng chúng tôi kết nối với cặp đôi và đảm bảo rằng những kỷ niệm nói về câu chuyện tình yêu của bạn được lưu giữ.
              </div>
            </div>
            <div className="title-img-2">
              <img src="https://themify.me/demo/themes/ultra-wedding2/files/2020/12/love-icon-75x75.png" alt="photo" width="75" height="75" />
              <h3 className="img-title">Chỉnh sửa tinh xảo</h3>
              <div className="img-caption">
                Chỉnh sửa tốt của chúng tôi là đảm bảo mỗi bức ảnh và mỗi khoảnh khắc đều được nâng cao, không bị thay đổi. Không có khoảnh khắc nào được bịa đặt.
              </div>
            </div>
            <div className="title-img-3">
              <img src="https://themify.me/demo/themes/ultra-wedding2/files/2020/12/image-icon-75x75.png" alt="photo" width="75" height="75" />
              <h3 className="img-title">Chỉnh sửa Style</h3>
              <div className="img-caption">
                Mọi thứ chúng tôi tạo ra đều phản ánh cảm xúc thực và những tương tác trong ngày đặc biệt của bạn.
            </div>
            </div>
            <div className="title-img-4">

            </div>
          </div>
        </div>
      </div>
      <div data-aos="slide-up" className="food-every-res" style={{ textAlign: 'center' }}>
        <img src="https://themify.me/demo/themes/ultra-wedding2/files/2020/12/leaf-blue-ornament-54x64.png" width="54" height="64" alt="photo" />
        <h1>Món Ăn <span class="header-span">Tiêu Chuẩn Của Mỗi Nhà Hàng</span></h1>
        <div class="all-the-foods">
          <div class="clip-path-container">
            <div class="description-holder">
              <h4>Gỏi</h4>
              <p>Là món ăn phổ biến, thơm ngon hay xuất hiện ở đầu buổi tiệc, mang đến khởi đầu cho 1 buổi lễ.</p>
            </div>
            <div class="food bibimbap"></div>
          </div>

          <div class="clip-path-container">
            <div class="description-holder">
              <h4>Súp</h4>
              <p>Bên cạnh đó, lựa chọn món khai vị nên có khả năng kích thích vị giác của mọi người. Những món ăn có tính nhẹ để giúp cho mọi người có thể chóng đói phần đầu, theo dõi những thủ tục của cô dâu và chú rể. </p>
            </div>
            <div class="food pizza"></div>
          </div>

          <div class="clip-path-container">
            <div class="description-holder guac-holder">
              <h4>Gà Bó Xôi</h4>
              <p>Được xem là món ăn quen thuộc trong các thực đơn ngày cưới, từ thành thị đến nông thôn. Đi cùng với sự thơm ngon của món ăn là sự đơn giản trong cách nấu nướng.</p>
            </div>
            <div class="food guacamole"></div>
          </div>

          <div class="clip-path-container">
            <div class="description-holder">
              <h4>Tôm Ran Muối</h4>
              <p>𝑇𝑜̂𝑚 𝑟𝑎𝑛𝑔 𝑚𝑢𝑜̂́𝑖 ℎ𝑜𝑛𝑔 𝑘𝑜𝑛𝑔 𝑙𝑎̀ 𝑚𝑜̣̂𝑡 𝑚𝑜́𝑛 𝑎̆𝑛 𝑣𝑜̛́𝑖 𝑚𝑜̣̂𝑡 ℎ𝑢̛𝑜̛𝑛𝑔 𝑣𝑖̣ 𝑚𝑜̛́𝑖 𝑙𝑎̣ 𝑛ℎ𝑢̛𝑛𝑔 𝑙𝑎̀𝑚 𝑐ℎ𝑜 𝑏𝑎̣𝑛 𝑣𝑢̛𝑜̛𝑛𝑔 𝑣𝑎̂́𝑛 𝑚𝑎̃𝑖 𝑠𝑎𝑢 𝑘ℎ𝑖 𝑡ℎ𝑢̛𝑜̛̉𝑛𝑔 𝑡ℎ𝑢̛́𝑐.</p>
            </div>
            <div class="food cookie"></div>
          </div>

          <div class="clip-path-container">
            <div class="description-holder">
              <h4>Cà Ri</h4>
              <p>Kế tiếp những món ăn mở đầu, món chính của thực đơn tiệc cưới sẽ mang nhiều chất dinh dưỡng hơn cho thực khách. Hương vị các món ăn cũng đa dạng, được chế biến từ nhiều thực phẩm giàu chất đạm, protein, vitamin,...</p>
            </div>
            <div class="food donut"></div>
          </div>

          <div class="clip-path-container">
            <div class="description-holder">
              <h4>Bánh Phô Mai Nướng Dâu Rừng</h4>
              <p>Loại bánh phô mai kết hợp với trái cây hoặc rau câu, chè,... </p>
            </div>
            <div class="food pancake"></div>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" className="service-staff" style={{ textAlign: 'center' }}>
        <img src="https://themify.me/demo/themes/ultra-wedding2/files/2020/12/leaf-blue-ornament-54x64.png" width="54" height="64" alt="photo" />
        <h1>STAFF</h1>
        <div className="staff-restaurant">
          <div
            class="container__image">
            <div class="container__info container__author">Nhân Viên <a class="link">Được Đào Tạo Kỹ Nâng Chuyên Môn</a></div>
            <div class="container__info container__location"> “Luôn có một mục tiêu song hành với sự phát triển của doanh nghiệp,đó là sở hữu dịch vụ khách hàng không chỉ ở mức tốt mà phải biến nó trở thành huyền thoại”</div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up-right" className="carousel-owl">
        <div className="carousel-owl-title" style={{ textAlign: 'center' }}>
          <img src="https://themify.me/demo/themes/ultra-wedding2/files/2020/12/leaf-blue-ornament-54x64.png" width="54" height="64" alt="photo" /> <br />
          <img src="http://granddanang.muongthanh.com/FileUpload/Images/logo_all28da_nang_1.png" alt="photo" /> <br />
          Hình Ảnh Các Nhà Hàng
        </div>
        <OwlCarousel
          className='owl-theme'
          item
          autoplay
          loop
          dots
          margin={10}
        >
          <div class='item'>
            <img src="https://images.foody.vn/res/g16/150526/prof/s576x330/foody-mobile-tiec_tuy_loan1-1-jpg-553-635721421202844060.jpg" alt="photo" height="300px" />
          </div>
          <div class='item'>
            <img src="https://i0.wp.com/du-lich.net/wp-content/uploads/2017/04/h%C3%ACnh-%E1%BA%A3nh-kh%C3%A1ch-s%E1%BA%A1n-m%C6%B0%E1%BB%9Dng-thanh-nha-trang-7.jpg" alt="photo" height="300px" />
          </div>
          <div class='item'>
            <img src="https://images.pexels.com/photos/6400948/pexels-photo-6400948.jpeg" alt="photo" height="300px" />
          </div>
          <div class='item'>
            <img src="https://images.pexels.com/photos/4992960/pexels-photo-4992960.jpeg" alt="photo" height="300px" />
          </div>
          <div class='item'>
            <img src="https://images.pexels.com/photos/903400/pexels-photo-903400.jpeg" alt="photo" height="300px" />
          </div>
          <div class='item'>
            <img src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg" alt="photo" height="300px" />
          </div>
          <div class='item'>
            <img src="https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg" alt="photo" height="300px" />
          </div>
          <div class='item'>
            <img src="https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?" alt="photo" height="300px" />
          </div>
        </OwlCarousel>
      </div>
      <Footer />
    </div>
  );
}

export default Home;