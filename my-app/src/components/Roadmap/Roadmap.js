import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { roadmapData } from './data';
import './RoadmapStyles.scss';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';

function Roadmap() {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    arrows: false,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
          <h2 className="roadHeaderContainer">Roadmap</h2>
        <div className="roadOverlay"></div>

        <Slider ref={sliderRef} {...settings}>
          {roadmapData.map((item) => (
            <div ref={sliderRef} className="roadCardWrapper">
              <h4 key={item.id} className="roadCarTop">
                {item.title}
              </h4>

              {item.desc.map((descItem) => (
                <div className="roadCardBottom">
                  <li key={descItem.id}>{descItem}</li>
                </div>
              ))}
            </div>
          ))}
        </Slider>
        <ButtonGroup className="roadmapBtns">
          <Button
            className="arrowBtnContainer"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <div className="arrowBtn">
              <span className="join" />
              <img src="assets/prevArrowIcon.svg" alt="arrow" />
            </div>
          </Button>
          <Button
            className="arrowBtnContainer"
            onClick={() => sliderRef.current.slickNext()}
          >
            <div className="arrowBtn">
              <span className="join" />
              <img src="assets/nextArrowIcon.svg" alt="arrow" />
            </div>
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default Roadmap;
