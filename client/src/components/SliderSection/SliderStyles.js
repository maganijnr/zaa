import styled from 'styled-components'
import {Link as LinkL} from 'react-router-dom'


const SliderContainer = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const SliderWrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #000;
`

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const SliderInfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const InfoH2 = styled.h2`
  font-size: 70px;
  color: #fff;
`

const InfoP = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #fff;
`

const InfoButton = styled(LinkL)`
  padding: 10px;
  font-size: 20px;
  background-color: #FFF;
  cursor: pointer;
  color: #000;

`

export {
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
}