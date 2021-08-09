import React from 'react';
import { Animated } from "react-animated-css";
import { HeartFilled } from '@ant-design/icons';
import { Image } from 'antd';
import Footer from '../../trangchu/Footer/Footer';

function About(props) {
  return (
    <>
      <div className="about-us-logo" style={{ marginTop: 84 }}>
        <img src="http://granddanang.muongthanh.com/FileUpload/Images/logo_all28da_nang_1.png" height="100px" alt="photo" />
      </div>
      <Animated animationIn="bounceInLeft delay-2" animationOut="fadeOut" isVisible={true}>
        <div className="about-us-label">
          <div className="about-us-title">
            <h4>Về chúng tôi</h4>
            <p>TẬP ĐOÀN MƯỜNG THANH</p>
            <span>
              CÂU CHUYỆN VỀ MƯỜNG THANH <br />
              “Không gian thanh thản, tình cảm chân thành”
              <div className="about-us-title-1" style={{ textAlign: 'justify' }}>
                Tại Mường Thanh, chúng tôi mời bạn cùng khởi hành chuyến đi tìm về không gian thanh thản chứa đựng những nét văn hóa mang đậm tinh thần bản sắc Việt, nơi con người gắn kết và thân ái gửi trao nhau tình cảm chân thành. Trải dọc khắp mọi vùng miền của đất nước Việt Nam xinh đẹp cùng các nước trong khu vực Đông Nam Á, Mường Thanh đồng hành cùng bạn ở khắp nơi, cho mọi hành trình, ở mọi giai đoạn của cuộc sống.
                Từ khách sạn đầu tiên tọa lạc ở Điện Biên Phủ, Việt Nam, Tập đoàn Khách sạn Mường Thanh đã phát triển thành chuỗi khách sạn cao cấp đạt chuẩn quốc tế với gần 60 khách sạn thành viên, phủ sóng khắp các địa phương tại Việt Nam và các nước Đông Nam Á. Hệ thống khách sạn Mường Thanh với 4 phân khúc: Mường Thanh Luxury, Mường Thanh Grand, Mường Thanh Holiday và Mường Thanh hướng đến việc phục vụ đa dạng nhu cầu của mọi du khách trong nước và quốc tế. Từ thiên nhiên núi cao hoang sơ, qua đồng bằng trù phú, miền biển trải dài tiếp nối những đô thị sôi động, thành phố lớn...... hệ thống khách sạn Mường Thanh song hành và mang đến sự hài lòng, tin yêu cho du khách trong và ngoài nước.

                Trong hành trình phát triển với tầm nhìn chiến lược, mong muốn mang đến những sản phẩm dịch vụ chất lượng, tạo nên một thế giới dịch vụ đẳng cấp, Tập đoàn Khách sạn Mường Thanh đã mở rộng sang những lĩnh vực mới như giải trí, thể dục thể thao, vật phẩm lưu niệm... Những thương hiệu như Mường Thanh Safari Diễn Lâm (Vườn thú lớn nhất miền Bắc), VRC (Trung tâm giải trí đa chức năng), Fitness Plus (Trung tâm Finess & Yoga 5 sao), DreamKid (Khu vui chơi học tập dành cho trẻ em), Hoa Ban Gift Shop (Chuỗi cửa hàng Lưu niệm cao cấp)... đều ghi nhận thành công và phục vụ hàng ngàn khách hàng, đáp ứng nhu cầu đa dạng cho nhiều đối tượng với phong cách dịch vụ tận tâm từ trái tim.

                Những bước đi vững chãi và được đầu tư tâm huyết của Tập đoàn Khách sạn Mường Thanh sẽ là bước đệm quan trọng để Mường Thanh phát triển bền vững và vươn mình mạnh mẽ không chỉ phạm vi đất nước Việt Nam mà còn vươn mình ra trường quốc tế. Chặng đường dài phía trước, người Mường Thanh đồng lòng mở ra tiềm năng phát triển mới, hiện thực khát vọng trở thành thương hiệu đại diện quốc gia trong ngành lưu trú Việt Nam và ghi dấu giá trị khách sạn Việt trên bản đồ thế giới.
              </div>
            </span>
          </div>
          <div className="about-us-img">
            <div class="thumb">
              <a href="#">
                <span>MƯỜNG THANH RESTAURANT &ensp; (is the BEST!)</span>
              </a>
            </div>
          </div>
        </div>
      </Animated>
      <Animated animationIn="bounceInRight delay-5" animationOut="fadeOut" isVisible={true}>
        <div className="history-company">
          <div className="history-title">
            <h4>LỊCH SỬ :</h4>
            <p>HỆ THỐNG NHÀ HÀNG TƯ NHÂN LỚN NHẤT ĐÔNG DƯƠNG</p>
          </div>
          <div className="congnhan" >
            <p style={{ textAlign: 'justify' }}>Thắp sáng bản đồ ngành lưu trú Việt Nam, khẳng định vị thế vững chắc cho riêng mình, Tập đoàn Khách sạn Mường Thanh đã tạo được chỗ đứng trong lòng khách hàng và du khách trong và ngoài nước. Là Hệ thống Khách sạn tư nhân lớn nhất tại Đông dương, Mường Thanh tự hào sở hữu gần 60 khách sạn với sức chứa hơn 10.000 phòng, tạo việc làm và môi trường phát triển cho hơn 10.000 lao động, đóng góp vào ngân sách quốc gia hàng ngàn tỷ đồng mỗi năm. Những thành quả ấn tượng đó được Mường Thanh hình thành và phát triển qua bề dày hơn 25 kinh nghiệm, sự đồng lòng tập thể và khát vọng không ngừng hoàn thiện và phát triển kinh doanh song hành mang lại lợi ích bền vững cho đất nước và con người Việt.</p>
          </div>
        </div>
        <div className="img-view" style={{ backgroundColor: 'white' }}>
          <div className="img-view-title">
            VIEW TỪNG VÙNG MIỀN TỪ NÚI, SÔNG, BIỂN CỦA 3 MIỀN <HeartFilled />
          </div>
          <div className="img-view-3earch" >
            <figure class="snip0019">
              <Image src="https://kalina.com.vn/wp-content/uploads/2019/07/danh-sach-24-nha-hang-tiec-cuoi-o-tphcm-gem-center.png" height="310px" alt="sample5" />
            </figure>
            <figure class="snip0019">
              <Image src="https://i.imgur.com/6UFkrxU.jpg" height="310px" alt="sample6" />
            </figure>
            <figure class="snip0019">
              <Image src="https://ladalathotel.com.vn/wp-content/uploads/2021/02/dam-cuoi-ngoai-troi-2.jpg" height="310px" alt="sample7" />
            </figure>
          </div>
        </div>
      </Animated>
      <div className="image-all">
        <div className="decide">
          Mục tiêu bền vững mùa COVID:
        </div>
        <div className="image-all-1">
          <div className="image-all-2"></div>
          <div className="image-all-3">
            <div class="container">
              <div class="box">
                <img src="https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg" />
                <span>Sức khỏe</span>
              </div>
              <div class="box">
                <img src="https://images.pexels.com/photos/6479590/pexels-photo-6479590.jpeg" />
                <span>Khẩu trang</span>
              </div>
              <div class="box">
                <img src="https://images.pexels.com/photos/1268877/pexels-photo-1268877.jpeg" />
                <span>Khử khuẩn</span>
              </div>
              <div class="box">
                <img src="https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg" />
                <span>Khoảng cách</span>
              </div>
            </div>
          </div>
          <div className="image-all-4"></div>
        </div>
        <div className="image-all-1">
          <div className="image-all-2"></div>
          <div className="image-all-3" style={{ paddingTop: '40px', textAlign: 'justify' }}>
            Đồng hành cùng địa phương phát triển kinh tế - môi trường du lịch bền vững

            Chúng tôi tin rằng Phát triển bền vững sẽ là định hướng đúng đắn cho mọi hoạt động kinh doanh. Bởi lẽ đó, Tập đoàn khách sạn Mường Thanh luôn kiên định với triết lý kinh doanh gắn liền với sứ mệnh gìn giữ và phát triển giá trị Việt, thực hiện và thúc đẩy các hoạt động bảo tồn và giới thiệu nét đẹp của con người Việt cùng văn hóa độc đáo của các dân tộc Việt Nam. Chúng tôi đồng thời nỗ lực góp phần vào sự phát triển của nền kinh tế địa phương thông qua việc mở rộng đầu tư với quy mô lớn tại nhiều vùng kinh tế đang phát triển, tạo hàng ngàn việc làm, đào tạo nguồn nhân lực lĩnh vực dịch vụ du lịch, cùng với rất nhiều các hoạt động vì cộng đồng và môi trường sống khác.

            Tập đoàn khách sạn Mường Thanh kỳ vọng sẽ phát triển mạnh mẽ và bền vững trong tương lai, song hành với sự phát triển của xã hội và đất nước.
          </div>
          <div className="image-all-4"></div>
        </div>
        <div className="nguoisanglap">
          <h4 style={{ paddingLeft: '40px' }}>Người sáng lập:</h4>
          <main class="nguoisanglap-1">
            <div className="nguoisanglap-2">
              <h4>
                Người sáng lập nên tập đoàn mường thanh. Chủ tịch Lê Thanh Thản <br />
                Năm 1993 bác quyết định bắt tay vào việc xây dựng khách sạn đầu tiên tại Điện Biên.
              </h4>
            </div>
            <img class="pulse-image" src="https://vcdn-vnexpress.vnecdn.net/2021/04/02/tha-n-9767-1617333462.jpg" width="330" height="300" alt="Riccardo" />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;