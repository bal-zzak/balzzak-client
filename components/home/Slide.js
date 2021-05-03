import React from "react";
import styled from "@emotion/styled";
import theme from '../../style/theme';
//import style from '../../style/antd-override.scss';
import { Carousel } from 'antd';
import renderEmpty from "antd/lib/config-provider/renderEmpty";
import { previewImage } from "antd/lib/upload/utils";

const mainSlide01 = '../images/main_slide01.png';
const slidePrev = '../images/arrow_l.png';
const slideNext = '../images/arrow_r.png';

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
const SlideDim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
`;

function ButtonPrev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 1, top: '50%', left: '20px', width: '5%', height: 'auto' }}
      onClick={onClick}>
        <img src={slidePrev} style={{width: '100%'}}/>
    </div>
  );
}

function ButtonNext(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  zIndex: 1, top: '50%', right: '20px', width: '5%', height: 'auto' }}
      onClick={onClick}>
      <img src={slideNext} style={{width: '100%'}} />
    </div>
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
  styled.div`
    margin-top: -45px;

    ${theme.tablet} {
      margin-top: -100px;
    }
  `
  return (
    <Carousel {...settings}>
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