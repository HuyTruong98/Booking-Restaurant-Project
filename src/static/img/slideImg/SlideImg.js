import React from 'react';
import { Carousel } from 'antd';
import Image1 from '../slideImg/img1.jpg';
import Image2 from '../slideImg/img2.jpg';
import Image3 from '../slideImg/img3.jpg';

function SlideImg(props) {

  const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
  };


  return (
    <Carousel autoplay>
      <div className="img-1">
        <img src={Image1} alt="photo" width="100%" height="900px" />
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <img src={Image2} alt="photo" width="100%" height="900px" />
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <img src={Image3} alt="photo" width="100%" height="900px" />
        <h3 style={contentStyle} style={{ color: 'black' }}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}

export default SlideImg;