import {useState} from 'react'
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
  const [current, setCurrent] = useState(0);
  const length = sliders.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  console.log(current)
  if(!Array.isArray(sliders) || sliders.length <= 0){
    return null
  }


  return (
    <SliderContainer>
      <Arrow direction="left" onClick={prevSlide}>
        <BsArrowLeftCircle/>
      </Arrow>
      <SliderWrapper>
        {
          sliders.map((slide, index) => {
            return (
              <Slide key={index}>
                {
                  index === current && (
                    <>
                      <ImageContainer bgImg={slide.bgImg}/>
                      <SliderInfoContainer>
                        <InfoH2>{slide.infoH2}</InfoH2>
                        <InfoP>
                          {slide.infoP}
                        </InfoP>
                        <InfoButton>{slide.btnTxt}</InfoButton>
                      </SliderInfoContainer>
                    </>
                  )
                }
              </Slide>
            )
          })
        }
      </SliderWrapper>
      <Arrow direction="right" onClick={nextSlide}>
        <BsArrowRightCircle/>
      </Arrow>
    </SliderContainer>
  )
}

export default SliderSection
