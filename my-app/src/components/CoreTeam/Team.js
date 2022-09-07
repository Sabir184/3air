import React, { useRef } from 'react';
import './Team.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Member from '../MembersProfile/Member';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { teamData } from './data';
import Button from 'react-bootstrap/esm/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';

function Team() {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    arrows: false,
    slidesToScroll: 3.2,
    initialSlide: 0,
    customPaging: function (i) {
      return <div className="dot"></div>;
    },
    dotsClass: 'slick-dots slick-thumb',

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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <h2 className="roadHeaderContainer">Team</h2>
        <div className="roadOverlay"></div>

        <Slider ref={sliderRef} {...settings}>
          {teamData.map((item) => (
            <div ref={sliderRef} className="team-members">
              <div className="members">
                <div className="members-images">
                  <img src={item.img} alt="Profile" />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <img src="./assets/linkedin.svg" alt="Linkedin" />
                  </a>
                </div>
                <div className="memberCard">
                  <div className="memberCardInner">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
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

export default Team;
