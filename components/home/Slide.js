import React from "react";
import styled from "@emotion/styled";
import { Carousel } from 'antd';
import renderEmpty from "antd/lib/config-provider/renderEmpty";
import { previewImage } from "antd/lib/upload/utils";

const mainSlide01 = '../images/main_slide01.png';

const MainSlide = styled.div`
  position: relative;
`;
const Preview = styled.div`
  position: absolute;
  top: 390px;
  right: 0;
  color: #fff;
  font-size: 22px;
  line-height: 1.15;

  & p + p {
    margin-top: 42px;
    padding-top: 42px;
    border-top: 1px solid rgba(255, 255, 255, .5);
  }
`;

const MainImg = styled.img`
  width: 100%;
`;


function ButtonPrev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 1, left: 0, width: '60px', fontSize: '60px', color: '#fff' }}
      onClick={onClick}
    />
  );
}

function ButtonNext(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  zIndex: 1, right: 0, width: '60px', fontSize: '60px', color: '#fff' }}
      onClick={onClick}
    />
  );
}

const Slide = () => {
  const settings = {
    autoplay: true,
    dots: true,
    arrows: true,
    nextArrow: <ButtonNext />,
    prevArrow: <ButtonPrev />
  };
  return (
    <Carousel {...settings} style={{ marginTop: -100 }}>
      <MainSlide>
        <MainImg
          src={mainSlide01}
          alt="slide1"
        />
      </MainSlide>
      <MainSlide>
        <MainImg
          src={mainSlide01}
          alt="slide1"
        />
      </MainSlide>
      <MainSlide>
        <MainImg
          src={mainSlide01}
          alt="slide1"
        />
      </MainSlide>
    </Carousel>
  );
};

export default Slide;