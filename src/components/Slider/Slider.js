import React, { useState } from "react";
import "./Slider.scss";
import Button from "../Button/Button";
import { sliderData } from "../../data/SliderData/sliderData";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderHandler = (direction) => {
    console.log({ direction });
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };
  console.log({ slideIndex });

  return (
    <section className="slider">
      <div
        className="arrow"
        style={{ left: "10px" }}
        onClick={() => sliderHandler("left")}
      >
        <ArrowLeft />
      </div>
      <div className="slider-container">
        {sliderData.map((item) => (
          <Wrapper key={item.id} slideIndex={slideIndex}>
            <div className="image-container">
              <img src={item.src} alt={""} className="image" />
            </div>
            <div className="desc">
              <h1 className="title">{item?.title}</h1>
              <p>{item.desc} </p>
              <Button> More Info </Button>
            </div>
          </Wrapper>
        ))}
      </div>

      <div
        className="arrow"
        style={{ right: "20px" }}
        onClick={() => sliderHandler("right")}
      >
        <ArrowRight />
      </div>
    </section>
  );
};
export default Slider;
