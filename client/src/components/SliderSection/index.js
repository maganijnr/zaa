import React, {useState} from 'react'


import {BsArrowRightCircle, BsArrowLeftCircle} from 'react-icons/bs'
import { sliders } from '../../data/homeData'
import {
  SliderContainer,
  Arrow,
  SliderWrapper,
  Slide,
  ImageContainer,
  Image,
  SliderInfoContainer,
  InfoH2,
  InfoP,
  InfoButton,
} from './SliderStyles'


const SliderSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  setTimeout(handleClick, 5000);
  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <BsArrowLeftCircle/>
      </Arrow>
      <SliderWrapper slideIndex={slideIndex}>
        {sliders.map ((slide)=>(
          <Slide key={slide.id}>
            <ImageContainer>
              <Image src={slide.bgImg} alt=""/>
            </ImageContainer>
            <SliderInfoContainer>
              <InfoH2>{slide.infoH2}</InfoH2>
              <InfoP>{slide.infoP}</InfoP>
              <InfoButton to="/cart">{slide.btnTxt}</InfoButton>
            </SliderInfoContainer>
          </Slide>
        ))}
      </SliderWrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <BsArrowRightCircle/>
      </Arrow>
    </SliderContainer>
  )
}

export default SliderSection
