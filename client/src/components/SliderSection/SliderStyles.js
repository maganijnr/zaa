import styled from 'styled-components'
import {Link as LinkL} from 'react-router-dom'


const SliderContainer = styled.section`
  background: rgba(0,0,0,.8);
  height: 100vh;
  position: relative;
  width: 100%;
`
const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 499;
  left: ${(props) => props.direction === "left" && "5px"};
  right: ${(props) => props.direction === "right" && "5px"};
  color: #FFF;
  font-size: 1.8rem;
  cursor: pointer;
  background: #000;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`

const SliderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const ImageContainer = styled.div`
  background-image: url(${({bgImg}) => bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Image = styled.img`
  /* height: 80%; */
`;

const SliderInfoContainer = styled.div`
  text-align: center;
  padding: 25px 20px;
  z-index: 399;
  background: rgba(0,0,0,.8);
`

const InfoH2 = styled.h2`
  font-size: 50px;
  color: #fff;
  margin-bottom: 1rem;
`

const InfoP = styled.p`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #fff;
  margin-bottom: 1.5rem;
`

const InfoButton = styled(LinkL)`
  background: #FFF;
  color: #000;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 8px 10px;
  margin-bottom: 1rem;
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