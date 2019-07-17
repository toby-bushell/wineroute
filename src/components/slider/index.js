import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from '../styled/containers';
import { StyledSlider, ImageHolder, DotsList } from './styles';

const HeroSlider = ({ pictures }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    appendDots: dots => <DotsList>{dots}</DotsList>,
  };
  return (
    <Container desktopOnly>
      <StyledSlider {...settings}>
        {pictures.map((picture, i) => (
          <ImageHolder key={i}>
            <img src={picture} alt="" />
          </ImageHolder>
        ))}
      </StyledSlider>
    </Container>
  );
};

export default HeroSlider;
